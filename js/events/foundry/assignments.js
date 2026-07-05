// =========================================
// Assignment Engine
// =========================================

import {
    getFoundryAssignments,
    getFoundryObjectives,
    getRosterPeople,
    getRosterPerson
} from "../../data/commandData.js";

const LEGION_OBJECTIVES_BY_PHASE = {
    opening: {
        1: [
            "boiler",
            "workshop-northwest",
            "prototype-west",
            "repair-west",
            "workshop-southwest",
            "repair-south",
            "transit"
        ],
        2: [
            "boiler",
            "repair-north",
            "workshop-northeast",
            "prototype-east",
            "repair-east",
            "workshop-southeast",
            "transit"
        ]
    },
    mid: {
        1: [
            "boiler",
            "workshop-northwest",
            "prototype-west",
            "repair-west",
            "workshop-southwest",
            "repair-south",
            "mercenary",
            "munitions",
            "transit"
        ],
        2: [
            "boiler",
            "repair-north",
            "workshop-northeast",
            "prototype-east",
            "repair-east",
            "workshop-southeast",
            "mercenary",
            "munitions",
            "transit"
        ]
    },
    final: {
        1: [
            "prototype-west",
            "workshop-southwest",
            "repair-west",
            "repair-south",
            "imperial",
            "transit"
        ],
        2: [
            "prototype-east",
            "workshop-southeast",
            "repair-east",
            "repair-north",
            "imperial",
            "transit"
        ]
    }
};

const ASSIGNMENT_COUNT = 3;

const PRIORITY_SCORES = {
    critical: 4,
    high: 3,
    medium: 2,
    low: 1
};

export function getAssignments(chiefId, phase) {

    if (!chiefId) return [];

    const results = [];

    const combatantAssignments =
        getCombatantAssignments(chiefId, phase);

    if (combatantAssignments.length > 0) {

        results.push(...combatantAssignments);

    }

    const phaseAssignments = getFoundryAssignments()[phase];

    if (!phaseAssignments) return results;

    Object.entries(phaseAssignments).forEach(([objectiveId, assignments]) => {

        assignments.forEach(assignment => {

            if (assignment.chief === chiefId) {

                results.push({

                    objectiveId,

                    assignment: assignment.assignment

                });

            }

        });

    });

    return results;

}

export function getAssignmentForObjective(chiefId, phase, objectiveId) {

    return getAssignments(chiefId, phase)
        .find(a => a.objectiveId === objectiveId);

}

export function getCombatantAssignmentsForObjective(objectiveId, phase) {
    return getCombatantAssignmentsForObjectiveByLegion(objectiveId, phase);
}

export function getCombatantAssignmentsForObjectiveByLegion(
    objectiveId,
    phase,
    legion = null
) {
    return getRosterPeople()
        .filter(person =>
            person.source === "combatants" &&
            (!legion || person.legion === legion)
        )
        .map(combatant => ({
            combatant,
            assignments: getCombatantAssignments(combatant.id, phase)
        }))
        .flatMap(item =>
            item.assignments
                .filter(assignment =>
                    assignment.objectiveId === objectiveId
                )
                .map(assignment => ({
                    combatant: item.combatant,
                    assignment
                }))
        );
}

export function getLegionAssignments(legion, phase) {
    const assignmentsByObjective = new Map();

    getRosterPeople()
        .filter(person =>
            person.source === "combatants" &&
            person.legion === legion
        )
        .forEach(combatant => {
            getCombatantAssignments(combatant.id, phase)
                .forEach(assignment => {
                    if (!assignment.objectiveId) return;

                    if (!assignmentsByObjective.has(assignment.objectiveId)) {
                        assignmentsByObjective.set(assignment.objectiveId, []);
                    }

                    assignmentsByObjective
                        .get(assignment.objectiveId)
                        .push({
                            combatant,
                            assignment
                        });
                });
        });

    return [...assignmentsByObjective.entries()]
        .map(([objectiveId, assignments]) => ({
            objectiveId,
            assignments
        }));
}

function getCombatantAssignments(chiefId, phase) {
    const combatant =
        getRosterPerson(chiefId);

    if (!combatant || combatant.source !== "combatants") return [];

    const assignment =
        combatant.assignment?.trim();

    if (!assignment || normalizeValue(assignment) === "no engagement") return [];

    const legion =
        getLegionFromAssignment(assignment);

    if (legion) {

        return getPrimaryObjectiveIdsForCombatant(combatant, legion, phase)
            .map((objectiveId, index) => ({
                objectiveId,
                assignment: `${assignment} primary ${index + 1}`,
                combatant
            }));

    }

    return [{
        objectiveId: getObjectiveIdFromAssignment(assignment),
        assignment,
        combatant
    }];
}

function getLegionFromAssignment(assignment) {
    const normalized =
        normalizeValue(assignment);

    if (normalized === "legion 1") return 1;
    if (normalized === "legion 2") return 2;
    return null;
}

function getPrimaryObjectiveIdsForCombatant(combatant, legion, phase) {
    const phaseKey =
        phase ?? "opening";

    const candidates =
        getLegionObjectives(legion, phaseKey);

    if (candidates.length <= ASSIGNMENT_COUNT) {
        return candidates.map(objective => objective.id);
    }

    const clusters =
        getObjectiveClusters(candidates, phaseKey);

    const clusterIndex =
        getCombatantLegionRank(combatant, legion) % clusters.length;

    return clusters[clusterIndex]
        .objectives
        .map(objective => objective.id);
}

function getLegionObjectives(legion, phase) {
    const objectiveIds =
        LEGION_OBJECTIVES_BY_PHASE[phase]?.[legion] ?? [];

    return objectiveIds
        .map(objectiveId =>
            getFoundryObjectives()
                .find(objective => objective.id === objectiveId)
        )
        .filter(Boolean);
}

function getObjectiveClusters(objectives, phase) {
    const clusters = [];

    for (let first = 0; first < objectives.length - 2; first += 1) {
        for (let second = first + 1; second < objectives.length - 1; second += 1) {
            for (let third = second + 1; third < objectives.length; third += 1) {

                const clusterObjectives = [
                    objectives[first],
                    objectives[second],
                    objectives[third]
                ];

                clusters.push({
                    objectives: clusterObjectives,
                    score: getClusterScore(clusterObjectives, phase)
                });

            }
        }
    }

    return clusters.sort((a, b) => b.score - a.score);
}

function getClusterScore(objectives, phase) {
    const priorityScore =
        objectives.reduce(
            (total, objective) =>
                total + getObjectivePriorityScore(objective, phase),
            0
        );

    const proximityPenalty =
        getPairDistance(objectives[0], objectives[1]) +
        getPairDistance(objectives[0], objectives[2]) +
        getPairDistance(objectives[1], objectives[2]);

    return (priorityScore * 100) - proximityPenalty;
}

function getObjectivePriorityScore(objective, phase) {
    const priority =
        objective.phases[phase]?.priority?.toLowerCase() ?? "low";

    return PRIORITY_SCORES[priority] ?? PRIORITY_SCORES.low;
}

function getPairDistance(first, second) {
    return Math.hypot(
        first.x - second.x,
        first.y - second.y
    );
}

function getCombatantLegionRank(combatant, legion) {
    const legionCombatants =
        getRosterPeople()
            .filter(person =>
                person.source === "combatants" &&
                person.legion === legion &&
                normalizeValue(person.assignment) !== "no engagement"
            )
            .sort((a, b) =>
                (b.power ?? 0) - (a.power ?? 0) ||
                a.displayName.localeCompare(b.displayName)
            );

    return Math.max(
        0,
        legionCombatants.findIndex(person => person.id === combatant.id)
    );
}

function getObjectiveIdFromAssignment(assignment) {
    const normalizedAssignment =
        normalizeValue(assignment);

    const objective =
        getFoundryObjectives()
            .find(item =>
                normalizeValue(item.id) === normalizedAssignment ||
                normalizeValue(item.name) === normalizedAssignment ||
                normalizedAssignment.includes(normalizeValue(item.name))
            );

    return objective?.id ?? null;
}

function normalizeValue(value) {
    return String(value)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}

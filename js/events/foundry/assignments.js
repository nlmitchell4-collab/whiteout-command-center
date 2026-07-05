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
    return getRosterPeople()
        .filter(person => person.source === "combatants")
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

        return getLegionObjectiveIds(legion, phase)
            .map(objectiveId => ({
                objectiveId,
                assignment,
                combatant
            }));

    }

    return [{
        objectiveId: getObjectiveIdFromAssignment(assignment),
        assignment,
        combatant
    }];
}

function getLegionObjectiveIds(legion, phase) {
    if (phase) {
        return LEGION_OBJECTIVES_BY_PHASE[phase]?.[legion] ?? [];
    }

    return [
        ...new Set(
            Object.values(LEGION_OBJECTIVES_BY_PHASE)
                .flatMap(phaseAssignments =>
                    phaseAssignments[legion] ?? []
                )
        )
    ];
}

function getLegionFromAssignment(assignment) {
    const normalized =
        normalizeValue(assignment);

    if (normalized === "legion 1") return 1;
    if (normalized === "legion 2") return 2;
    return null;
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

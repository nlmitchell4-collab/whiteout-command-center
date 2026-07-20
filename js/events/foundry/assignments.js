// =========================================
// Assignment Engine
// =========================================

import {
    getFoundryAssignments,
    getFoundryObjectives,
    getRosterPeople,
    getRosterPerson
} from "../../data/commandData.js";

const SHARED_OBJECTIVES_BY_PHASE = {
    opening: [
        "boiler",
        "prototype-west",
        "prototype-east",
        "repair-north",
        "repair-east",
        "repair-west",
        "repair-south",
        "transit"
    ],
    mid: [
        "boiler",
        "prototype-west",
        "prototype-east",
        "repair-north",
        "repair-east",
        "repair-west",
        "repair-south",
        "mercenary",
        "munitions",
        "imperial",
        "transit"
    ],
    final: [
        "boiler",
        "imperial",
        "prototype-west",
        "prototype-east",
        "munitions",
        "mercenary",
        "workshop-northwest",
        "workshop-northeast",
        "workshop-southwest",
        "workshop-southeast",
        "repair-east",
        "repair-north",
        "repair-west",
        "repair-south",
        "transit"
    ]
};

const LEGION_OBJECTIVES_BY_PHASE = {
    opening: {
        1: SHARED_OBJECTIVES_BY_PHASE.opening,
        2: SHARED_OBJECTIVES_BY_PHASE.opening
    },
    mid: {
        1: SHARED_OBJECTIVES_BY_PHASE.mid,
        2: SHARED_OBJECTIVES_BY_PHASE.mid
    },
    final: {
        1: SHARED_OBJECTIVES_BY_PHASE.final,
        2: SHARED_OBJECTIVES_BY_PHASE.final
    }
};

const ASSIGNMENT_COUNT = 3;
const PRIORITY_WEIGHT = 100;
const TOP_POWER_PERCENTILE = 0.25;
const PROXIMITY_WEIGHT = 3;
const POWER_BALANCE_WEIGHT = 0.000001;

const PRIORITY_SCORES = {
    critical: 4,
    high: 3,
    medium: 2,
    low: 1
};

const OBJECTIVE_CAPACITY_PERCENT = {
    critical: 0.4,
    high: 0.35,
    medium: 0.15,
    low: 0.1
};

const assignmentPlanCache =
    new Map();

const topPowerCombatantCache =
    new Map();

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

        return getObjectiveIdsForCombatant(combatant, legion, phase)
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

function getObjectiveIdsForCombatant(combatant, legion, phase) {
    const assignmentPlan =
        getLegionAssignmentPlan(legion, phase);

    return assignmentPlan.get(combatant.id) ?? [];
}

function getLegionAssignmentPlan(legion, phase) {
    const phaseKey =
        phase ?? "opening";

    const cacheKey =
        getAssignmentPlanCacheKey(legion, phaseKey);

    if (assignmentPlanCache.has(cacheKey)) {
        return assignmentPlanCache.get(cacheKey);
    }

    const candidates =
        getLegionObjectives(legion, phaseKey);

    const combatants =
        getRankedLegionCombatants(legion);

    const plan =
        new Map(combatants.map(combatant => [combatant.id, []]));

    if (candidates.length === 0 || combatants.length === 0) {
        assignmentPlanCache.set(cacheKey, plan);
        return plan;
    }

    const capacities =
        getObjectiveCapacities(candidates, phaseKey, combatants.length);

    const assignmentCounts =
        new Map(candidates.map(objective => [objective.id, 0]));

    const assignmentPower =
        new Map(candidates.map(objective => [objective.id, 0]));

    for (let pass = 0; pass < ASSIGNMENT_COUNT - 1; pass += 1) {

        combatants.forEach(combatant => {
            const currentAssignments =
                plan.get(combatant.id);

            const objective =
                getNextObjectiveForPass(
                    pass,
                    candidates,
                    combatant,
                    legion,
                    phaseKey,
                    currentAssignments,
                    assignmentCounts,
                    assignmentPower,
                    capacities
                );

            if (!objective) return;

            assignObjectiveToCombatant(
                objective,
                combatant,
                currentAssignments,
                assignmentCounts,
                assignmentPower
            );
        });

    }

    assignTertiaryCoverageObjectives(
        candidates,
        combatants,
        legion,
        phaseKey,
        plan,
        assignmentCounts,
        assignmentPower,
        capacities
    );

    combatants.forEach(combatant => {
        const currentAssignments =
            plan.get(combatant.id);

        if (currentAssignments.length >= ASSIGNMENT_COUNT) return;

        const objective =
            getNextProximityObjective(
                candidates,
                combatant,
                legion,
                phaseKey,
                currentAssignments,
                assignmentCounts,
                assignmentPower,
                capacities
            );

        if (!objective) return;

        assignObjectiveToCombatant(
            objective,
            combatant,
            currentAssignments,
            assignmentCounts,
            assignmentPower
        );
    });

    assignmentPlanCache.set(cacheKey, plan);

    return plan;
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

function getAssignmentPlanCacheKey(legion, phase) {
    return [
        legion,
        phase,
        getLegionCombatantSignature(legion)
    ].join("|");
}

function getLegionCombatantSignature(legion) {
    return getRosterPeople()
        .filter(person =>
            person.source === "combatants" &&
            person.legion === legion &&
            normalizeValue(person.assignment) !== "no engagement"
        )
        .map(person => [
            person.id,
            person.displayName,
            person.assignment,
            person.foundryAssignment,
            getTroopPower(person)
        ].join(":"))
        .sort()
        .join(",");
}

function getNextObjectiveForPass(
    pass,
    candidates,
    combatant,
    legion,
    phase,
    currentAssignments,
    assignmentCounts,
    assignmentPower,
    capacities
) {
    if (pass === 0) {
        return getNextPrimaryObjective(
            candidates,
            combatant,
            legion,
            phase,
            currentAssignments,
            assignmentCounts,
            assignmentPower,
            capacities
        );
    }

    return getNextProximityObjective(
        candidates,
        combatant,
        legion,
        phase,
        currentAssignments,
        assignmentCounts,
        assignmentPower,
        capacities
    );
}

function assignTertiaryCoverageObjectives(
    candidates,
    combatants,
    legion,
    phase,
    plan,
    assignmentCounts,
    assignmentPower,
    capacities
) {
    getUncoveredCoverageObjectives(candidates, phase)
        .forEach(objective => {
            if ((assignmentCounts.get(objective.id) ?? 0) > 0) return;

            const combatant =
                getBestCoverageCombatant(
                    objective,
                    candidates,
                    combatants,
                    legion,
                    phase,
                    plan,
                    assignmentCounts,
                    capacities
                );

            if (!combatant) return;

            assignObjectiveToCombatant(
                objective,
                combatant,
                plan.get(combatant.id),
                assignmentCounts,
                assignmentPower
            );
        });
}

function getUncoveredCoverageObjectives(candidates, phase) {
    return [...candidates]
        .sort((first, second) =>
            getObjectivePriorityScore(first, phase) -
                getObjectivePriorityScore(second, phase) ||
            first.name.localeCompare(second.name)
        );
}

function getBestCoverageCombatant(
    objective,
    candidates,
    combatants,
    legion,
    phase,
    plan,
    assignmentCounts,
    capacities
) {
    return [...combatants]
        .filter(combatant => {
            const currentAssignments =
                plan.get(combatant.id);

            return currentAssignments.length < ASSIGNMENT_COUNT &&
                canAssignObjective(
                    objective,
                    currentAssignments,
                    assignmentCounts,
                    capacities
                ) &&
                isAllowedForCombatantPower(objective, combatant, legion, phase) &&
                isCompatibleWithAssignments(objective, currentAssignments, candidates);
        })
        .sort((first, second) =>
            getCoverageCombatantDistance(objective, first, plan, candidates) -
                getCoverageCombatantDistance(objective, second, plan, candidates) ||
            getTroopPower(first) - getTroopPower(second) ||
            first.displayName.localeCompare(second.displayName)
        )[0] ?? null;
}

function assignObjectiveToCombatant(
    objective,
    combatant,
    currentAssignments,
    assignmentCounts,
    assignmentPower
) {
    currentAssignments.push(objective.id);

    assignmentCounts.set(
        objective.id,
        (assignmentCounts.get(objective.id) ?? 0) + 1
    );

    assignmentPower.set(
        objective.id,
        (assignmentPower.get(objective.id) ?? 0) +
            getTroopPower(combatant)
    );
}

function getNextPrimaryObjective(
    candidates,
    combatant,
    legion,
    phase,
    currentAssignments,
    assignmentCounts,
    assignmentPower,
    capacities
) {
    return [...candidates]
        .filter(objective =>
            canAssignObjective(
                objective,
                currentAssignments,
                assignmentCounts,
                capacities
            ) &&
            isAllowedForCombatantPower(objective, combatant, legion, phase)
        )
        .sort((first, second) =>
            getObjectivePriorityScore(second, phase) -
                getObjectivePriorityScore(first, phase) ||
            getAverageAssignedPower(first, assignmentCounts, assignmentPower) -
                getAverageAssignedPower(second, assignmentCounts, assignmentPower) ||
            (assignmentCounts.get(first.id) ?? 0) -
                (assignmentCounts.get(second.id) ?? 0) ||
            first.name.localeCompare(second.name)
        )[0] ?? null;
}

function getNextProximityObjective(
    candidates,
    combatant,
    legion,
    phase,
    currentAssignments,
    assignmentCounts,
    assignmentPower,
    capacities
) {
    const primary =
        candidates.find(objective =>
            objective.id === currentAssignments[0]
        );

    if (!primary) return null;

    return [...candidates]
        .filter(objective =>
            canAssignObjective(
                objective,
                currentAssignments,
                assignmentCounts,
                capacities
            ) &&
            isAllowedForCombatantPower(objective, combatant, legion, phase) &&
            isCompatibleWithAssignments(objective, currentAssignments, candidates)
        )
        .sort((first, second) =>
            getSecondaryScore(second, primary, phase, assignmentCounts, assignmentPower) -
                getSecondaryScore(first, primary, phase, assignmentCounts, assignmentPower) ||
            first.name.localeCompare(second.name)
        )[0] ?? null;
}

function canAssignObjective(
    objective,
    currentAssignments,
    assignmentCounts,
    capacities
) {
    if (currentAssignments.includes(objective.id)) return false;

    return (assignmentCounts.get(objective.id) ?? 0) <
        (capacities.get(objective.id) ?? 0);
}

function isCompatibleWithAssignments(
    objective,
    currentAssignments,
    candidates
) {
    return currentAssignments.every(objectiveId => {
        const assignedObjective =
            candidates.find(item => item.id === objectiveId);

        return !assignedObjective ||
            !areOppositeMapSides(objective, assignedObjective);
    });
}

function areOppositeMapSides(first, second) {
    const firstSide =
        getMapSide(first);

    const secondSide =
        getMapSide(second);

    return (
        (firstSide === "west" && secondSide === "east") ||
        (firstSide === "east" && secondSide === "west")
    );
}

function getMapSide(objective) {
    if (objective.x <= 40) return "west";
    if (objective.x >= 60) return "east";
    return "center";
}

function getAverageAssignedPower(
    objective,
    assignmentCounts,
    assignmentPower
) {
    const count =
        assignmentCounts.get(objective.id) ?? 0;

    if (count === 0) return 0;

    return (assignmentPower.get(objective.id) ?? 0) / count;
}

function getSecondaryScore(
    objective,
    primary,
    phase,
    assignmentCounts,
    assignmentPower
) {
    return (
        getObjectivePriorityScore(objective, phase) * PRIORITY_WEIGHT -
        getPairDistance(primary, objective) * PROXIMITY_WEIGHT -
        getAverageAssignedPower(objective, assignmentCounts, assignmentPower) *
            POWER_BALANCE_WEIGHT
    );
}

function getObjectivePriorityScore(objective, phase) {
    const priority =
        objective.phases[phase]?.priority?.toLowerCase() ?? "low";

    return PRIORITY_SCORES[priority] ?? PRIORITY_SCORES.low;
}

function isAllowedForCombatantPower(objective, combatant, legion, phase) {
    if (!isTopPowerCombatant(combatant, legion)) return true;

    return getObjectivePriorityScore(objective, phase) >=
        PRIORITY_SCORES.high;
}

function getObjectiveCapacities(objectives, phase, combatantCount) {
    return new Map(
        objectives.map(objective => [
            objective.id,
            getObjectiveCapacity(objective, phase, combatantCount)
        ])
    );
}

function getObjectiveCapacity(objective, phase, combatantCount) {
    const priority =
        objective.phases[phase]?.priority?.toLowerCase() ?? "low";

    const capacityPercent =
        OBJECTIVE_CAPACITY_PERCENT[priority] ??
        OBJECTIVE_CAPACITY_PERCENT.low;

    return Math.max(
        1,
        Math.floor(combatantCount * capacityPercent)
    );
}

function getPairDistance(first, second) {
    return Math.hypot(
        first.x - second.x,
        first.y - second.y
    );
}

function getCoverageCombatantDistance(objective, combatant, plan, candidates) {
    const currentAssignments =
        plan.get(combatant.id) ?? [];

    if (currentAssignments.length === 0) {
        return 0;
    }

    return currentAssignments.reduce((total, objectiveId) => {
        const assignedObjective =
            candidates.find(item => item.id === objectiveId);

        if (!assignedObjective) return total;

        return total + getPairDistance(objective, assignedObjective);
    }, 0);
}

function isTopPowerCombatant(combatant, legion) {
    const cacheKey =
        [
            legion,
            getLegionCombatantSignature(legion)
        ].join("|");

    if (!topPowerCombatantCache.has(cacheKey)) {
        topPowerCombatantCache.set(
            cacheKey,
            getTopPowerCombatantIds(legion)
        );
    }

    return topPowerCombatantCache
        .get(cacheKey)
        .has(combatant.id);
}

function getTopPowerCombatantIds(legion) {
    const legionCombatants =
        getRankedLegionCombatants(legion);

    const strongCombatantCount =
        Math.max(
            1,
            Math.ceil(legionCombatants.length * TOP_POWER_PERCENTILE)
        );

    return new Set(
        legionCombatants
            .slice(0, strongCombatantCount)
            .map(person => person.id)
    );
}

function getRankedLegionCombatants(legion) {
    return getRosterPeople()
        .filter(person =>
            person.source === "combatants" &&
            person.legion === legion &&
            normalizeValue(person.assignment) !== "no engagement"
        )
        .sort((a, b) =>
            getTroopPower(b) - getTroopPower(a) ||
            a.displayName.localeCompare(b.displayName)
        );
}

function getTroopPower(combatant) {
    return combatant.troopPower ?? combatant.power ?? 0;
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

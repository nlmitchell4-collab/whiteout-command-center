import {
    getCanyonConfig,
    getCombatants,
    getRosterPerson
} from "../../data/commandData.js";

export const CANYON_TEAMS = [
    {
        name: "Blue",
        className: "blue",
        lane: "Left lane"
    },
    {
        name: "Green",
        className: "green",
        lane: "Middle lane"
    },
    {
        name: "Red",
        className: "red",
        lane: "Right lane"
    },
    {
        name: "Yellow",
        className: "yellow",
        lane: "Flexible support"
    }
];

export function getCanyonTeamAssignments(legion) {
    const eligibleCombatants =
        getCanyonEligibleCombatants(legion);

    const teams =
        CANYON_TEAMS.map(team => ({
            ...team,
            leader: null,
            members: [],
            totalPower: 0
        }));

    const leaderIds =
        getCanyonConfig().teamLeaders?.[legion] ?? {};

    const assignedIds =
        new Set();

    teams.forEach(team => {
        const leader =
            eligibleCombatants.find(combatant =>
                combatant.id === leaderIds[team.name]
            );

        if (!leader || assignedIds.has(leader.id)) return;

        assignCombatantToTeam(team, leader);
        assignedIds.add(leader.id);
    });

    eligibleCombatants
        .filter(combatant => !assignedIds.has(combatant.id))
        .forEach(combatant => {
            const teamWithoutLeader =
                teams.find(team => !team.leader);

            if (teamWithoutLeader) {
                teamWithoutLeader.leader = combatant;
                assignCombatantToTeam(teamWithoutLeader, combatant);
                assignedIds.add(combatant.id);
            }
        });

    eligibleCombatants
        .filter(combatant => !assignedIds.has(combatant.id))
        .forEach(combatant => {
            const targetTeam =
                teams
                    .slice()
                    .sort((a, b) => {
                        if (a.members.length !== b.members.length) {
                            return a.members.length - b.members.length;
                        }

                        return a.totalPower - b.totalPower;
                    })[0];

            assignCombatantToTeam(targetTeam, combatant);
        });

    return teams;
}

export function getCanyonRosterSummary(legion) {
    const teams =
        getCanyonTeamAssignments(legion);

    return {
        combatantCount: teams.reduce((total, team) => total + team.members.length, 0),
        totalPower: teams.reduce((total, team) => total + team.totalPower, 0),
        teams
    };
}

export function getCanyonTeamForCombatant(combatantId, legion) {
    return getCanyonTeamAssignments(legion)
        .find(team =>
            team.members.some(member => member.id === combatantId)
        ) ?? null;
}

export function getCanyonEligibleCombatants(legion) {
    return getCombatants()
        .filter(combatant =>
            getCanyonLegion(combatant) === legion
        )
        .map(combatant => ({
            ...combatant,
            displayName: combatant.name ?? combatant.displayName
        }))
        .sort((a, b) => getTroopPower(b) - getTroopPower(a));
}

export function getCanyonLegion(combatantOrId) {
    const combatant =
        typeof combatantOrId === "string"
            ? getRosterPerson(combatantOrId)
            : combatantOrId;

    if (combatant?.canyonAssignment === "Legion 1") return 1;
    if (combatant?.canyonAssignment === "Legion 2") return 2;
    return null;
}

export function getTroopPower(combatant) {
    return combatant.troopPower ?? combatant.power ?? 0;
}

function assignCombatantToTeam(team, combatant) {
    if (!team.leader) {
        team.leader = combatant;
    }

    team.members.push(combatant);
    team.totalPower += getTroopPower(combatant);
}

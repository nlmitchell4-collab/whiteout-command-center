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

    assignConfiguredLeaders(teams, eligibleCombatants, leaderIds, assignedIds);
    assignAutomaticLeaders(teams, eligibleCombatants, assignedIds);

    const maxTeamSize =
        Math.ceil(eligibleCombatants.length / teams.length);

    eligibleCombatants
        .filter(combatant => !assignedIds.has(combatant.id))
        .forEach(combatant => {
            const targetTeam =
                getLowestPowerTeam(teams, maxTeamSize);

            assignCombatantToTeam(targetTeam, combatant);
            assignedIds.add(combatant.id);
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

function assignConfiguredLeaders(teams, eligibleCombatants, leaderIds, assignedIds) {
    teams.forEach(team => {
        const leader =
            eligibleCombatants.find(combatant =>
                combatant.id === leaderIds[team.name]
            );

        if (!leader || assignedIds.has(leader.id)) return;

        assignCombatantToTeam(team, leader);
        assignedIds.add(leader.id);
    });
}

function assignAutomaticLeaders(teams, eligibleCombatants, assignedIds) {
    teams
        .filter(team => !team.leader)
        .forEach(team => {
            const leader =
                eligibleCombatants.find(combatant =>
                    !assignedIds.has(combatant.id)
                );

            if (!leader) return;

            assignCombatantToTeam(team, leader);
            assignedIds.add(leader.id);
        });
}

function getLowestPowerTeam(teams, maxTeamSize) {
    const availableTeams =
        teams.filter(team => team.members.length < maxTeamSize);

    return (availableTeams.length > 0 ? availableTeams : teams)
        .slice()
        .sort((a, b) => {
            if (a.totalPower !== b.totalPower) {
                return a.totalPower - b.totalPower;
            }

            return a.members.length - b.members.length;
        })[0];
}

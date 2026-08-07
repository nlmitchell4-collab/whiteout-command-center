import { getCombatants } from "../../data/commandData.js";

export const CANYON_TEAMS = [
    {
        name: "Blue",
        className: "blue",
        side: "Northwest Gate"
    },
    {
        name: "Green",
        className: "green",
        side: "Northeast Gate"
    },
    {
        name: "Red",
        className: "red",
        side: "Southwest Gate"
    },
    {
        name: "Yellow",
        className: "yellow",
        side: "Southeast Gate"
    }
];

export function getCanyonTeamAssignments() {
    const eligibleCombatants =
        getCombatants()
            .filter(isCanyonEligible)
            .map(combatant => ({
                ...combatant,
                displayName: combatant.name ?? combatant.displayName
            }))
            .sort((a, b) => getTroopPower(b) - getTroopPower(a));

    const teams =
        CANYON_TEAMS.map(team => ({
            ...team,
            leader: null,
            members: [],
            totalPower: 0
        }));

    const leaders =
        eligibleCombatants.slice(0, CANYON_TEAMS.length);

    leaders.forEach((combatant, index) => {
        teams[index].leader = combatant;
        teams[index].members.push(combatant);
        teams[index].totalPower += getTroopPower(combatant);
    });

    eligibleCombatants
        .slice(CANYON_TEAMS.length)
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

            targetTeam.members.push(combatant);
            targetTeam.totalPower += getTroopPower(combatant);
        });

    return teams;
}

export function getCanyonRosterSummary() {
    const teams =
        getCanyonTeamAssignments();

    return {
        combatantCount: teams.reduce((total, team) => total + team.members.length, 0),
        totalPower: teams.reduce((total, team) => total + team.totalPower, 0),
        teams
    };
}

function isCanyonEligible(combatant) {
    return (
        combatant.canyonAssignment === "Legion 1" ||
        combatant.canyonAssignment === "Legion 2"
    );
}

function getTroopPower(combatant) {
    return combatant.troopPower ?? combatant.power ?? 0;
}

import { combatants } from "./combatants.js";

export function generateAssignments() {

    const sorted = [...combatants].sort((a, b) => b.power - a.power);

    return sorted;

}
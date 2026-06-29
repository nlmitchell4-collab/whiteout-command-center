import { getCombatants } from "../../data/commandData.js";

export function generateAssignments() {

    const sorted = [...getCombatants()].sort((a, b) => b.power - a.power);

    return sorted;

}

import { combatants } from "./combatants.js";

export function loadRoster() {
    return combatants;
}

export function getCombatant(id) {
    return combatants.find(c => c.id === id);
}

export function addCombatant(combatant) {
    combatants.push(combatant);
}

export function clearRoster() {
    combatants.length = 0;
}
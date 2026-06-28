import { addCombatant, clearRoster } from "./roster.js";

export function importRoster(roster) {

    clearRoster();

    roster.forEach(player => {

        addCombatant({
            id: player.id,
            name: player.name,
            power: player.power,
            legion: player.legion,
            assigned: false
        });

    });

}
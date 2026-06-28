import { combatants } from "../combatants.js";

export function renderRosterPage() {

    const container = document.getElementById("roster-page");

    if (!container) return;

    container.innerHTML = "";

    combatants
        .sort((a, b) => b.power - a.power)
        .forEach(player => {

            const row = document.createElement("div");

            row.className = "roster-row";

            row.innerHTML = `
                <span>${player.name}</span>
                <span>${player.power.toLocaleString()}</span>
                <span>${player.legion}</span>
            `;

            container.appendChild(row);

        });

}
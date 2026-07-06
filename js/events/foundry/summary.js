// =========================================
// Assignment Summary
// =========================================

import {
    getFoundryConfig,
    getFoundryObjectives,
    getRosterPerson
} from "../../data/commandData.js";
import { getSelectedChief } from "../../chiefs.js";
import { getActiveLegion } from "../../chiefs.js";
import { getAssignments } from "./assignments.js";
import { getActivePhase } from "./battlefield.js";

export function renderSummary() {

    const container =
        document.getElementById("assignment-summary");

    if (!container) return;

    const chief =
        getSelectedChief();

    const activeLegion =
        getActiveLegion();

    if (!chief) {

        container.innerHTML = `
            <div class="summary-card">
                <h2>Legion ${activeLegion}</h2>
                <h3>${getFoundryConfig().phases[getActivePhase()].label}</h3>
            </div>
        `;

        return;

    }

    const chiefInfo =
        getRosterPerson(chief);

    if (!chiefInfo) {

        container.innerHTML = "";
        return;

    }

    const activePhase = getActivePhase();

    const assignments =
        getAssignments(chief, activePhase);

    const phaseName =
        getFoundryConfig().phases[activePhase].label;

    container.innerHTML = `

        <div class="summary-card">

            <h2>${chiefInfo.displayName}</h2>

            ${renderCombatantMeta(chiefInfo)}

            <h3>${phaseName}</h3>

            <div id="summary-list"></div>

        </div>

    `;

    const list =
        document.getElementById("summary-list");

    assignments.forEach(item => {

        const objective =
            getFoundryObjectives().find(o => o.id === item.objectiveId);

        list.innerHTML += `

            <div class="summary-item">

                <strong>${objective ? objective.name : "General Assignment"}</strong><br>

                ${item.assignment}

            </div>

        `;

    });

}

function renderCombatantMeta(chiefInfo) {
    if (chiefInfo.source !== "combatants") return "";

    return `
        <p>
            ${getTroopPower(chiefInfo) ? `${getTroopPower(chiefInfo).toLocaleString()} troop power` : ""}
            ${chiefInfo.legion ? ` | Legion ${chiefInfo.legion}` : ""}
        </p>
    `;
}

function getTroopPower(combatant) {
    return combatant.troopPower ?? combatant.power ?? 0;
}

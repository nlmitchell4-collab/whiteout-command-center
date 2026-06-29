// =========================================
// Assignment Summary
// =========================================

import {
    getChiefs,
    getFoundryConfig,
    getFoundryObjectives
} from "../../data/commandData.js";
import { getSelectedChief } from "../../chiefs.js";
import { getAssignments } from "./assignments.js";
import { getActivePhase } from "./battlefield.js";

export function renderSummary() {

    const container =
        document.getElementById("assignment-summary");

    if (!container) return;

    const chief =
        getSelectedChief();

    if (!chief) {

        container.innerHTML = "";

        return;

    }

    const chiefInfo =
        getChiefs().find(c => c.id === chief);

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

            <h3>${phaseName}</h3>

            <div id="summary-list"></div>

        </div>

    `;

    const list =
        document.getElementById("summary-list");

    assignments.forEach(item => {

        const objective =
            getFoundryObjectives().find(o => o.id === item.objectiveId);

        if (!objective) return;

        list.innerHTML += `

            <div class="summary-item">

                <strong>${objective.name}</strong><br>

                ${item.assignment}

            </div>

        `;

    });

}

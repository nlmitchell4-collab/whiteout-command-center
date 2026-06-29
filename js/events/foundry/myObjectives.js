// =========================================
// My Objectives
// =========================================

import { getFoundryObjectives } from "../../data/commandData.js";
import { getSelectedChief } from "../../chiefs.js";
import { getAssignments } from "./assignments.js";
import {
    buildBattlefield,
    getActivePhase,
    setSelectedObjective
} from "./battlefield.js";

export function renderMyObjectives() {

    const container =
        document.getElementById("my-objectives");

    const chief =
        getSelectedChief();

    if (!container) return;

    container.innerHTML = "";

    if (!chief) return;

    const assignments =
        getAssignments(chief, getActivePhase());

    if (assignments.length === 0) {

        container.innerHTML =
            "<p>No assignments this phase.</p>";

        return;

    }

    assignments.forEach(item => {

        const objective =
            getFoundryObjectives().find(o => o.id === item.objectiveId);

        if (!objective) return;

        const card =
            document.createElement("div");

        card.className = "assignment-card";

        card.innerHTML = `

            <strong>${objective.name}</strong>

            <div>${item.assignment}</div>

        `;

        card.onclick = () => {

            setSelectedObjective(objective);

            buildBattlefield();

        };

        container.appendChild(card);

    });

}

// =========================================
// My Objectives
// =========================================

import { getFoundryObjectives } from "../../data/commandData.js";
import {
    getActiveLegion,
    getSelectedChief
} from "../../chiefs.js";
import {
    getAssignments,
    getLegionAssignments
} from "./assignments.js";
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

    const assignments =
        chief
            ? getAssignments(chief, getActivePhase())
            : getLegionAssignments(getActiveLegion(), getActivePhase())
                .map(item => ({
                    objectiveId: item.objectiveId,
                    assignment: `${item.assignments.length} assigned combatants`
                }));

    if (assignments.length === 0) {

        container.innerHTML =
            "<p>No assignments this phase.</p>";

        return;

    }

    assignments.forEach(item => {

        const objective =
            getFoundryObjectives().find(o => o.id === item.objectiveId);

        const card =
            document.createElement("div");

        card.className = "assignment-card";

        card.innerHTML = `

            <strong>${objective ? objective.name : "General Assignment"}</strong>

            <div>${item.assignment}</div>

        `;

        card.onclick = () => {

            if (!objective) return;

            setSelectedObjective(objective);

            buildBattlefield();

        };

        container.appendChild(card);

    });

}

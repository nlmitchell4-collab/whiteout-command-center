// =========================================
// My Objectives
// =========================================

function renderMyObjectives() {

    const container =
        document.getElementById("my-objectives");

    const chief =
        getSelectedChief();

    if (!container) return;

    container.innerHTML = "";

    if (!chief) return;

    const assignments =
        getAssignments(chief, activePhase);

    if (assignments.length === 0) {

        container.innerHTML =
            "<p>No assignments this phase.</p>";

        return;

    }

    assignments.forEach(item => {

        const objective =
            foundryObjectives.find(o => o.id === item.objectiveId);

        const card =
            document.createElement("div");

        card.className = "assignment-card";

        card.innerHTML = `

            <strong>${objective.name}</strong>

            <div>${item.assignment}</div>

        `;

        card.onclick = () => {

            selectedObjective = objective;

            buildBattlefield();

        };

        container.appendChild(card);

    });

}
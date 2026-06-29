// =========================================
// Assignment Summary
// =========================================

function renderSummary() {

    const container =
        document.getElementById("assignment-summary");

    const chief =
        getSelectedChief();

    if (!chief) {

        container.innerHTML = "";

        return;

    }

    const chiefInfo =
        chiefs.find(c => c.id === chief);

    const assignments =
        getAssignments(chief, activePhase);

    const phaseName =
        foundryConfig.phases[activePhase].label;

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
            foundryObjectives.find(o => o.id === item.objectiveId);

        list.innerHTML += `

            <div class="summary-item">

                <strong>${objective.name}</strong><br>

                ${item.assignment}

            </div>

        `;

    });

}
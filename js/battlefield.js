let activePhase = "opening";

function buildBattlefield() {

    const map = document.getElementById("battlefield-map");

    map.innerHTML = "";

    foundryObjectives.forEach(objective => {

        const tile = document.createElement("div");

        tile.className = "objective";

        tile.style.gridColumn = objective.col;
        tile.style.gridRow = objective.row;

        const phase = objective.phases[activePhase];

        tile.classList.add(phase.priority.toLowerCase());

        const assignment = getAssignment(
            getSelectedChief(),
            objective.id
        );

        if (getSelectedChief()) {

            if (assignment) {

                tile.classList.add("assigned");

            } else {

                tile.classList.add("unassigned");

            }

        }

        tile.innerHTML = `

            <div class="objective-name">

                ${objective.name}

            </div>

        `;

        tile.onclick = () => {

            showObjective(objective);

        };

        map.appendChild(tile);

    });

    showObjective(foundryObjectives[0]);

}

function getAssignment(chiefId, objectiveId) {

    if (!chiefId) return null;

    const phaseAssignments =
        foundryAssignments[activePhase];

    const assignments =
        phaseAssignments[objectiveId];

    if (!assignments) return null;

    return assignments.find(a => a.chief === chiefId) || null;

}

function showObjective(objective) {

    const phase = objective.phases[activePhase];

    const assignment = getAssignment(
        getSelectedChief(),
        objective.id
    );

    document.getElementById("objective-panel").innerHTML = `

        <div class="detail-card">

            <h2>${objective.name}</h2>

            <div class="badge ${phase.priority.toLowerCase()}">

                ${phase.priority}

            </div>

            <h3>Your Assignment</h3>

            <p>${
                assignment
                    ? assignment.assignment
                    : "Not Assigned"
            }</p>

            <h3>Strategy</h3>

            <p>${phase.strategy}</p>

            <h3>Why</h3>

            <p>${phase.why}</p>

        </div>

    `;

}

function initializePhaseSelector() {

    const buttons =
        document.querySelectorAll(".phase-button");

    buttons.forEach(button => {

        button.onclick = () => {

            buttons.forEach(b =>
                b.classList.remove("active")
            );

            button.classList.add("active");

            activePhase = button.dataset.phase;

            buildBattlefield();

        };

    });

}
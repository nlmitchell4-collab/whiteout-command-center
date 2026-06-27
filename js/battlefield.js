let activePhase = "opening";

function buildBattlefield() {

    const map = document.getElementById("battlefield-map");

    map.innerHTML = "";

    const chief = getSelectedChief();

    const myAssignments = getAssignments(chief, activePhase);

    foundryObjectives.forEach(objective => {

        const tile = document.createElement("div");

        tile.className = "objective";

        tile.style.gridColumn = objective.col;
        tile.style.gridRow = objective.row;

        const phase = objective.phases[activePhase];

        tile.classList.add(phase.priority.toLowerCase());

        if (chief) {

            const assigned = myAssignments.some(a => a.objectiveId === objective.id);

            tile.classList.add(
                assigned ? "assigned" : "unassigned"
            );

        }

const icon = {

    critical: "🔴",
    high: "🟠",
    medium: "🟡",
    low: "⚪"

};

const icon = {

    critical: "🔴",
    high: "🟠",
    medium: "🟡",
    low: "⚪"

};

tile.innerHTML = `

    <div class="objective-priority">

        ${icon[phase.priority.toLowerCase()]}

    </div>

    <div class="objective-name">

        ${objective.name}

    </div>

`;

        tile.onclick = () => showObjective(objective);

        map.appendChild(tile);

    });

    showObjective(foundryObjectives[0]);

}

function showObjective(objective) {

    const phase = objective.phases[activePhase];

    const assignment = getAssignmentForObjective(
        getSelectedChief(),
        activePhase,
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
renderMyObjectives();
function initializePhaseSelector() {

    const buttons =
        document.querySelectorAll(".phase-button");

    buttons.forEach(button => {

        button.onclick = () => {

            buttons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            activePhase = button.dataset.phase;

            buildBattlefield();

renderSummary();

renderMyObjectives();
        };

    });

}
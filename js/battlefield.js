// =========================================
// Battlefield
// =========================================

let activePhase = "opening";
let selectedObjective = null;

// -----------------------------
// Helpers
// -----------------------------

function getPriorityIcon(priority) {

    const icons = {
        critical: "🔴",
        high: "🟠",
        medium: "🟡",
        low: "⚪"
    };

    return icons[priority.toLowerCase()] || "⚪";

}

function isObjectiveUnlocked(objective) {

    const phaseOrder = {
        opening: 0,
        mid: 1,
        final: 2
    };

    return phaseOrder[activePhase] >= phaseOrder[objective.unlockPhase];

}

// -----------------------------
// Battlefield
// -----------------------------

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

        const unlocked = isObjectiveUnlocked(objective);

        // -------------------------
        // Priority
        // -------------------------

        tile.classList.add(
            phase.priority.toLowerCase()
        );

        // -------------------------
        // Assignment Highlighting
        // -------------------------

        if (chief) {

            const assigned = myAssignments.some(a =>
                a.objectiveId === objective.id
            );

            tile.classList.add(
                assigned
                    ? "assigned"
                    : "unassigned"
            );

        }

        // -------------------------
        // Locked Objectives
        // -------------------------

        if (!unlocked) {

            tile.classList.add("locked");

        }

        // -------------------------
        // Selected Objective
        // -------------------------

        if (
            selectedObjective &&
            selectedObjective.id === objective.id
        ) {

            tile.classList.add("selected");

        }

        // -------------------------
        // Tile HTML
        // -------------------------

        tile.innerHTML = `

            <div class="objective-priority">

                ${
                    unlocked
                        ? getPriorityIcon(phase.priority)
                        : "🔒"
                }

            </div>

            <div class="objective-name">

                ${objective.name}

            </div>

        `;

        tile.onclick = () => {

            selectedObjective = objective;

            buildBattlefield();

        };

        map.appendChild(tile);

    });

    if (!selectedObjective) {

        selectedObjective = foundryObjectives[0];

    }

    showObjective(selectedObjective);

    renderSummary();

    renderMyObjectives();

}

// -----------------------------
// Objective Details
// -----------------------------

function showObjective(objective) {

    const phase =
        objective.phases[activePhase];

    const assignment =
        getAssignmentForObjective(
            getSelectedChief(),
            activePhase,
            objective.id
        );

    document.getElementById(
        "objective-panel"
    ).innerHTML = `

        <div class="detail-card">

            <h2>

                ${objective.name}

            </h2>

            <div class="badge ${phase.priority.toLowerCase()}">

                ${phase.priority}

            </div>

            <h3>Your Assignment</h3>

            <p>

                ${
                    assignment
                        ? assignment.assignment
                        : "Not Assigned"
                }

            </p>

            <h3>Strategy</h3>

            <p>

                ${phase.strategy}

            </p>

            <h3>Why</h3>

            <p>

                ${phase.why}

            </p>

        </div>

    `;

}

// -----------------------------
// Phase Buttons
// -----------------------------

function initializePhaseSelector() {

    const buttons =
        document.querySelectorAll(".phase-button");

    buttons.forEach(button => {

        button.onclick = () => {

            buttons.forEach(b =>
                b.classList.remove("active")
            );

            button.classList.add("active");

            activePhase =
                button.dataset.phase;

            buildBattlefield();

        };

    });

}
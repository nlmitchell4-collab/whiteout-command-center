// =========================================
// Battlefield
// =========================================

let activePhase = "opening";
let selectedObjective = null;

// =========================================
// Helpers
// =========================================

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

    return phaseOrder[activePhase] >=
           phaseOrder[objective.unlockPhase];

}

// =========================================
// Battlefield Rendering
// =========================================

function buildBattlefield() {

    const map =
        document.getElementById("battlefield-map");

    map.innerHTML = "";

    const chief =
        getSelectedChief();

    const assignments =
        getAssignments(chief, activePhase);

    foundryObjectives.forEach(objective => {

        const tile =
            document.createElement("div");

        tile.className = "objective";

        // -----------------------------
        // Absolute Position
        // -----------------------------

        tile.style.left = objective.x + "%";
        tile.style.top = objective.y + "%";

        // -----------------------------
        // Current Phase
        // -----------------------------

        const phase =
            objective.phases[activePhase];

        // -----------------------------
        // Priority Color
        // -----------------------------

        tile.classList.add(
            phase.priority.toLowerCase()
        );

        // -----------------------------
        // Locked?
        // -----------------------------

        const unlocked =
            isObjectiveUnlocked(objective);

        if (!unlocked) {

            tile.classList.add("locked");

        }

        // -----------------------------
        // Assigned?
        // -----------------------------

        if (chief) {

            const assigned =
                assignments.some(a =>
                    a.objectiveId === objective.id
                );

            tile.classList.add(

                assigned
                    ? "assigned"
                    : "unassigned"

            );

        }

        // -----------------------------
        // Selected?
        // -----------------------------

        if (

            selectedObjective &&
            selectedObjective.id === objective.id

        ) {

            tile.classList.add("selected");

        }

        // -----------------------------
        // HTML
        // -----------------------------

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

    // -----------------------------
    // Default Selection
    // -----------------------------

    if (!selectedObjective) {

        selectedObjective =
            foundryObjectives[0];

    }

    showObjective(selectedObjective);

    renderSummary();

    renderMyObjectives();

}

// =========================================
// Objective Details
// =========================================

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

                ${assignment
                    ? assignment.assignment
                    : "Not Assigned"}

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

// =========================================
// Phase Selector
// =========================================

function initializePhaseSelector() {

    const buttons =
        document.querySelectorAll(".phase-button");

    buttons.forEach(button => {

        button.onclick = () => {

            buttons.forEach(btn =>

                btn.classList.remove("active")

            );

            button.classList.add("active");

            activePhase =
                button.dataset.phase;

            buildBattlefield();

        };

    });

}
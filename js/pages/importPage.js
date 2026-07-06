import { processScreenshots } from "../ocr/ocrProcessor.js";
import {
    getCombatants,
    saveCommandDataEntry
} from "../data/commandData.js";
import { buildBattlefield } from "../events/foundry/battlefield.js";
import { renderRosterPage } from "./rosterPage.js";

let reviewCombatants = [];

export function renderImportPage() {

    const container = document.getElementById("import-page");

    if (!container) return;

    container.innerHTML = `
        <div class="card">

            <h2>Import & Roster Editor</h2>

            <p>
                Manually maintain shared combatant data or upload screenshots
                when an event parser is available.
            </p>

            <label for="event-select">
                Event
            </label>

            <select id="event-select">

                <option value="foundry">
                    Foundry
                </option>

                <option value="canyon">
                    Canyon Clash
                </option>

                <option value="bearTrap">
                    Bear Trap
                </option>

                <option value="frostDragon">
                    Frost Dragon
                </option>

                <option value="crazyJoe">
                    Crazy Joe
                </option>

            </select>

            <br><br>

            <input
                id="combatant-upload"
                type="file"
                accept="image/*"
                multiple
            >

            <br><br>

            <button
                id="process-images"
                class="primary"
            >
                Process Screenshots
            </button>

            <button
                id="load-current-combatants"
                type="button">
                Load Current Combatants
            </button>

            <hr>

            <div id="import-results">
                Nothing processed.
            </div>

        </div>
    `;

    document
        .getElementById("process-images")
        .addEventListener("click", async () => {

            const event =
                document.getElementById("event-select").value;

            const files =
                [...document.getElementById("combatant-upload").files];

            if (files.length === 0) {

                alert("Please select one or more screenshots.");
                return;

            }

            const resultsContainer =
                document.getElementById("import-results");

            resultsContainer.innerHTML =
                "<p>Processing...</p>";

            try {

                const results =
                    await processScreenshots(event, files);

                const importedCombatants =
                    results
                        .flatMap(result => result.combatants ?? [])
                        .map(withSuggestedAssignment);

                reviewCombatants = importedCombatants;

                renderImportResults(resultsContainer, results);

            }
            catch (error) {

                console.error(error);

                resultsContainer.innerHTML = `
                    <p class="error">
                        ${error.message}
                    </p>
                `;

            }

        });

    document
        .getElementById("load-current-combatants")
        .addEventListener("click", () => {

            const resultsContainer =
                document.getElementById("import-results");

            reviewCombatants =
                getCombatants()
                    .map(withSuggestedAssignment);

            renderCurrentCombatants(resultsContainer);

        });

}

function renderCurrentCombatants(container) {
    container.innerHTML = `
        <div class="ocr-result">
            <h3>Current Combatants</h3>
            <p>${reviewCombatants.length} combatants loaded for editing.</p>
        </div>

        ${renderCombatantReview(reviewCombatants)}
    `;

    bindReviewEvents(container);
}

function renderImportResults(container, results) {
    container.innerHTML = `
        ${results.map(result => `
            <div class="ocr-result">

                <h3>${escapeHtml(result.filename)}</h3>

                <p>
                    Anchor ${result.anchorFound ? "found" : "not found"}.
                    ${result.screenshotLegion ? `Legion ${result.screenshotLegion}.` : ""}
                    ${result.combatants?.length ?? 0} combatants parsed.
                </p>

                <pre>${escapeHtml(result.anchorText ?? "No anchor detected.")}</pre>

            </div>
        `).join("")}

        ${renderCombatantReview(reviewCombatants)}
    `;

    bindReviewEvents(container);
}

function renderCombatantReview(combatants = []) {
    return `
        <div class="review-panel">
            <h3>Review Combatants</h3>

            ${
                combatants.length === 0
                    ? "<p>No combatants loaded.</p>"
                    : ""
            }

            <div class="review-grid">
                <div class="review-row review-header">
                    <div class="review-heading">Name</div>
                    <div class="review-heading">Troop Power</div>
                    <div class="review-heading">Foundry Assignment</div>
                    <div class="review-heading">Canyon Assignment</div>
                    <div class="review-heading">Hero Total Power</div>
                    <div class="review-heading">Labyrinth Levels</div>
                    <div class="review-heading"></div>
                </div>

                ${combatants.map((combatant, index) => `
                    <div class="review-row">
                        <input
                            data-review-index="${index}"
                            data-review-field="name"
                            required
                            value="${escapeAttribute(combatant.name)}">

                        <input
                            data-review-index="${index}"
                            data-review-field="troopPower"
                            inputmode="numeric"
                            value="${escapeAttribute(String(getCombatantTroopPower(combatant) ?? ""))}">

                        <div class="review-assignment-options">
                            ${renderAssignmentOption(index, combatant, "foundryAssignment", "Legion 1")}
                            ${renderAssignmentOption(index, combatant, "foundryAssignment", "Legion 2")}
                            ${renderAssignmentOption(index, combatant, "foundryAssignment", "No engagement")}
                        </div>

                        <div class="review-assignment-options">
                            ${renderAssignmentOption(index, combatant, "canyonAssignment", "Legion 1")}
                            ${renderAssignmentOption(index, combatant, "canyonAssignment", "Legion 2")}
                            ${renderAssignmentOption(index, combatant, "canyonAssignment", "No engagement")}
                        </div>

                        <input
                            data-review-index="${index}"
                            data-review-field="heroTotalPower"
                            inputmode="numeric"
                            value="${escapeAttribute(String(combatant.heroTotalPower ?? ""))}">

                        <input
                            data-review-index="${index}"
                            data-review-field="labyrinthLevels"
                            inputmode="numeric"
                            value="${escapeAttribute(String(combatant.labyrinthLevels ?? ""))}">

                        <button
                            type="button"
                            class="remove-review-row"
                            data-remove-review-index="${index}">
                            Remove
                        </button>
                    </div>
                `).join("")}
            </div>

            <div class="button-row">
                <button
                    id="add-reviewed-combatant"
                    type="button">
                    Add Combatant
                </button>

                <button
                    id="save-reviewed-combatants"
                    type="button"
                    class="primary">
                    Save Reviewed Combatants
                </button>

                <span id="review-save-status"></span>
            </div>
        </div>
    `;
}

function renderAssignmentOption(index, combatant, field, value) {
    const assignment =
        normalizeAssignment(
            field === "foundryAssignment"
                ? getCombatantFoundryAssignment(combatant)
                : combatant[field]
        );

    return `
        <label class="review-radio-option">
            <input
                class="review-assignment-choice"
                type="radio"
                name="${field}-${index}"
                data-review-index="${index}"
                data-review-field="${field}"
                value="${escapeAttribute(value)}"
                ${assignment === value ? "checked" : ""}>
            <span>${escapeHtml(value)}</span>
        </label>
    `;
}

function bindReviewEvents(container) {
    container
        .querySelectorAll("[data-review-index]")
        .forEach(input => {
            input.addEventListener("change", () => {
                updateReviewCombatant(input);
            });
        });

    container
        .querySelectorAll("[data-remove-review-index]")
        .forEach(button => {
            button.addEventListener("click", () => {
                const index =
                    Number.parseInt(button.dataset.removeReviewIndex, 10);

                reviewCombatants.splice(index, 1);

                const resultsPanel =
                    document.getElementById("import-results");

                resultsPanel.innerHTML =
                    renderCombatantReview(reviewCombatants);

                bindReviewEvents(resultsPanel);
            });
        });

    const saveButton =
        container.querySelector("#save-reviewed-combatants");

    const addButton =
        container.querySelector("#add-reviewed-combatant");

    if (addButton) {

        addButton.addEventListener("click", () => {

            reviewCombatants.push(createBlankCombatant());

            const resultsPanel =
                document.getElementById("import-results");

            renderCurrentCombatants(resultsPanel);

        });

    }

    if (!saveButton) return;

    saveButton.addEventListener("click", async () => {
        const status =
            container.querySelector("#review-save-status");

        status.textContent = "Saving...";

        try {
            if (
                reviewCombatants.some(combatant =>
                    !combatant.name?.trim()
                )
            ) {
                status.textContent = "Name is required for every combatant.";
                return;
            }

            await saveCommandDataEntry(
                "combatants",
                reviewCombatants.map(normalizeReviewCombatant)
            );

            buildBattlefield();
            renderRosterPage(getCombatants());

            status.textContent = "Saved. Battlefield assignments refreshed.";

        }
        catch (error) {

            console.error(error);
            status.textContent = error.message;

        }
    });
}

function updateReviewCombatant(input) {
    const index =
        Number.parseInt(input.dataset.reviewIndex, 10);

    const field =
        input.dataset.reviewField;

    if (!reviewCombatants[index] || !field) return;

    reviewCombatants[index] = {
        ...reviewCombatants[index],
        [field]: parseReviewValue(field, input.value)
    };
}

function parseReviewValue(field, value) {
    if (
        field === "troopPower" ||
        field === "heroTotalPower" ||
        field === "labyrinthLevels"
    ) {
        const parsed =
            Number.parseInt(String(value).replace(/,/g, ""), 10);

        return Number.isFinite(parsed) ? parsed : null;
    }

    return value.trim();
}

function normalizeReviewCombatant(combatant) {
    const name =
        combatant.name?.trim() ?? "";

    const assignment =
        normalizeAssignment(getCombatantFoundryAssignment(combatant));

    const canyonAssignment =
        normalizeAssignment(combatant.canyonAssignment);

    const troopPower =
        Number.parseInt(getCombatantTroopPower(combatant), 10) || 0;

    return {
        ...combatant,
        id: createCombatantId(name),
        name,
        troopPower,
        power: troopPower,
        legion: getLegionFromAssignment(assignment),
        foundryAssignment: assignment,
        assignment,
        canyonAssignment,
        heroTotalPower: Number.parseInt(combatant.heroTotalPower, 10) || 0,
        labyrinthLevels: Number.parseInt(combatant.labyrinthLevels, 10) || 0
    };
}

function withSuggestedAssignment(combatant) {
    return {
        ...combatant,
        troopPower: getCombatantTroopPower(combatant),
        foundryAssignment:
            combatant.foundryAssignment ??
            combatant.assignment ??
            suggestAssignment(combatant),
        canyonAssignment:
            combatant.canyonAssignment ??
            "No engagement"
    };
}

function createBlankCombatant() {
    return {
        id: "",
        name: "",
        troopPower: 0,
        power: 0,
        legion: null,
        foundryAssignment: "No engagement",
        assignment: "No engagement",
        canyonAssignment: "No engagement",
        heroTotalPower: 0,
        labyrinthLevels: 0,
        sourceFile: "manual",
        sourceRow: null,
        sourceY: null
    };
}

function suggestAssignment(combatant) {
    if (combatant.legion) {
        return `Legion ${combatant.legion}`;
    }

    return "No engagement";
}

function normalizeAssignment(value) {
    if (value === "Legion 1" || value === "Legion 2") {
        return value;
    }

    return "No engagement";
}

function getCombatantTroopPower(combatant) {
    return combatant.troopPower ?? combatant.power ?? 0;
}

function getCombatantFoundryAssignment(combatant) {
    return combatant.foundryAssignment ?? combatant.assignment;
}

function getLegionFromAssignment(assignment) {
    if (assignment === "Legion 1") return 1;
    if (assignment === "Legion 2") return 2;
    return null;
}

function createCombatantId(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
    return escapeHtml(value);
}

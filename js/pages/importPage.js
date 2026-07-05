import { processScreenshots } from "../ocr/ocrProcessor.js";
import {
    getCombatants,
    saveCommandDataEntry
} from "../data/commandData.js";

let reviewCombatants = [];

export function renderImportPage() {

    const container = document.getElementById("import-page");

    if (!container) return;

    container.innerHTML = `
        <div class="card">

            <h2>Import Combatants</h2>

            <p>
                Select an event and upload one or more screenshots.
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
                    <div class="review-heading">Power</div>
                    <div class="review-heading">Assignment</div>
                    <div class="review-heading">Status</div>
                    <div class="review-heading">Engagement</div>
                    <div class="review-heading"></div>
                </div>

                ${combatants.map((combatant, index) => `
                    <div class="review-row">
                        <input
                            data-review-index="${index}"
                            data-review-field="name"
                            value="${escapeAttribute(combatant.name)}">

                        <input
                            data-review-index="${index}"
                            data-review-field="power"
                            inputmode="numeric"
                            value="${escapeAttribute(String(combatant.power ?? ""))}">

                        <div class="review-assignment-options">
                            ${renderAssignmentOption(index, combatant, "Legion 1")}
                            ${renderAssignmentOption(index, combatant, "Legion 2")}
                            ${renderAssignmentOption(index, combatant, "No engagement")}
                        </div>

                        <input
                            data-review-index="${index}"
                            data-review-field="status"
                            value="${escapeAttribute(combatant.status ?? "")}">

                        <input
                            data-review-index="${index}"
                            data-review-field="engagement"
                            value="${escapeAttribute(combatant.engagement ?? "")}">

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

function renderAssignmentOption(index, combatant, value) {
    const assignment =
        normalizeAssignment(combatant.assignment);

    return `
        <label class="review-radio-option">
            <input
                class="review-assignment-choice"
                type="radio"
                name="assignment-${index}"
                data-review-index="${index}"
                data-review-field="assignment"
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

            await saveCommandDataEntry(
                "combatants",
                reviewCombatants.map(normalizeReviewCombatant)
            );

            status.textContent = "Saved.";

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
    if (field === "power") {
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
        normalizeAssignment(combatant.assignment);

    return {
        ...combatant,
        id: createCombatantId(name),
        name,
        power: Number.parseInt(combatant.power, 10) || 0,
        legion: getLegionFromAssignment(assignment),
        assignment
    };
}

function withSuggestedAssignment(combatant) {
    return {
        ...combatant,
        assignment:
            combatant.assignment ??
            suggestAssignment(combatant)
    };
}

function createBlankCombatant() {
    return {
        id: "",
        name: "",
        power: 0,
        legion: null,
        assignment: "No engagement",
        status: "",
        engagement: "",
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

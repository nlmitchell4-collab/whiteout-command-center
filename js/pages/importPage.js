import { processScreenshots } from "../ocr/ocrProcessor.js";
import { saveCommandDataEntry } from "../data/commandData.js";

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
    if (combatants.length === 0) {
        return "<p>No combatants parsed.</p>";
    }

    return `
        <div class="review-panel">
            <h3>Review Combatants</h3>

            <div class="review-grid">
                <div class="review-heading">Name</div>
                <div class="review-heading">Power</div>
                <div class="review-heading">Legion</div>
                <div class="review-heading">Assignment</div>
                <div class="review-heading">Status</div>
                <div class="review-heading">Engagement</div>
                <div class="review-heading"></div>

                ${combatants.map((combatant, index) => `
                    <input
                        data-review-index="${index}"
                        data-review-field="name"
                        value="${escapeAttribute(combatant.name)}">

                    <input
                        data-review-index="${index}"
                        data-review-field="power"
                        inputmode="numeric"
                        value="${escapeAttribute(String(combatant.power ?? ""))}">

                    <input
                        data-review-index="${index}"
                        data-review-field="legion"
                        inputmode="numeric"
                        value="${escapeAttribute(String(combatant.legion ?? ""))}">

                    <input
                        data-review-index="${index}"
                        data-review-field="assignment"
                        value="${escapeAttribute(combatant.assignment ?? "")}">

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
                `).join("")}
            </div>

            <div class="button-row">
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
    if (field === "power" || field === "legion") {
        const parsed =
            Number.parseInt(String(value).replace(/,/g, ""), 10);

        return Number.isFinite(parsed) ? parsed : null;
    }

    return value.trim();
}

function normalizeReviewCombatant(combatant) {
    const name =
        combatant.name?.trim() ?? "";

    return {
        ...combatant,
        id: createCombatantId(name),
        name,
        power: Number.parseInt(combatant.power, 10) || 0,
        legion: combatant.legion ? Number.parseInt(combatant.legion, 10) : null,
        assignment: combatant.assignment?.trim() ?? ""
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

function suggestAssignment(combatant) {
    if (combatant.legion) {
        return `Legion ${combatant.legion}`;
    }

    if (combatant.engagement) {
        return combatant.engagement;
    }

    return "";
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

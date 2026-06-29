import { processScreenshots } from "../ocr/ocrProcessor.js";

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

                resultsContainer.innerHTML =
                    results.map(result => `
                        <div class="ocr-result">

                            <h3>${result.filename}</h3>

                            <pre>${result.anchorText ?? "No anchor detected."}</pre>

                        </div>
                    `).join("");

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
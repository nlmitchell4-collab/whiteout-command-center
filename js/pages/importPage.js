
import { processScreenshots } from "../ocrProcessor.js";
export function renderImportPage() {

    const container = document.getElementById("import-page");

    if (!container) return;

    container.innerHTML = `
        <div class="card">

            <h2>Import Combatants</h2>

            <p>
                Upload one or more Whiteout Survival Foundry registration screenshots.
            </p>

            <input
                id="combatant-upload"
                type="file"
                accept="image/*"
                multiple
            />

            <br><br>

            <button id="process-images" class="primary">
                Process Screenshots
            </button>

            <hr>

            <div id="import-results">
                No screenshots processed.
            </div>

        </div>
    `;

    document
    .getElementById("process-images")
    .addEventListener("click", async () => {

        const files =
            [...document.getElementById("combatant-upload").files];

        const results =
            await processScreenshots(files);

        document.getElementById("import-results").innerHTML =
            results.map(r => `
                <div>
                    ${r.filename}
                    -
                    ${r.status}
                </div>
            `).join("");

    });

}
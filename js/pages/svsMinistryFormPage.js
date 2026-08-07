const SVS_FORM_WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbyYRZRUyw33cG3HKxINpUHCNPkaDh6EQlaHW_XydJZ0NnEklQ5P3eg1ISQ3M5uG_DY-/exec";

export function renderSvsMinistryFormPage() {
    const container =
        document.getElementById("svs-ministry-form-page");

    if (!container) return;

    container.innerHTML = `
        <div class="svs-form-shell">
            <iframe
                class="svs-form-frame"
                src="${SVS_FORM_WEB_APP_URL}"
                title="SVS Ministry Form"
                loading="lazy">
                Loading...
            </iframe>
        </div>
    `;
}

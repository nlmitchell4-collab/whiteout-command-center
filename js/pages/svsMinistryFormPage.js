import { getFirebaseApp } from "../common/firebase.js";

const SVS_FORM_WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbyYRZRUyw33cG3HKxINpUHCNPkaDh6EQlaHW_XydJZ0NnEklQ5P3eg1ISQ3M5uG_DY-/exec";

const ADMIN_PASSWORD =
    import.meta.env.VITE_ADMIN_PASSWORD ?? "";

export function renderSvsMinistryFormPage() {
    const container =
        document.getElementById("svs-ministry-form-page");

    if (!container) return;

    container.innerHTML = `
        <div class="svs-form-toolbar">
            <button
                type="button"
                id="svs-admin-open"
                class="svs-admin-button">
                Admin
            </button>
        </div>

        <div class="svs-form-shell">
            <iframe
                class="svs-form-frame"
                src="${SVS_FORM_WEB_APP_URL}"
                title="SVS Ministry Form"
                loading="lazy">
                Loading...
            </iframe>
        </div>

        <div
            id="svs-admin-modal"
            class="svs-admin-modal"
            hidden>
            <div class="svs-admin-dialog" role="dialog" aria-modal="true" aria-labelledby="svs-admin-title">
                <div class="svs-admin-header">
                    <h2 id="svs-admin-title">SVS Admin</h2>
                    <button
                        type="button"
                        id="svs-admin-close"
                        class="svs-admin-close"
                        aria-label="Close admin modal">
                        ×
                    </button>
                </div>

                <div id="svs-admin-login" class="svs-admin-section">
                    <label for="svs-admin-password">Admin Password</label>
                    <input
                        id="svs-admin-password"
                        type="password"
                        autocomplete="current-password">
                    <button
                        type="button"
                        id="svs-admin-unlock"
                        class="svs-admin-primary">
                        Unlock
                    </button>
                </div>

                <div id="svs-admin-actions" class="svs-admin-section" hidden>
                    <p>
                        Archive current responses to the SVS archive workbook,
                        then reset the live form responses, response sheet,
                        dashboard and recommendations.
                    </p>
                    <button
                        type="button"
                        id="svs-archive-reset"
                        class="svs-admin-danger">
                        Archive & Reset Current SVS
                    </button>
                </div>

                <p id="svs-admin-status" class="svs-admin-status" role="status"></p>
            </div>
        </div>
    `;

    initializeSvsAdminModal(container);
}

function initializeSvsAdminModal(container) {
    const openButton =
        container.querySelector("#svs-admin-open");
    const modal =
        container.querySelector("#svs-admin-modal");
    const closeButton =
        container.querySelector("#svs-admin-close");
    const passwordInput =
        container.querySelector("#svs-admin-password");
    const unlockButton =
        container.querySelector("#svs-admin-unlock");
    const loginSection =
        container.querySelector("#svs-admin-login");
    const actionsSection =
        container.querySelector("#svs-admin-actions");
    const archiveResetButton =
        container.querySelector("#svs-archive-reset");
    const status =
        container.querySelector("#svs-admin-status");

    const closeModal = () => {
        modal.hidden = true;
        status.textContent = "";
    };

    openButton.addEventListener("click", () => {
        modal.hidden = false;
        passwordInput.focus();
    });

    closeButton.addEventListener("click", closeModal);

    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeModal();
        }
    });

    unlockButton.addEventListener("click", () => {
        if (passwordInput.value !== ADMIN_PASSWORD) {
            status.textContent = "Incorrect admin password.";
            return;
        }

        loginSection.hidden = true;
        actionsSection.hidden = false;
        status.textContent = "Admin controls unlocked.";
    });

    archiveResetButton.addEventListener("click", async () => {
        const confirmed =
            confirm("Archive current SVS responses and reset the live form data?");

        if (!confirmed) return;

        archiveResetButton.disabled = true;
        status.textContent = "Signing in with Google...";

        try {
            const idToken =
                await signInWithGoogle();

            status.textContent = "Opening authenticated archive action...";
            submitArchiveResetAction(idToken);
            status.textContent = "Archive action opened in a new tab.";
        }
        catch (error) {
            status.textContent =
                error.message || "Unable to start archive action.";
        }
        finally {
            archiveResetButton.disabled = false;
        }
    });
}

async function signInWithGoogle() {
    const app =
        await getFirebaseApp();

    if (!app) {
        throw new Error("Firebase is not configured for Google sign-in.");
    }

    const {
        getAuth,
        GoogleAuthProvider,
        signInWithPopup
    } = await import("firebase/auth");

    const auth =
        getAuth(app);

    const provider =
        new GoogleAuthProvider();

    const result =
        await signInWithPopup(auth, provider);

    const credential =
        GoogleAuthProvider.credentialFromResult(result);

    if (!credential?.idToken) {
        throw new Error("Google sign-in did not return an identity token.");
    }

    return credential.idToken;
}

function submitArchiveResetAction(idToken) {
    const form =
        document.createElement("form");

    form.method = "POST";
    form.action = SVS_FORM_WEB_APP_URL;
    form.target = "_blank";
    form.hidden = true;

    form.append(
        createHiddenInput("action", "archiveAndReset"),
        createHiddenInput("idToken", idToken)
    );

    document.body.append(form);
    form.submit();
    form.remove();
}

function createHiddenInput(name, value) {
    const input =
        document.createElement("input");

    input.type = "hidden";
    input.name = name;
    input.value = value;

    return input;
}

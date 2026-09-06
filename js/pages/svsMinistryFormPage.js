import { getFirebaseApp } from "../common/firebase.js";

const SVS_FORM_WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbyYRZRUyw33cG3HKxINpUHCNPkaDh6EQlaHW_XydJZ0NnEklQ5P3eg1ISQ3M5uG_DY-/exec";

const SVS_RECOMMENDATIONS_URL =
    `${SVS_FORM_WEB_APP_URL}?view=recommendations`;

const ADMIN_PASSWORD =
    import.meta.env.VITE_ADMIN_PASSWORD || "3133Rox";

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
            id="svs-admin-page"
            class="svs-admin-page"
            hidden>
            <div class="svs-admin-actions-panel">
                <div>
                    <h2>Recommended Assignments</h2>
                    <p>
                        Review the current recommendations generated from live
                        SVS form responses.
                    </p>
                </div>

                <div class="svs-admin-action-row">
                    <button
                        type="button"
                        id="svs-admin-back"
                        class="svs-admin-button">
                        Back to Form
                    </button>

                    <button
                        type="button"
                        id="svs-recommendations-refresh"
                        class="svs-admin-button">
                        Refresh Recommendations
                    </button>

                    <button
                        type="button"
                        id="svs-archive-reset"
                        class="svs-admin-danger">
                        Archive & Reset Current SVS
                    </button>
                </div>

                <p id="svs-admin-status" class="svs-admin-status" role="status"></p>
            </div>

            <div class="svs-recommendations-shell">
                <div
                    id="svs-recommendations-loading"
                    class="svs-recommendations-loading">
                    Loading recommendations...
                </div>

                <iframe
                    id="svs-recommendations-frame"
                    class="svs-recommendations-frame"
                    title="SVS Recommended Assignments"
                    loading="lazy">
                    Loading...
                </iframe>
            </div>
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

                <p id="svs-admin-login-status" class="svs-admin-status" role="status"></p>
            </div>
        </div>
    `;

    initializeSvsAdminModal(container);

    if (shouldOpenAdminFromUrl()) {
        openButtonClick(container);
    }
}

function initializeSvsAdminModal(container) {
    const openButton =
        container.querySelector("#svs-admin-open");
    const toolbar =
        container.querySelector(".svs-form-toolbar");
    const formShell =
        container.querySelector(".svs-form-shell");
    const adminPage =
        container.querySelector("#svs-admin-page");
    const modal =
        container.querySelector("#svs-admin-modal");
    const closeButton =
        container.querySelector("#svs-admin-close");
    const passwordInput =
        container.querySelector("#svs-admin-password");
    const unlockButton =
        container.querySelector("#svs-admin-unlock");
    const backButton =
        container.querySelector("#svs-admin-back");
    const archiveResetButton =
        container.querySelector("#svs-archive-reset");
    const recommendationsRefreshButton =
        container.querySelector("#svs-recommendations-refresh");
    const recommendationsFrame =
        container.querySelector("#svs-recommendations-frame");
    const recommendationsLoading =
        container.querySelector("#svs-recommendations-loading");
    const status =
        container.querySelector("#svs-admin-status");
    const loginStatus =
        container.querySelector("#svs-admin-login-status");

    const closeModal = () => {
        modal.hidden = true;
        loginStatus.textContent = "";
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
            loginStatus.textContent = "Incorrect admin password.";
            return;
        }

        openAdminPage({
            modal,
            toolbar,
            formShell,
            adminPage,
            recommendationsFrame
        });
        status.textContent = "Admin controls unlocked.";
    });

    passwordInput.addEventListener("keydown", event => {
        if (event.key !== "Enter") return;

        event.preventDefault();
        unlockButton.click();
    });

    backButton.addEventListener("click", () => {
        adminPage.hidden = true;
        toolbar.hidden = false;
        formShell.hidden = false;
        status.textContent = "";
        clearAdminUrlParameter();
    });

    recommendationsRefreshButton.addEventListener("click", () => {
        loadRecommendationsFrame(
            recommendationsFrame,
            recommendationsLoading,
            true
        );
        status.textContent = "Recommendations refreshed.";
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

function openButtonClick(container) {
    container
        .querySelector("#svs-admin-open")
        ?.click();
}

function openAdminPage({
    modal,
    toolbar,
    formShell,
    adminPage,
    recommendationsFrame
}) {
    modal.hidden = true;
    toolbar.hidden = true;
    formShell.hidden = true;
    adminPage.hidden = false;
    loadRecommendationsFrame(
        recommendationsFrame,
        adminPage.querySelector("#svs-recommendations-loading")
    );
}

function shouldOpenAdminFromUrl() {
    const params =
        new URLSearchParams(
            globalThis.location.search
        );

    return params.get("svsAdmin") === "true";
}

function clearAdminUrlParameter() {
    const url =
        new URL(
            globalThis.location.href
        );

    if (!url.searchParams.has("svsAdmin")) return;

    url.searchParams.delete("svsAdmin");
    globalThis.history.replaceState(
        null,
        "",
        `${url.pathname}${url.search}${url.hash}`
    );
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

function loadRecommendationsFrame(frame, loadingIndicator, refresh = false) {
    if (!frame) return;

    if (!refresh && frame.src) return;

    if (loadingIndicator) {
        loadingIndicator.hidden = false;
    }

    frame.addEventListener(
        "load",
        () => {
            if (loadingIndicator) {
                loadingIndicator.hidden = true;
            }
        },
        { once: true }
    );

    frame.src =
        refresh
            ? `${SVS_RECOMMENDATIONS_URL}&t=${Date.now()}`
            : SVS_RECOMMENDATIONS_URL;
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

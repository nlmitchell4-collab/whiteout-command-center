// =========================================
// Navigation
// =========================================
import { isAdmin } from "./auth.js";
import { showLoginModal } from "./pages/loginModal.js";

const PAGE_PASSWORDS = {
    "svs-ministry-form": {
        password: "3133Rox",
        sessionKey: "svsMinistryFormAccess"
    }
};

export function initializeNavigation() {

    const pages =
        document.querySelectorAll(".page");

    const buttons =
        document.querySelectorAll(".nav-button, .subnav-button");

    const openPage = pageId => {
        const page =
            document.getElementById(pageId);

        if (!page) return;

        pages.forEach(page =>
            page.classList.remove("active")
        );

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        const activeButtons =
            document.querySelectorAll(`[data-page="${pageId}"]`);

        activeButtons.forEach(button => {
            const navGroup =
                button.dataset.navGroup;

            if (navGroup) {
                document
                    .querySelectorAll(`[data-nav-group="${navGroup}"]`)
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );
            }

            button.classList.add("active");
        });

        const pageGroup =
            getPageGroup(pageId);

        if (["foundry", "canyon"].includes(pageGroup)) {
            document
                .querySelector('[data-nav-group="main"][data-page="events"]')
                ?.classList.add("active");

            document
                .querySelector(`[data-nav-group="${pageGroup}"][data-page="${pageId}"]`)
                ?.classList.add("active");
        }

        page.classList.add("active");
    };

    const navigateTo = pageId => {
        const openTargetPage = () => {
            openPage(pageId);

            const hash =
                `#${pageId}`;

            if (globalThis.location.hash !== hash) {
                globalThis.history.pushState(null, "", hash);
            }
        };

        if (pageId === "import" && !isAdmin()) {
            showLoginModal(openTargetPage);
            return;
        }

        if (requiresPagePassword(pageId)) {
            promptForPagePassword(pageId, openTargetPage);
            return;
        }

        openTargetPage();
    };

    buttons.forEach(button => {

        button.addEventListener("click", () => {
            navigateTo(button.dataset.page);
        });

    });

    globalThis.addEventListener("hashchange", () => {
        navigateTo(getPageIdFromHash());
    });

    navigateTo(getPageIdFromHash());

}

function getPageIdFromHash() {
    const pageId =
        globalThis.location.hash.replace("#", "");

    return pageId || "events";
}

function getPageGroup(pageId) {
    const button =
        document.querySelector(`[data-page="${pageId}"]`);

    return button?.dataset.navGroup ?? null;
}

function requiresPagePassword(pageId) {
    const pagePassword =
        PAGE_PASSWORDS[pageId];

    if (!pagePassword) return false;

    return sessionStorage.getItem(pagePassword.sessionKey) !== "true";
}

function promptForPagePassword(pageId, onSuccess) {
    const pagePassword =
        PAGE_PASSWORDS[pageId];

    const password =
        prompt("Page Password");

    if (password === null) return;

    if (password === pagePassword.password) {
        sessionStorage.setItem(pagePassword.sessionKey, "true");
        onSuccess();
        return;
    }

    alert("Incorrect password.");
}

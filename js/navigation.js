// =========================================
// Navigation
// =========================================
import { isAdmin } from "./auth.js";
import { showLoginModal } from "./pages/loginModal.js";
export function initializeNavigation() {

    const pages =
        document.querySelectorAll(".page");

    const buttons =
        document.querySelectorAll(".nav-button");

    buttons.forEach(button=>{

button.addEventListener("click", () => {

    const openPage = () => {

        pages.forEach(page =>
            page.classList.remove("active")
        );

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        document
            .getElementById(button.dataset.page)
            .classList.add("active");

    };

    if (button.dataset.page === "import" && !isAdmin()) {

        showLoginModal(openPage);
        return;

    }

    openPage();

});

    });

}
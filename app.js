// ========================================
// Whiteout Foundry Command Center
// Version 0.1
// ========================================

const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll(".nav-button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active page
        pages.forEach(page => {
            page.classList.remove("active");
        });

        // Remove active button
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate selected button
        button.classList.add("active");

        // Show selected page
        const pageId = button.dataset.page;
        document
            .getElementById(pageId)
            .classList.add("active");

    });

});

console.log("Whiteout Foundry Command Center Loaded");
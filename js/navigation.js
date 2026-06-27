// =========================================
// Navigation
// =========================================

function initializeNavigation(){

    const pages =
        document.querySelectorAll(".page");

    const buttons =
        document.querySelectorAll(".nav-button");

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            pages.forEach(page=>
                page.classList.remove("active")
            );

            buttons.forEach(btn=>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            document
                .getElementById(button.dataset.page)
                .classList.add("active");

        });

    });

}
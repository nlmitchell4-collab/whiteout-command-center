let selectedChief = null;

function initializeChiefSelector() {

    const select = document.getElementById("chief-select");

    chiefs
        .sort((a, b) => a.displayName.localeCompare(b.displayName))
        .forEach(chief => {

            const option = document.createElement("option");

            option.value = chief.id;
            option.textContent = chief.displayName;

            select.appendChild(option);

        });

    const saved = localStorage.getItem("chief");

    if (saved) {

        selectedChief = saved;
        select.value = saved;

    }

    select.addEventListener("change", () => {

        selectedChief = select.value;

        localStorage.setItem("chief", selectedChief);

        buildBattlefield();

    });

}

function getSelectedChief() {

    return selectedChief;

}
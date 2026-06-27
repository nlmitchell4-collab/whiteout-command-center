let selectedChief = null;

function initializeChiefSelector() {

    const input =
        document.getElementById("chief-search");

    const datalist =
        document.getElementById("chief-list");

    chiefs
        .sort((a,b)=>
            a.displayName.localeCompare(b.displayName)
        )
        .forEach(chief=>{

            const option =
                document.createElement("option");

            option.value =
                chief.displayName;

            datalist.appendChild(option);

        });

    const saved =
        localStorage.getItem("chief");

    if(saved){

        const chief =
            chiefs.find(c=>c.id===saved);

        if(chief){

            selectedChief = chief.id;

            input.value = chief.displayName;

        }

    }

    input.addEventListener("change",()=>{

        const chief =
            chiefs.find(c=>
                c.displayName.toLowerCase() ===
                input.value.toLowerCase()
            );

        if(!chief){

            selectedChief = null;

            localStorage.removeItem("chief");

            buildBattlefield();

            return;

        }

        selectedChief = chief.id;

        localStorage.setItem(
            "chief",
            chief.id
        );

        buildBattlefield();
renderSummary();
    });

}

function getSelectedChief(){

    return selectedChief;

}
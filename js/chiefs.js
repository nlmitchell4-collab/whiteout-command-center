let selectedChief = null;

import { getChiefs } from "./data/commandData.js";
import { buildBattlefield } from "./events/foundry/battlefield.js";

export function initializeChiefSelector() {

    const input =
        document.getElementById("chief-search");

    const datalist =
        document.getElementById("chief-list");

    if (!input || !datalist) return;

    datalist.innerHTML = "";

    getChiefs()
        .slice()
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
            getChiefs().find(c=>c.id===saved);

        if(chief){

            selectedChief = chief.id;

            input.value = chief.displayName;

        }

    }

    input.addEventListener("change",()=>{

        const chief =
            getChiefs().find(c=>
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
    });

}

export function getSelectedChief(){

    return selectedChief;

}

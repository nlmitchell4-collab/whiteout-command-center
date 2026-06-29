let selectedChief = null;
let selectedLegion = Number.parseInt(
    localStorage.getItem("legion") ?? "1",
    10
);

import {
    getRosterPeople,
    getRosterPerson
} from "./data/commandData.js";
import { buildBattlefield } from "./events/foundry/battlefield.js";

export function initializeChiefSelector() {

    const input =
        document.getElementById("chief-search");

    const datalist =
        document.getElementById("chief-list");

    const legionSelect =
        document.getElementById("legion-select");

    if (!input || !datalist) return;

    datalist.innerHTML = "";

    getRosterPeople()
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
            getRosterPeople().find(c=>c.id===saved);

        if(chief){

            selectedChief = chief.id;

            input.value = chief.displayName;

        }

    }

    if (legionSelect) {

        legionSelect.value =
            String(Number.isFinite(selectedLegion) ? selectedLegion : 1);

        legionSelect.addEventListener("change", () => {

            selectedLegion =
                Number.parseInt(legionSelect.value, 10);

            localStorage.setItem("legion", String(selectedLegion));

            buildBattlefield();

        });

    }

    syncLegionControls();

    input.addEventListener("change",()=>{

        const chief =
            getRosterPeople().find(c=>
                c.displayName.toLowerCase() ===
                input.value.toLowerCase()
            );

        if(!chief){

            selectedChief = null;

            localStorage.removeItem("chief");

            syncLegionControls();

            buildBattlefield();

            return;

        }

        selectedChief = chief.id;

        localStorage.setItem(
            "chief",
            chief.id
        );

        syncLegionControls();

        buildBattlefield();
    });

}

export function getSelectedChief(){

    return selectedChief;

}

export function getActiveLegion() {
    const chief =
        getRosterPerson(selectedChief);

    if (chief?.legion) return chief.legion;

    return Number.isFinite(selectedLegion) ? selectedLegion : 1;
}

function syncLegionControls() {
    const selector =
        document.getElementById("legion-selector");

    const identifier =
        document.getElementById("legion-identifier");

    if (!selector || !identifier) return;

    const chief =
        getRosterPerson(selectedChief);

    if (chief) {

        selector.hidden = true;
        identifier.hidden = false;
        identifier.innerHTML = `
            <label>Legion</label>
            <div class="legion-pill">
                ${chief.legion ? `Legion ${chief.legion}` : "Unassigned"}
            </div>
        `;

        return;

    }

    selector.hidden = false;
    identifier.hidden = true;
    identifier.innerHTML = "";
}

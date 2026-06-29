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
    const context =
        document.getElementById("legion-context");

    if (!context) return;

    const chief =
        getRosterPerson(selectedChief);

    if (chief) {

        context.innerHTML = `
            <label>Legion</label>
            <div class="legion-pill">
                ${chief.legion ? `Legion ${chief.legion}` : "Unassigned"}
            </div>
        `;

        return;

    }

    const activeLegion =
        Number.isFinite(selectedLegion) ? selectedLegion : 1;

    context.innerHTML = `
        <label for="legion-select">
            Legion
        </label>

        <select id="legion-select">
            <option value="1" ${activeLegion === 1 ? "selected" : ""}>
                Legion 1
            </option>
            <option value="2" ${activeLegion === 2 ? "selected" : ""}>
                Legion 2
            </option>
        </select>
    `;

    context
        .querySelector("#legion-select")
        .addEventListener("change", event => {

            selectedLegion =
                Number.parseInt(event.target.value, 10);

            localStorage.setItem("legion", String(selectedLegion));

            buildBattlefield();

        });
}

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

    input.addEventListener("focus", () => {

        renderChiefResults(input.value);

    });

    input.addEventListener("input", () => {

        renderChiefResults(input.value);

        if (
            selectedChief &&
            input.value.trim() !== getSelectedChiefName()
        ) {

            selectedChief = null;
            localStorage.removeItem("chief");
            syncLegionControls();

        }

    });

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

        hideChiefResults();
    });

    document.addEventListener("click", event => {

        if (
            event.target === input ||
            datalist.contains(event.target)
        ) {

            return;

        }

        hideChiefResults();

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

function renderChiefResults(searchValue) {
    const results =
        document.getElementById("chief-list");

    if (!results) return;

    const normalizedSearch =
        searchValue.trim().toLowerCase();

    const people =
        getRosterPeople()
            .slice()
            .sort((a, b) =>
                a.displayName.localeCompare(b.displayName)
            )
            .filter(person =>
                !normalizedSearch ||
                person.displayName.toLowerCase().includes(normalizedSearch)
            );

    if (people.length === 0) {

        results.innerHTML =
            "<div class=\"chief-result-empty\">No chiefs found.</div>";
        results.hidden = false;
        return;

    }

    results.innerHTML =
        people.map(person => `
            <button
                type="button"
                class="chief-result"
                data-chief-id="${person.id}">
                <span>${escapeHtml(person.displayName)}</span>
                <small>
                    ${person.legion ? `Legion ${person.legion}` : ""}
                    ${getTroopPower(person) ? ` ${getTroopPower(person).toLocaleString()}` : ""}
                </small>
            </button>
        `).join("");

    results
        .querySelectorAll("[data-chief-id]")
        .forEach(button => {

            button.addEventListener("click", () => {

                selectChief(button.dataset.chiefId);

            });

        });

    results.hidden = false;
}

function selectChief(chiefId) {
    const chief =
        getRosterPerson(chiefId);

    const input =
        document.getElementById("chief-search");

    if (!chief || !input) return;

    selectedChief = chief.id;
    input.value = chief.displayName;

    localStorage.setItem("chief", chief.id);

    syncLegionControls();
    hideChiefResults();
    buildBattlefield();
}

function hideChiefResults() {
    const results =
        document.getElementById("chief-list");

    if (results) {
        results.hidden = true;
    }
}

function getSelectedChiefName() {
    const chief =
        getRosterPerson(selectedChief);

    return chief?.displayName ?? "";
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function getTroopPower(person) {
    return person.troopPower ?? person.power ?? 0;
}

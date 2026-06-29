import { initializeNavigation } from "./navigation.js";
import { loadCommandData } from "./data/commandData.js";
import { initializeChiefSelector } from "./chiefs.js";
import {
    buildBattlefield,
    initializePhaseSelector
} from "./events/foundry/battlefield.js";
import { renderImportPage } from "./pages/importPage.js";

export async function initializeApp() {

    await loadCommandData();
    initializeNavigation();
    initializeChiefSelector();
    initializePhaseSelector();
    buildBattlefield();
    renderImportPage();

}

document.addEventListener("DOMContentLoaded", () => {

    initializeApp();

});

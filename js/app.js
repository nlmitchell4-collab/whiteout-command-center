import { initializeNavigation } from "./navigation.js";
import { loadCommandData } from "./data/commandData.js";
import { initializeChiefSelector } from "./chiefs.js";
import {
    buildBattlefield,
    initializePhaseSelector
} from "./events/foundry/battlefield.js";
import { renderImportPage } from "./pages/importPage.js";
import { renderRosterPage } from "./pages/rosterPage.js";
import { getCombatants } from "./data/commandData.js";

export async function initializeApp() {

    initializeNavigation();
    renderImportPage();

    await loadDataWithFallback();

    initializeChiefSelector();
    initializePhaseSelector();
    buildBattlefield();
    renderRosterPage(getCombatants());

}

async function loadDataWithFallback() {
    try {

        await Promise.race([
            loadCommandData(),
            new Promise((_, reject) => {
                setTimeout(
                    () => reject(new Error("Command data load timed out.")),
                    6000
                );
            })
        ]);

    }
    catch (error) {

        console.warn("Using available command data fallback.", error);

    }
}

document.addEventListener("DOMContentLoaded", () => {

    initializeApp();

});

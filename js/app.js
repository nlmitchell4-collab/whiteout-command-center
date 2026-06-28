import { initializeNavigation } from "./navigation.js";

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

    initializeChiefSelector();

    initializePhaseSelector();

    buildBattlefield();

    renderSummary();

    renderMyObjectives();

});
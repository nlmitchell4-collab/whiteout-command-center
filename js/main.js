import "../scss/main.scss";
import "./roster.js";
import "./importRoster.js";
import "./assignmentEngine.js";
import "./pages/rosterPage.js";
import "./pages/importPage.js";
import "./navigation.js";
import "./chiefs.js";
import "./combatants.js";
import "./assignments.js";
import "./battlefield.js";
import "./summary.js";
import "./myObjectives.js";
import "./app.js";
import { renderImportPage } from "./pages/importPage.js";

document.addEventListener("DOMContentLoaded", () => {

    renderImportPage();

});
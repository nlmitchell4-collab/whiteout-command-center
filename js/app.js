import { initializeNavigation } from "./navigation.js";

export function initializeApp() {

    initializeNavigation();

}

document.addEventListener("DOMContentLoaded", () => {

    initializeApp();

});
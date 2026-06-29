import { chiefs as defaultChiefs } from "../../data/chiefs.js";
import { foundryAssignments as defaultFoundryAssignments } from "../../data/foundry/assignments.js";
import { foundryConfig as defaultFoundryConfig } from "../../data/foundry/config.js";
import { foundryObjectives as defaultFoundryObjectives } from "../../data/foundry/objectives.js";

let commandData = {
    chiefs: defaultChiefs,
    foundryAssignments: defaultFoundryAssignments,
    foundryConfig: defaultFoundryConfig,
    foundryObjectives: defaultFoundryObjectives
};

const DATA_FILES = {
    chiefs: "chiefs.json",
    foundryAssignments: "foundry-assignments.json",
    foundryConfig: "foundry-config.json",
    foundryObjectives: "foundry-objectives.json"
};

async function fetchJson(baseUrl, filename) {
    const url = new URL(filename, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to load ${filename}: ${response.status}`);
    }

    return response.json();
}

export async function loadCommandData() {
    const baseUrl = import.meta.env.VITE_FIREBASE_DATA_BASE_URL;

    if (!baseUrl) return commandData;

    try {
        const entries = await Promise.all(
            Object.entries(DATA_FILES).map(async ([key, filename]) => [
                key,
                await fetchJson(baseUrl, filename)
            ])
        );

        commandData = {
            ...commandData,
            ...Object.fromEntries(entries)
        };
    }
    catch (error) {
        console.warn("Using bundled command data fallback.", error);
    }

    return commandData;
}

export function getChiefs() {
    return commandData.chiefs;
}

export function getFoundryAssignments() {
    return commandData.foundryAssignments;
}

export function getFoundryConfig() {
    return commandData.foundryConfig;
}

export function getFoundryObjectives() {
    return commandData.foundryObjectives;
}

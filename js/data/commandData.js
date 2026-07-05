import { chiefs as defaultChiefs } from "../../data/chiefs.js";
import { combatants as defaultCombatants } from "../../data/combatants.js";
import { foundryAssignments as defaultFoundryAssignments } from "../../data/foundry/assignments.js";
import { foundryConfig as defaultFoundryConfig } from "../../data/foundry/config.js";
import { foundryObjectives as defaultFoundryObjectives } from "../../data/foundry/objectives.js";
import {
    getFirebaseConfigStatus,
    getFirebaseDb,
    isFirebaseConfigured
} from "../common/firebase.js";

let commandData = {
    chiefs: defaultChiefs,
    combatants: defaultCombatants,
    foundryAssignments: defaultFoundryAssignments,
    foundryConfig: defaultFoundryConfig,
    foundryObjectives: defaultFoundryObjectives
};

const FIRESTORE_COLLECTION = "commandData";

const FIRESTORE_DOCUMENTS = {
    chiefs: "chiefs",
    combatants: "combatants",
    foundryAssignments: "foundryAssignments",
    foundryConfig: "foundryConfig",
    foundryObjectives: "foundryObjectives"
};

const FIRESTORE_TIMEOUT_MS = 8000;

function isLocalRuntime() {
    const hostname =
        globalThis.location?.hostname;

    return (
        hostname === "localhost" ||
        hostname === "127.0.0.1" ||
        hostname === ""
    );
}

function readDocumentPayload(snapshot, key) {
    if (!snapshot.exists()) return commandData[key];

    const data = snapshot.data();

    if (Array.isArray(commandData[key])) {
        return Array.isArray(data.items) ? data.items : commandData[key];
    }

    return data.value ?? data;
}

function withTimeout(promise, message) {
    return Promise.race([
        promise,
        new Promise((_, reject) => {
            setTimeout(
                () => reject(new Error(message)),
                FIRESTORE_TIMEOUT_MS
            );
        })
    ]);
}

function isFirestoreOfflineError(error) {
    return (
        error?.code === "unavailable" ||
        error?.message?.toLowerCase().includes("client is offline") ||
        error?.message?.toLowerCase().includes("offline")
    );
}

function getFirestoreSaveError(error) {
    if (isFirestoreOfflineError(error)) {
        return new Error(
            "Combatants were not saved. Firestore is configured, but the app cannot reach Firebase from this browser. Check network access, Firestore setup, and Firebase Hosting env build settings."
        );
    }

    return new Error(
        `Combatants were not saved to Firebase. ${error.message}`
    );
}

export async function loadCommandData() {
    if (!isFirebaseConfigured()) {

        if (!isLocalRuntime()) {
            const status =
                getFirebaseConfigStatus();

            console.warn(
                "Firebase is not configured. Using bundled local data fallback.",
                status.missingKeys
            );
        }

        return commandData;

    }

    try {
        const [
            db,
            { doc, getDoc }
        ] = await Promise.all([
            getFirebaseDb(),
            import("firebase/firestore")
        ]);

        if (!db) return commandData;

        const entries = await Promise.all(
            Object.entries(FIRESTORE_DOCUMENTS).map(async ([key, documentId]) => [
                key,
                readDocumentPayload(
                    await withTimeout(
                        getDoc(doc(db, FIRESTORE_COLLECTION, documentId)),
                        `Timed out loading ${documentId} from Firebase.`
                    ),
                    key
                )
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

export async function saveCommandDataEntry(key, value) {
    const documentId = FIRESTORE_DOCUMENTS[key];

    if (!documentId) {
        throw new Error(`Unknown command data key: ${key}`);
    }

    if (!isFirebaseConfigured()) {

        if (!isLocalRuntime()) {
            const status =
                getFirebaseConfigStatus();

            throw new Error(
                `Firebase is not configured. Missing: ${status.missingKeys.join(", ")}. Production combatant changes cannot be saved.`
            );
        }

        commandData = {
            ...commandData,
            [key]: value
        };

        return commandData[key];
    }

    const [
        db,
        { doc, serverTimestamp, setDoc }
    ] = await Promise.all([
        getFirebaseDb(),
        import("firebase/firestore")
    ]);

    if (!db) {
        commandData = {
            ...commandData,
            [key]: value
        };

        return commandData[key];
    }

    const payload =
        Array.isArray(value)
            ? { items: value }
            : { value };

    try {

        await withTimeout(
            setDoc(
                doc(db, FIRESTORE_COLLECTION, documentId),
                {
                    ...payload,
                    updatedAt: serverTimestamp()
                },
                { merge: true }
            ),
            `Timed out saving ${documentId} to Firebase.`
        );

    }
    catch (error) {

        throw getFirestoreSaveError(error);

    }

    commandData = {
        ...commandData,
        [key]: value
    };

    return commandData[key];
}

export function getChiefs() {
    return commandData.chiefs;
}

export function getCombatants() {
    return commandData.combatants;
}

export function getRosterPeople() {
    const combatants =
        getCombatants();

    if (combatants.length > 0) {
        return combatants.map(combatant => ({
            ...combatant,
            displayName: combatant.name,
            source: "combatants"
        }));
    }

    return getChiefs().map(chief => ({
        ...chief,
        name: chief.displayName,
        source: "chiefs"
    }));
}

export function getRosterPerson(personId) {
    return getRosterPeople()
        .find(person => person.id === personId);
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

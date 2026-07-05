import { chiefs as defaultChiefs } from "../../data/chiefs.js";
import { combatants as defaultCombatants } from "../../data/combatants.js";
import { foundryAssignments as defaultFoundryAssignments } from "../../data/foundry/assignments.js";
import { foundryConfig as defaultFoundryConfig } from "../../data/foundry/config.js";
import { foundryObjectives as defaultFoundryObjectives } from "../../data/foundry/objectives.js";
import { getFirebaseDb, isFirebaseConfigured } from "../common/firebase.js";

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

export async function loadCommandData() {
    if (!isFirebaseConfigured()) {

        if (!isLocalRuntime()) {
            console.warn(
                "Firebase is not configured. Using bundled local data fallback."
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
                    await getDoc(doc(db, FIRESTORE_COLLECTION, documentId)),
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
            throw new Error(
                "Firebase is not configured. Production combatant changes cannot be saved."
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

    await setDoc(
        doc(db, FIRESTORE_COLLECTION, documentId),
        {
            ...payload,
            updatedAt: serverTimestamp()
        },
        { merge: true }
    );

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

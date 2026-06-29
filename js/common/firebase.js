const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

let firebaseApp = null;
let firestoreDb = null;

export function isFirebaseConfigured() {
    return Boolean(
        firebaseConfig.apiKey &&
        firebaseConfig.projectId &&
        firebaseConfig.appId
    );
}

export async function getFirebaseApp() {
    if (!isFirebaseConfigured()) return null;

    if (!firebaseApp) {
        const { initializeApp } = await import("firebase/app");

        firebaseApp = initializeApp(firebaseConfig);
    }

    return firebaseApp;
}

export async function getFirebaseDb() {
    if (!isFirebaseConfigured()) return null;

    if (!firestoreDb) {
        const [
            app,
            { getFirestore }
        ] = await Promise.all([
            getFirebaseApp(),
            import("firebase/firestore")
        ]);

        firestoreDb = getFirestore(app);
    }

    return firestoreDb;
}

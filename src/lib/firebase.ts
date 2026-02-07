import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Diagnostic log for production debugging
if (import.meta.env.PROD) {
    console.log("System Status: PRODUCTION_MODE");
    if (!firebaseConfig.apiKey) {
        console.error("CRITICAL ERROR: Firebase API Key is missing in production environment!");
    }
}

let app;
try {
    if (!getApps().length) {
        app = initializeApp(firebaseConfig);
        console.log("System Status: Firebase Services Ready");
    } else {
        app = getApp();
    }
} catch (error) {
    console.error("CRITICAL ERROR: Firebase Initialization Failed", error);
}

export const db = app ? getFirestore(app) : null;
export const auth = app ? getAuth(app) : null;

// Export validation helper
export const isConfigValid = () => {
    return !!(firebaseConfig.apiKey && firebaseConfig.projectId);
};



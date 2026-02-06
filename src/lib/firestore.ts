import {
    collection,
    doc,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    query,
    where
} from "firebase/firestore";
import { db } from "./firebase";

// CONSTANTS
const APP_ID = "wear_triad_e_commerce_website_v1";
const APPS_COLLECTION = "apps";

/**
 * Helper to get the reference to a specific sub-collection within this App's scope.
 * Path: apps/{APP_ID}/{collectionName}
 */
const getAppCollectionRef = (collectionName: string) => {
    return collection(db, APPS_COLLECTION, APP_ID, collectionName);
};

// --- PRODUCT SERVICES ---

export const getProducts = async () => {
    try {
        const ref = getAppCollectionRef("products");
        const snapshot = await getDocs(ref);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const getFeaturedProducts = async () => {
    try {
        const ref = getAppCollectionRef("products");
        const q = query(ref, where("featured", "==", true));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching featured:", error);
        return [];
    }
};

// --- TASK SERVICES (MANDATORY) ---

export const getTasks = async () => {
    const ref = getAppCollectionRef("tasks");
    const snapshot = await getDocs(ref);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addTask = async (task: any) => {
    const ref = getAppCollectionRef("tasks");
    return await addDoc(ref, task);
};

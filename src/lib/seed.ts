import { collection, writeBatch, doc } from "firebase/firestore";
import { db } from "./firebase";

const PRODUCTS = [
    {
        name: "Triad Oversized Hoodie",
        price: 85.00,
        category: "Outerwear",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1887&auto=format&fit=crop",
        description: "Heavyweight cotton fleece. Drop shoulder fit. Signature red embroidery.",
        featured: true
    },
    {
        name: "Vanguard Graphic Tee",
        price: 45.00,
        category: "Tees",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
        description: "Boxy fit. High-density screen print. 100% organic cotton.",
        featured: true
    },
    {
        name: "Tactical Cargo Pant",
        price: 120.00,
        category: "Bottoms",
        image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1887&auto=format&fit=crop",
        description: "Relaxed fit with adjustable cuffs. Water-resistant nylon blend.",
        featured: false
    },
    {
        name: "Structure Beanie",
        price: 35.00,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1887&auto=format&fit=crop",
        description: "Ribbed knit. Woven label patch. One size fits all.",
        featured: false
    }
];

export const seedDatabase = async () => {
    // 1. Get a Batch Reference (Atomic Operation)
    const batch = writeBatch(db);
    const appRef = collection(db, "apps", "wear_triad_e_commerce_website_v1", "products");

    // 2. Queue Operations
    PRODUCTS.forEach((product) => {
        // Create a new document reference with an auto-generated ID
        const docRef = doc(appRef);
        batch.set(docRef, product);
    });

    // 3. Commit Batch
    await batch.commit();
    return PRODUCTS.length;
};

import React, { useEffect } from 'react';
import { signInAnonymously } from "firebase/auth";
import { auth } from "./lib/firebase";

function App() {
    console.log("App: Component Rendering");

    useEffect(() => {
        console.log("App: Component Mounted");
        signInAnonymously(auth)
            .then(() => console.log("System: Anonymous Access Granted"))
            .catch((err) => console.error("System: Auth Failed", err));
    }, []);

    return (
        <div style={{ padding: '50px', background: 'white', color: 'black', minHeight: '100vh' }}>
            <h1 style={{ fontSize: '3rem' }}>APP COMPONENT IS ALIVE</h1>
            <p>If you see this, the basic React mount is working.</p>
        </div>
    );
}

export default App;


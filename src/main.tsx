console.log("DEBUG: Entry Point Executing");

import React from 'react'
import ReactDOM from 'react-dom/client'
// Temporarily disable App import to isolate bootstrap
// import App from './App.tsx'
import './index.css'

console.log("DEBUG: Imports Loaded");

const root = document.getElementById('root');
if (root) {
    try {
        ReactDOM.createRoot(root).render(
            <h1 style={{ color: 'red', fontSize: '100px', padding: '50px' }}>
                PRODUCTION DEBUG: MOUNT SUCCESS
            </h1>
        );
        console.log("DEBUG: Render Called");
    } catch (e) {
        console.error("DEBUG: Render Error", e);
        root.innerHTML = "<h1>RENDER ERROR</h1>";
    }
} else {
    console.error("DEBUG: Root Not Found");
}



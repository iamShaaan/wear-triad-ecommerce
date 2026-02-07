console.log("DEBUG: Entry Point Executing");

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("DEBUG: Imports Loaded");

const root = document.getElementById('root');
if (root) {
    try {
        ReactDOM.createRoot(root).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
        console.log("DEBUG: Render Called");
    } catch (e) {
        console.error("DEBUG: Render Error", e);
        root.innerHTML = `<div style="padding: 20px; color: red;"><h1>RENDER ERROR</h1><pre>${e}</pre></div>`;
    }
} else {
    console.error("DEBUG: Root Not Found");
}




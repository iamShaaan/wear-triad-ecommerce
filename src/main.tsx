import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("System: Starting React Mount...");

const root = document.getElementById('root');
if (!root) {
    console.error("System: Root element not found!");
} else {
    try {
        ReactDOM.createRoot(root).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
        console.log("System: Mount Success");
    } catch (error) {
        console.error("System: Mount Fatal Error", error);
        root.innerHTML = `<div style="padding: 20px; color: red;">Mount Error: ${error}</div>`;
    }
}


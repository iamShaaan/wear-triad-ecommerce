import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { isConfigValid } from './lib/firebase'
import './index.css'

// 1. Production Diagnostic Check (Runs before React mounts)
if (import.meta.env.PROD) {
    console.log("BOOTSTRAP_START: Checking System Integrity...");
    const root = document.getElementById('root');
    if (root && !isConfigValid()) {
        console.warn("BOOTSTRAP_BLOCKED: System configuration missing.");
        // We let App.tsx handle the UI for this, but we've logged it now.
    }
}

// 2. Standard React Mount
const rootElement = document.getElementById('root');
if (rootElement) {
    try {
        ReactDOM.createRoot(rootElement).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
        )
    } catch (fatalError) {
        console.error("FATAL_BOOTSTRAP_ERROR:", fatalError);
        rootElement.innerHTML = `
            <div style="background: #0f172a; color: #ef4444; padding: 2rem; min-height: 100vh; display: flex; align-items: center; justify-content: center; font-family: sans-serif; text-align: center;">
                <div>
                    <h1 style="font-size: 2rem; text-transform: uppercase; margin-bottom: 1rem;">System Crash</h1>
                    <p style="color: #94a3b8; margin-bottom: 1.5rem;">The application encountered a fatal error during startup.</p>
                    <pre style="background: #1e293b; padding: 1rem; border-radius: 0.5rem; text-align: left; overflow: auto; max-width: 80vw; color: #f1f5f9;">${fatalError}</pre>
                </div>
            </div>
        `;
    }
}

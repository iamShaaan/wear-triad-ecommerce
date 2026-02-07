console.log("DEBUG: Entry Point Executing");

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Inline App definition for ultimate isolation
function App() {
    console.log("DEBUG: Internal App Rendering");
    return (
        <div style={{ padding: '100px', background: 'white', color: 'red' }}>
            <h1>INTERNAL APP RENDER SUCCESS</h1>
            <p>If you see this, the 'import App' was the problem.</p>
        </div>
    );
}

console.log("DEBUG: Internal App Defined");

const root = document.getElementById('root');
if (root) {
    try {
        console.log("DEBUG: Calling createRoot");
        const reactRoot = ReactDOM.createRoot(root);
        console.log("DEBUG: Calling render");
        reactRoot.render(<App />);
        console.log("DEBUG: Render Call Finished");
    } catch (e) {
        console.error("DEBUG: Render Fatal Error", e);
        root.innerHTML = `<div style="color: red;"><h1>FATAL RENDER ERROR</h1><pre>${e}</pre></div>`;
    }
} else {
    console.error("DEBUG: Root Not Found");
}





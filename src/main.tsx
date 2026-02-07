import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TestApp } from './TestApp'

console.log("DEBUG: TestApp Imported");

const root = document.getElementById('root');
if (root) {
    try {
        console.log("DEBUG: Calling createRoot");
        const reactRoot = ReactDOM.createRoot(root);
        console.log("DEBUG: Calling render");
        reactRoot.render(<TestApp />);
        console.log("DEBUG: Render Call Finished");
    } catch (e) {
        console.error("DEBUG: Render Fatal Error", e);
        root.innerHTML = `<div style="color: red;"><h1>FATAL RENDER ERROR</h1><pre>${e}</pre></div>`;
    }
}






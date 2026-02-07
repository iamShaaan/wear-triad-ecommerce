import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export function TestApp() {
    console.log("TestApp: Rendering with BrowserRouter");
    return (
        <BrowserRouter>
            <div style={{ padding: '100px', backgroundColor: '#e0f0e0', color: '#333' }}>
                <h1>TEST APP SUCCESS (ROUTER ADDED)</h1>
                <p>This confirms that BrowserRouter is not the problem.</p>
            </div>
        </BrowserRouter>
    );
}


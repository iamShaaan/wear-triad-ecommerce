import React from 'react';

export function TestApp() {
    console.log("TestApp: Rendering");
    return (
        <div style={{ padding: '100px', backgroundColor: '#f0f0f0', color: '#333' }}>
            <h1>TEST APP SUCCESS</h1>
            <p>This confirms that separate module imports are working.</p>
        </div>
    );
}

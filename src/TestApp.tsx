import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

export function TestApp() {
    console.log("TestApp: Rendering with BrowserRouter and CartProvider");
    return (
        <CartProvider>
            <BrowserRouter>
                <div style={{ padding: '100px', backgroundColor: '#e0e0f0', color: '#333' }}>
                    <h1>TEST APP SUCCESS (CART ADDED)</h1>
                    <p>This confirms that CartProvider is not the problem.</p>
                </div>
            </BrowserRouter>
        </CartProvider>
    );
}



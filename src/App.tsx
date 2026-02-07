import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { signInAnonymously } from "firebase/auth";
import { auth, isConfigValid } from "./lib/firebase";
import { CartProvider } from './context/CartContext';

import { Layout } from './components/Layout';
import { AdminLayout } from './layouts/AdminLayout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { AdminTasks } from './pages/admin/AdminTasks';
import { AdminSettings } from './pages/admin/AdminSettings';

function App() {
    const isValid = isConfigValid();

    useEffect(() => {
        if (isValid && auth) {
            signInAnonymously(auth)
                .then(() => console.log("System: Anonymous Access Granted"))
                .catch((err) => console.error("System: Auth Failed", err));
        }
    }, [isValid]);

    if (!isValid) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
                <div className="bg-slate-800 border border-red-500/50 p-8 rounded-lg max-w-md w-full text-center shadow-2xl">
                    <h1 className="text-red-500 font-heading text-3xl mb-4 uppercase">Configuration Error</h1>
                    <p className="text-slate-300 font-sans mb-6">
                        The application is missing its Firebase API Key.
                        Please ensure <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">VITE_FIREBASE_API_KEY</code> is set in your Vercel Environment Variables.
                    </p>
                    <div className="text-xs text-slate-500 font-mono">
                        Error Code: 0xFIREBASE_INIT_MISSING
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    {/* PUBLIC STOREFRONT */}
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="shop" element={<Shop />} />
                    </Route>

                    {/* ADMIN */}
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<div className="font-heading text-3xl text-gray-800">Welcome, Admin.</div>} />
                        <Route path="tasks" element={<AdminTasks />} />
                        <Route path="settings" element={<AdminSettings />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;


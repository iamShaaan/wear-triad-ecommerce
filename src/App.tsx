import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { signInAnonymously } from "firebase/auth";
import { auth } from "./lib/firebase";

import { Layout } from './components/Layout';
import { AdminLayout } from './layouts/AdminLayout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { AdminTasks } from './pages/admin/AdminTasks';
import { AdminSettings } from './pages/admin/AdminSettings';

function App() {

    // SILENT BOOTSTRAP
    useEffect(() => {
        signInAnonymously(auth)
            .then(() => console.log("System: Anonymous Access Granted"))
            .catch((err) => console.error("System: Auth Failed", err));
    }, []);

    return (
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
    );
}

export default App;

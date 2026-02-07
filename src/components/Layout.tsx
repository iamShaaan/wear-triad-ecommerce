import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* 1. Navigation Bar */}
            <Navbar />

            {/* 2. Main Content Area (Dynamic) */}
            <main className="flex-grow">
                {/* The <Outlet /> is where Home or Shop will appear */}
                <Outlet />
            </main>

            {/* 3. Simple Footer */}
            <footer className="bg-brand-sidebar py-8 border-t border-gray-800 mt-auto">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 font-sans text-sm">
                    &copy; {new Date().getFullYear()} WEAR TRIAD. DEFINE YOUR REALITY.
                </div>
            </footer>
        </div>
    );
};

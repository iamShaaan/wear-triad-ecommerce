// File: src/pages/admin/AdminSettings.tsx
import React, { useState } from 'react';
import { seedDatabase } from '@/lib/seed';
import { Database, AlertTriangle, Check } from 'lucide-react';

export const AdminSettings = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [count, setCount] = useState(0);

    const handleSeed = async () => {
        if (!window.confirm("WARNING: This will inject test data into the live database. Continue?")) return;

        setStatus('loading');
        try {
            const addedCount = await seedDatabase();
            setCount(addedCount);
            setStatus('success');
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-heading text-gray-800 uppercase mb-8">System Configuration</h1>

            <div className="bg-white rounded-lg shadow-md border-t-4 border-brand-primary overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                        <Database className="text-brand-primary" size={24} />
                        <h2 className="text-xl font-bold text-gray-800">Data Management</h2>
                    </div>
                    <p className="text-gray-600 text-sm">Manage database records and initial setup.</p>
                </div>

                <div className="p-6 bg-gray-50">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-bold text-gray-800">Seed Product Inventory</h3>
                            <p className="text-sm text-gray-500 mt-1 max-w-md">
                                Injects sample products (Hoodies, Tees, Pants) into the database.
                                Use this if the Shop page is empty.
                            </p>
                        </div>

                        <button
                            onClick={handleSeed}
                            disabled={status === 'loading'}
                            className="px-6 py-2 bg-gray-800 text-white font-bold rounded hover:bg-gray-700 transition-colors disabled:opacity-50"
                        >
                            {status === 'loading' ? 'Injecting...' : 'Run Seed Script'}
                        </button>
                    </div>

                    {/* STATUS INDICATORS */}
                    {status === 'success' && (
                        <div className="mt-4 p-3 bg-green-100 text-green-800 text-sm font-bold rounded flex items-center gap-2">
                            <Check size={16} /> Success: {count} products added to inventory.
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="mt-4 p-3 bg-red-100 text-red-800 text-sm font-bold rounded flex items-center gap-2">
                            <AlertTriangle size={16} /> Error: Check console for details (likely permission issue).
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

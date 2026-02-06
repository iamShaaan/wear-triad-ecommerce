import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

export const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <AdminSidebar />
            <div className="flex-1 ml-64 p-8">
                <Outlet />
            </div>
        </div>
    );
};

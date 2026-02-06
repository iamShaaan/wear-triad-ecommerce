import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Settings, ArrowLeft } from 'lucide-react';

export const AdminSidebar = () => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
        { icon: CheckSquare, label: 'Tasks', path: '/admin/tasks' },
        { icon: Settings, label: 'Settings', path: '/admin/settings' },
    ];

    return (
        <div className="fixed left-0 top-0 h-full w-64 bg-brand-sidebar border-r border-gray-400 flex flex-col z-20">
            <div className="p-6">
                <h1 className="text-2xl font-heading text-brand-primary tracking-tighter">
                    WEAR TRIAD <span className="text-gray-800 text-sm block">ADMIN TERMINAL</span>
                </h1>
                <div className="h-px w-full bg-brand-primary/30 mt-4" />
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/admin'}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                ? "bg-brand-primary text-white shadow-md"
                                : "text-gray-800 hover:bg-white/50 hover:text-brand-primary"
                            }`
                        }
                    >
                        <item.icon size={20} />
                        <span className="font-sans font-bold uppercase text-sm tracking-wider">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-6">
                <NavLink to="/" className="flex items-center gap-2 text-gray-600 hover:text-brand-primary transition-colors text-sm font-bold font-sans">
                    <ArrowLeft size={16} /> Back to Store
                </NavLink>
            </div>
        </div>
    );
};

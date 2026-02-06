import React from 'react';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-brand-sidebar border-b-4 border-brand-primary shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    {/* LEFT: Mobile Menu & Logo */}
                    <div className="flex items-center gap-4">
                        <button className="md:hidden text-brand-primary">
                            <Menu size={28} />
                        </button>
                        <NavLink to="/" className="text-4xl font-heading text-brand-primary tracking-tighter hover:opacity-90 transition-opacity">
                            WEAR TRIAD
                        </NavLink>
                    </div>

                    {/* CENTER: Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {['Home', 'Shop', 'Collections', 'About'].map((item) => (
                            <NavLink
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `font-sans font-bold uppercase text-sm tracking-widest hover:text-brand-primary transition-colors ${isActive ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-gray-800'}`
                                }
                            >
                                {item}
                            </NavLink>
                        ))}
                    </div>

                    {/* RIGHT: Icons */}
                    <div className="flex items-center gap-6 text-gray-800">
                        <Search className="w-6 h-6 cursor-pointer hover:text-brand-primary transition-colors" />
                        <User className="w-6 h-6 cursor-pointer hover:text-brand-primary transition-colors" />
                        <div className="relative cursor-pointer group">
                            <ShoppingCart className="w-6 h-6 group-hover:text-brand-primary transition-colors" />
                            <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                0
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

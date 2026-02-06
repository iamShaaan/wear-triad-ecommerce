import React from 'react';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export const Navbar = () => {
    const { items } = useCart();

    return (
        <nav className="sticky top-0 z-50 bg-brand-sidebar border-b-4 border-brand-primary shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    <div className="flex items-center gap-4">
                        <NavLink to="/" className="text-4xl font-heading text-brand-primary tracking-tighter">WEAR TRIAD</NavLink>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <NavLink to="/" className="font-sans font-bold uppercase text-sm tracking-widest text-gray-800 hover:text-brand-primary transition-colors">Home</NavLink>
                        <NavLink to="/shop" className="font-sans font-bold uppercase text-sm tracking-widest text-gray-800 hover:text-brand-primary transition-colors">Shop</NavLink>
                        <NavLink to="#" className="font-sans font-bold uppercase text-sm tracking-widest text-gray-800 hover:text-brand-primary transition-colors">Collections</NavLink>
                        <NavLink to="#" className="font-sans font-bold uppercase text-sm tracking-widest text-gray-800 hover:text-brand-primary transition-colors">About</NavLink>
                    </div>

                    <div className="flex items-center gap-6 text-gray-800">
                        <Search className="w-6 h-6 cursor-pointer hover:text-brand-primary transition-colors" />
                        <User className="w-6 h-6 cursor-pointer hover:text-brand-primary transition-colors" />

                        <div className="relative cursor-pointer group">
                            <ShoppingCart className="w-6 h-6 group-hover:text-brand-primary transition-colors" />
                            {items.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                                    {items.length}
                                </span>
                            )}
                        </div>

                        <Menu className="md:hidden w-6 h-6 cursor-pointer hover:text-brand-primary transition-colors" />
                    </div>

                </div>
            </div>
        </nav>
    );
};

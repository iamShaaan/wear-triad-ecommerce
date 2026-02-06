import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types';

interface CartItem extends Product {
    cartId: string; // Unique ID for this instance in cart
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (cartId: string) => void;
    total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        const newItem = { ...product, cartId: Math.random().toString(36).substr(2, 9) };
        setItems((prev) => [...prev, newItem]);

        // Simple Feedback
        alert(`${product.name} added to cart!`);
        // In a Pro app, we would use a Toast notification here.
    };

    const removeFromCart = (cartId: string) => {
        setItems((prev) => prev.filter((item) => item.cartId !== cartId));
    };

    const total = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};

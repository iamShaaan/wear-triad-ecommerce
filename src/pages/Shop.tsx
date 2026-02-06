import React, { useEffect, useState } from 'react';
import { getProducts } from '@/lib/firestore';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

export const Shop = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        const loadData = async () => {
            const data = await getProducts() as Product[];
            setProducts(data);
            setLoading(false);
        };
        loadData();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex items-center justify-between mb-12">
                <h1 className="text-5xl font-heading text-gray-900 uppercase">Catalog</h1>
                <span className="text-gray-500 font-sans">{products.length} Items</span>
            </div>

            {loading ? (
                <div className="text-center py-20 font-heading text-xl animate-pulse text-gray-400">
                    Loading Inventory...
                </div>
            ) : products.length === 0 ? (
                <div className="text-center py-20 bg-gray-100 rounded-lg">
                    <p className="font-heading text-2xl text-gray-400 mb-2">Inventory Empty</p>
                    <p className="font-sans text-gray-500">No products found in database.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="bg-gray-200 aspect-square mb-4 relative overflow-hidden">
                                <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />

                                {/* ADD TO CART BUTTON OVERLAY */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(product);
                                        }}
                                        className="w-full bg-brand-primary text-white font-heading py-3 uppercase tracking-wider hover:bg-red-800 transition-colors shadow-lg"
                                    >
                                        Add to Cart
                                    </button>
                                </div>

                                <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs font-bold font-sans uppercase tracking-widest">
                                    {product.category}
                                </div>
                            </div>
                            <h3 className="text-2xl font-heading text-gray-900 group-hover:text-brand-primary transition-colors">{product.name}</h3>
                            <p className="text-gray-600 font-sans mt-1">${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

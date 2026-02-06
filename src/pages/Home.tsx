import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
    return (
        <div className="w-full">

            {/* HERO SECTION */}
            <div className="relative bg-zinc-900 h-[600px] flex items-center justify-center overflow-hidden">
                {/* Placeholder for Hero Image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-7xl md:text-9xl font-heading text-white mb-2 tracking-tighter uppercase">
                        Defy <span className="text-brand-primary">Norms</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-sans mb-8 tracking-wide">
                        The New Collection / Spring 2024
                    </p>
                    <button className="bg-brand-primary text-white font-heading text-xl px-10 py-4 uppercase tracking-widest hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto">
                        Shop Now <ArrowRight />
                    </button>
                </div>
            </div>

            {/* FEATURED CATEGORIES */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Outerwear', 'Tees', 'Accessories'].map((cat) => (
                        <div key={cat} className="group relative h-96 bg-gray-200 overflow-hidden cursor-pointer border-2 border-transparent hover:border-brand-primary transition-all">
                            <div className="absolute inset-0 bg-gray-400 flex items-center justify-center">
                                <span className="text-gray-500 font-sans text-sm">Image Placeholder</span>
                            </div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-4xl font-heading text-white uppercase italic">{cat}</h3>
                                <span className="text-white font-sans text-sm border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity">View Collection</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* LATEST DROP */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-5xl font-heading text-gray-900 uppercase">Latest Drop</h2>
                        <a href="/shop" className="text-brand-primary font-bold font-sans hover:underline">View All</a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="group">
                                <div className="bg-gray-100 aspect-[3/4] mb-4 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">Product IMG</div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <button className="w-full bg-brand-primary text-white font-heading py-3 uppercase tracking-wider">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <h3 className="text-xl font-heading text-gray-900">Triad Oversized Hoodie</h3>
                                <p className="text-gray-500 font-sans">$85.00</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

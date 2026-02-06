import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-brand-sidebar border-t border-gray-400 pt-16 pb-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-3xl font-heading text-brand-primary mb-4">WEAR TRIAD</h2>
                    <p className="text-gray-800 max-w-sm font-sans">
                        Redefining streetwear with bold aesthetics and premium quality.
                        Built for the modern vanguard.
                    </p>
                </div>
                <div>
                    <h4 className="font-heading text-lg mb-4 text-gray-900">Shop</h4>
                    <ul className="space-y-2 text-gray-700 font-sans text-sm">
                        <li>New Arrivals</li>
                        <li>Best Sellers</li>
                        <li>Accessories</li>
                        <li>Sale</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-heading text-lg mb-4 text-gray-900">Legal</h4>
                    <ul className="space-y-2 text-gray-700 font-sans text-sm">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Returns</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="text-center border-t border-gray-400/30 pt-8">
                <p className="text-gray-600 text-xs font-sans">© 2024 WEAR TRIAD. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

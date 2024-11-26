"use client"
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
            <div className="flex justify-between items-center font-parkinsans px-4 md:px-20 py-4 md:py-8">
                {/* Logo */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-color">
                        Agro<span className="text-color3">Mart</span>
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center w-full md:w-auto justify-between md:space-x-16">
                    <ul className="flex items-center space-x-8">
                        <li className="hover:text-color3 cursor-pointer">How it works</li>
                        <li className="hover:text-color3 cursor-pointer">Blog</li>
                        <li className="hover:text-color3 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center space-x-8">
                    <button className="font-bold text-xl hover:text-color3">Login</button>
                    <button className="py-2 px-8 bg-color3 rounded-lg text-white hover:bg-opacity-90">Sign Up</button>
                </div>

                {/* Hamburger Menu Button */}
                <button className="md:hidden" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
                    <ul className="space-y-4">
                        <li className="hover:text-color3 cursor-pointer">How it works</li>
                        <li className="hover:text-color3 cursor-pointer">Blog</li>
                        <li className="hover:text-color3 cursor-pointer">Contact</li>
                    </ul>
                    <div className="mt-4 space-y-4">
                        <button className="block w-full text-left font-bold hover:text-color3">Login</button>
                        <button className="block w-full py-2 px-8 bg-color3 rounded-lg text-white hover:bg-opacity-90">Sign Up</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm"
        >
            <div className="flex justify-between items-center font-parkinsans px-4 md:px-20 py-4 md:py-8">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="text-2xl md:text-3xl font-bold text-color">
                        Agro<span className="text-color3">Mart</span>
                    </h1>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center w-full md:w-auto justify-between md:space-x-16">
                    <ul className="flex items-center space-x-8">
                        {['How it works', 'Blog', 'Contact'].map((item, index) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="hover:text-color3 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center space-x-8">
                    <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="font-bold text-xl hover:text-color3"
                    >
                        Login
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="py-2 px-8 bg-color3 rounded-lg text-white hover:bg-opacity-90"
                    >
                        Sign Up
                    </motion.button>
                </div>

                {/* Hamburger Menu Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:hidden"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg overflow-hidden"
                    >
                        <ul className="space-y-4">
                            {['How it works', 'Blog', 'Contact'].map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="hover:text-color3 cursor-pointer"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                        <div className="mt-4 space-y-4">
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                className="block w-full text-left font-bold hover:text-color3"
                            >
                                Login
                            </motion.button>
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                className="block w-full py-2 px-8 bg-color3 rounded-lg text-white hover:bg-opacity-90"
                            >
                                Sign Up
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
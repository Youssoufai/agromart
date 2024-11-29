"use client"
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="container mx-auto min-h-screen px-4 md:px-8 lg:px-12 pt-24 md:pt-32 flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                >
                    Supporting <motion.span
                        initial={{ color: "#000" }}
                        animate={{ color: "var(--color3)" }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-color3"
                    >
                        Farmers,
                    </motion.span>,
                    Supplying Businesses{' '},
                    <span className="hidden md:inline">
                        <br />
                    </span>
                    - All in <motion.span
                        initial={{ color: "#000" }}
                        animate={{ color: "var(--color3)" }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-color3"
                    >
                        One Place
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed"
                >
                    At AgroMart, An AgriTech Marketplace, we are dedicated to bridging the gap between farms, businesses, and individuals
                    making it easier for everyone to access quality and affordable agricultural products.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="py-2 px-6 md:px-8 bg-color3 rounded-lg text-white hover:bg-opacity-90 transition-all"
                >
                    Get Started
                </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="w-full md:w-1/2 mt-8 md:mt-0"
            >
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    src="hero.webp"
                    className="rounded-lg shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                    alt="Farmers working in field"
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                    }}
                />
            </motion.div>
        </section>
    )
}

export default Hero;
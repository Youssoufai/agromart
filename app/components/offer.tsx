"use client"
import { motion } from "framer-motion";
import { FaHandshake, FaWarehouse } from "react-icons/fa";

const Offer = () => {
    const offers = [
        {
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3m0 0l-4 4m4-4l4 4" />
                </svg>
            ),
            title: "Efficient Logistics",
            description: "Seamless transportation ensuring timely and cost-effective delivery."
        },
        {
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20v-6m0-6v-4m0 4l-6 6m6-6l6 6" />
                </svg>
            ),
            title: "Market Access",
            description: "Connect farmers to larger markets for better pricing opportunities."
        },
        {
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3m0 0l-4 4m4-4l4 4" />
                </svg>
            ),
            title: "Reliable Supplies",
            description: "Ensure high-quality raw materials sourced directly from trusted farmers."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: {
                duration: 0.3
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-green-100 to-green-200">
            <div className="container mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 text-center mb-6 md:mb-8"
                >
                    What We Offer
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto"
                >
                    {offers.map((offer, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-green-50 border border-green-300 rounded-xl shadow-lg p-4 md:p-6 text-center"
                        >
                            <motion.div
                                variants={iconVariants}
                                className="text-green-600 mb-3 md:mb-4"
                            >
                                {offer.icon}
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="text-lg md:text-xl font-semibold text-green-700 mb-2"
                            >
                                {offer.title}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="text-green-600 text-sm md:text-base"
                            >
                                {offer.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Offer;
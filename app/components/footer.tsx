"use client"
import { motion } from "framer-motion";
import { AiFillTikTok } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const navLinks = ["How it Works", "Blog", "Contact"];
    const socialIcons = [
        { Icon: BsInstagram, href: "#" },
        { Icon: FaXTwitter, href: "#" },
        { Icon: AiFillTikTok, href: "#" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-[#F2F5FA] w-full p-4 md:p-7"
        >
            {/* Newsletter Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col min-h-[70vh] md:min-h-[60vh] items-center justify-center max-w-4xl mx-auto space-y-6 md:space-y-8"
            >
                <motion.div
                    variants={itemVariants}
                    className="text-center px-4"
                >
                    <motion.h1
                        className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4"
                    >
                        Subscribe To Our{" "}
                        <motion.span
                            initial={{ color: "#000" }}
                            animate={{ color: "var(--color3)" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-color3"
                        >
                            Newsletter
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 max-w-2xl"
                    >
                        Stay connected with the latest updates, exclusive offers, and valuable insights! Subscribe to our newsletter and be the first to know about new features, market trends, and opportunities that can benefit you. Join our community and never miss out on what's happening in the world of agriculture and innovation.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-2xl px-4"
                >
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="w-full sm:flex-1"
                    >
                        <section className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-4 py-3 border placeholder:text-gray-400 rounded-lg text-color focus:outline-color3 focus:ring-2 focus:ring-color3"
                            />
                        </section>
                    </motion.div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto bg-color3 px-8 py-3 rounded-lg text-white flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all"
                    >
                        Subscribe
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <FaArrowRight className="text-sm" />
                        </motion.span>
                    </motion.button>
                </motion.div>
            </motion.section>
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-12 md:mt-20 border-t border-gray-200 py-6 md:py-8"
            >
                <div className="max-w-4xl mx-auto px-4 flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between items-center">
                    <motion.div
                        variants={itemVariants}
                        className="text-gray-600 text-sm order-3 md:order-1"
                    >
                        © 2024 All Rights Reserved.
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="order-1 md:order-2"
                    >
                        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-600">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link}
                                    whileHover={{ scale: 1.1, color: "var(--color3)" }}
                                    className="cursor-pointer transition-colors"
                                >
                                    {link}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-4 text-gray-600 order-2 md:order-3"
                    >
                        {socialIcons.map(({ Icon }, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    scale: 1.2,
                                    color: "var(--color3)",
                                    rotate: [0, -10, 10, -10, 0]
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <Icon className="w-5 h-5 cursor-pointer" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </motion.section>
    )
}

export default Footer;
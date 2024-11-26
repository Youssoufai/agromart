"use client"
import { motion } from "framer-motion";

const About = () => {
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <section className="min-h-screen bg-about-bg w-full px-4 md:px-12 lg:px-20 py-8 md:py-12">
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center w-full h-full gap-12 md:gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full md:w-1/2 space-y-4 md:space-y-8"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-semibold text-center md:text-left"
                    >
                        About Agro<motion.span
                            initial={{ color: "#000" }}
                            whileInView={{ color: "var(--color3)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-color3"
                        >Mart</motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-sm md:text-base lg:text-lg text-center md:text-left leading-relaxed"
                    >
                        Our mission at the AgroMart is to revolutionize agriculture in Nigeria and across Africa by empowering farmers, making food more affordable and healthier, and connecting businesses with reliable sources of raw materials. By leveraging technology, we aim to boost agricultural productivity, reduce food waste, and create sustainable supply chains. This will not only enhance the livelihoods of farmers but also support economic growth, ensure food security, and contribute to a healthier, more prosperous continent.
                    </motion.p>
                </motion.div>

                <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
                    {/* Top image */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="absolute top-0 left-0 md:left-1/4"
                    >
                        <motion.img
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            src="ai-gen1.webp"
                            className="rounded-full object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                            alt="Agricultural Innovation"
                        />
                    </motion.div>

                    {/* Middle image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="absolute top-1/3 right-0"
                    >
                        <motion.img
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            src="company.webp"
                            className="rounded-full object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                            alt="Company"
                        />
                    </motion.div>

                    {/* Bottom image */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="absolute bottom-0 left-0 md:left-1/4"
                    >
                        <motion.img
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            src="about.webp"
                            className="rounded-full object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                            alt="About Us"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About;
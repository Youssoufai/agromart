"use client"
import { motion } from "framer-motion";
import { BiWorld } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHandshake, FaWarehouse } from "react-icons/fa";
import { GiFoodChain, GiFoodTruck } from "react-icons/gi";

const Features = () => {
    const features = [
        {
            icon: <CiDeliveryTruck className="text-6xl md:text-7xl lg:text-8xl text-color3" />,
            title: "Efficient Logistics",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum. Numquam dolorem magni, in enim iusto nam dignissimos officiis corrupti doloribus, iste nostrum harum a cupiditate consequuntur eos atque? Iure?"
        },
        {
            icon: <img
                src="basket.jpeg"
                className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] lg:w-[96px] lg:h-[96px] object-cover"
                alt="Affordable Food"
            />,
            title: "Affordable Healthier Food",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum. Numquam dolorem magni, in enim iusto nam dignissimos officiis corrupti doloribus, iste nostrum harum a cupiditate consequuntur eos atque? Iure?"
        },
        {
            icon: <img
                src="supply-chain.png"
                className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] lg:w-[96px] lg:h-[96px] object-cover"
                alt="Supply Chain"
            />,
            title: "Reliable Supply",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum. Numquam dolorem magni, in enim iusto nam dignissimos officiis corrupti doloribus, iste nostrum harum a cupiditate consequuntur eos atque? Iure?"
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -10,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <section className="px-4 md:px-12 lg:px-20 py-8 md:py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4 px-4 md:px-20 lg:px-36 text-center"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-bold text-2xl md:text-3xl"
                >
                    Why Trade <motion.span
                        initial={{ color: "#000" }}
                        whileInView={{ color: "var(--color3)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-color3"
                    >With</motion.span> Us.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-sm md:text-base lg:text-lg text-gray-600"
                >
                    Discover how our platform benefits farmers, businesses, and consumers by creating a more efficient and sustainable agricultural ecosystem
                </motion.p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover="hover"
                        className="text-center flex flex-col items-center space-y-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow"
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            {feature.icon}
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="text-xl md:text-2xl lg:text-3xl font-bold"
                        >
                            {feature.title}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className="text-sm md:text-base text-gray-600 max-w-md"
                        >
                            {feature.description}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Features;
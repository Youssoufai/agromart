"use client";
import { motion } from "framer-motion";
import { BsBuilding } from "react-icons/bs";
import { FaArrowRight, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { useState } from "react";
import { createList } from "@/actions";

const Value = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.currentTarget as HTMLFormElement;
        const nameInput = form.elements.namedItem('name') as HTMLInputElement | null;
        const emailInput = form.elements.namedItem('email') as HTMLInputElement | null;
        const phoneInput = form.elements.namedItem('phone') as HTMLInputElement | null;
        const categoryInput = form.elements.namedItem('category') as HTMLSelectElement | null;

        if (!nameInput || !emailInput || !phoneInput || !categoryInput) {
            console.error("One or more form fields are missing.");
            setIsSubmitting(false);
            return;
        }

        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            category: categoryInput.value,
        };


        try {
            await createList(formData);
            setSuccess(true);
            setMessage("Successfully joined the waitlist!");
        } catch (error) {
            console.error("Error joining the waitlist:", error);
            setSuccess(false);
            setMessage("Failed to join the waitlist. Please try again.");
        } finally {
            setIsSubmitting(false);
        }


        setTimeout(() => {
            setMessage("");
            setSuccess(false);
        }, 3000);
    }

    const formFields = [
        {
            icon: <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color3" />,
            type: "text",
            placeholder: "Enter your name",
            inputType: "input",
            name: 'name'
        },
        {
            icon: <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color3" />,
            type: "email",
            placeholder: "Enter your email",
            inputType: "input",
            name: 'email'
        },
        {
            icon: <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color3" />,
            type: "tel",
            placeholder: "Enter your phone number",
            inputType: "input",
            name: 'phone'
        },
        {
            icon: <BsBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color3" />,
            type: "select",
            placeholder: "Select your category",
            inputType: "select",
            name: 'category',
            options: [
                { value: "farmer", label: "Farmer" },
                { value: "consumer", label: "Consumer/Family" },
                { value: "company", label: "Company" }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen p-4 md:p-7 flex items-center justify-center"
        >
            <div className="w-full max-w-[500px] mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center space-y-3 mb-8"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-2xl md:text-4xl font-bold"
                    >
                        Join the <motion.span
                            initial={{ color: "#000" }}
                            animate={{ color: "var(--color3)" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-color3"
                        >Waitlist</motion.span>
                    </motion.h1>

                    <motion.h2
                        variants={itemVariants}
                        className="text-lg md:text-xl"
                    >
                        Be Part Of The Revolution
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg text-gray-600 px-4"
                    >
                        Join our waitlist to get exclusive early access and updates about the Agro
                        <motion.span
                            initial={{ color: "#000" }}
                            animate={{ color: "var(--color3)" }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-color3"
                        >Mart</motion.span> Marketplace.
                    </motion.p>
                </motion.div>

                <form onSubmit={handleSubmit}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center flex-col space-y-6 md:space-y-8 px-4"
                    >
                        {formFields.map((field) => (
                            <motion.section
                                key={field.placeholder}
                                variants={itemVariants}
                                className="relative w-full"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {field.icon}
                                {field.inputType === "input" ? (
                                    <motion.input
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        className="w-full pl-10 pr-4 py-2 md:py-3 placeholder:text-color border rounded-lg text-color focus:outline-color3 focus:ring-2 focus:ring-color3"
                                        whileFocus={{ scale: 1.02 }}
                                        disabled={isSubmitting}
                                    />
                                ) : (
                                    <motion.select
                                        name={field.name}
                                        defaultValue=""
                                        className="w-full pl-10 pr-4 py-2 md:py-3 border rounded-lg text-color placeholder:text-color focus:outline-color3 focus:ring-2 focus:ring-color3 bg-white"
                                        whileFocus={{ scale: 1.02 }}
                                        disabled={isSubmitting}
                                    >
                                        <option value="" disabled>{field.placeholder}</option>
                                        {field.options?.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </motion.select>
                                )}
                            </motion.section>
                        ))}

                        <motion.div
                            variants={itemVariants}
                            className="w-full"
                        >
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-color3 py-2 md:py-3 rounded-md text-white flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Joining..." : "Join Our Waitlist"}
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    <FaArrowRight />
                                </motion.span>
                            </motion.button>
                        </motion.div>


                        {message && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                                className={`mt-4 text-center ${success ? 'text-green-500' : 'text-red-500'}`}
                            >
                                {message}
                            </motion.div>
                        )}
                    </motion.div>
                </form>
            </div>
        </motion.section>
    )
}

export default Value;
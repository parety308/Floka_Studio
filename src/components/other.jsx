import React from "react";
import { motion } from "framer-motion";

const feedbacks = [
    {
        name: "Nicolas K. Ellington",
        role: "IT Specialist",
        text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    },
    {
        name: "Julian T. Beaumont",
        role: "IT Specialist",
        text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    },
    {
        name: "Felipe D. Hawthorne",
        role: "IT Specialist",
        text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    },
];

const cardVariants = {
    rest: {
        backgroundColor: "#f5f5f5",
        color: "#000",
        y: 0,
    },
    hover: {
        backgroundColor: "#000",
        color: "#fff",
        y: -6,
    },
};

const UserFeedBack = () => {
    return (
        <section className="py-20 px-6 bg-[#f5f5f5]">
            <div className="max-w-7xl mx-auto">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {feedbacks.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            className="cursor-pointer flex flex-col gap-3"
                        >

                            {/* 🔹 TOP CARD */}
                            <motion.div
                                variants={cardVariants}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="rounded-2xl p-6"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4 text-orange-500">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="leading-relaxed mb-10">
                                    “ {item.text} ”
                                </p>

                                {/* Footer text */}
                                <motion.p
                                    variants={{
                                        rest: { color: "#555" },
                                        hover: { color: "#aaa" },
                                    }}
                                    className="text-sm uppercase"
                                >
                                    “ GREAT DESIGN SOLUTIONS ”
                                </motion.p>
                            </motion.div>

                            {/* 🔹 BOTTOM CARD */}
                            <motion.div
                                variants={cardVariants}
                                transition={{ duration: 0.4, delay: 0.05 }}
                                className="rounded-2xl p-5"
                            >
                                <p className="font-semibold text-lg">{item.name}</p>

                                <motion.p
                                    variants={{
                                        rest: { color: "#555" },
                                        hover: { color: "#ccc" },
                                    }}
                                    className="text-sm"
                                >
                                    {item.role}
                                </motion.p>
                            </motion.div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default UserFeedBack;
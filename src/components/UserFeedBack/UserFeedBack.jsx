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

const topReveal = {
    rest: {
        clipPath: "inset(0% 0% 100% 0%)", // hidden from TOP
    },
    hover: {
        clipPath: "inset(0% 0% 0% 0%)", // reveal DOWN
    },
};

const bottomReveal = {
    rest: {
        clipPath: "inset(100% 0% 0% 0%)", // hidden from BOTTOM
    },
    hover: {
        clipPath: "inset(0% 0% 0% 0%)", // reveal UP
    },
};

const UserFeedBack = () => {
    return (
        <section className="  max-w-6xl mx-auto rounded-xl">
            <div>


                {/* Top label */}
                <p className="text-xs tracking-widest text-gray-500 mb-6">
                    USER FEEDBACK
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gray-300 mb-10"></div>

                {/* Right aligned content */}
                <div className="max-w-3xl ml-auto text-right overflow-hidden mb-10">

                    <motion.h1
                        initial={{ x: 200, opacity: 0 }}   // start outside right
                        whileInView={{ x: 0, opacity: 1 }} // move into position
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight"
                    >
                        Strategy to build powerful <br />
                        digital solutions.
                    </motion.h1>

                </div>
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
                            <div className="relative rounded-2xl overflow-hidden">

                                {/* Base */}
                                <div className="bg-[#f5f5f5] p-6 rounded-2xl">
                                    <div className="flex gap-1 mb-4 text-orange-500">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>

                                    <p className="leading-relaxed mb-10">
                                        “ {item.text} ”
                                    </p>

                                    <p className="text-sm text-gray-500 uppercase">
                                        “ GREAT DESIGN SOLUTIONS ”
                                    </p>
                                </div>

                                {/* Hover Reveal (TOP → DOWN) */}
                                <motion.div
                                    variants={topReveal}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-black text-white p-6 rounded-2xl"
                                >
                                    <div className="flex gap-1 mb-4 text-orange-500">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>

                                    <p className="leading-relaxed mb-10">
                                        “ {item.text} ”
                                    </p>

                                    <p className="text-sm text-gray-400 uppercase">
                                        “ GREAT DESIGN SOLUTIONS ”
                                    </p>
                                </motion.div>
                            </div>

                            {/* 🔹 BOTTOM CARD */}
                            <div className="relative rounded-2xl overflow-hidden">

                                {/* Base */}
                                <div className="bg-[#f5f5f5] p-5 rounded-2xl ">
                                    <p className="font-semibold text-lg">{item.name}</p>
                                    <p className="text-sm text-gray-500">{item.role}</p>
                                </div>

                                {/* Hover Reveal */}
                                <motion.div
                                    variants={bottomReveal}
                                    transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-black text-white p-5 rounded-2xl"
                                >
                                    <p className="font-semibold text-lg">{item.name}</p>
                                    <p className="text-sm text-gray-300">{item.role}</p>
                                </motion.div>
                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
            
        </section>
    );
};

export default UserFeedBack;
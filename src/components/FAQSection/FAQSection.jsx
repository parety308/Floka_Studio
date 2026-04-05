import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "What is artificial intelligence (AI)?",
        answer:
            "AI refers to systems that can perform tasks that normally require human intelligence.",
    },
    {
        question: "How does AI improve business efficiency?",
        answer:
            "AI automates processes, reduces errors, and improves decision-making using data.",
    },
    {
        question: "How long does AI implementation take?",
        answer:
            "It depends on complexity, but typically ranges from weeks to months.",
    },
    {
        question: "What industries can benefit from AI?",
        answer:
            "Healthcare, finance, retail, manufacturing, and many more.",
    },
    {
        question: "What are the costs of AI solutions?",
        answer:
            "Costs vary based on scope, tools, and customization requirements.",
    },
];

const FAQSection = () => {
    const [active, setActive] = useState(null);

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="w-full py-20 ">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="mb-12">
                    <p className="text-sm uppercase text-gray-500 mb-3">
                        FAQ & Get Answer
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Have more questions?
                        <br />
                        We’ve answers.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">

                    {/* Left Side */}
                    <div>
                        <p className="text-gray-500 mb-6">
                            Don’t found anything yet. Feel free to ask anything.{" "}
                            <span className="underline cursor-pointer">Let’s Talk</span>
                        </p>

                        <div className="overflow-hidden rounded-2xl group cursor-pointer">

                            <motion.img
                                src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img15-800x800.jpg"
                                alt="faq"
                                className="w-full h-[350px] object-cover"

                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />

                            {/* overlay effect */}
                            <motion.div
                                className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100"
                                transition={{ duration: 0.4 }}
                            />
                        </div>
                    </div>

                    {/* Right Side Accordion */}
                    <div className="space-y-4">
                        {faqs.map((item, index) => (
                            <div
                                key={index}
                                className=" rounded-xl overflow-hidden"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full bg-gray-100 flex justify-between items-center px-6 py-5 text-left"
                                >
                                    <span className="font-medium text-lg ">
                                        {item.question}
                                    </span>

                                    <span className="text-2xl">
                                        {active === index ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Answer with animation */}
                                <AnimatePresence>
                                    {active === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="px-6 pb-5 text-gray-600 "
                                        >
                                            {item.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
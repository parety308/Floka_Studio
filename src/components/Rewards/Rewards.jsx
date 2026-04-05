import { motion } from "framer-motion";

const Rewards = () => {
    const awards = [
        { title: "BEST DESIGNER AWARDS", company: "AWWWARDS", year: "2025" },
        { title: "PEAKY UI DESIGNER", company: "GOOGLE", year: "2024" },
        { title: "GREAT IN UX", company: "APPLE", year: "2023" },
        { title: "BEST WEBSITE PICK", company: "MICROSOFT", year: "2022" },
        { title: "NELSON UI & UX DESIGNER", company: "SAMSUNG", year: "2021" },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-16">

            <div className="grid md:grid-cols-2 gap-10 items-start">

                {/* 🔹 Left Image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-3"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden rounded-2xl"
                    >
                        <img
                            src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img6-500x600.webp"
                            alt=""
                            className="w-full h-[300px] object-cover"
                        />
                    </motion.div>

                    <p className="text-xs text-gray-500 tracking-widest mt-5">
                        GET REWARDS
                    </p>
                </motion.div>

                {/* 🔹 Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Heading */}
                    <h2 className="text-2xl md:text-4xl font-semibold leading-snug mb-10">
                        Driven by passion and grounded in expertise, our team turns bold ideas into reality, leading the way in creative innovation.
                    </h2>

                    {/* Table */}

                    <div className="space-y-2">
                        {awards.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="
        grid grid-cols-3 items-center
        border-t border-gray-200
        px-2 py-3 text-sm
        transition-all duration-300

        hover:bg-gray-100 hover:px-4 hover:py-4
      "
                            >
                                {/* Title */}
                                <span className="font-medium">
                                    {item.title}
                                </span>

                                {/* Company */}
                                <span className="text-gray-400 text-center">
                                    {item.company}
                                </span>

                                {/* Year */}
                                <span className="text-gray-400 text-right">
                                    {item.year}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default Rewards;
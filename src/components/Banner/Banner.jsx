import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden rounded-xl">

            {/* 🎥 Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4" type="video/mp4" />
            </video>

            {/* 🌑 Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* ✨ Center Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl text-white"
                >
                    {/* You can add heading here later */}
                </motion.div>
            </div>

            {/* 🧾 Bottom Left Text */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="absolute bottom-40 left-20 z-10 text-white"
            >
                {/* Floka */}
                <h1 className="text-[80px] md:text-[160px] font-semibold leading-none">
                    Floka
                </h1>

                {/* Studio (positioned relative to Floka) */}
                <span className="absolute right-0 top-35 text-[30px] md:text-[80px] text-white/60">
                    Studio
                </span>
            </motion.div>

        </section>
    );
};

export default Banner;
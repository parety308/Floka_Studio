import React from 'react';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const ExperienceSlider = () => {
  return (
    <div className="overflow-hidden w-full my-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <span className="mx-8 text-7xl font-semibold text-gray-400">
          See how our team combines creativity, technology, and strategy
        </span>
        <span className="mx-8 text-7xl font-semibold text-gray-400">
         See how our team combines creativity, technology, and strategy
        </span>
         <span className="mx-8 text-7xl font-semibold text-gray-400">
         See how our team combines creativity, technology, and strategy
        </span>
      </motion.div>
    </div>
  );
};

export default ExperienceSlider;
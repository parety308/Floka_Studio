import React from "react";
import { motion } from "framer-motion";

const experties = [
  {
    name: "John",
    text: "Best design communicator",
    img: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Alex",
    text: "10/10 well recommended",
    img: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Sara",
    text: "Super speedy website designer",
    img: "https://i.pravatar.cc/40?img=3",
  },
  {
    name: "David",
    text: "Great in UI/UX",
    img: "https://i.pravatar.cc/40?img=4",
  },
  // 🔥 Added 3 more
  {
    name: "Emma",
    text: "Outstanding creative solutions",
    img: "https://i.pravatar.cc/40?img=5",
  },
  {
    name: "Liam",
    text: "Highly professional and reliable",
    img: "https://i.pravatar.cc/40?img=6",
  },
  {
    name: "Noah",
    text: "Exceptional attention to detail",
    img: "https://i.pravatar.cc/40?img=7",
  },
];

const ExpertiesSlider = () => {
  return (
    <div className="overflow-hidden w-full bg-black py-6 mt-10 rounded-lg">
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Duplicate for seamless loop */}
        {[...experties, ...experties].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 mx-10 text-white"
          >
            {/* Avatar */}
            <img
              src={item.img}
              alt={item.name}
              className="w-10 h-10 rounded-full object-cover"
            />

            {/* Text */}
            <p className="text-lg md:text-xl font-medium whitespace-nowrap">
              “ {item.text} ”
            </p>
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default ExpertiesSlider;
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Experties from "../Experties/Experties";
import Fanfacts from "../Fanfacts/Fanfacts";

const MotionSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  //   Second section animation
  const y = useTransform(scrollYProgress, [0.3, 0.7], ["100%", "0%"]);

  return (
    <div ref={ref} className="relative h-[200vh]">

      {/* 🔹 First Section (NORMAL SCROLL — WILL GO UP & DISAPPEAR) */}
      <div className="h-screen bg-black text-white">
        <Experties />
      </div>

      {/* 🔹 Second Section (STICKY + COMES FROM BOTTOM) */}
      <motion.div
        style={{ y }}
        className="sticky top-0 h-screen bg-white z-20"
      >
        <Fanfacts />
      </motion.div>

    </div>
  );
};

export default MotionSection;
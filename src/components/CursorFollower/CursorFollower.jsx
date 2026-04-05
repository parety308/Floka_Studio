import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const Cursor = () => {
  // 🔵 Outer ring (smooth follow)
  const ringX = useSpring(0, { damping: 25, stiffness: 300 });
  const ringY = useSpring(0, { damping: 25, stiffness: 300 });

  // ⚫ Inner dot (exact mouse position, no delay)
  const dotX = useSpring(0, { damping: 100, stiffness: 1000 });
  const dotY = useSpring(0, { damping: 100, stiffness: 1000 });

  useEffect(() => {
    const move = (e) => {
      // ring (slightly offset for center)
      ringX.set(e.clientX - 20);
      ringY.set(e.clientY - 20);

      // dot (perfect center)
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* 🔵 Outer Ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="fixed top-0 left-0 w-10 h-10 border border-black rounded-full pointer-events-none z-[9999]"
      />

      {/* ⚫ Center Dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-black rounded-full pointer-events-none z-[9999]"
      />
    </>
  );
};

export default Cursor;
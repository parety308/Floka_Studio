import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const ScrollLine = () => {
  const ref = useRef(null);

  // track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // map scroll to horizontal movement
  const xRange = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  // smooth movement
  const x = useSpring(xRange, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section ref={ref} className="w-full py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="overflow-hidden">
          <motion.img
            src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-lines-scaled.png" // your image
            alt="line"
            style={{ x }}
            className="w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ScrollLine;
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";


const PortfolioCard = ({ img }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const smoothX = useSpring(x, { stiffness: 100, damping: 15 });
    const smoothY = useSpring(y, { stiffness: 100, damping: 15 });

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const posX = e.clientX - rect.left;
        const posY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        x.set((posX - centerX) / 12);
        y.set((posY - centerY) / 12);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div >

            {/*  IMAGE CONTAINER  */}
            <div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={reset}
                className="relative overflow-hidden  group  cursor-pointer rounded-t-xl"
            >
                <motion.img
                    src={img}
                    alt="project"
                    style={{
                        x: smoothX,
                        y: smoothY,
                    }}
                    className="w-full h-[350px] hover:scale-125  "
                />

                {/* Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2 text-white bg-black/40 px-2 py-1 ">
                    <div><img className="w-4 h-4 text-white object-cover" src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon6.svg" alt="" /></div>
                    <span className="text-sm font-semibold">Logoipsum</span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 bg-black/40 px-2 py-1 rounded-md text-white">
                    <MdOutlineArrowOutward className="text-sm" />
                </div>
            </div>

            {/* Bottom text */}
            <div className="flex justify-between text-xs text-gray-500 px-4 py-3 bg-base-300 rounded-b-xl">
                <span>ALDAN BRANDING</span>
                <span>2023</span>
            </div>
        </div>
    );
};

export default PortfolioCard;
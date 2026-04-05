import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};
const Portfolio = () => {
    return (
        <section className="  max-w-6xl mx-auto rounded-xl">

            {/* Top label */}
            <p className="text-xs tracking-widest text-gray-500 mb-6">
                PORTFOLIO
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gray-300 mb-10"></div>

            {/* Right aligned content */}
            <div className="max-w-3xl ml-auto text-right overflow-hidden">

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
            {/* Portfolio Grid */}
            <motion.div
                className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={container}
                
            >
                <motion.div variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-100px" }}
                duration={0.8}
                >
                    <PortfolioCard img="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img5-655x450.webp" />
                </motion.div>

                <motion.div variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-100px" }}
                duration={0.8}
                >
                    <PortfolioCard img="https://floka.casethemes.net/wp-content/uploads/2025/05/home3-accordion1-655x450.jpg" />
                </motion.div>

                <motion.div variants={item} className="col-span-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-100px" }}
                duration={0.8}
                >
                    <PortfolioCard img="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3-1320x600.webp" />
                </motion.div>

                <motion.div variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-100px" }}
                duration={0.8}
                >
                    <PortfolioCard img="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2-655x450.webp" />
                </motion.div>

                <motion.div variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-100px" }}
                duration={0.8}
                >
                    <PortfolioCard img="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1-655x450.webp" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
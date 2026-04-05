import React from "react";
import { motion } from "framer-motion";
const Fanfacts = () => {
    return (
        <section className="lg:w-6xl mx-auto py-10 ">

            <div className="grid md:grid-cols-2 lg:grid-cols-2  gap-10">

                {/*  LEFT IMAGE (STICKY) */}
                <div >
                    <div className="sticky top-10">
                        <motion.div
                            className="relative w-full h-[500px] rounded-2xl overflow-hidden"
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                        >
                            {/* Image */}
                            <motion.img
                                src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img6-500x600.webp"
                                alt=""
                                className="w-full h-full object-cover"
                                variants={{
                                    rest: { scale: 1, rotate: 0 },
                                    hover: { scale: 1.08, rotate: 1 },
                                }}
                                transition={{ duration: 0.1, ease: "easeOut" }}
                            />

                            {/* Subtle overlay (depth feel) */}
                            <motion.div
                                className="absolute inset-0 bg-black/0"
                                variants={{
                                    rest: { opacity: 0 },
                                    hover: { opacity: 0.15 },
                                }}
                                transition={{ duration: 0.4 }}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="space-y-6 ">

                    <p className="text-xs text-gray-500 tracking-widest">
                        FUN FACTS
                    </p>

                    <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
                        Consistently delivering impactful results through a perfect blend of design and functionality.
                    </h1>

                    <div className="grid grid-cols-2 gap-4 mt-8">

                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-xl flex justify-between items-center">
                            <p className="text-sm text-gray-500 max-w-[120px]">
                                Successful projects completed
                            </p>
                            <h2 className="text-3xl font-bold">2k+</h2>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-xl row-span-2">
                            <div className="text-orange-400 mb-2 text-sm">★★★★★</div>
                            <h2 className="text-5xl font-bold">4.9/5</h2>
                            <hr className="my-4" />
                            <p className="text-sm text-gray-500">
                                We offer end-to-end creative solutions that make brands unforgettable.
                            </p>

                            <button className="mt-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
                                    +
                                </span>
                                <span className="text-sm font-medium">HIRE US NOW</span>
                            </button>
                        </div>

                        {/*  Card 3 (Black with stacked images) */}
                        <div className="bg-black text-white p-6 rounded-xl  relative overflow-hidden row-span-2">

                            {/* Stacked images */}
                            <div className="flex gap-2 mb-6 relative">

                                <img
                                    src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img10-100x120.webp"
                                    className="w-20 h-24 object-cover rounded-md rotate-[-10deg]"
                                />
                                <img
                                    src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img9-100x120.webp"
                                    className="w-20 h-24 object-cover rounded-md rotate-[5deg]"
                                />
                                <img
                                    src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img8-100x120.webp"
                                    className="w-20 h-24 object-cover rounded-md rotate-[15deg]"
                                />

                            </div>

                            <p className="text-sm leading-relaxed">
                                More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.
                            </p>
                        </div>

                        {/*  Card 4 (Image overlay card) */}
                        <div className=" relative rounded-xl overflow-hidden">

                            <img
                                src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2-655x450.webp"
                                className="w-full h-[120px] object-cover"
                            />

                            <div className="absolute inset-0 bg-black/40 flex justify-between items-center px-4 text-white">
                                <p className="text-sm">
                                    Worldwide base around the world
                                </p>
                                <h2 className="text-3xl font-bold">5+</h2>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Fanfacts;
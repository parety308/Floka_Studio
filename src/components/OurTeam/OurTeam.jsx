import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const OurTeam = () => {
    const [activeTab, setActiveTab] = useState("design");

    // 🔥 LEFT IMAGE SCROLL CONTROL
    const imgRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: imgRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["-80px", "80px"]);

    const designTeam = [
        {
            name: "Nicolas K. Ellington",
            role: "Founder",
            img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img1-min-450x450.png",
        },
        {
            name: "Carlos E. Ashcroft",
            role: "CEO",
            img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img2-min-450x450.png",
        },
        {
            name: "Leonardo F. Ashton",
            role: "UX Designer",
            img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img3-min-450x450.png",
        },
        {
            name: "Ricardo P. Winslow",
            role: "UI Designer",
            img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img4-min-450x450.png",
        },
    ];

    const devTeam = [
        {
            name: "Adrian T. Carrington",
            role: "Founder",
            img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home3-author-4-450x450.png",
        },
        {
            name: "Marcus J. Remington",
            role: "CEO",
            img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home3-author-5-450x450.png",
        },
        {
            name: "Victor L. Harrington",
            role: "UX Designer",
            img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img3-min-450x450.png",
        },
        {
            name: "Samuel R. Worthington",
            role: "UI Designer",
            img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home3-author-2-450x450.png",
        },
    ];

    const team = activeTab === "design" ? designTeam : devTeam;

    return (
        <section className="max-w-6xl mx-auto px-6 py-16">

            <div className="grid lg:grid-cols-2 gap-12">

                {/* 🔹 LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs uppercase tracking-widest mb-3">
                        OUR AVENGERS
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
                        Meet with our team member
                    </h2>

                    {/* Tabs */}
                    <div className="flex gap-6 text-sm mb-6">
                        <button
                            onClick={() => setActiveTab("design")}
                            className={`${activeTab === "design"
                                    ? "text-black font-medium"
                                    : "text-gray-400"
                                }`}
                        >
                            DESIGN TEAM
                        </button>

                        <button
                            onClick={() => setActiveTab("dev")}
                            className={`${activeTab === "dev"
                                    ? "text-black font-medium"
                                    : "text-gray-400"
                                }`}
                        >
                            DEVELOPMENT TEAM
                        </button>
                    </div>

                    <p className="text-gray-500 mb-6">
                        What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency dedicated to helping brands stand out.
                    </p>

                    {/* Button */}
                    <button className="flex items-center gap-3 mb-10">
                        <span className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
                            +
                        </span>
                        <span className="text-sm font-medium">JOIN WITH US</span>
                    </button>

                    {/* 🔥 SCROLL FLOW IMAGE */}
                    <div
                        ref={imgRef}
                        className="relative overflow-hidden rounded-2xl"
                    >
                        <motion.img
                            style={{ x }}
                            src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img11.webp"
                            alt=""
                            className="w-[120%] h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                        />
                    </div>
                </motion.div>

                {/* 🔹 RIGHT SIDE (UNCHANGED GRID) */}
                <div className="grid grid-cols-2 gap-6">

                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-100 rounded-2xl p-4 group"
                        >
                            <div className="overflow-hidden rounded-xl">
                                <motion.img
                                    src={member.img}
                                    alt=""
                                    className="w-full h-[220px] object-cover"
                                    whileHover={{ scale: 1.08 }}
                                />
                            </div>

                            <h3 className="mt-4 font-medium">
                                {member.name}
                            </h3>

                            <p className="text-xs text-gray-400 mb-3">
                                {member.role}
                            </p>

                            <div className="flex gap-2">
                                {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-sm cursor-pointer hover:bg-black hover:text-white transition"
                                    >
                                        <Icon />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default OurTeam;
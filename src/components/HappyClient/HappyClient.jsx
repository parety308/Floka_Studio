import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
const HappyClient = () => {
    const logos = [
        "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon11.svg",
        "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon10.svg",
        "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon9.svg",
        "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon8.svg",
        "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon9.svg",
        "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon8.svg",
        "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon10.svg",
        "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon11.svg",
    ];

    const handlePlayReel = () => {
        window.open("https://www.youtube.com/watch?v=SF4aHwxHtZ0", "_blank");
    }

    return (
        <div className="lg:w-6xl mx-auto">
            {/* Top text */}
            <div className="flex justify-between mb-5 ">
                <p className="text-xs">HAPPY USERS</p>
                <p className="text-xs">©2025 CASE-THEMES™ STUDIO</p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-4  overflow-hidden mb-1">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="h-25 bg-white border-b border border-gray-300 flex items-center justify-center"
                    >
                        <img
                            src={logo}
                            alt="logo"
                            className="max-h-10 object-contain"
                        />
                    </div>
                ))}
            </div>
            <div className="group relative h-[80vh] rounded-lg overflow-hidden">

                {/* Background layer */}
                <div
                    className="
      absolute inset-0 bg-cover bg-center
      transition-all duration-500
      group-hover:scale-110 group-hover:blur-sm
    "
                    style={{
                        backgroundImage:
                            "url(https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img11.webp)",
                    }}
                ></div>

                {/* Content layer */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">

                    <button
                        onClick={handlePlayReel}
                        className=" absolute bottom-5 left-5 flex items-center gap-2 bg-white px-2 py-1 rounded-full shadow-mdtransition-all duration-300group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:bottom-auto"
                    >
                        <span className="w-8 h-8 flex items-center justify-center text-xl text-black">
                            <FaRegCirclePlay />
                        </span>

                        <span className="text-xs font-medium text-black">
                            PLAY REEL
                        </span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default HappyClient;
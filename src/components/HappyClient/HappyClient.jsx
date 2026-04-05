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

    return (
        <div className="p-10 ">
            {/* Top text */}
            <div className="flex justify-between mb-5">
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
            <div
                className="bg-cover hover:items-center relative bg-center h-[80vh] flex items-center justify-center text-white rounded-lg"
                style={{
                    backgroundImage:
                        "url(https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img11.webp)",
                }}
            >
                <button className="absolute  bottom-5 left-5 flex items-center gap-2 bg-white px-2 py-1 rounded-full shadow-md">

                    {/* Circle Icon */}
                    <span className="w-8 h-8 flex items-center justify-center  text-xl text-black ">
                       <FaRegCirclePlay />
                    </span>

                    <span className="text-xs font-medium text-black">PLAY REEL</span>
                </button>
            </div>
        </div>
    );
};

export default HappyClient;
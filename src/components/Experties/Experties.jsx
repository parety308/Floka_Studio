import React, { useState } from "react";
import ExpertiesSlider from "./ExpertiesSlider/ExpertiesSlider";

const data = [
  {
    title: "User Interface & Experience Design",
  },
  {
    title: "Web Development",
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
    tags: ["BRANDING", "MOBILE", "PRODUCT", "UX"],
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1-655x450.webp",
  },
  {
    title: "Search Engine Optimization",
  },
  {
    title: "Low-Code Development",
  },
];

const Experties = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="w-full mx-auto rounded-2xl">
      
      {/* MAIN CONTAINER */}
      <section className=" bg-black text-white py-20 px-6 md:px-16  overflow-hidden">

        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Company <br />
            <span className="text-gray-500">expertise</span>
          </h1>
        </div>

        {/* Accordion */}
        <div className="border-t border-gray-800">
          {data.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-800 py-6 cursor-pointer"
              onClick={() => setActive(index)}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">

                  {/* + / - */}
                  <div className="w-6 h-6 flex items-center justify-center border border-gray-600 rounded-full text-sm">
                    {active === index ? "-" : "+"}
                  </div>

                  <h3 className="text-sm md:text-base">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              {active === index && item.desc && (
                <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">

                  {/* Text */}
                  <div>
                    <p className="text-gray-400 mb-4">
                      {item.desc}
                    </p>

                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs border border-gray-600 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-[200px] object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                </div>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="flex items-center gap-3 text-sm cursor-pointer group">
            <span className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full group-hover:rotate-45 transition">
              +
            </span>
            HIRE US TODAY
          </button>
        </div>

        {/* Slider (important fix) */}
        <div className="mt-10 overflow-hidden">
          <ExpertiesSlider />
        </div>

      </section>
    </div>
  );
};

export default Experties;
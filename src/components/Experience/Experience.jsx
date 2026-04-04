import React, { useEffect, useRef, useState } from "react";

const Experience = () => {
    const sectionRef = useRef(null);

    const [inView, setInView] = useState(false);
    const [years, setYears] = useState(0);
    const [users, setUsers] = useState(0);
    const [show, setShow] = useState(false);

    // 👁️ Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false); // remove if you want only once
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // 🎬 Trigger animations when visible
    useEffect(() => {
        if (!inView) return;

        setShow(true);

        // YEARS COUNTER
        let y = 0;
        const yearsInterval = setInterval(() => {
            y++;
            setYears(y);
            if (y >= 25) clearInterval(yearsInterval);
        }, 70);

        // USERS COUNTER
        let u = 0;
        const usersInterval = setInterval(() => {
            u += 15;
            if (u >= 1200) {
                setUsers(1200);
                clearInterval(usersInterval);
            } else {
                setUsers(u);
            }
        }, 28);

        return () => {
            clearInterval(yearsInterval);
            clearInterval(usersInterval);
        };
    }, [inView]);
    useEffect(() => {
        if (inView) {
            // restart animation every time visible
            setShow(false);

            const timeout = setTimeout(() => {
                setShow(true);
            }, 50); // small delay to retrigger

            return () => clearTimeout(timeout);
        } else {
            // reset when leaving viewport
            setShow(false);
        }
    }, [inView]);

    return (
        <section
            ref={sectionRef}
            className="w-full py-10 px-4 md:px-6"
        >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto h-[420px]">

                {/* LEFT CARD */}
                <div className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm h-full">
                    <div>
                        <h1 className="text-6xl font-bold text-black">
                            {years}<span>+</span>
                        </h1>

                        <p className="text-gray-500 mt-2">Years of experience</p>

                        <hr className="my-6" />

                        <p className="text-gray-600">
                            Explore how we transform ideas into extraordinary digital experiences.
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center gap-2">
                            {[1, 2, 3, 4].map((i) => (
                                <img
                                    key={i}
                                    className="w-8 h-8 rounded-full"
                                    src={`https://i.pravatar.cc/40?img=${i}`}
                                />
                            ))}
                        </div>

                        <p className="text-sm text-gray-600 mt-2">
                            {users}+ happy users review
                        </p>
                    </div>
                </div>

                {/* MIDDLE IMAGE */}
                <div className="relative col-span-2 rounded-2xl overflow-hidden h-full">



                    {/* DARK GRADIENT */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent">  {/* IMAGE */}
                        <div className="absolute inset-0 bg-black overflow-hidden flex items-end">
                            <img
                                src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-author-img1.webp"
                                alt="author"
                                className={`
                h-full w-auto object-contain object-left
                transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                ${show
                                        ? "translate-y-0 opacity-100"
                                        : "-translate-y-12 opacity-0"}
              `}
                            />
                        </div></div>

                    {/* AWARDS */}
                    <div className="absolute top-6 right-6 text-right text-white space-y-4">
                        <div>
                            <p className="text-xs tracking-widest">ULTRA</p>
                            <p className="text-[10px] text-gray-300">PRESTIGIOUS</p>
                            <p className="text-[10px] text-gray-400">AWARD WINNER</p>
                        </div>

                        <div>
                            <p className="text-xs tracking-widest">HYPER</p>
                            <p className="text-[10px] text-gray-300">BEST</p>
                            <p className="text-[10px] text-gray-400">AWARD WINNING</p>
                        </div>
                    </div>

                    {/* TEXT */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="text-lg md:text-xl leading-relaxed font-light">
                            “ At Floka, we merge strategy, creativity, and technology to shape brands that people love. ”
                        </p>

                        <p className="mt-4 text-sm text-gray-300">
                            <span className="text-white font-medium">
                                Merizo H. Yelso
                            </span>{" "}
                            / CEO
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col gap-6 h-full">

                    {/* TOP */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 flex flex-col justify-center">
                        <p className="text-gray-400 mb-2">Follow us</p>
                        <h3 className="font-semibold mb-4">For check updates</h3>

                        <div className="flex flex-wrap gap-2">
                            {["DRIBBBLE", "BEHANCE", "LINKEDIN", "X", "XING"].map((item) => (
                                <span key={item} className="px-3 py-1 border rounded-full text-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* BOTTOM */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 flex flex-col justify-center">
                        <p className="text-gray-400 mb-4">Impressions</p>

                        {[
                            { label: "Solutions", value: 100 },
                            { label: "UI/UX", value: 90 },
                            { label: "Explore", value: 72 },
                        ].map((item) => (
                            <div key={item.label} className="mb-3">
                                <div className="flex justify-between text-sm mb-1">
                                    <span>{item.label}</span>
                                    <span>{item.value}%</span>
                                </div>

                                <div className="w-full h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="h-2 bg-black rounded-full"
                                        style={{ width: `${item.value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
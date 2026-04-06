import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
const FooterCTA = () => {
    const ref = useRef(null);

    // track scroll of this section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // map scroll → rotation
    const rotateValue = useTransform(scrollYProgress, [0, 1], [0, 360]);

    // smooth motion (adjusted for slower rotation)
    const rotate = useSpring(rotateValue, {
        stiffness: 20,
        damping: 20,
    });
    return (
        <section className="relative bg-black text-white py-25 overflow-hidden">
            <div className="w-full mx-auto px-6">

                {/* TOP TITLE */}
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: .5, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                    className=" text-4xl lg:text-8xl text-gray-500 md:text-8xl font-semibold text-center absolute top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                    Let’s <h1>talk now</h1>
                </motion.h2>

                {/* CIRCLE BUTTON */}
                <div className="flex justify-center mb-16 mt-40 ">
                    <div ref={ref} className="relative w-[150px] h-[150px]">

                        {/* Rotating circle */}
                        <motion.img
                            src="https://floka.casethemes.net/wp-content/uploads/2025/06/circle-footer.svg"
                            alt=""
                            style={{ rotate }}
                            className="absolute w-full h-full"
                        />

                        {/* Arrow center */}
                        <div className="absolute inset-0 flex items-center justify-center text-4xl">
                            →
                        </div>

                    </div>
                </div>

                {/* GRID CONTENT */}
                <div className="grid md:grid-cols-3 gap-10">

                    {/* IMAGE BLOCK */}
                    <div className="relative">
                        <img
                            src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img14-645x500.jpg"
                            className="rounded-xl"
                            alt=""
                        />

                        {/* floating logo */}
                        <motion.img
                            src="https://floka.casethemes.net/wp-content/uploads/2025/06/footer-logo.svg"
                            className="absolute top-1/2 left-1/2 w-24"
                            style={{ translateX: "-40%", translateY: "-180%" }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        />
                        <div className="w-full flex justify-center items-center py-20 bg-black">

                            <svg
                                viewBox="0 0 647 190"
                                className="w-[400px] md:w-[700px]"
                                fill="none"
                            >
                                <g strokeLinecap="round" strokeLinejoin="round">

                                    {/* PATH 1 */}
                                    <motion.path
                                        d="M567.184 50.814c20.401 0 36.017 4.425 46.773 13.351 10.774 8.795 16.132 21.678 16.132 38.561v50.249H646.5v33.878h-36.363V165.67h-8.936c-4.812 7.468-11.301 13.262-19.461 17.378-8.1 4.163-18.043 6.232-29.808 6.232-16.253 0-29.091-3.768-38.453-11.365-9.215-7.602-13.821-17.676-13.821-30.174 0-13.08 4.68-23.239 14.065-30.406 9.522-7.151 23.127-10.691 40.751-10.691h41.796v-4.796c0-7.985-2.428-13.892-7.213-17.818-4.804-3.941-12.066-5.954-21.872-5.954-8.347 0-14.974 1.427-19.918 4.237-4.93 2.802-8.22 6.998-9.879 12.615h-35.526c2.952-14.239 10.033-25.096 21.246-32.531 11.201-7.573 25.868-11.337 43.96-11.337Zm-10.863 79.332c-7.737 0-13.451 1.373-17.219 4.044-3.736 2.649-5.625 6.621-5.625 12.004 0 5.291 2.011 9.402 6.032 12.391 4.201 2.861 10.019 4.32 17.507 4.32 7.256 0 13.78-1.232 19.578-3.687 5.942-2.766 10.568-6.393 13.899-10.873 3.48-4.623 5.215-9.741 5.215-15.367v-2.588h-39.948Z"
                                        stroke="url(#a)"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2 }}
                                        viewport={{ once: false }}
                                    />

                                    {/* PATH 2 */}
                                    <motion.path
                                        d="M397.158.5v104.147h.236l58.335-51.067h42.674l-1.018.879-59.959 51.756 64.874 79.941h-41.967l-48.229-59.856-15.598 12.126v47.916h-35.439V.5h35.439Z"
                                        stroke="url(#b)"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: 0.2 }}
                                        viewport={{ once: false }}
                                    />

                                    {/* PATH 3 */}
                                    <motion.path
                                        d="M272.505 50.814c15.16 0 28.186 2.806 39.058 8.44 11.553 5.6 19.758 13.431 25.627 23.488 6.062 10.387 9.082 22.687 9.083 36.88 0 14.048-3.021 26.347-9.081 36.878-6.059 10.385-14.605 18.395-25.627 24.027-11.025 5.632-24.05 8.439-39.058 8.439-15.009 0-28.109-2.807-39.286-8.438-11.026-5.779-19.647-13.858-25.86-24.237-6.062-10.39-9.083-22.617-9.083-36.665 0-14.193 3.02-26.493 9.082-36.879 6.216-10.382 14.918-18.389 26.093-24.02 11.176-5.631 24.199-8.438 39.055-8.438Zm0 29.684c-12.384 0-21.949 3.5-28.766 10.442-6.665 6.944-10.026 16.588-10.026 28.998 0 12.557 3.362 22.35 10.03 29.441 6.817 6.939 16.381 10.437 28.762 10.437 12.228 0 21.637-3.499 28.3-10.437 6.669-7.092 10.03-16.813 10.03-29.222 0-12.56-3.364-22.278-10.03-29.221-6.663-6.939-16.072-10.438-28.3-10.438Z"
                                        stroke="url(#c)"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: 0.4 }}
                                        viewport={{ once: false }}
                                    />

                                    {/* PATH 4 */}
                                    <motion.path
                                        d="M182.019.5v186.347h-35.438V.5h35.438Z"
                                        stroke="url(#d)"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, delay: 0.6 }}
                                        viewport={{ once: false }}
                                    />

                                    {/* PATH 5 */}
                                    <motion.path
                                        d="M133.938 7.12v30.126H36.863v44.013h89.909v30.126H36.863v75.463H.5V7.12h133.438Z"
                                        stroke="url(#e)"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        viewport={{ once: false }}
                                    />

                                </g>

                                {/* GRADIENTS */}
                                <defs>
                                    <linearGradient id="a"><stop stopColor="#9E9E9E" /><stop offset="1" stopColor="transparent" /></linearGradient>
                                    <linearGradient id="b"><stop stopColor="#9E9E9E" /><stop offset="1" stopColor="transparent" /></linearGradient>
                                    <linearGradient id="c"><stop stopColor="#9E9E9E" /><stop offset="1" stopColor="transparent" /></linearGradient>
                                    <linearGradient id="d"><stop stopColor="#9E9E9E" /><stop offset="1" stopColor="transparent" /></linearGradient>
                                    <linearGradient id="e"><stop stopColor="#9E9E9E" /><stop offset="1" stopColor="transparent" /></linearGradient>
                                </defs>

                            </svg>
                        </div>
                    </div>

                    {/* LINKS */}
                    <div>
                        <ul className="space-y-3 text-lg">
                            {["About Us", "Journal", "FAQ", "Get in touch", "Careers"].map(
                                (item, i) => (
                                    <li key={i} className="hover:underline cursor-pointer">
                                        {item}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="space-y-4 text-gray-300">
                        <p>
                            At Floka, we believe furniture should be more than just
                            functional—it should tell your story.
                        </p>

                        <p>info@floka-design.com</p>
                        <p>+123 (456 789 00)</p>
                        <p>12/A, Booston Tower, NYC</p>

                        {/* SOCIAL */}
                        <div className="flex gap-4 pt-4">
                            <span>FB</span>
                            <span>TW</span>
                            <span>IN</span>
                            <span>BE</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FooterCTA;
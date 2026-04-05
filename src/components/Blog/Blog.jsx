import { motion } from "framer-motion";

const posts = [
    {
        title: "Seamless user interfaces, crafted with intent.",
        category: "WEB3",
        date: "Nov 07, 2025",
        image:
            "https://floka.casethemes.net/wp-content/uploads/2025/11/home-9-blog-img3-800x800.webp",
        dark: true,
    },
    {
        title: "Creative web platforms, designed for growth.",
        category: "WEB3",
        date: "Nov 07, 2025",
        image:
            "https://floka.casethemes.net/wp-content/uploads/2025/11/home-9-blog-img2-800x800.webp",
        dark: true,
    },
    {
        title: "Immersive virtual journeys, built with precision",
        category: "WEB3",
        date: "Nov 07, 2025",
        image:
            "https://floka.casethemes.net/wp-content/uploads/2025/11/home-9-blog-img1-800x800.webp",
        dark: true,
    },
];

const Card = ({ post, reverse }) => {
    return (
        <div className="rounded-2xl overflow-hidden group cursor-pointer flex flex-col gap-3">

            {/* TEXT FIRST if reverse */}
            {reverse && (
                <div
                    className={`p-6 ${post.dark
                        ? "bg-black text-white rounded-xl"
                        : "bg-gray-100 text-black rounded-xl"
                        }`}
                >
                    <div className="flex gap-3 text-sm mb-3 opacity-70">
                        <span>{post.category}</span>
                        <span>{post.date}</span>
                    </div>

                    <h3 className="text-lg font-medium leading-snug">
                        {post.title}
                    </h3>
                </div>
            )}

            {/* IMAGE */}
            <div className="overflow-hidden">
                <motion.img
                    src={post.image}
                    alt=""
                    className="w-full h-[300px] object-cover rounded-xl"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* TEXT NORMAL */}
            {!reverse && (
                <div
                    className={`p-6 ${post.dark
                        ? "bg-black text-white rounded-xl"
                        : "bg-gray-100 text-black rounded-xl"
                        }`}
                >
                    <div className="flex gap-3 text-sm mb-3 opacity-70">
                        <span>{post.category}</span>
                        <span>{post.date}</span>
                    </div>

                    <h3 className="text-lg font-medium leading-snug">
                        {post.title}
                    </h3>
                </div>
            )}
        </div>
    );
};

const Blog = () => {
    return (
        <section className="">
            <div className="text-center mb-10">

                <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">
                    Insights
                </p>

                <motion.h2
                    initial={{ opacity: 0, x: 120, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="text-4xl md:text-5xl font-semibold text-gray-900"
                >
                    Company blog & updates
                </motion.h2>

            </div>
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

                {/* LEFT */}
                <div className="flex flex-col gap-6">
                    <Card post={posts[0]} />
                </div>

                {/* CENTER (REVERSED) */}
                <div className="flex flex-col gap-6">
                    <Card post={posts[1]} reverse />
                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-6">
                    <Card post={posts[2]} />
                </div>

            </div>
        </section>
    );
};

export default Blog;
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ContactSection = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section
            className="w-full py-20 px-6 bg-black text-white bg-center rounded-2xl"

        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* 🔹 Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white"
                >
                    <p className="text-xs mb-3 tracking-widest">GET IN TOUCH</p>

                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
                        Tell us about your project — whether it’s a website, SEO, or marketing.
                    </h2>

                    <div className="flex gap-10 text-sm opacity-80">
                        <div>
                            <p className="mb-2">TALK TO US</p>
                            <p>Work and general inquiries</p>
                            <p>+123 456 789 00</p>
                        </div>

                        <div>
                            <p className="mb-2">POST ADDRESS</p>
                            <p>541 Melville Ave, Palo Alto, CA</p>
                            <p>94301, United States</p>
                        </div>
                    </div>
                </motion.div>

                {/* 🔹 Right Form */}
                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl p-6 shadow-lg space-y-4"
                >
                    <h3 className="text-lg font-medium mb-2">
                        Have a project in mind?
                    </h3>

                    <div className="grid grid-cols-2 gap-3 ">
                        <input
                            {...register("name")}
                            placeholder="Your Name"
                            className="bg-gray-100 text-black p-2 rounded-md text-sm outline-none"
                        />
                        <input
                            {...register("email")}
                            placeholder="Business Email"
                            className="bg-gray-100 p-2 text-black rounded-md text-sm outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col">
                            <label className="text-sm text-gray-500">
                                Budget
                            </label>

                            <select
                                {...register("budget")}
                                className="bg-gray-100 p-2 text-black rounded-md text-sm outline-none"
                            >
                                <option>$1000 - $5000</option>
                                <option>$5000 - $10000</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm text-gray-500">
                                Services
                            </label>
                            <select
                                {...register("service")}
                                className="bg-gray-100 text-black p-2 rounded-md text-sm outline-none"
                            >
                                <option>Consultancy</option>
                                <option>Web Design</option>
                            </select>
                        </div>
                    </div>

                    <textarea
                        {...register("message")}
                        placeholder="Message"
                        rows={4}
                        className="bg-gray-100 text-black p-2 rounded-md text-sm outline-none w-full"
                    />

                    <button
                        type="submit"
                        className="flex items-center gap-2 text-sm font-medium text-black"
                    >
                        <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
                            +
                        </span>
                        LET'S TALK
                    </button>
                </motion.form>

            </div>
            
        </section>
    );
};

export default ContactSection;
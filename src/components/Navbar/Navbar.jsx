import { Link } from "react-router";

const Navbar = () => {
    return (
        <header className="w-full  mx-auto ">
            <nav className="w-full  mx-auto grid grid-cols-8 py-5 px-6">

                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="bg-black text-white px-2 y-1 rounded">
                            F
                        </span>
                        Floka
                    </Link>
                </div>

                {/* Menu */}
                <ul className="hidden col-span-6  lg:grid lg:grid-cols-4 items-center gap-10 text-lg font-medium text-gray-700">
                    <li>
                        <Link className="hover:text-black  transition duration-300 hover:bg-gray-300 hover:p-3 rounded-full" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-black hover:bg-gray-300 transition duration-300 hover:p-3 rounded-full" to="/pages">
                            Pages
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-black hover:bg-gray-300 transition duration-300 hover:p-3 rounded-full" to="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-black hover:bg-gray-300 transition duration-300 hover:p-3 rounded-full" to="/blog">
                            Blog
                        </Link>
                    </li>
                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                    <a
                        href="mailto:info@floka.com"
                        className="hidden md:block text-gray-600 hover:text-black transition text-lg font-medium"
                    >
                        info@floka.com
                    </a>

                    {/* Grid icon */}
                    <div className="cursor-pointer grid grid-cols-3 gap-0.75">
                        {[...Array(9)].map((_, i) => (
                            <span
                                key={i}
                                className="w-1 h-1 bg-black rounded-sm"
                            ></span>
                        ))}
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;
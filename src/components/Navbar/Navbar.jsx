import { Link } from "react-router";

const Navbar = () => {
    return (
        <header className="w-full  mx-auto ">
            <nav className="w-full  mx-auto grid grid-cols-8 py-5 px-6">

                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none"><g clip-path="url(#clip0_8_56)"><path d="M0.0298862 0.00585203C12.6835 -0.00396183 25.3318 0.00127223 37.9853 0.00127223C37.9998 3.9314 37.9657 7.86152 37.9998 11.7917C30.4526 11.8074 23.7841 11.8525 16.1963 11.8603C14.0595 11.8283 11.9555 11.615 10.8252 13.4502C9.66536 15.4915 10.1751 17.5229 10.2059 20.1917C10.2282 21.9739 9.01666 23.4643 7.35101 23.548C4.90889 23.6854 2.45694 23.5676 0.0141602 23.5774C0.034473 15.7218 0.000399872 7.86153 0.0298862 0.00585203Z" fill="#0A0A0A"></path><path d="M14.8696 19.264C15.0367 17.699 16.57 16.4081 18.1472 16.5213C22.059 16.5069 27.4701 16.5259 31.3866 16.5167C31.3669 20.4665 31.401 24.4163 31.3669 28.366C26.3791 28.3418 19.8967 28.3516 14.9142 28.3562C14.9338 32.2327 14.9044 36.1137 14.9384 39.9895C9.96048 39.9994 4.98253 40.0092 0.00458676 39.985C0.0340731 36.0647 0.0288311 32.1489 0 28.2338C3.77425 28.1998 7.55308 28.2581 11.3267 28.2044C13.0022 28.19 14.5898 26.8553 14.7615 25.1673C14.8939 23.2 14.6586 21.2222 14.8696 19.2646V19.264Z" fill="#0A0A0A"></path></g><defs><clipPath id="clip0_8_56"><rect width="38" height="40" fill="white"></rect></clipPath></defs></svg>
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
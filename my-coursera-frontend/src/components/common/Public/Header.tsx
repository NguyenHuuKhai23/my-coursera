import logo from '@/assets/images/Logo.jpg';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="fixed w-full">
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <a href="#" className="flex items-center">
                        <img src={logo} className="h-6 mr-3 sm:h-9" alt="Mini Course Logo"/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Mini Course</span>
                    </a>
                    <div className="flex items-center lg:order-2 gap-x-2">
                        <Link
                            to="/login"
                            className="text-blue-600 border border-blue-600 hover:bg-blue-50
                               focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
                               text-sm px-4 lg:px-5 py-2 lg:py-2.5
                               dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900">
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="text-white bg-blue-700 hover:bg-blue-800
                               focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
                               text-sm px-4 lg:px-5 py-2 lg:py-2.5
                               dark:bg-blue-600 dark:hover:bg-blue-700">
                            Sign up
                        </Link>
                    </div>

                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                         id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/courses" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                    Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/instructors" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                    Instructors
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/aboutus" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
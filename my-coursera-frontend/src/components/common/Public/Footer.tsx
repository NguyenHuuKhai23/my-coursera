import logo from '@/assets/images/Logo.jpg';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-screen-xl mx-auto py-10 px-6 lg:px-8">
                <div className="md:flex md:items-start md:justify-between">
                    {/* Left column: logo & description */}
                    <div className="md:w-1/3">
                        <a href="/" className="flex items-center space-x-3 mb-4">
                            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Mini Course Logo"/>
                            <span className="text-2xl font-semibold text-gray-900 dark:text-white">Mini Course</span>
                        </a>
                        <p className="text-gray-600 dark:text-gray-300 text-sm max-w-sm">
                            Learn online with high-quality courses from top students. Includes guided presentations, assignments, and certificates upon completion.
                        </p>
                    </div>

                    {/* Middle column: link groups - become a 3-column grid on md+ */}
                    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-0 md:w-1/3 md:grid-cols-3">
                        <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Courses</h4>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <li><a href="/courses" className="hover:text-gray-900 dark:hover:text-white">All Courses</a></li>
                                <li><a href="/courses/popular" className="hover:text-gray-900 dark:hover:text-white">Popular</a></li>
                                <li><a href="/courses/new" className="hover:text-gray-900 dark:hover:text-white">New</a></li>
                                <li><a href="/categories" className="hover:text-gray-900 dark:hover:text-white">Categories</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Resources</h4>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <li><a href="/blog" className="hover:text-gray-900 dark:hover:text-white">Blog</a></li>
                                <li><a href="/help" className="hover:text-gray-900 dark:hover:text-white">Help Center</a></li>
                                <li><a href="/guides" className="hover:text-gray-900 dark:hover:text-white">Guides</a></li>
                                <li><a href="/pricing" className="hover:text-gray-900 dark:hover:text-white">Pricing</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Company</h4>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <li><a href="/about" className="hover:text-gray-900 dark:hover:text-white">About us</a></li>
                                <li><a href="/careers" className="hover:text-gray-900 dark:hover:text-white">Careers</a></li>
                                <li><a href="/contact" className="hover:text-gray-900 dark:hover:text-white">Contact</a></li>
                                <li><a href="/partners" className="hover:text-gray-900 dark:hover:text-white">Partners</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-0 md:w-1/3">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Newsletter</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Receive notifications about new courses and offers.</p>
                        <form className="flex items-center space-x-2" onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="footer-email" className="sr-only">Email address</label>
                            <input id="footer-email" type="email" placeholder="Enter your email" className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">Register</button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-6 flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Mini Coursera. All rights reserved
                        <a
                            href="mailto:khainguyenhuu2322004@gmail.com"
                            className="ml-1 text-blue-600 hover:opacity-90 dark:text-blue-400"
                        >
                            khainguyenhuu2322004@gmail.com
                        </a>
                    </p>

                    <div className="mt-4 md:mt-0 flex items-center space-x-4">
                        <nav aria-label="Social media" className="flex items-center space-x-3">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Facebook">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>

                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Twitter">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>

                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="LinkedIn">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5 1.11 1 2.5 1 4.98 2.119 4.98 3.5zM.22 8.98h4.52V24H.22zM8.98 8.98h4.34v2.05h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.88V24h-4.6v-6.72c0-1.6 0-3.66-2.23-3.66-2.24 0-2.58 1.75-2.58 3.55V24H8.98z" />
                                </svg>
                            </a>
                        </nav>

                        <a href="/terms" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Terms</a>
                        <a href="/privacy" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

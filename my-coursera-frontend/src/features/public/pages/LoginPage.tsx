import {Link} from "react-router-dom";
import heroImg from "@/assets/images/hero.png";
import logo from "@/assets/images/Logo.jpg";
import { FiMail, FiLock } from "react-icons/fi";
import GoogleLogo from "@/assets/images/GoogleLogo.png";
import FacebookLogo from "@/assets/images/FacebookLogo.webp";
import backgroundImg from "@/assets/images/Background.jpg";

const LoginPage = () => {
    return (
        <div className="relative isolate min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -20 }} />
            <div className="absolute inset-0 bg-black opacity-30" style={{ zIndex: -10 }} />

            <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                {/* Left illustration */}
                <div className="hidden lg:flex items-center justify-center bg-blue-600">
                    <div className="p-8 text-center">
                        <img src={heroImg} alt="Learn" className="w-[320px] mx-auto object-contain" />
                        <h3 className="mt-6 text-2xl font-bold text-white">Learn new skills</h3>
                        <p className="mt-2 text-sm text-blue-100">Interactive courses, projects and certificates to grow your career.</p>
                    </div>
                </div>

                {/* Right: form */}
                <div className="p-8">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <img className="h-10" src={logo} alt="Logo" />
                        </Link>
                        <div className="text-sm text-gray-500">Don’t have an account? <Link to="/signup" className="text-blue-600 font-medium">Sign up</Link></div>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Welcome back</h2>
                        <p className="mt-2 text-sm text-gray-500">Sign in to continue to your dashboard.</p>
                    </div>

                    <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-3">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><FiMail /></span>
                                <input id="email" name="email" type="email" required placeholder="Email address"
                                       className="pl-10 pr-3 py-2 w-full border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>

                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><FiLock /></span>
                                <input id="password" name="password" type="password" required placeholder="Password"
                                       className="pl-10 pr-3 py-2 w-full border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                                    <span className="text-gray-600">Remember me</span>
                                </label>

                                <Link to="/forgot-password" className="text-blue-600">Forgot?</Link>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-md shadow-sm hover:opacity-95">Sign in</button>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <hr className="flex-1" />
                            <span>or continue with</span>
                            <hr className="flex-1" />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button type="button" className="py-2 px-3 border rounded-md flex items-center justify-center gap-2 text-sm">
                                <img src={GoogleLogo} alt="google" className="h-4 w-4 object-contain" />
                                Google
                            </button>
                            <button type="button" className="py-2 px-3 border rounded-md flex items-center justify-center gap-2 text-sm">
                                <img src={FacebookLogo} alt="google" className="h-4 w-4 object-contain" />
                                Facebook
                            </button>
                        </div>

                        <p className="mt-4 text-xs text-gray-400">This is UI only — authentication not implemented yet.</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

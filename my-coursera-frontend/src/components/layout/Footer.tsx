import { Link } from "react-router-dom";
import Logo from "@/assets/images/Logo.jpg";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <Link to="/" className="flex items-center gap-2 text-white mb-4">
                            <img src={Logo} alt="Mini Coursera" className="h-8 w-8 rounded-lg object-cover" />
                            <span className="text-xl font-bold">Mini Coursera</span>
                        </Link>
                        <p className="text-sm text-gray-400">
                            Nền tảng học trực tuyến hàng đầu với hàng ngàn khóa học chất lượng.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">Khám phá</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/courses" className="hover:text-white transition-colors">Khóa học</Link></li>
                            <li><Link to="/instructors" className="hover:text-white transition-colors">Giảng viên</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">Về chúng tôi</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-3">Hỗ trợ</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Điều khoản</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-3">Liên hệ</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Email: support@minicoursera.com</li>
                            <li>Hotline: 1900-xxxx</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Mini Coursera. All rights reserved.
                </div>
            </div>
        </footer>
    );
}


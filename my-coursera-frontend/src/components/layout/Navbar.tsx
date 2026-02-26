import { Link, useNavigate } from "react-router-dom";
import { Bell, Menu, X, LogOut, User, BookOpen, LayoutDashboard } from "lucide-react";
import { UseAuth } from "@/hooks/useAuth";
import { useState } from "react";
import Avatar from "@/components/common/Avatar";
import Logo from "@/assets/images/Logo.jpg";

export default function Navbar() {
    const { user, isAuthenticated, logout } = UseAuth();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const getDashboardPath = () => {
        if (!user) return "/";
        switch (user.role) {
            case "ADMIN": return "/admin";
            case "INSTRUCTOR": return "/instructor";
            case "STUDENT": return "/student";
            default: return "/";
        }
    };

    const navLinks = [
        { to: "/courses", label: "Khóa học" },
        { to: "/instructors", label: "Giảng viên" },
        { to: "/about", label: "Về chúng tôi" },
    ];

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 shrink-0">
                        <img src={Logo} alt="Mini Coursera" className="h-9 w-9 rounded-lg object-cover" />
                        <span className="text-xl font-bold text-gray-900 hidden sm:block">Mini Coursera</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        {isAuthenticated && user ? (
                            <>
                                {/* Notifications */}
                                <Link to={`${getDashboardPath()}/notifications`} className="relative p-2 rounded-lg hover:bg-gray-100">
                                    <Bell size={20} className="text-gray-600" />
                                </Link>

                                {/* Profile dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={() => setProfileOpen(!profileOpen)}
                                        className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100"
                                    >
                                        <Avatar src={null} name={user.email} size="sm" />
                                    </button>

                                    {profileOpen && (
                                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-1 z-50">
                                            <div className="px-4 py-2 border-b">
                                                <p className="text-sm font-medium text-gray-900">{user.email}</p>
                                                <p className="text-xs text-gray-500 capitalize">{user.role.toLowerCase()}</p>
                                            </div>
                                            <Link
                                                to={getDashboardPath()}
                                                onClick={() => setProfileOpen(false)}
                                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                            >
                                                <LayoutDashboard size={16} /> Dashboard
                                            </Link>
                                            <Link
                                                to={`${getDashboardPath()}/profile`}
                                                onClick={() => setProfileOpen(false)}
                                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                            >
                                                <User size={16} /> Hồ sơ
                                            </Link>
                                            {user.role === "STUDENT" && (
                                                <Link
                                                    to="/student/courses"
                                                    onClick={() => setProfileOpen(false)}
                                                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                >
                                                    <BookOpen size={16} /> Khoá học của tôi
                                                </Link>
                                            )}
                                            <div className="border-t">
                                                <button
                                                    onClick={handleLogout}
                                                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                                >
                                                    <LogOut size={16} /> Đăng xuất
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    Đăng nhập
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Đăng ký
                                </Link>
                            </>
                        )}

                        {/* Mobile toggle */}
                        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <nav className="md:hidden pb-4 border-t pt-2 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}


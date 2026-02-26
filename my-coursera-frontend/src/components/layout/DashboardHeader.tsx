import { Bell, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "@/hooks/useAuth";
import Avatar from "@/components/common/Avatar";

interface DashboardHeaderProps {
    notificationsPath?: string;
}

export default function DashboardHeader({ notificationsPath = "notifications" }: DashboardHeaderProps) {
    const { user, logout } = UseAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
            {/* Left - Page context */}
            <div className="flex items-center gap-3">
                <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    ← Trang chủ
                </Link>
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-3">
                <Link
                    to={notificationsPath}
                    className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    <Bell size={20} className="text-gray-600" />
                </Link>

                <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
                    <Avatar src={null} name={user?.email || "U"} size="sm" />
                    <span className="text-sm font-medium text-gray-700 hidden sm:block">{user?.email}</span>
                </div>

                <button
                    onClick={handleLogout}
                    className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
                    title="Đăng xuất"
                >
                    <LogOut size={18} />
                </button>
            </div>
        </header>
    );
}


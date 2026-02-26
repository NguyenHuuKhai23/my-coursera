import { Outlet } from "react-router-dom";
import Sidebar, { type SidebarItem } from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import { LayoutDashboard, BookOpen, Heart, Award, User, Bell } from "lucide-react";
import Logo from "@/assets/images/Logo.jpg";

const studentMenuItems: SidebarItem[] = [
    { to: "/student", label: "Dashboard", icon: LayoutDashboard },
    { to: "/student/courses", label: "Khoá học của tôi", icon: BookOpen },
    { to: "/student/wishlist", label: "Yêu thích", icon: Heart },
    { to: "/student/certificates", label: "Chứng chỉ", icon: Award },
    { to: "/student/notifications", label: "Thông báo", icon: Bell },
    { to: "/student/profile", label: "Hồ sơ", icon: User },
];

export default function StudentLayout() {
    return (
        <div className="min-h-screen flex bg-gray-50">
            <Sidebar
                items={studentMenuItems}
                title="Học viên"
                titleIcon={<img src={Logo} alt="Logo" className="h-6 w-6 rounded object-cover" />}
            />
            <div className="flex-1 flex flex-col min-h-screen">
                <DashboardHeader notificationsPath="/student/notifications" />
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}


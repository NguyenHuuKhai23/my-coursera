import { Outlet } from "react-router-dom";
import Sidebar, { type SidebarItem } from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import { LayoutDashboard, BookOpen, PlusCircle, DollarSign, User, Bell } from "lucide-react";
import Logo from "@/assets/images/Logo.jpg";

const instructorMenuItems: SidebarItem[] = [
    { to: "/instructor", label: "Dashboard", icon: LayoutDashboard },
    { to: "/instructor/courses", label: "Khoá học của tôi", icon: BookOpen },
    { to: "/instructor/courses/new", label: "Tạo khoá học", icon: PlusCircle },
    { to: "/instructor/revenue", label: "Doanh thu", icon: DollarSign },
    { to: "/instructor/notifications", label: "Thông báo", icon: Bell },
    { to: "/instructor/profile", label: "Hồ sơ", icon: User },
];

export default function InstructorLayout() {
    return (
        <div className="min-h-screen flex bg-gray-50">
            <Sidebar
                items={instructorMenuItems}
                title="Giảng viên"
                titleIcon={<img src={Logo} alt="Logo" className="h-6 w-6 rounded object-cover" />}
            />
            <div className="flex-1 flex flex-col min-h-screen">
                <DashboardHeader notificationsPath="/instructor/notifications" />
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}


import { Outlet } from "react-router-dom";
import Sidebar, { type SidebarItem } from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import { LayoutDashboard, BookOpen, Users, FolderOpen } from "lucide-react";
import Logo from "@/assets/images/Logo.jpg";

const adminMenuItems: SidebarItem[] = [
    { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { to: "/admin/courses", label: "Quản lý khóa học", icon: BookOpen },
    { to: "/admin/users", label: "Quản lý người dùng", icon: Users },
    { to: "/admin/categories", label: "Danh mục", icon: FolderOpen },
];

export default function AdminLayout() {
    return (
        <div className="min-h-screen flex bg-gray-50">
            <Sidebar
                items={adminMenuItems}
                title="Admin Panel"
                titleIcon={<img src={Logo} alt="Logo" className="h-6 w-6 rounded object-cover" />}
            />
            <div className="flex-1 flex flex-col min-h-screen">
                <DashboardHeader notificationsPath="/admin/notifications" />
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}


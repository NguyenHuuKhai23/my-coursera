import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

export interface SidebarItem {
    to: string;
    label: string;
    icon: LucideIcon;
}

interface SidebarProps {
    items: SidebarItem[];
    title?: string;
    titleIcon?: ReactNode;
}

export default function Sidebar({ items, title, titleIcon }: SidebarProps) {
    return (
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen shrink-0">
            {/* Brand / Title */}
            {title && (
                <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-200">
                    {titleIcon}
                    <span className="text-lg font-bold text-gray-900">{title}</span>
                </div>
            )}

            {/* Nav items */}
            <nav className="p-4 space-y-1">
                {items.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to.split("/").length <= 2}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                            ${isActive
                                ? "bg-blue-50 text-blue-700"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`
                        }
                    >
                        <item.icon size={18} />
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}


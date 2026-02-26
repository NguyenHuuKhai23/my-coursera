import type { Notification as NotificationType } from "@/types";
import { CreditCard, CheckCircle, XCircle, Award } from "lucide-react";

interface NotificationItemProps {
    notification: NotificationType;
    onClick?: (notification: NotificationType) => void;
}

const iconMap = {
    PAYMENT_SUCCESS: <CreditCard size={20} className="text-green-600" />,
    COURSE_APPROVED: <CheckCircle size={20} className="text-blue-600" />,
    COURSE_REJECTED: <XCircle size={20} className="text-red-600" />,
    CERTIFICATE_ISSUED: <Award size={20} className="text-yellow-600" />,
};

const bgMap = {
    PAYMENT_SUCCESS: "bg-green-100",
    COURSE_APPROVED: "bg-blue-100",
    COURSE_REJECTED: "bg-red-100",
    CERTIFICATE_ISSUED: "bg-yellow-100",
};

function timeAgo(dateStr: string): string {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));

    if (diffMins < 1) return "Vừa xong";
    if (diffMins < 60) return `${diffMins} phút trước`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} giờ trước`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays} ngày trước`;
    return new Date(dateStr).toLocaleDateString("vi-VN");
}

export default function NotificationItem({ notification, onClick }: NotificationItemProps) {
    return (
        <div
            onClick={() => onClick?.(notification)}
            className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-colors
                ${notification.isRead ? "bg-white hover:bg-gray-50" : "bg-blue-50/50 hover:bg-blue-50"}
            `}
        >
            {/* Icon */}
            <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${bgMap[notification.type]}`}>
                {iconMap[notification.type]}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <p className={`text-sm ${notification.isRead ? "text-gray-700" : "text-gray-900 font-medium"}`}>
                    {notification.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{notification.message}</p>
                <p className="text-xs text-gray-400 mt-1">{timeAgo(notification.createdAt)}</p>
            </div>

            {/* Unread dot */}
            {!notification.isRead && (
                <div className="shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2" />
            )}
        </div>
    );
}


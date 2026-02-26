import type { Notification } from "@/types";
import { NotificationItem, Button } from "@/components/common";
import {Bell, CheckCheck} from "lucide-react";
import {EmptyState} from "@/components/common/index.js";

export default function NotificationsPage() {
    // Mock data
    const notifications: Notification[] = [
        { id: 1, userId: 5, type: "PAYMENT_SUCCESS", title: "Thanh toán thành công", message: "Bạn đã thanh toán thành công khoá học Spring Boot từ Zero đến Hero.", referenceId: 1, isRead: false, isEmailed: true, createdAt: "2025-02-10T10:05:00" },
        { id: 2, userId: 5, type: "COURSE_APPROVED", title: "Khoá học đã được duyệt", message: "Khoá học React.js cho người mới bắt đầu đã được admin duyệt.", referenceId: 4, isRead: false, isEmailed: true, createdAt: "2025-02-09T14:00:00" },
        { id: 3, userId: 5, type: "CERTIFICATE_ISSUED", title: "Chúc mừng! Bạn đã nhận chứng chỉ", message: "Bạn đã hoàn thành 100% khoá học Spring Boot từ Zero đến Hero.", referenceId: 1, isRead: true, isEmailed: true, createdAt: "2025-02-20T18:00:00" },
        { id: 4, userId: 5, type: "PAYMENT_SUCCESS", title: "Thanh toán thành công", message: "Bạn đã thanh toán thành công khoá học Python cho Data Science.", referenceId: 3, isRead: true, isEmailed: false, createdAt: "2025-02-12T09:20:00" },
    ];

    const handleClick = (_notification: Notification) => {};
    const handleMarkAllRead = () => {};

    const unreadCount = notifications.filter((n) => !n.isRead).length;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Thông báo</h1>
                    <p className="text-gray-500">{unreadCount > 0 ? `${unreadCount} chưa đọc` : "Tất cả đã đọc"}</p>
                </div>
                {unreadCount > 0 && (
                    <Button variant="ghost" size="sm" leftIcon={<CheckCheck size={16} />} onClick={handleMarkAllRead}>
                        Đánh dấu tất cả đã đọc
                    </Button>
                )}
            </div>

            {notifications.length > 0 ? (
                <div className="bg-white rounded-xl border divide-y">
                    {notifications.map((n) => (
                        <NotificationItem key={n.id} notification={n} onClick={handleClick} />
                    ))}
                </div>
            ) : (
                <EmptyState
                    icon={<Bell size={64} className="text-gray-200" />}
                    title="Không có thông báo"
                    description="Bạn sẽ nhận thông báo khi có cập nhật mới."
                />
            )}
        </div>
    );
}


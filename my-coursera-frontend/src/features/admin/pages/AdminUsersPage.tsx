import { useState } from "react";
import type { User, Role } from "@/types";
import { DataTable, Button, Badge, ConfirmDialog, Avatar } from "@/components/common";
import { UserCheck, Ban, Shield } from "lucide-react";

type BadgeVariant = "info" | "success" | "warning" | "danger" | "neutral" | "purple";

const roleLabels: Record<Role, { text: string; variant: BadgeVariant }> = {
    ADMIN: { text: "Admin", variant: "danger" },
    INSTRUCTOR: { text: "Giảng viên", variant: "purple" },
    STUDENT: { text: "Học viên", variant: "info" },
};

export default function AdminUsersPage() {
    const [confirmDialog, setConfirmDialog] = useState<{ open: boolean; action: string; userId: number | null }>({ open: false, action: "", userId: null });

    // Mock data
    const users: User[] = [
        { id: 1, email: "admin@coursera.com", fullName: "Admin User", role: "ADMIN", authProvider: "LOCAL", isEnabled: true, createdAt: "2025-01-01T00:00:00" },
        { id: 2, email: "instructor1@gmail.com", fullName: "Nguyễn Văn A", role: "INSTRUCTOR", authProvider: "LOCAL", isEnabled: true, createdAt: "2025-01-02T00:00:00" },
        { id: 3, email: "instructor2@gmail.com", fullName: "Trần Thị B", role: "INSTRUCTOR", authProvider: "GOOGLE", isEnabled: true, createdAt: "2025-01-03T00:00:00" },
        { id: 4, email: "instructor3@gmail.com", fullName: "Lê Văn C", role: "INSTRUCTOR", authProvider: "LOCAL", isEnabled: true, createdAt: "2025-01-04T00:00:00" },
        { id: 5, email: "student1@gmail.com", fullName: "Student One", role: "STUDENT", authProvider: "LOCAL", isEnabled: true, createdAt: "2025-01-05T00:00:00" },
        { id: 6, email: "student2@gmail.com", fullName: "Student Two", role: "STUDENT", authProvider: "GOOGLE", isEnabled: true, createdAt: "2025-01-06T00:00:00" },
        { id: 7, email: "student3@gmail.com", fullName: "Student Three", role: "STUDENT", authProvider: "FACEBOOK", isEnabled: true, createdAt: "2025-01-07T00:00:00" },
        { id: 8, email: "student4@gmail.com", fullName: "Student Four", role: "STUDENT", authProvider: "LOCAL", isEnabled: false, createdAt: "2025-01-08T00:00:00" },
    ];

    const handleAction = () => {
        setConfirmDialog({ open: false, action: "", userId: null });
    };

    const columns = [
        {
            key: "user",
            header: "Người dùng",
            render: (user: User) => (
                <div className="flex items-center gap-3">
                    <Avatar src={user.avatarUrl} name={user.fullName} size="sm" />
                    <div>
                        <p className="font-medium text-gray-900 text-sm">{user.fullName}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                </div>
            ),
        },
        {
            key: "role",
            header: "Vai trò",
            render: (user: User) => {
                const { text, variant } = roleLabels[user.role];
                return <Badge text={text} variant={variant} />;
            },
        },
        {
            key: "authProvider",
            header: "Đăng nhập qua",
            render: (user: User) => <span className="text-sm text-gray-600">{user.authProvider}</span>,
        },
        {
            key: "status",
            header: "Trạng thái",
            render: (user: User) => (
                <Badge text={user.isEnabled ? "Hoạt động" : "Bị khoá"} variant={user.isEnabled ? "success" : "danger"} />
            ),
        },
        {
            key: "createdAt",
            header: "Ngày tạo",
            render: (user: User) => <span className="text-sm text-gray-500">{new Date(user.createdAt).toLocaleDateString("vi-VN")}</span>,
        },
        {
            key: "actions",
            header: "Hành động",
            render: (user: User) => (
                <div className="flex items-center gap-1">
                    {user.role === "STUDENT" && (
                        <Button
                            variant="ghost" size="sm"
                            leftIcon={<Shield size={14} />}
                            onClick={() => setConfirmDialog({ open: true, action: "promote", userId: user.id })}
                            className="!text-purple-600"
                        >
                            Gán Instructor
                        </Button>
                    )}
                    {user.role !== "ADMIN" && (
                        user.isEnabled ? (
                            <Button
                                variant="ghost" size="sm"
                                leftIcon={<Ban size={14} />}
                                onClick={() => setConfirmDialog({ open: true, action: "disable", userId: user.id })}
                                className="!text-red-600"
                            >
                                Khoá
                            </Button>
                        ) : (
                            <Button
                                variant="ghost" size="sm"
                                leftIcon={<UserCheck size={14} />}
                                onClick={() => setConfirmDialog({ open: true, action: "enable", userId: user.id })}
                                className="!text-green-600"
                            >
                                Mở khoá
                            </Button>
                        )
                    )}
                </div>
            ),
        },
    ];

    const getDialogProps = () => {
        switch (confirmDialog.action) {
            case "promote":
                return { title: "Gán role Instructor?", message: "Người dùng sẽ có quyền tạo và quản lý khoá học.", variant: "primary" as const };
            case "disable":
                return { title: "Khoá tài khoản?", message: "Người dùng sẽ không thể đăng nhập.", variant: "danger" as const };
            case "enable":
                return { title: "Mở khoá tài khoản?", message: "Người dùng sẽ có thể đăng nhập lại.", variant: "primary" as const };
            default:
                return { title: "", message: "", variant: "primary" as const };
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Quản lý người dùng</h1>
                <p className="text-gray-500">Quản lý tài khoản và phân quyền</p>
            </div>

            <div className="bg-white rounded-xl border overflow-hidden">
                <DataTable columns={columns} data={users} keyExtractor={(u) => u.id} emptyMessage="Không có người dùng nào" />
            </div>

            <ConfirmDialog
                isOpen={confirmDialog.open}
                onClose={() => setConfirmDialog({ open: false, action: "", userId: null })}
                onConfirm={handleAction}
                {...getDialogProps()}
            />
        </div>
    );
}


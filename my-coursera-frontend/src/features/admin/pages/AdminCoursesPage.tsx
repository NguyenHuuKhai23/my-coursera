import { useState } from "react";
import { Link } from "react-router-dom";
import type { Course } from "@/types";
import { DataTable, CourseStatusBadge, Button, ConfirmDialog, Select } from "@/components/common";
import { Eye, CheckCircle, XCircle, Lock, Unlock } from "lucide-react";
import Modal from "@/components/common/Modal";
import TextArea from "@/components/common/TextArea";

export default function AdminCoursesPage() {
    const [statusFilter, setStatusFilter] = useState<string>("");
    const [rejectModal, setRejectModal] = useState<{ open: boolean; courseId: number | null }>({ open: false, courseId: null });
    const [rejectReason, setRejectReason] = useState("");
    const [confirmDialog, setConfirmDialog] = useState<{ open: boolean; action: string; courseId: number | null }>({ open: false, action: "", courseId: null });

    // Mock data
    const courses: Course[] = [
        { id: 1, instructorId: 2, instructorName: "Nguyễn Văn A", categoryId: 1, categoryName: "Lập trình Web", title: "Spring Boot từ Zero đến Hero", slug: "spring-boot-tu-zero-den-hero", level: "BEGINNER", price: 599000, status: "PUBLISHED", averageRating: 4.5, totalStudents: 3, isDeleted: false, createdAt: "2025-01-15" },
        { id: 2, instructorId: 2, instructorName: "Nguyễn Văn A", categoryId: 1, categoryName: "Lập trình Web", title: "Microservices với Spring Cloud", slug: "microservices-voi-spring-cloud", level: "ADVANCED", price: 899000, status: "PUBLISHED", averageRating: 4.0, totalStudents: 1, isDeleted: false, createdAt: "2025-01-25" },
        { id: 3, instructorId: 2, instructorName: "Nguyễn Văn A", categoryId: 5, categoryName: "Cơ sở dữ liệu", title: "Docker & Kubernetes cho Developer", slug: "docker-kubernetes-cho-developer", level: "INTERMEDIATE", price: 699000, status: "DRAFT", averageRating: 0, totalStudents: 0, isDeleted: false, createdAt: "2025-02-01" },
        { id: 4, instructorId: 3, instructorName: "Trần Thị B", categoryId: 1, categoryName: "Lập trình Web", title: "React.js cho người mới bắt đầu", slug: "reactjs-cho-nguoi-moi-bat-dau", level: "BEGINNER", price: 399000, status: "PUBLISHED", averageRating: 4.75, totalStudents: 2, isDeleted: false, createdAt: "2025-01-18" },
        { id: 7, instructorId: 4, instructorName: "Lê Văn C", categoryId: 3, categoryName: "Data Science & AI", title: "Python cho Data Science", slug: "python-cho-data-science", level: "BEGINNER", price: 449000, status: "PUBLISHED", averageRating: 5.0, totalStudents: 2, isDeleted: false, createdAt: "2025-01-16" },
        { id: 9, instructorId: 2, instructorName: "Nguyễn Văn A", categoryId: 1, categoryName: "Lập trình Web", title: "Node.js Express REST API", slug: "nodejs-express-rest-api", level: "INTERMEDIATE", price: 549000, status: "PENDING", averageRating: 0, totalStudents: 0, isDeleted: false, createdAt: "2025-02-05" },
        { id: 10, instructorId: 3, instructorName: "Trần Thị B", categoryId: 2, categoryName: "Lập trình Mobile", title: "Flutter Mobile Development", slug: "flutter-mobile-development", level: "INTERMEDIATE", price: 599000, status: "PENDING", averageRating: 0, totalStudents: 0, isDeleted: false, createdAt: "2025-02-03" },
    ];

    const statusOptions = [
        { value: "", label: "Tất cả" },
        { value: "PENDING", label: "Chờ duyệt" },
        { value: "PUBLISHED", label: "Đã xuất bản" },
        { value: "DRAFT", label: "Bản nháp" },
        { value: "REJECTED", label: "Bị từ chối" },
        { value: "LOCKED", label: "Đã khoá" },
    ];

    const handleApprove = (_courseId: number) => {};

    const handleReject = () => {
        setRejectModal({ open: false, courseId: null });
        setRejectReason("");
    };

    const handleLockUnlock = (_courseId: number, _action: string) => {
        setConfirmDialog({ open: false, action: "", courseId: null });
    };

    const columns = [
        {
            key: "title",
            header: "Khoá học",
            render: (course: Course) => (
                <div className="max-w-xs">
                    <p className="font-medium text-gray-900 truncate">{course.title}</p>
                    <p className="text-xs text-gray-500">{course.instructorName || `Instructor #${course.instructorId}`}</p>
                </div>
            ),
        },
        {
            key: "status",
            header: "Trạng thái",
            render: (course: Course) => <CourseStatusBadge status={course.status} />,
        },
        {
            key: "totalStudents",
            header: "Học viên",
            render: (course: Course) => <span>{course.totalStudents}</span>,
            sortable: true,
        },
        {
            key: "price",
            header: "Giá",
            render: (course: Course) => <span>{course.price === 0 ? "Miễn phí" : course.price.toLocaleString("vi-VN") + "₫"}</span>,
        },
        {
            key: "actions",
            header: "Hành động",
            render: (course: Course) => (
                <div className="flex items-center gap-1">
                    <Link to={`/admin/courses/${course.id}`}>
                        <Button variant="ghost" size="sm" leftIcon={<Eye size={14} />}>Xem</Button>
                    </Link>
                    {course.status === "PENDING" && (
                        <>
                            <Button variant="ghost" size="sm" leftIcon={<CheckCircle size={14} />} onClick={() => handleApprove(course.id)} className="!text-green-600">
                                Duyệt
                            </Button>
                            <Button variant="ghost" size="sm" leftIcon={<XCircle size={14} />} onClick={() => setRejectModal({ open: true, courseId: course.id })} className="!text-red-600">
                                Từ chối
                            </Button>
                        </>
                    )}
                    {course.status === "PUBLISHED" && (
                        <Button variant="ghost" size="sm" leftIcon={<Lock size={14} />} onClick={() => setConfirmDialog({ open: true, action: "lock", courseId: course.id })} className="!text-orange-600">
                            Khoá
                        </Button>
                    )}
                    {course.status === "LOCKED" && (
                        <Button variant="ghost" size="sm" leftIcon={<Unlock size={14} />} onClick={() => setConfirmDialog({ open: true, action: "unlock", courseId: course.id })} className="!text-blue-600">
                            Mở khoá
                        </Button>
                    )}
                </div>
            ),
        },
    ];

    const filtered = statusFilter ? courses.filter((c) => c.status === statusFilter) : courses;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Quản lý khoá học</h1>
                    <p className="text-gray-500">Duyệt, khoá, quản lý tất cả khoá học</p>
                </div>
                <Select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    options={statusOptions}
                    className="w-44"
                />
            </div>

            <div className="bg-white rounded-xl border overflow-hidden">
                <DataTable columns={columns} data={filtered} keyExtractor={(c) => c.id} emptyMessage="Không có khoá học nào" />
            </div>

            {/* Reject Modal */}
            <Modal isOpen={rejectModal.open} onClose={() => setRejectModal({ open: false, courseId: null })} title="Từ chối khoá học" size="md">
                <div className="space-y-4">
                    <TextArea label="Lý do từ chối" value={rejectReason} onChange={(e) => setRejectReason(e.target.value)} placeholder="Nhập lý do từ chối..." rows={4} />
                    <div className="flex justify-end gap-3">
                        <Button variant="ghost" onClick={() => setRejectModal({ open: false, courseId: null })}>Huỷ</Button>
                        <Button variant="danger" onClick={handleReject} disabled={!rejectReason.trim()}>Từ chối</Button>
                    </div>
                </div>
            </Modal>

            {/* Lock/Unlock Confirm */}
            <ConfirmDialog
                isOpen={confirmDialog.open}
                onClose={() => setConfirmDialog({ open: false, action: "", courseId: null })}
                onConfirm={() => confirmDialog.courseId && handleLockUnlock(confirmDialog.courseId, confirmDialog.action)}
                title={confirmDialog.action === "lock" ? "Khoá khoá học?" : "Mở khoá khoá học?"}
                message={confirmDialog.action === "lock" ? "Khoá học sẽ bị ẩn khỏi danh sách public." : "Khoá học sẽ được hiển thị lại."}
                confirmText="Xác nhận"
                variant={confirmDialog.action === "lock" ? "danger" : "primary"}
            />
        </div>
    );
}


import { Link } from "react-router-dom";
import type { Course } from "@/types";
import { DataTable, CourseStatusBadge, Button, EmptyState } from "@/components/common";
import { Plus, Edit, Send, Eye } from "lucide-react";

export default function InstructorCoursesPage() {
    // Mock data
    const courses: Course[] = [
        { id: 1, instructorId: 2, instructorName: "Nguyễn Văn A", categoryId: 1, categoryName: "Lập trình Web", title: "Spring Boot từ Zero đến Hero", slug: "spring-boot-tu-zero-den-hero", level: "BEGINNER", price: 599000, status: "PUBLISHED", averageRating: 4.5, totalStudents: 3, isDeleted: false, createdAt: "2025-01-15" },
        { id: 2, instructorId: 2, instructorName: "Nguyễn Văn A", categoryId: 1, categoryName: "Lập trình Web", title: "Microservices với Spring Cloud", slug: "microservices-voi-spring-cloud", level: "ADVANCED", price: 899000, status: "PUBLISHED", averageRating: 4.0, totalStudents: 1, isDeleted: false, createdAt: "2025-01-25" },
        { id: 3, instructorId: 2, instructorName: "Nguyễn Văn A", categoryId: 5, categoryName: "Cơ sở dữ liệu", title: "Docker & Kubernetes cho Developer", slug: "docker-kubernetes-cho-developer", level: "INTERMEDIATE", price: 699000, status: "DRAFT", averageRating: 0, totalStudents: 0, isDeleted: false, createdAt: "2025-02-01" },
        { id: 9, instructorId: 2, instructorName: "Nguyễn Văn A", categoryId: 1, categoryName: "Lập trình Web", title: "Node.js Express REST API", slug: "nodejs-express-rest-api", level: "INTERMEDIATE", price: 549000, status: "PENDING", averageRating: 0, totalStudents: 0, isDeleted: false, createdAt: "2025-02-05" },
    ];

    const formatPrice = (price: number) => price === 0 ? "Miễn phí" : price.toLocaleString("vi-VN") + "₫";

    const columns = [
        {
            key: "title",
            header: "Khoá học",
            render: (course: Course) => (
                <div className="max-w-xs">
                    <p className="font-medium text-gray-900 truncate">{course.title}</p>
                    <p className="text-xs text-gray-500">{course.categoryName || "Chưa phân loại"}</p>
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
            render: (course: Course) => <span className="text-gray-700">{course.totalStudents}</span>,
            sortable: true,
        },
        {
            key: "price",
            header: "Giá",
            render: (course: Course) => <span className="text-gray-700">{formatPrice(course.price)}</span>,
        },
        {
            key: "averageRating",
            header: "Rating",
            render: (course: Course) => (
                <span className="text-gray-700">{course.averageRating > 0 ? course.averageRating.toFixed(1) + " ⭐" : "—"}</span>
            ),
        },
        {
            key: "actions",
            header: "Hành động",
            render: (course: Course) => (
                <div className="flex items-center gap-2">
                    <Link to={`/instructor/courses/${course.id}/edit`}>
                        <Button variant="ghost" size="sm" leftIcon={<Edit size={14} />}>Sửa</Button>
                    </Link>
                    <Link to={`/instructor/courses/${course.id}/curriculum`}>
                        <Button variant="ghost" size="sm" leftIcon={<Eye size={14} />}>Nội dung</Button>
                    </Link>
                    {course.status === "DRAFT" && (
                        <Button variant="outline" size="sm" leftIcon={<Send size={14} />}>
                            Gửi duyệt
                        </Button>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Khoá học của tôi</h1>
                    <p className="text-gray-500">Quản lý các khoá học bạn đã tạo</p>
                </div>
                <Link to="/instructor/courses/new">
                    <Button leftIcon={<Plus size={18} />}>Tạo khoá học</Button>
                </Link>
            </div>

            {courses.length > 0 ? (
                <div className="bg-white rounded-xl border overflow-hidden">
                    <DataTable
                        columns={columns}
                        data={courses}
                        keyExtractor={(c) => c.id}
                    />
                </div>
            ) : (
                <EmptyState
                    title="Chưa có khoá học nào"
                    description="Bắt đầu tạo khoá học đầu tiên của bạn!"
                    actionLabel="Tạo khoá học"
                    onAction={() => window.location.href = "/instructor/courses/new"}
                />
            )}
        </div>
    );
}


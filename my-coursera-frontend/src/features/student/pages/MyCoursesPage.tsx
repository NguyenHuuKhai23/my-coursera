import { useState } from "react";
import type { Enrollment, EnrollmentStatus } from "@/types";
import { EnrollmentCard, EmptyState } from "@/components/common";

export default function MyCoursesPage() {
    const [statusFilter, setStatusFilter] = useState<EnrollmentStatus | "ALL">("ALL");

    // Mock data
    const enrollments: Enrollment[] = [
        { id: 1, userId: 5, courseId: 1, paymentId: 1, status: "COMPLETED", progressPercent: 100, lastLessonId: 10, enrolledAt: "2025-02-10T10:05:00", completedAt: "2025-02-20T18:00:00", courseName: "Spring Boot từ Zero đến Hero" },
        { id: 2, userId: 5, courseId: 4, paymentId: 2, status: "ACTIVE", progressPercent: 42.86, lastLessonId: 14, enrolledAt: "2025-02-11T14:15:00", courseName: "React.js cho người mới bắt đầu" },
        { id: 3, userId: 5, courseId: 7, paymentId: 3, status: "ACTIVE", progressPercent: 28.57, lastLessonId: 20, enrolledAt: "2025-02-12T09:20:00", courseName: "Python cho Data Science" },
    ];

    const filtered = statusFilter === "ALL" ? enrollments : enrollments.filter((e) => e.status === statusFilter);

    const tabs: { key: EnrollmentStatus | "ALL"; label: string }[] = [
        { key: "ALL", label: "Tất cả" },
        { key: "ACTIVE", label: "Đang học" },
        { key: "COMPLETED", label: "Đã hoàn thành" },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Khoá học của tôi</h1>
                <p className="text-gray-500">Quản lý các khoá học bạn đã ghi danh</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setStatusFilter(tab.key)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                            ${statusFilter === tab.key
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((enrollment) => (
                        <EnrollmentCard key={enrollment.id} enrollment={enrollment} />
                    ))}
                </div>
            ) : (
                <EmptyState
                    title="Không có khoá học"
                    description={statusFilter === "ALL" ? "Bạn chưa ghi danh khoá học nào." : "Không có khoá học ở trạng thái này."}
                    actionLabel="Khám phá khoá học"
                    onAction={() => window.location.href = "/courses"}
                />
            )}
        </div>
    );
}


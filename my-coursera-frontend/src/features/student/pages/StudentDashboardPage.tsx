import { Link } from "react-router-dom";
import { BookOpen, Award, Play, TrendingUp } from "lucide-react";
import type { Enrollment } from "@/types";
import { Button, EnrollmentCard, EmptyState } from "@/components/common";

/* ===== Stats Card ===== */
function StatsCard({ icon, value, label, color }: { icon: React.ReactNode; value: string | number; label: string; color: string }) {
    return (
        <div className="bg-white rounded-xl border p-5">
            <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${color}`}>{icon}</div>
                <div>
                    <p className="text-2xl font-bold text-gray-900">{value}</p>
                    <p className="text-sm text-gray-500">{label}</p>
                </div>
            </div>
        </div>
    );
}

/* ===== Continue Learning Card ===== */
function ContinueLearningCard({ enrollment }: { enrollment: Enrollment | null }) {
    if (!enrollment) return null;

    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-blue-200 text-sm mb-1">Tiếp tục học</p>
                    <h3 className="text-lg font-semibold mb-2">{enrollment.courseName || `Khoá học #${enrollment.courseId}`}</h3>
                    <div className="flex items-center gap-2 text-blue-100 text-sm">
                        <TrendingUp size={14} />
                        <span>Tiến độ: {enrollment.progressPercent.toFixed(0)}%</span>
                    </div>
                </div>
                <Link to={`/student/courses/${enrollment.courseId}/learn`}>
                    <Button variant="outline" className="!border-white !text-white hover:!bg-white/10" leftIcon={<Play size={16} />}>
                        Học tiếp
                    </Button>
                </Link>
            </div>
            {/* Progress bar */}
            <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                <div className="bg-white rounded-full h-2 transition-all" style={{ width: `${enrollment.progressPercent}%` }} />
            </div>
        </div>
    );
}

/* ===== Main Dashboard ===== */
export default function StudentDashboardPage() {
    // Mock data
    const enrollments: Enrollment[] = [
        { id: 1, userId: 5, courseId: 1, paymentId: 1, status: "COMPLETED", progressPercent: 100, lastLessonId: 10, enrolledAt: "2025-02-10T10:05:00", completedAt: "2025-02-20T18:00:00", courseName: "Spring Boot từ Zero đến Hero" },
        { id: 2, userId: 5, courseId: 4, paymentId: 2, status: "ACTIVE", progressPercent: 42.86, lastLessonId: 14, enrolledAt: "2025-02-11T14:15:00", courseName: "React.js cho người mới bắt đầu" },
        { id: 3, userId: 5, courseId: 7, paymentId: 3, status: "ACTIVE", progressPercent: 28.57, lastLessonId: 20, enrolledAt: "2025-02-12T09:20:00", courseName: "Python cho Data Science" },
    ];
    const lastEnrollment: Enrollment | null = enrollments.find((e) => e.status === "ACTIVE") || null;
    const completedCount = enrollments.filter((e) => e.status === "COMPLETED").length;
    const activeCount = enrollments.filter((e) => e.status === "ACTIVE").length;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500">Xin chào! Đây là tổng quan học tập của bạn.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatsCard icon={<BookOpen size={20} className="text-blue-600" />} value={activeCount} label="Đang học" color="bg-blue-100" />
                <StatsCard icon={<Award size={20} className="text-green-600" />} value={completedCount} label="Đã hoàn thành" color="bg-green-100" />
                <StatsCard icon={<TrendingUp size={20} className="text-purple-600" />} value={enrollments.length} label="Tổng ghi danh" color="bg-purple-100" />
            </div>

            {/* Continue learning */}
            <ContinueLearningCard enrollment={lastEnrollment} />

            {/* Recent enrollments */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Khoá học gần đây</h2>
                    <Link to="/student/courses" className="text-sm text-blue-600 hover:underline">Xem tất cả</Link>
                </div>
                {enrollments.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {enrollments.slice(0, 3).map((e) => (
                            <EnrollmentCard key={e.id} enrollment={e} />
                        ))}
                    </div>
                ) : (
                    <EmptyState
                        title="Chưa có khoá học nào"
                        description="Bắt đầu khám phá và ghi danh khoá học đầu tiên!"
                        actionLabel="Khám phá khoá học"
                        onAction={() => window.location.href = "/courses"}
                    />
                )}
            </div>
        </div>
    );
}


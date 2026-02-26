import type { Enrollment } from "@/types";
import ProgressBar from "./ProgressBar";
import Badge from "./Badge";

interface EnrollmentCardProps {
    enrollment: Enrollment;
    onContinue?: (enrollmentId: number) => void;
}

export default function EnrollmentCard({ enrollment, onContinue }: EnrollmentCardProps) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            {/* Thumbnail */}
            <div className="aspect-video bg-gray-100 overflow-hidden">
                {enrollment.courseThumbnail ? (
                    <img
                        src={enrollment.courseThumbnail}
                        alt={enrollment.courseName}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600">
                        <span className="text-white text-3xl font-bold">
                            {enrollment.courseName?.[0] || "C"}
                        </span>
                    </div>
                )}
            </div>

            <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 flex-1">
                        {enrollment.courseName || `Khoá học #${enrollment.courseId}`}
                    </h3>
                    <Badge
                        text={enrollment.status === "COMPLETED" ? "Hoàn thành" : "Đang học"}
                        variant={enrollment.status === "COMPLETED" ? "success" : "info"}
                    />
                </div>

                <ProgressBar percent={enrollment.progressPercent} size="sm" className="mb-3" />

                {enrollment.status === "ACTIVE" && onContinue && (
                    <button
                        onClick={() => onContinue(enrollment.id)}
                        className="w-full py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                        Tiếp tục học
                    </button>
                )}

                {enrollment.status === "COMPLETED" && enrollment.completedAt && (
                    <p className="text-xs text-gray-500">
                        Hoàn thành: {new Date(enrollment.completedAt).toLocaleDateString("vi-VN")}
                    </p>
                )}
            </div>
        </div>
    );
}


import type { Course } from "@/types";
import { CourseLevelBadge } from "./Badge";
import StarRating from "./StarRating";
import { Users, Heart } from "lucide-react";

interface CourseCardProps {
    course: Course;
    onNavigate?: (slug: string) => void;
    onToggleWishlist?: (courseId: number) => void;
    isWishlisted?: boolean;
    showInstructor?: boolean;
}

function formatPrice(price: number): string {
    if (price === 0) return "Miễn phí";
    return price.toLocaleString("vi-VN") + "₫";
}

export default function CourseCard({
    course,
    onNavigate,
    onToggleWishlist,
    isWishlisted = false,
    showInstructor = true,
}: CourseCardProps) {
    return (
        <div
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group"
            onClick={() => onNavigate?.(course.slug)}
        >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gray-100 overflow-hidden">
                {course.thumbnailUrl ? (
                    <img
                        src={course.thumbnailUrl}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                        <span className="text-white text-3xl font-bold">{course.title[0]}</span>
                    </div>
                )}

                {/* Wishlist button */}
                {onToggleWishlist && (
                    <button
                        onClick={(e) => { e.stopPropagation(); onToggleWishlist(course.id); }}
                        className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white transition-colors"
                    >
                        <Heart
                            size={18}
                            className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}
                        />
                    </button>
                )}

                {/* Level badge */}
                <div className="absolute top-3 left-3">
                    <CourseLevelBadge level={course.level} />
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
                    {course.title}
                </h3>

                {showInstructor && course.instructorName && (
                    <p className="text-sm text-gray-500 mb-2">{course.instructorName}</p>
                )}

                {/* Rating & Students */}
                <div className="flex items-center gap-3 mb-3">
                    <StarRating value={course.averageRating} size={14} showValue />
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Users size={12} />
                        <span>{course.totalStudents}</span>
                    </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{formatPrice(course.price)}</span>
                </div>
            </div>
        </div>
    );
}


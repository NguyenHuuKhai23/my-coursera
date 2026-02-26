import type { Wishlist } from "@/types";
import { CourseCard } from "@/components/common";
import { useNavigate } from "react-router-dom";
import {EmptyState} from "@/components/common/index.js";
import {Heart} from "lucide-react";

export default function WishlistPage() {
    const navigate = useNavigate();

    // Mock data
    const wishlists: Wishlist[] = [
        { id: 1, userId: 5, courseId: 2, createdAt: "2025-02-15T10:00:00", course: { id: 2, instructorId: 2, instructorName: "Nguyễn Văn A", categoryId: 1, categoryName: "Lập trình Web", title: "Microservices với Spring Cloud", slug: "microservices-voi-spring-cloud", level: "ADVANCED", price: 899000, status: "PUBLISHED", averageRating: 4.0, totalStudents: 1, isDeleted: false, createdAt: "2025-01-25" } },
        { id: 2, userId: 5, courseId: 8, createdAt: "2025-02-16T10:00:00", course: { id: 8, instructorId: 4, instructorName: "Lê Văn C", categoryId: 3, categoryName: "Data Science & AI", title: "Machine Learning A-Z", slug: "machine-learning-a-z", level: "ADVANCED", price: 999000, status: "PUBLISHED", averageRating: 4.5, totalStudents: 1, isDeleted: false, createdAt: "2025-01-30" } },
    ];

    const handleRemoveWishlist = (_courseId: number) => {};

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Yêu thích</h1>
                <p className="text-gray-500">Các khoá học bạn đã lưu</p>
            </div>

            {wishlists.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlists.map((w) => w.course && (
                        <CourseCard
                            key={w.id}
                            course={w.course}
                            onNavigate={(slug) => navigate(`/courses/${slug}`)}
                            onToggleWishlist={() => handleRemoveWishlist(w.courseId)}
                            isWishlisted={true}
                        />
                    ))}
                </div>
            ) : (
                <EmptyState
                    icon={<Heart size={64} className="text-gray-200" />}
                    title="Chưa có khoá học yêu thích"
                    description="Lưu các khoá học bạn quan tâm để xem lại sau."
                    actionLabel="Khám phá khoá học"
                    onAction={() => navigate("/courses")}
                />
            )}
        </div>
    );
}


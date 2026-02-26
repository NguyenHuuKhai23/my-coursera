import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Course, Category } from "@/types";
import { CourseCard, FilterPanel, Pagination, EmptyState, CourseCardSkeleton } from "@/components/common";

export default function CourseListPage() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading] = useState(false);

    // Mock data
    const categories: Category[] = [
        { id: 1, name: "Lập trình Web", slug: "lap-trinh-web", description: "Các khóa học về phát triển web" },
        { id: 2, name: "Lập trình Mobile", slug: "lap-trinh-mobile" },
        { id: 3, name: "Data Science & AI", slug: "data-science-ai" },
        { id: 4, name: "DevOps & Cloud", slug: "devops-cloud" },
        { id: 5, name: "Cơ sở dữ liệu", slug: "co-so-du-lieu" },
        { id: 6, name: "Lập trình cơ bản", slug: "lap-trinh-co-ban" },
    ];
    const courses: Course[] = [
        { id: 1, instructorId: 2, instructorName: "Nguyễn Văn A", categoryId: 1, categoryName: "Lập trình Web", title: "Spring Boot từ Zero đến Hero", slug: "spring-boot-tu-zero-den-hero", shortDescription: "Học Spring Boot từ đầu", level: "BEGINNER", price: 599000, status: "PUBLISHED", averageRating: 4.5, totalStudents: 3, isDeleted: false, createdAt: "2025-01-15" },
        { id: 2, instructorId: 2, instructorName: "Nguyễn Văn A", categoryId: 1, categoryName: "Lập trình Web", title: "Microservices với Spring Cloud", slug: "microservices-voi-spring-cloud", shortDescription: "Xây dựng hệ thống Microservices", level: "ADVANCED", price: 899000, status: "PUBLISHED", averageRating: 4.0, totalStudents: 1, isDeleted: false, createdAt: "2025-01-25" },
        { id: 4, instructorId: 3, instructorName: "Trần Thị B", categoryId: 1, categoryName: "Lập trình Web", title: "React.js cho người mới bắt đầu", slug: "reactjs-cho-nguoi-moi-bat-dau", shortDescription: "Bắt đầu hành trình Frontend với React.js", level: "BEGINNER", price: 399000, status: "PUBLISHED", averageRating: 4.75, totalStudents: 2, isDeleted: false, createdAt: "2025-01-18" },
        { id: 5, instructorId: 3, instructorName: "Trần Thị B", categoryId: 1, categoryName: "Lập trình Web", title: "TypeScript Masterclass", slug: "typescript-masterclass", shortDescription: "TypeScript từ cơ bản đến nâng cao", level: "INTERMEDIATE", price: 499000, status: "PUBLISHED", averageRating: 0, totalStudents: 0, isDeleted: false, createdAt: "2025-01-28" },
        { id: 7, instructorId: 4, instructorName: "Lê Văn C", categoryId: 3, categoryName: "Data Science & AI", title: "Python cho Data Science", slug: "python-cho-data-science", shortDescription: "Nền tảng Python cho phân tích dữ liệu", level: "BEGINNER", price: 449000, status: "PUBLISHED", averageRating: 5.0, totalStudents: 2, isDeleted: false, createdAt: "2025-01-16" },
        { id: 8, instructorId: 4, instructorName: "Lê Văn C", categoryId: 3, categoryName: "Data Science & AI", title: "Machine Learning A-Z", slug: "machine-learning-a-z", shortDescription: "Từ lý thuyết đến thực hành ML", level: "ADVANCED", price: 999000, status: "PUBLISHED", averageRating: 4.5, totalStudents: 1, isDeleted: false, createdAt: "2025-01-30" },
    ];
    const totalPages = 1;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Page header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Khóa học</h1>
                <p className="text-gray-500 mt-1">Khám phá hàng ngàn khóa học chất lượng</p>
            </div>

            {/* Filters */}
            <FilterPanel
                keyword={keyword}
                onKeywordChange={setKeyword}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedLevel={selectedLevel}
                onLevelChange={setSelectedLevel}
                categories={categories}
                className="mb-8"
            />

            {/* Results */}
            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <CourseCardSkeleton key={i} />
                    ))}
                </div>
            ) : courses.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {courses.map((course) => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                onNavigate={(slug) => navigate(`/courses/${slug}`)}
                            />
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        className="mt-8"
                    />
                </>
            ) : (
                <EmptyState
                    title="Không tìm thấy khóa học"
                    description="Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm"
                />
            )}
        </div>
    );
}


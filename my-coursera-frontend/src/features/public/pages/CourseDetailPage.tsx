import { useState } from "react";
import { useParams } from "react-router-dom";
import {
    Clock, Users, BarChart3, BookOpen, Play, FileText,
    ChevronDown, ChevronUp, Heart, ShoppingCart, Download
} from "lucide-react";
import type { Course, Section, Review } from "@/types";
import {
    Button, StarRating, CourseLevelBadge, ReviewCard,
    Avatar, LoadingSpinner
} from "@/components/common";

/* ===== Course Info Header ===== */
function CourseHeader({ course }: { course: Course }) {
    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <CourseLevelBadge level={course.level} />
                            {course.categoryName && (
                                <span className="text-sm text-gray-300">{course.categoryName}</span>
                            )}
                        </div>
                        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                        <p className="text-gray-300 mb-4">{course.shortDescription}</p>
                        <div className="flex items-center gap-6 text-sm text-gray-300">
                            <span className="flex items-center gap-1">
                                <StarRating value={course.averageRating} size={14} />
                                <span className="ml-1">{course.averageRating.toFixed(1)}</span>
                            </span>
                            <span className="flex items-center gap-1"><Users size={14} /> {course.totalStudents} học viên</span>
                            {course.instructorName && (
                                <span>Bởi <strong className="text-white">{course.instructorName}</strong></span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ===== Sticky Sidebar (Enroll Card) ===== */
function EnrollCard({ course }: { course: Course }) {
    const formatPrice = (price: number) => price === 0 ? "Miễn phí" : price.toLocaleString("vi-VN") + "₫";

    return (
        <div className="bg-white rounded-xl shadow-lg border p-6 sticky top-24">
            {/* Thumbnail */}
            <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100">
                {course.thumbnailUrl ? (
                    <img src={course.thumbnailUrl} alt={course.title} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                        <Play size={48} className="text-white" />
                    </div>
                )}
            </div>

            <p className="text-3xl font-bold text-gray-900 mb-4">{formatPrice(course.price)}</p>

            <div className="space-y-3">
                <Button fullWidth leftIcon={<ShoppingCart size={18} />}>
                    {course.price === 0 ? "Ghi danh miễn phí" : "Mua khoá học"}
                </Button>
                <Button variant="outline" fullWidth leftIcon={<Heart size={18} />}>
                    Thêm vào yêu thích
                </Button>
            </div>

            <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2"><Clock size={16} /> Truy cập trọn đời</div>
                <div className="flex items-center gap-2"><BookOpen size={16} /> {course.sections?.length || 0} chương</div>
                <div className="flex items-center gap-2"><BarChart3 size={16} /> Cấp độ: {course.level}</div>
                <div className="flex items-center gap-2"><Download size={16} /> Tài nguyên tải về</div>
            </div>
        </div>
    );
}

/* ===== Course Accordion (Sections & Lessons) ===== */
function CourseAccordion({ sections }: { sections: Section[] }) {
    const [openSections, setOpenSections] = useState<Set<number>>(new Set([sections[0]?.id]));

    const toggle = (id: number) => {
        setOpenSections((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    const totalLessons = sections.reduce((sum, s) => sum + (s.lessons?.length || 0), 0);

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Nội dung khóa học</h2>
                <span className="text-sm text-gray-500">{sections.length} chương • {totalLessons} bài học</span>
            </div>
            <div className="border rounded-xl overflow-hidden">
                {sections.map((section) => (
                    <div key={section.id} className="border-b last:border-0">
                        {/* Section header */}
                        <button
                            onClick={() => toggle(section.id)}
                            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                                {openSections.has(section.id) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                {section.title}
                            </div>
                            <span className="text-xs text-gray-500">
                                {section.lessons?.length || 0} bài
                            </span>
                        </button>

                        {/* Lessons */}
                        {openSections.has(section.id) && section.lessons && (
                            <div className="divide-y">
                                {section.lessons.map((lesson) => (
                                    <div key={lesson.id} className="flex items-center gap-3 px-6 py-2.5 text-sm">
                                        {lesson.contentType === "VIDEO" ? (
                                            <Play size={14} className="text-gray-400 shrink-0" />
                                        ) : (
                                            <FileText size={14} className="text-gray-400 shrink-0" />
                                        )}
                                        <span className="flex-1 text-gray-700">{lesson.title}</span>
                                        {lesson.isPreview && (
                                            <span className="text-xs text-blue-600 font-medium">Xem trước</span>
                                        )}
                                        {lesson.durationSeconds > 0 && (
                                            <span className="text-xs text-gray-400">
                                                {Math.floor(lesson.durationSeconds / 60)}:{String(lesson.durationSeconds % 60).padStart(2, "0")}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ===== Reviews Section ===== */
function ReviewsSection({ reviews, averageRating }: { reviews: Review[]; averageRating: number }) {
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Đánh giá</h2>
            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                    <p className="text-4xl font-bold text-gray-900">{averageRating.toFixed(1)}</p>
                    <StarRating value={averageRating} size={18} />
                    <p className="text-sm text-gray-500 mt-1">{reviews.length} đánh giá</p>
                </div>
            </div>

            {reviews.length > 0 ? (
                <div className="space-y-4">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            ) : (
                <p className="text-sm text-gray-400">Chưa có đánh giá nào.</p>
            )}
        </div>
    );
}

/* ===== Instructor Card ===== */
function InstructorInfo({ course }: { course: Course }) {
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Giảng viên</h2>
            <div className="flex items-center gap-4">
                <Avatar src={null} name={course.instructorName || "Giảng viên"} size="lg" />
                <div>
                    <p className="font-semibold text-gray-900">{course.instructorName}</p>
                    <p className="text-sm text-gray-500">Giảng viên</p>
                </div>
            </div>
        </div>
    );
}

/* ===== Main Page ===== */
export default function CourseDetailPage() {
    const { slug: _slug } = useParams<{ slug: string }>();
    const [isLoading] = useState(false);

    // Mock data
    const course: Course = {
        id: 1, instructorId: 2, instructorName: "Nguyễn Văn A", categoryId: 1, categoryName: "Lập trình Web",
        title: "Spring Boot từ Zero đến Hero", slug: "spring-boot-tu-zero-den-hero",
        shortDescription: "Học Spring Boot từ đầu, xây dựng REST API chuyên nghiệp",
        description: "Khóa học Spring Boot toàn diện giúp bạn nắm vững framework phổ biến nhất để xây dựng ứng dụng Java. Bạn sẽ học từ cơ bản đến nâng cao: Spring Core, Spring MVC, Spring Data JPA, Spring Security, REST API, Testing và Deploy.",
        level: "BEGINNER", price: 599000, status: "PUBLISHED", averageRating: 4.5, totalStudents: 3, isDeleted: false, createdAt: "2025-01-15",
        sections: [
            { id: 1, courseId: 1, title: "Giới thiệu Spring Boot", sortOrder: 1, lessons: [
                { id: 1, sectionId: 1, title: "Spring Boot là gì?", contentType: "VIDEO", durationSeconds: 720, sortOrder: 1, isPreview: true },
                { id: 2, sectionId: 1, title: "Cài đặt môi trường", contentType: "VIDEO", durationSeconds: 900, sortOrder: 2, isPreview: true },
                { id: 3, sectionId: 1, title: "Tạo project đầu tiên", contentType: "VIDEO", durationSeconds: 1080, sortOrder: 3, isPreview: false },
            ]},
            { id: 2, courseId: 1, title: "Spring Core & DI", sortOrder: 2, lessons: [
                { id: 4, sectionId: 2, title: "Dependency Injection", contentType: "VIDEO", durationSeconds: 1200, sortOrder: 1, isPreview: false },
                { id: 5, sectionId: 2, title: "IoC Container", contentType: "VIDEO", durationSeconds: 960, sortOrder: 2, isPreview: false },
                { id: 6, sectionId: 2, title: "Bean Lifecycle", contentType: "TEXT", durationSeconds: 600, sortOrder: 3, isPreview: false },
            ]},
            { id: 3, courseId: 1, title: "REST API với Spring MVC", sortOrder: 3, lessons: [
                { id: 7, sectionId: 3, title: "Controller & RequestMapping", contentType: "VIDEO", durationSeconds: 1500, sortOrder: 1, isPreview: false },
                { id: 8, sectionId: 3, title: "Request / Response DTO", contentType: "VIDEO", durationSeconds: 1100, sortOrder: 2, isPreview: false },
                { id: 9, sectionId: 3, title: "Validation & Exception Handling", contentType: "VIDEO", durationSeconds: 1300, sortOrder: 3, isPreview: false },
                { id: 10, sectionId: 3, title: "Bài tập thực hành", contentType: "TEXT", durationSeconds: 0, sortOrder: 4, isPreview: false, resources: [
                    { id: 1, lessonId: 10, fileName: "spring-boot-exercises.pdf", fileUrl: "/resources/spring-boot-exercises.pdf", fileSize: 2048000 },
                ]},
            ]},
        ],
    };
    const reviews: Review[] = [
        { id: 1, userId: 5, courseId: 1, rating: 5, comment: "Khóa học rất tuyệt vời! Giảng viên giải thích rõ ràng, dễ hiểu. Rất recommend cho ai muốn học Spring Boot.", createdAt: "2025-02-20T19:00:00", userName: "Student 1", userAvatar: undefined },
        { id: 2, userId: 6, courseId: 1, rating: 4, comment: "Nội dung tốt, nhưng phần Spring Security có thể giải thích thêm chi tiết hơn.", createdAt: "2025-02-18T20:00:00", userName: "Student 2", userAvatar: undefined },
    ];

    if (isLoading) return <LoadingSpinner fullPage />;


    return (
        <div>
            <CourseHeader course={course} />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left content */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Description */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Mô tả khóa học</h2>
                            <div className="prose prose-sm text-gray-600 max-w-none">
                                {course.description}
                            </div>
                        </div>

                        {/* Curriculum */}
                        {course.sections && course.sections.length > 0 && (
                            <CourseAccordion sections={course.sections} />
                        )}

                        {/* Instructor */}
                        <InstructorInfo course={course} />

                        {/* Reviews */}
                        <ReviewsSection reviews={reviews} averageRating={course.averageRating} />
                    </div>

                    {/* Right sidebar */}
                    <div className="lg:col-span-1">
                        <EnrollCard course={course} />
                    </div>
                </div>
            </div>
        </div>
    );
}


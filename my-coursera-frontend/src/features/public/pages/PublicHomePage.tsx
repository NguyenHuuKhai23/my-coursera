import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, Play } from "lucide-react";
import { Button, CourseCard } from "@/components/common";
import type { Course } from "@/types";

/* ===== Hero Section ===== */
function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Học mọi lúc,<br />
                            <span className="text-blue-200">mọi nơi</span> cùng<br />
                            Mini Coursera
                        </h1>
                        <p className="text-lg text-blue-100 mb-8 max-w-lg">
                            Hàng ngàn khóa học chất lượng từ những giảng viên hàng đầu.
                            Bắt đầu hành trình học tập của bạn ngay hôm nay.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/courses">
                                <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                                    Khám phá khóa học
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                                    Đăng ký miễn phí
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center">
                        <div className="w-80 h-80 rounded-full bg-white/10 flex items-center justify-center">
                            <Play size={80} className="text-white/80 ml-4" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 100" className="w-full text-gray-50">
                    <path fill="currentColor" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,100L0,100Z" />
                </svg>
            </div>
        </section>
    );
}

/* ===== Stats Section ===== */
function StatsSection() {
    const stats = [
        { icon: <BookOpen size={28} />, value: "100+", label: "Khóa học" },
        { icon: <Users size={28} />, value: "5,000+", label: "Học viên" },
        { icon: <Award size={28} />, value: "50+", label: "Giảng viên" },
    ];

    return (
        <section className="py-12 bg-white border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-3 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-3">
                                {stat.icon}
                            </div>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ===== Featured Courses Section ===== */
function FeaturedCoursesSection() {
    const courses: Course[] = [
        { id: 1, instructorId: 2, instructorName: "Nguyễn Văn A", categoryId: 1, categoryName: "Lập trình Web", title: "Spring Boot từ Zero đến Hero", slug: "spring-boot-tu-zero-den-hero", shortDescription: "Học Spring Boot từ đầu, xây dựng REST API chuyên nghiệp", level: "BEGINNER", price: 599000, status: "PUBLISHED", averageRating: 4.5, totalStudents: 3, isDeleted: false, createdAt: "2025-01-15" },
        { id: 4, instructorId: 3, instructorName: "Trần Thị B", categoryId: 1, categoryName: "Lập trình Web", title: "React.js cho người mới bắt đầu", slug: "reactjs-cho-nguoi-moi-bat-dau", shortDescription: "Bắt đầu hành trình Frontend với React.js", level: "BEGINNER", price: 399000, status: "PUBLISHED", averageRating: 4.75, totalStudents: 2, isDeleted: false, createdAt: "2025-01-18" },
        { id: 7, instructorId: 4, instructorName: "Lê Văn C", categoryId: 3, categoryName: "Data Science & AI", title: "Python cho Data Science", slug: "python-cho-data-science", shortDescription: "Nền tảng Python cho phân tích dữ liệu", level: "BEGINNER", price: 449000, status: "PUBLISHED", averageRating: 5.0, totalStudents: 2, isDeleted: false, createdAt: "2025-01-16" },
        { id: 8, instructorId: 4, instructorName: "Lê Văn C", categoryId: 3, categoryName: "Data Science & AI", title: "Machine Learning A-Z", slug: "machine-learning-a-z", shortDescription: "Từ lý thuyết đến thực hành Machine Learning", level: "ADVANCED", price: 999000, status: "PUBLISHED", averageRating: 4.5, totalStudents: 1, isDeleted: false, createdAt: "2025-01-30" },
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Khóa học nổi bật</h2>
                        <p className="text-gray-500 mt-1">Những khóa học được yêu thích nhất</p>
                    </div>
                    <Link to="/courses" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                        Xem tất cả <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ===== Categories Section ===== */
function CategoriesSection() {
    // Mock data
    const categories = [
        { name: "Lập trình Web", slug: "lap-trinh-web", icon: "🌐" },
        { name: "Lập trình Mobile", slug: "lap-trinh-mobile", icon: "📱" },
        { name: "Data Science & AI", slug: "data-science-ai", icon: "🤖" },
        { name: "DevOps & Cloud", slug: "devops-cloud", icon: "☁️" },
        { name: "Cơ sở dữ liệu", slug: "co-so-du-lieu", icon: "🗄️" },
        { name: "Lập trình cơ bản", slug: "lap-trinh-co-ban", icon: "💻" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-900">Danh mục phổ biến</h2>
                    <p className="text-gray-500 mt-1">Chọn lĩnh vực bạn quan tâm</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            to={`/courses?category=${cat.slug}`}
                            className="flex flex-col items-center gap-2 p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                        >
                            <span className="text-3xl">{cat.icon}</span>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 text-center">
                                {cat.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ===== CTA Section ===== */
function CTASection() {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu?</h2>
                <p className="text-lg text-blue-100 mb-8">
                    Đăng ký ngay để truy cập hàng ngàn khóa học chất lượng từ giảng viên hàng đầu.
                </p>
                <Link to="/signup">
                    <Button size="lg" variant="outline" className="!border-white !text-white hover:!bg-white/10">
                        Đăng ký miễn phí ngay
                    </Button>
                </Link>
            </div>
        </section>
    );
}

/* ===== Main Home Page ===== */
export default function PublicHomePage() {
    return (
        <div>
            <HeroSection />
            <StatsSection />
            <FeaturedCoursesSection />
            <CategoriesSection />
            <CTASection />
        </div>
    );
}


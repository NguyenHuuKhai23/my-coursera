import { BookOpen, Users, DollarSign, TrendingUp } from "lucide-react";

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

export default function InstructorDashboardPage() {
    // Mock data
    const totalCourses = 4;
    const totalStudents = 6;
    const totalRevenue = 3845000;

    const formatRevenue = (amount: number) => amount.toLocaleString("vi-VN") + "₫";

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Giảng viên</h1>
                <p className="text-gray-500">Tổng quan hoạt động giảng dạy</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard icon={<BookOpen size={20} className="text-blue-600" />} value={totalCourses} label="Khoá học" color="bg-blue-100" />
                <StatsCard icon={<Users size={20} className="text-green-600" />} value={totalStudents} label="Học viên" color="bg-green-100" />
                <StatsCard icon={<DollarSign size={20} className="text-yellow-600" />} value={formatRevenue(totalRevenue)} label="Doanh thu" color="bg-yellow-100" />
                <StatsCard icon={<TrendingUp size={20} className="text-purple-600" />} value="0" label="Đánh giá TB" color="bg-purple-100" />
            </div>

            {/* Recent activity placeholder */}
            <div className="bg-white rounded-xl border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Ghi danh gần đây</h2>
                <div className="space-y-3">
                    {[
                        { student: "Student One", course: "Spring Boot từ Zero đến Hero", date: "10/02/2025" },
                        { student: "Student Two", course: "React.js cho người mới bắt đầu", date: "11/02/2025" },
                        { student: "Student Three", course: "Python cho Data Science", date: "12/02/2025" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 text-sm">
                            <div>
                                <span className="font-medium text-gray-900">{item.student}</span>
                                <span className="text-gray-400 mx-2">→</span>
                                <span className="text-gray-600">{item.course}</span>
                            </div>
                            <span className="text-gray-400 text-xs">{item.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


import { BookOpen, Users, DollarSign, FileCheck } from "lucide-react";

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

export default function AdminDashboardPage() {

    // Mock data
    const totalUsers = 10;
    const totalCourses = 10;
    const pendingCourses = 2;
    const totalRevenue = 8741000;

    const formatRevenue = (amount: number) => amount.toLocaleString("vi-VN") + "₫";

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-500">Tổng quan hệ thống</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard icon={<Users size={20} className="text-blue-600" />} value={totalUsers} label="Người dùng" color="bg-blue-100" />
                <StatsCard icon={<BookOpen size={20} className="text-green-600" />} value={totalCourses} label="Khoá học" color="bg-green-100" />
                <StatsCard icon={<FileCheck size={20} className="text-yellow-600" />} value={pendingCourses} label="Chờ duyệt" color="bg-yellow-100" />
                <StatsCard icon={<DollarSign size={20} className="text-purple-600" />} value={formatRevenue(totalRevenue)} label="Tổng doanh thu" color="bg-purple-100" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Khoá học chờ duyệt</h2>
                    <div className="space-y-3">
                        {[
                            { title: "Node.js Express REST API", instructor: "Nguyễn Văn A", date: "05/02/2025" },
                            { title: "Flutter Mobile Development", instructor: "Trần Thị B", date: "03/02/2025" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 text-sm">
                                <div>
                                    <p className="font-medium text-gray-900">{item.title}</p>
                                    <p className="text-xs text-gray-500">bởi {item.instructor}</p>
                                </div>
                                <span className="text-xs text-gray-400">{item.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-xl border p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Người dùng mới</h2>
                    <div className="space-y-3">
                        {[
                            { name: "Student Five", email: "student5@gmail.com", date: "20/02/2025" },
                            { name: "Student Four", email: "student4@gmail.com", date: "18/02/2025" },
                            { name: "Student Three", email: "student3@gmail.com", date: "15/02/2025" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 text-sm">
                                <div>
                                    <p className="font-medium text-gray-900">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.email}</p>
                                </div>
                                <span className="text-xs text-gray-400">{item.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


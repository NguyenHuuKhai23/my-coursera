export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Về Mini Coursera</h1>

            <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                <p>
                    <strong>Mini Coursera</strong> là nền tảng học trực tuyến được xây dựng với mục tiêu mang đến
                    những khóa học chất lượng cao, dễ tiếp cận cho mọi người.
                </p>

                <h2 className="text-xl font-semibold text-gray-900">Sứ mệnh</h2>
                <p>
                    Chúng tôi tin rằng giáo dục chất lượng nên được tiếp cận bởi tất cả mọi người,
                    bất kể vị trí địa lý hay hoàn cảnh. Mini Coursera kết nối giảng viên giỏi với
                    học viên ham học hỏi trên cùng một nền tảng.
                </p>

                <h2 className="text-xl font-semibold text-gray-900">Tính năng nổi bật</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Hàng ngàn khóa học từ cơ bản đến nâng cao</li>
                    <li>Giảng viên uy tín, giàu kinh nghiệm</li>
                    <li>Theo dõi tiến độ học tập chi tiết</li>
                    <li>Chứng chỉ hoàn thành khóa học</li>
                    <li>Thanh toán an toàn qua VNPay</li>
                    <li>Học mọi lúc, mọi nơi</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-900">Liên hệ</h2>
                <p>
                    Email: <a href="mailto:support@minicoursera.com" className="text-blue-600">support@minicoursera.com</a><br />
                    Hotline: 1900-xxxx
                </p>
            </div>
        </div>
    );
}


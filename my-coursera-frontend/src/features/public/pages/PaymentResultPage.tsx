import { CheckCircle, XCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/common";

export default function PaymentResultPage() {
    const [searchParams] = useSearchParams();
    const status = searchParams.get("status"); // "success" | "failed"
    const orderCode = searchParams.get("orderCode");

    const isSuccess = status === "success";

    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center
                    ${isSuccess ? "bg-green-100" : "bg-red-100"}`}
                >
                    {isSuccess
                        ? <CheckCircle size={40} className="text-green-600" />
                        : <XCircle size={40} className="text-red-600" />
                    }
                </div>

                <h1 className={`text-2xl font-bold mb-2 ${isSuccess ? "text-green-700" : "text-red-700"}`}>
                    {isSuccess ? "Thanh toán thành công!" : "Thanh toán thất bại"}
                </h1>

                <p className="text-gray-500 mb-2">
                    {isSuccess
                        ? "Bạn đã ghi danh thành công. Hãy bắt đầu học ngay!"
                        : "Giao dịch không thành công. Vui lòng thử lại."
                    }
                </p>

                {orderCode && (
                    <p className="text-sm text-gray-400 mb-6">
                        Mã đơn hàng: <span className="font-mono">{orderCode}</span>
                    </p>
                )}

                <div className="flex justify-center gap-3">
                    {isSuccess ? (
                        <Link to="/student/courses">
                            <Button>Đi đến khoá học</Button>
                        </Link>
                    ) : (
                        <Link to="/courses">
                            <Button variant="outline">Quay lại khóa học</Button>
                        </Link>
                    )}
                    <Link to="/">
                        <Button variant="ghost">Trang chủ</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


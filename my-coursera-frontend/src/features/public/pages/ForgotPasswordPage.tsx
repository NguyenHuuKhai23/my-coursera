import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Button, Input } from "@/components/common";
import Logo from "@/assets/images/Logo.jpg";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isLoading] = useState(false);
    const [sent] = useState(false);
    const [error] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Top bar with logo → home */}
            <div className="px-6 py-4">
                <Link to="/" className="inline-flex items-center gap-2 group">
                    <img src={Logo} alt="Mini Coursera" className="h-10 w-10 rounded-lg object-cover" />
                    <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Mini Coursera
                    </span>
                </Link>
            </div>

            {/* Center content */}
            <div className="flex-1 flex items-center justify-center px-4 pb-12">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Quên mật khẩu</h1>
                        <p className="text-gray-500 mt-2">Nhập email để nhận link đặt lại mật khẩu</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border p-8">
                        {sent ? (
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                    <Mail className="text-green-600" size={28} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email đã được gửi!</h3>
                                <p className="text-sm text-gray-500 mb-6">
                                    Vui lòng kiểm tra hộp thư <strong>{email}</strong> để đặt lại mật khẩu.
                                </p>
                                <Link to="/login" className="text-blue-600 font-medium hover:underline text-sm">
                                    ← Quay lại đăng nhập
                                </Link>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {error && (
                                    <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">{error}</div>
                                )}
                                <Input
                                    label="Email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    leftIcon={<Mail size={18} />}
                                />
                                <Button type="submit" fullWidth isLoading={isLoading}>
                                    Gửi link đặt lại
                                </Button>
                            </form>
                        )}
                    </div>

                    {!sent && (
                        <p className="text-center mt-6 text-sm text-gray-500">
                            Nhớ mật khẩu rồi?{" "}
                            <Link to="/login" className="text-blue-600 font-medium hover:underline">
                                Đăng nhập
                            </Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Button, Input } from "@/components/common";
import GoogleLogo from "@/assets/images/GoogleLogo.png";
import FacebookLogo from "@/assets/images/FacebookLogo.webp";
import Logo from "@/assets/images/Logo.jpg";

export default function SignupPage() {
    const [form, setForm] = useState({ fullName: "", email: "", password: "", confirmPassword: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading] = useState(false);
    const [errors] = useState<Record<string, string>>({});

    const updateField = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const handleGoogleSignup = () => {};

    const handleFacebookSignup = () => {};

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
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Đăng ký</h1>
                        <p className="text-gray-500 mt-2">Tạo tài khoản để bắt đầu học</p>
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-2xl shadow-sm border p-8">
                        {/* OAuth Buttons */}
                        <div className="space-y-3 mb-6">
                            <button
                                onClick={handleGoogleSignup}
                                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                            >
                                <img src={GoogleLogo} alt="Google" className="w-5 h-5" />
                                Đăng ký với Google
                            </button>
                            <button
                                onClick={handleFacebookSignup}
                                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                            >
                                <img src={FacebookLogo} alt="Facebook" className="w-5 h-5" />
                                Đăng ký với Facebook
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">hoặc đăng ký với email</span>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {errors.general && (
                                <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">{errors.general}</div>
                            )}

                            <Input
                                label="Họ và tên"
                                placeholder="Nguyễn Văn A"
                                value={form.fullName}
                                onChange={(e) => updateField("fullName", e.target.value)}
                                error={errors.fullName}
                                leftIcon={<User size={18} />}
                            />

                            <Input
                                label="Email"
                                type="email"
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={(e) => updateField("email", e.target.value)}
                                error={errors.email}
                                leftIcon={<Mail size={18} />}
                            />

                            <Input
                                label="Mật khẩu"
                                type={showPassword ? "text" : "password"}
                                placeholder="Ít nhất 8 ký tự"
                                value={form.password}
                                onChange={(e) => updateField("password", e.target.value)}
                                error={errors.password}
                                leftIcon={<Lock size={18} />}
                                rightIcon={
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                }
                            />

                            <Input
                                label="Xác nhận mật khẩu"
                                type={showPassword ? "text" : "password"}
                                placeholder="Nhập lại mật khẩu"
                                value={form.confirmPassword}
                                onChange={(e) => updateField("confirmPassword", e.target.value)}
                                error={errors.confirmPassword}
                                leftIcon={<Lock size={18} />}
                            />

                            <p className="text-xs text-gray-500">
                                Bằng việc đăng ký, bạn đồng ý với{" "}
                                <a href="#" className="text-blue-600 hover:underline">
                                    Điều khoản dịch vụ
                                </a>{" "}
                                và{" "}
                                <a href="#" className="text-blue-600 hover:underline">
                                    Chính sách bảo mật
                                </a>
                                .
                            </p>

                            <Button type="submit" fullWidth isLoading={isLoading}>
                                Đăng ký
                            </Button>
                        </form>
                    </div>

                    {/* Footer */}
                    <p className="text-center mt-6 text-sm text-gray-500">
                        Đã có tài khoản?{" "}
                        <Link to="/login" className="text-blue-600 font-medium hover:underline">
                            Đăng nhập
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}


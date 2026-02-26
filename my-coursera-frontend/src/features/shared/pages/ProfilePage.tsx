import { useState } from "react";
import { Button, Input, TextArea, FileUpload } from "@/components/common";
import { UseAuth } from "@/hooks/useAuth";

export default function ProfilePage() {
    const { user } = UseAuth();
    const [isLoading] = useState(false);
    const [form, setForm] = useState({
        fullName: "Student One",
        phone: "0901234567",
        bio: "Tôi là học viên đam mê công nghệ.",
    });
    const [avatarFile, setAvatarFile] = useState<File | null>(null);

    const updateField = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        void avatarFile;
    };

    return (
        <div className="max-w-2xl">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Hồ sơ cá nhân</h1>
                <p className="text-gray-500">Cập nhật thông tin của bạn</p>
            </div>

            <div className="bg-white rounded-xl border p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Avatar */}
                    <FileUpload
                        label="Ảnh đại diện"
                        accept="image/*"
                        variant="avatar"
                        onChange={setAvatarFile}
                    />

                    {/* Email (readonly) */}
                    <Input
                        label="Email"
                        value={user?.email || ""}
                        disabled
                        helperText="Email không thể thay đổi"
                    />

                    {/* Full name */}
                    <Input
                        label="Họ và tên"
                        value={form.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        placeholder="Nguyễn Văn A"
                    />

                    {/* Phone */}
                    <Input
                        label="Số điện thoại"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="0900000000"
                    />

                    {/* Bio */}
                    <TextArea
                        label="Giới thiệu bản thân"
                        value={form.bio}
                        onChange={(e) => updateField("bio", e.target.value)}
                        placeholder="Giới thiệu ngắn về bạn..."
                        rows={4}
                    />

                    <div className="flex justify-end">
                        <Button type="submit" isLoading={isLoading}>
                            Lưu thay đổi
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}


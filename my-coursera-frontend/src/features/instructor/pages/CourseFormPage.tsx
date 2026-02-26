import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Category, CourseLevel } from "@/types";
import { Button, Input, TextArea, Select, FileUpload } from "@/components/common";

const levelOptions: { value: CourseLevel; label: string }[] = [
    { value: "BEGINNER", label: "Cơ bản" },
    { value: "INTERMEDIATE", label: "Trung cấp" },
    { value: "ADVANCED", label: "Nâng cao" },
];

export default function CourseFormPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const isEdit = !!id;

    const [isLoading] = useState(false);
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [form, setForm] = useState({
        title: isEdit ? "Spring Boot từ Zero đến Hero" : "",
        shortDescription: isEdit ? "Học Spring Boot từ đầu, xây dựng REST API chuyên nghiệp" : "",
        description: isEdit ? "Khóa học Spring Boot toàn diện giúp bạn nắm vững framework phổ biến nhất." : "",
        categoryId: isEdit ? "1" : "",
        level: (isEdit ? "BEGINNER" : "BEGINNER") as CourseLevel,
        price: isEdit ? "599000" : "",
    });
    const [errors] = useState<Record<string, string>>({});

    // Mock data
    const categories: Category[] = [
        { id: 1, name: "Lập trình Web", slug: "lap-trinh-web" },
        { id: 2, name: "Lập trình Mobile", slug: "lap-trinh-mobile" },
        { id: 3, name: "Data Science & AI", slug: "data-science-ai" },
        { id: 4, name: "DevOps & Cloud", slug: "devops-cloud" },
        { id: 5, name: "Cơ sở dữ liệu", slug: "co-so-du-lieu" },
        { id: 6, name: "Lập trình cơ bản", slug: "lap-trinh-co-ban" },
    ];

    const updateField = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(thumbnailFile);
        navigate("/instructor/courses");
    };

    return (
        <div className="max-w-3xl">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    {isEdit ? "Chỉnh sửa khoá học" : "Tạo khoá học mới"}
                </h1>
                <p className="text-gray-500">
                    {isEdit ? "Cập nhật thông tin khoá học" : "Điền thông tin để tạo khoá học mới"}
                </p>
            </div>

            <div className="bg-white rounded-xl border p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Thumbnail */}
                    <FileUpload
                        label="Ảnh bìa khoá học"
                        accept="image/*"
                        maxSizeMB={5}
                        onChange={setThumbnailFile}
                    />

                    {/* Title */}
                    <Input
                        label="Tên khoá học"
                        value={form.title}
                        onChange={(e) => updateField("title", e.target.value)}
                        placeholder="VD: Spring Boot từ Zero đến Hero"
                        error={errors.title}
                    />

                    {/* Short description */}
                    <Input
                        label="Mô tả ngắn"
                        value={form.shortDescription}
                        onChange={(e) => updateField("shortDescription", e.target.value)}
                        placeholder="Mô tả ngắn gọn về khoá học (hiển thị trên card)"
                        error={errors.shortDescription}
                    />

                    {/* Description */}
                    <TextArea
                        label="Mô tả chi tiết"
                        value={form.description}
                        onChange={(e) => updateField("description", e.target.value)}
                        placeholder="Mô tả đầy đủ về nội dung, mục tiêu, đối tượng..."
                        rows={6}
                        error={errors.description}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Category */}
                        <Select
                            label="Danh mục"
                            value={form.categoryId}
                            onChange={(e) => updateField("categoryId", e.target.value)}
                            options={categories.map((c) => ({ value: String(c.id), label: c.name }))}
                            placeholder="Chọn danh mục"
                        />

                        {/* Level */}
                        <Select
                            label="Cấp độ"
                            value={form.level}
                            onChange={(e) => updateField("level", e.target.value)}
                            options={levelOptions}
                        />

                        {/* Price */}
                        <Input
                            label="Giá (VNĐ)"
                            type="number"
                            value={form.price}
                            onChange={(e) => updateField("price", e.target.value)}
                            placeholder="0 = Miễn phí"
                        />
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <Button variant="ghost" type="button" onClick={() => navigate(-1)}>
                            Huỷ
                        </Button>
                        <Button type="submit" isLoading={isLoading}>
                            {isEdit ? "Cập nhật" : "Tạo khoá học"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}


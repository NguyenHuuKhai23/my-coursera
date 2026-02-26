import { useState } from "react";
import type { Category } from "@/types";
import { DataTable, Button, Modal, Input, EmptyState } from "@/components/common";
import { Plus, Edit2, Trash2 } from "lucide-react";

export default function AdminCategoriesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [form, setForm] = useState({ name: "", description: "" });

    // Mock data
    const categories: Category[] = [
        { id: 1, name: "Lập trình Web", slug: "lap-trinh-web", description: "Các khóa học về phát triển web frontend và backend" },
        { id: 2, name: "Lập trình Mobile", slug: "lap-trinh-mobile", description: "Flutter, React Native, Android, iOS" },
        { id: 3, name: "Data Science & AI", slug: "data-science-ai", description: "Python, Machine Learning, Deep Learning" },
        { id: 4, name: "DevOps & Cloud", slug: "devops-cloud", description: "Docker, Kubernetes, AWS, Azure" },
        { id: 5, name: "Cơ sở dữ liệu", slug: "co-so-du-lieu", description: "MySQL, PostgreSQL, MongoDB, Redis" },
        { id: 6, name: "Lập trình cơ bản", slug: "lap-trinh-co-ban", description: "Nhập môn lập trình, thuật toán, cấu trúc dữ liệu" },
    ];

    const openCreate = () => {
        setEditingCategory(null);
        setForm({ name: "", description: "" });
        setIsModalOpen(true);
    };

    const openEdit = (cat: Category) => {
        setEditingCategory(cat);
        setForm({ name: cat.name, description: cat.description || "" });
        setIsModalOpen(true);
    };

    const handleSubmit = () => {
        if (!form.name.trim()) return;
        setIsModalOpen(false);
    };

    const handleDelete = (_id: number) => {};

    const columns = [
        {
            key: "name",
            header: "Tên danh mục",
            render: (cat: Category) => <span className="font-medium text-gray-900">{cat.name}</span>,
        },
        {
            key: "slug",
            header: "Slug",
            render: (cat: Category) => <span className="text-sm text-gray-500 font-mono">{cat.slug}</span>,
        },
        {
            key: "description",
            header: "Mô tả",
            render: (cat: Category) => <span className="text-sm text-gray-600 truncate max-w-xs block">{cat.description || "—"}</span>,
        },
        {
            key: "actions",
            header: "Hành động",
            render: (cat: Category) => (
                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" leftIcon={<Edit2 size={14} />} onClick={() => openEdit(cat)}>Sửa</Button>
                    <Button variant="ghost" size="sm" leftIcon={<Trash2 size={14} />} onClick={() => handleDelete(cat.id)} className="!text-red-600">Xoá</Button>
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Quản lý danh mục</h1>
                    <p className="text-gray-500">Thêm, sửa, xoá danh mục khoá học</p>
                </div>
                <Button leftIcon={<Plus size={18} />} onClick={openCreate}>Thêm danh mục</Button>
            </div>

            {categories.length > 0 ? (
                <div className="bg-white rounded-xl border overflow-hidden">
                    <DataTable columns={columns} data={categories} keyExtractor={(c) => c.id} />
                </div>
            ) : (
                <EmptyState title="Chưa có danh mục" description="Thêm danh mục đầu tiên." actionLabel="Thêm danh mục" onAction={openCreate} />
            )}

            {/* Create/Edit Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingCategory ? "Sửa danh mục" : "Thêm danh mục"} size="md">
                <div className="space-y-4">
                    <Input label="Tên danh mục" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="VD: Lập trình Web" />
                    <Input label="Mô tả" value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} placeholder="Mô tả ngắn..." />
                    <div className="flex justify-end gap-3 pt-2">
                        <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Huỷ</Button>
                        <Button onClick={handleSubmit}>{editingCategory ? "Cập nhật" : "Thêm"}</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}


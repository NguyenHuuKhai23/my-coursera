import { useState } from "react";
import { useParams } from "react-router-dom";
import { Plus, GripVertical, Trash2, Edit2, Save, X, Play, FileText, Upload } from "lucide-react";
import type { Section, Lesson } from "@/types";
import { Button, Input, Select, EmptyState, Modal } from "@/components/common";

/* ===== Lesson Item ===== */
function LessonItem({ lesson, onDelete }: { lesson: Lesson; onDelete: (id: number) => void }) {
    return (
        <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 rounded-lg group">
            <GripVertical size={14} className="text-gray-300 cursor-grab" />
            {lesson.contentType === "VIDEO" ? <Play size={14} className="text-blue-500" /> : <FileText size={14} className="text-green-500" />}
            <span className="flex-1 text-sm text-gray-700">{lesson.title}</span>
            {lesson.isPreview && <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Preview</span>}
            {lesson.durationSeconds > 0 && (
                <span className="text-xs text-gray-400">{Math.floor(lesson.durationSeconds / 60)}:{String(lesson.durationSeconds % 60).padStart(2, "0")}</span>
            )}
            <button onClick={() => onDelete(lesson.id)} className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-50 rounded transition-all">
                <Trash2 size={14} className="text-red-500" />
            </button>
        </div>
    );
}

/* ===== Section Editor ===== */
function SectionEditor({ section, onDeleteSection, onDeleteLesson, onAddLesson }: {
    section: Section;
    onDeleteSection: (id: number) => void;
    onDeleteLesson: (id: number) => void;
    onAddLesson: (sectionId: number) => void;
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(section.title);

    return (
        <div className="border rounded-xl overflow-hidden">
            {/* Section header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white border-b">
                <GripVertical size={16} className="text-gray-300 cursor-grab" />
                {isEditing ? (
                    <div className="flex items-center gap-2 flex-1">
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="flex-1 border rounded px-2 py-1 text-sm"
                            autoFocus
                        />
                        <button onClick={() => setIsEditing(false)} className="p-1 hover:bg-green-50 rounded">
                            <Save size={14} className="text-green-600" />
                        </button>
                        <button onClick={() => { setTitle(section.title); setIsEditing(false); }} className="p-1 hover:bg-gray-100 rounded">
                            <X size={14} className="text-gray-400" />
                        </button>
                    </div>
                ) : (
                    <>
                        <span className="flex-1 font-medium text-gray-900 text-sm">{section.title}</span>
                        <span className="text-xs text-gray-400">{section.lessons?.length || 0} bài</span>
                        <button onClick={() => setIsEditing(true)} className="p-1 hover:bg-gray-100 rounded">
                            <Edit2 size={14} className="text-gray-400" />
                        </button>
                        <button onClick={() => onDeleteSection(section.id)} className="p-1 hover:bg-red-50 rounded">
                            <Trash2 size={14} className="text-red-500" />
                        </button>
                    </>
                )}
            </div>

            {/* Lessons */}
            <div className="p-3 space-y-2 bg-gray-50/50">
                {section.lessons?.map((lesson) => (
                    <LessonItem key={lesson.id} lesson={lesson} onDelete={onDeleteLesson} />
                ))}
                <button
                    onClick={() => onAddLesson(section.id)}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-dashed border-blue-200"
                >
                    <Plus size={14} /> Thêm bài học
                </button>
            </div>
        </div>
    );
}

/* ===== Add Lesson Modal ===== */
function AddLessonModal({ isOpen, onClose, onSubmit }: {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { title: string; contentType: string; videoUrl: string; textContent: string; isPreview: boolean }) => void;
}) {
    const [title, setTitle] = useState("");
    const [contentType, setContentType] = useState("VIDEO");
    const [videoUrl, setVideoUrl] = useState("");
    const [textContent, setTextContent] = useState("");
    const [isPreview, setIsPreview] = useState(false);

    const handleSubmit = () => {
        if (!title.trim()) return;
        onSubmit({ title, contentType, videoUrl, textContent, isPreview });
        setTitle(""); setVideoUrl(""); setTextContent("");
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Thêm bài học" size="lg">
            <div className="space-y-4">
                <Input label="Tiêu đề bài học" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="VD: Giới thiệu Spring Boot" />
                <Select
                    label="Loại nội dung"
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                    options={[{ value: "VIDEO", label: "Video" }, { value: "TEXT", label: "Bài viết" }]}
                />
                {contentType === "VIDEO" ? (
                    <Input label="URL Video" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="https://..." leftIcon={<Upload size={16} />} />
                ) : (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung</label>
                        <textarea
                            value={textContent}
                            onChange={(e) => setTextContent(e.target.value)}
                            rows={6}
                            className="w-full border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Viết nội dung bài học (hỗ trợ Markdown)..."
                        />
                    </div>
                )}
                <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={isPreview} onChange={(e) => setIsPreview(e.target.checked)} className="rounded" />
                    Cho phép xem trước (không cần ghi danh)
                </label>
                <div className="flex justify-end gap-3 pt-2">
                    <Button variant="ghost" onClick={onClose}>Huỷ</Button>
                    <Button onClick={handleSubmit}>Thêm bài học</Button>
                </div>
            </div>
        </Modal>
    );
}

/* ===== Main Page ===== */
export default function CourseSectionsPage() {
    const { id: _id } = useParams<{ id: string }>();
    const [showAddLesson, setShowAddLesson] = useState(false);
    const [activeSectionId, setActiveSectionId] = useState<number | null>(null);
    const [newSectionTitle, setNewSectionTitle] = useState("");
    const [showAddSection, setShowAddSection] = useState(false);

    // Mock data
    const sections: Section[] = [
        { id: 1, courseId: 1, title: "Giới thiệu Spring Boot", sortOrder: 1, lessons: [
            { id: 1, sectionId: 1, title: "Spring Boot là gì?", contentType: "VIDEO", durationSeconds: 720, sortOrder: 1, isPreview: true },
            { id: 2, sectionId: 1, title: "Cài đặt môi trường", contentType: "VIDEO", durationSeconds: 900, sortOrder: 2, isPreview: true },
            { id: 3, sectionId: 1, title: "Tạo project đầu tiên", contentType: "VIDEO", durationSeconds: 1080, sortOrder: 3, isPreview: false },
        ]},
        { id: 2, courseId: 1, title: "Spring Core & DI", sortOrder: 2, lessons: [
            { id: 4, sectionId: 2, title: "Dependency Injection", contentType: "VIDEO", durationSeconds: 1200, sortOrder: 1, isPreview: false },
            { id: 5, sectionId: 2, title: "IoC Container", contentType: "VIDEO", durationSeconds: 960, sortOrder: 2, isPreview: false },
            { id: 6, sectionId: 2, title: "Bean Lifecycle", contentType: "TEXT", durationSeconds: 600, sortOrder: 3, isPreview: false },
        ]},
        { id: 3, courseId: 1, title: "REST API với Spring MVC", sortOrder: 3, lessons: [
            { id: 7, sectionId: 3, title: "Controller & RequestMapping", contentType: "VIDEO", durationSeconds: 1500, sortOrder: 1, isPreview: false },
            { id: 8, sectionId: 3, title: "Request / Response DTO", contentType: "VIDEO", durationSeconds: 1100, sortOrder: 2, isPreview: false },
        ]},
    ];

    const handleAddSection = () => {
        if (!newSectionTitle.trim()) return;
        setNewSectionTitle("");
        setShowAddSection(false);
    };

    const handleDeleteSection = (_sectionId: number) => {};
    const handleDeleteLesson = (_lessonId: number) => {};

    const handleAddLesson = (sectionId: number) => {
        setActiveSectionId(sectionId);
        setShowAddLesson(true);
    };

    const handleSubmitLesson = (_data: { title: string; contentType: string; videoUrl: string; textContent: string; isPreview: boolean }) => {
        console.log("sectionId:", activeSectionId);
    };

    return (
        <div className="max-w-4xl">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Nội dung khoá học</h1>
                    <p className="text-gray-500">Quản lý chương và bài học</p>
                </div>
            </div>

            {/* Sections */}
            <div className="space-y-4">
                {sections.length > 0 ? (
                    sections.map((section) => (
                        <SectionEditor
                            key={section.id}
                            section={section}
                            onDeleteSection={handleDeleteSection}
                            onDeleteLesson={handleDeleteLesson}
                            onAddLesson={handleAddLesson}
                        />
                    ))
                ) : (
                    <EmptyState title="Chưa có chương nào" description="Thêm chương đầu tiên cho khoá học." />
                )}

                {/* Add section */}
                {showAddSection ? (
                    <div className="flex items-center gap-3 p-4 border rounded-xl bg-white">
                        <input
                            value={newSectionTitle}
                            onChange={(e) => setNewSectionTitle(e.target.value)}
                            placeholder="Tên chương mới..."
                            className="flex-1 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            autoFocus
                            onKeyDown={(e) => e.key === "Enter" && handleAddSection()}
                        />
                        <Button size="sm" onClick={handleAddSection}>Thêm</Button>
                        <Button size="sm" variant="ghost" onClick={() => setShowAddSection(false)}>Huỷ</Button>
                    </div>
                ) : (
                    <button
                        onClick={() => setShowAddSection(true)}
                        className="flex items-center gap-2 w-full px-4 py-3 text-sm text-blue-600 hover:bg-blue-50 rounded-xl transition-colors border-2 border-dashed border-blue-200"
                    >
                        <Plus size={16} /> Thêm chương mới
                    </button>
                )}
            </div>

            {/* Add Lesson Modal */}
            <AddLessonModal
                isOpen={showAddLesson}
                onClose={() => setShowAddLesson(false)}
                onSubmit={handleSubmitLesson}
            />
        </div>
    );
}


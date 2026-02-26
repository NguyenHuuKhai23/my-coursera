import { useState } from "react";
import { useParams } from "react-router-dom";
import { Play, FileText, CheckCircle, Circle, ChevronDown, ChevronUp, Download } from "lucide-react";
import type { Section, Lesson, LessonProgress } from "@/types";
import { Button, ProgressBar, LoadingSpinner } from "@/components/common";

/* ===== Lesson Sidebar ===== */
function LessonSidebar({
    sections,
    currentLessonId,
    progressMap,
    onSelectLesson,
}: {
    sections: Section[];
    currentLessonId: number | null;
    progressMap: Map<number, boolean>;
    onSelectLesson: (lesson: Lesson) => void;
}) {
    const [openSections, setOpenSections] = useState<Set<number>>(new Set(sections.map((s) => s.id)));

    const toggle = (id: number) => {
        setOpenSections((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    return (
        <aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto shrink-0">
            <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900">Nội dung khoá học</h3>
            </div>
            {sections.map((section) => (
                <div key={section.id} className="border-b">
                    <button
                        onClick={() => toggle(section.id)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 text-sm"
                    >
                        <span className="font-medium text-gray-900 text-left">{section.title}</span>
                        {openSections.has(section.id) ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    {openSections.has(section.id) && section.lessons?.map((lesson) => {
                        const isCompleted = progressMap.get(lesson.id) || false;
                        const isCurrent = lesson.id === currentLessonId;
                        return (
                            <button
                                key={lesson.id}
                                onClick={() => onSelectLesson(lesson)}
                                className={`w-full flex items-center gap-2 px-6 py-2.5 text-sm text-left transition-colors
                                    ${isCurrent ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50 text-gray-600"}`}
                            >
                                {isCompleted
                                    ? <CheckCircle size={14} className="text-green-500 shrink-0" />
                                    : <Circle size={14} className="text-gray-300 shrink-0" />
                                }
                                {lesson.contentType === "VIDEO" ? <Play size={12} className="shrink-0" /> : <FileText size={12} className="shrink-0" />}
                                <span className="flex-1 truncate">{lesson.title}</span>
                            </button>
                        );
                    })}
                </div>
            ))}
        </aside>
    );
}

/* ===== Lesson Viewer ===== */
function LessonViewer({ lesson, isCompleted, onMarkComplete }: { lesson: Lesson; isCompleted: boolean; onMarkComplete: () => void }) {
    return (
        <div className="flex-1 overflow-y-auto">
            {/* Video or Text content */}
            <div className="bg-black">
                {lesson.contentType === "VIDEO" ? (
                    <div className="aspect-video flex items-center justify-center max-w-5xl mx-auto">
                        {lesson.videoUrl ? (
                            <video src={lesson.videoUrl} controls className="w-full h-full" />
                        ) : (
                            <div className="text-white text-center">
                                <Play size={64} className="mx-auto mb-4 opacity-50" />
                                <p>Video chưa được cập nhật</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto bg-white p-8">
                        <div className="prose prose-sm max-w-none">
                            {lesson.textContent || "Nội dung chưa được cập nhật."}
                        </div>
                    </div>
                )}
            </div>

            {/* Lesson info + actions */}
            <div className="max-w-4xl mx-auto p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">{lesson.title}</h2>
                    <Button
                        variant={isCompleted ? "secondary" : "primary"}
                        leftIcon={isCompleted ? <CheckCircle size={16} /> : <Circle size={16} />}
                        onClick={onMarkComplete}
                        disabled={isCompleted}
                    >
                        {isCompleted ? "Đã hoàn thành" : "Đánh dấu hoàn thành"}
                    </Button>
                </div>

                {/* Resources */}
                {lesson.resources && lesson.resources.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">Tài nguyên</h3>
                        <div className="space-y-2">
                            {lesson.resources.map((res) => (
                                <a
                                    key={res.id}
                                    href={res.fileUrl}
                                    download
                                    className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors text-sm"
                                >
                                    <Download size={14} className="text-gray-400" />
                                    <span className="text-gray-700">{res.fileName}</span>
                                    {res.fileSize && (
                                        <span className="text-gray-400 ml-auto">{(res.fileSize / 1024 / 1024).toFixed(1)}MB</span>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ===== Main Learning Page ===== */
export default function LearningPage() {
    const { courseId: _courseId } = useParams<{ courseId: string }>();
    const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
    const [isLoading] = useState(false);

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
            { id: 6, sectionId: 2, title: "Bean Lifecycle", contentType: "TEXT", textContent: "# Bean Lifecycle\n\nSpring Bean trải qua các giai đoạn: Instantiation → Populate Properties → BeanNameAware → BeanFactoryAware → Pre-Initialization → InitializingBean → Custom Init → Post-Initialization → Ready → DisposableBean → Custom Destroy", durationSeconds: 600, sortOrder: 3, isPreview: false },
        ]},
        { id: 3, courseId: 1, title: "REST API với Spring MVC", sortOrder: 3, lessons: [
            { id: 7, sectionId: 3, title: "Controller & RequestMapping", contentType: "VIDEO", durationSeconds: 1500, sortOrder: 1, isPreview: false },
            { id: 8, sectionId: 3, title: "Request / Response DTO", contentType: "VIDEO", durationSeconds: 1100, sortOrder: 2, isPreview: false },
            { id: 9, sectionId: 3, title: "Validation & Exception Handling", contentType: "VIDEO", durationSeconds: 1300, sortOrder: 3, isPreview: false },
            { id: 10, sectionId: 3, title: "Bài tập thực hành", contentType: "TEXT", textContent: "Hãy thực hành tạo CRUD API cho entity Student.", durationSeconds: 0, sortOrder: 4, isPreview: false, resources: [
                { id: 1, lessonId: 10, fileName: "spring-boot-exercises.pdf", fileUrl: "#", fileSize: 2048000 },
            ]},
        ]},
    ];
    const lessonProgressList: LessonProgress[] = [
        { id: 1, enrollmentId: 1, lessonId: 1, isCompleted: true, completedAt: "2025-02-10T11:00:00" },
        { id: 2, enrollmentId: 1, lessonId: 2, isCompleted: true, completedAt: "2025-02-10T12:00:00" },
        { id: 3, enrollmentId: 1, lessonId: 3, isCompleted: true, completedAt: "2025-02-11T10:00:00" },
        { id: 4, enrollmentId: 1, lessonId: 4, isCompleted: true, completedAt: "2025-02-12T10:00:00" },
        { id: 5, enrollmentId: 1, lessonId: 5, isCompleted: true, completedAt: "2025-02-13T10:00:00" },
        { id: 6, enrollmentId: 1, lessonId: 6, isCompleted: true, completedAt: "2025-02-14T10:00:00" },
        { id: 7, enrollmentId: 1, lessonId: 7, isCompleted: false },
    ];
    const progressPercent = 60;

    const progressMap = new Map<number, boolean>();
    lessonProgressList.forEach((lp) => progressMap.set(lp.lessonId, lp.isCompleted));

    const handleMarkComplete = () => {};

    if (isLoading) return <LoadingSpinner fullPage />;

    return (
        <div className="flex h-[calc(100vh-4rem)]">
            {/* Sidebar */}
            <LessonSidebar
                sections={sections}
                currentLessonId={currentLesson?.id || null}
                progressMap={progressMap}
                onSelectLesson={setCurrentLesson}
            />

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Progress bar */}
                <div className="px-4 py-2 bg-white border-b">
                    <ProgressBar percent={progressPercent} size="sm" />
                </div>

                {currentLesson ? (
                    <LessonViewer
                        lesson={currentLesson}
                        isCompleted={progressMap.get(currentLesson.id) || false}
                        onMarkComplete={handleMarkComplete}
                    />
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-400">
                        <div className="text-center">
                            <Play size={48} className="mx-auto mb-4" />
                            <p>Chọn một bài học để bắt đầu</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


import type { CourseStatus, CourseLevel } from "@/types";

type BadgeVariant = "info" | "success" | "warning" | "danger" | "neutral" | "purple";

interface BadgeProps {
    text: string;
    variant?: BadgeVariant;
    className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
    info: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
    neutral: "bg-gray-100 text-gray-700",
    purple: "bg-purple-100 text-purple-700",
};

export default function Badge({ text, variant = "neutral", className = "" }: BadgeProps) {
    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
        >
            {text}
        </span>
    );
}

/* ===== Preset Badges ===== */

const courseStatusMap: Record<CourseStatus, { text: string; variant: BadgeVariant }> = {
    DRAFT: { text: "Bản nháp", variant: "neutral" },
    PENDING: { text: "Chờ duyệt", variant: "warning" },
    PUBLISHED: { text: "Đã xuất bản", variant: "success" },
    REJECTED: { text: "Bị từ chối", variant: "danger" },
    LOCKED: { text: "Đã khoá", variant: "danger" },
};

export function CourseStatusBadge({ status }: { status: CourseStatus }) {
    const { text, variant } = courseStatusMap[status];
    return <Badge text={text} variant={variant} />;
}

const courseLevelMap: Record<CourseLevel, { text: string; variant: BadgeVariant }> = {
    BEGINNER: { text: "Cơ bản", variant: "info" },
    INTERMEDIATE: { text: "Trung cấp", variant: "warning" },
    ADVANCED: { text: "Nâng cao", variant: "purple" },
};

export function CourseLevelBadge({ level }: { level: CourseLevel }) {
    const { text, variant } = courseLevelMap[level];
    return <Badge text={text} variant={variant} />;
}


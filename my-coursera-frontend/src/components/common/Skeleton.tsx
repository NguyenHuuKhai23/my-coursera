interface SkeletonProps {
    className?: string;
    variant?: "text" | "circle" | "rect";
    width?: string;
    height?: string;
}

export default function Skeleton({
    className = "",
    variant = "text",
    width,
    height,
}: SkeletonProps) {
    const baseClasses = "animate-pulse bg-gray-200";

    const variantClasses = {
        text: "h-4 rounded",
        circle: "rounded-full",
        rect: "rounded-lg",
    };

    return (
        <div
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            style={{ width, height }}
        />
    );
}

/* Preset skeletons */
export function CourseCardSkeleton() {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border">
            <Skeleton variant="rect" className="w-full h-44" />
            <div className="p-4 space-y-3">
                <Skeleton variant="text" className="w-3/4" />
                <Skeleton variant="text" className="w-1/2" />
                <div className="flex justify-between items-center pt-2">
                    <Skeleton variant="text" className="w-20" />
                    <Skeleton variant="text" className="w-16" />
                </div>
            </div>
        </div>
    );
}


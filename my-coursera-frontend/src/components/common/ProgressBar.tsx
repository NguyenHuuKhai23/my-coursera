interface ProgressBarProps {
    percent: number;
    size?: "sm" | "md" | "lg";
    showLabel?: boolean;
    color?: string;
    className?: string;
}

const sizeClasses = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
};

export default function ProgressBar({
    percent,
    size = "md",
    showLabel = true,
    color = "bg-blue-600",
    className = "",
}: ProgressBarProps) {
    const clampedPercent = Math.min(100, Math.max(0, percent));

    return (
        <div className={`w-full ${className}`}>
            {showLabel && (
                <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-600">Tiến độ</span>
                    <span className="text-xs font-medium text-gray-700">{clampedPercent.toFixed(0)}%</span>
                </div>
            )}
            <div className={`w-full bg-gray-200 rounded-full ${sizeClasses[size]}`}>
                <div
                    className={`${color} rounded-full ${sizeClasses[size]} transition-all duration-500`}
                    style={{ width: `${clampedPercent}%` }}
                />
            </div>
        </div>
    );
}


interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg";
    className?: string;
    fullPage?: boolean;
}

const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
};

export default function LoadingSpinner({ size = "md", className = "", fullPage = false }: LoadingSpinnerProps) {
    const spinner = (
        <svg className={`animate-spin ${sizeClasses[size]} text-blue-600 ${className}`} viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
    );

    if (fullPage) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                {spinner}
            </div>
        );
    }

    return spinner;
}


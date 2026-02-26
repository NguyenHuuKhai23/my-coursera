interface AvatarProps {
    src?: string | null;
    name: string;
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}

const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-20 h-20 text-xl",
};

function getInitials(name: string): string {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

export default function Avatar({ src, name, size = "md", className = "" }: AvatarProps) {
    if (src) {
        return (
            <img
                src={src}
                alt={name}
                className={`rounded-full object-cover ${sizeClasses[size]} ${className}`}
            />
        );
    }

    return (
        <div
            className={`rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold ${sizeClasses[size]} ${className}`}
        >
            {getInitials(name)}
        </div>
    );
}


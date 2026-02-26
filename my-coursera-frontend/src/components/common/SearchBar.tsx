import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    value: string;
    onChange: (value: string) => void;
    onSearch?: (value: string) => void;
}

export default function SearchBar({
    value,
    onChange,
    onSearch,
    placeholder = "Tìm kiếm...",
    className = "",
    ...props
}: SearchBarProps) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && onSearch) {
            onSearch(value);
        }
    };

    return (
        <div className={`relative ${className}`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Search size={18} />
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    transition-colors duration-200"
                {...props}
            />
        </div>
    );
}


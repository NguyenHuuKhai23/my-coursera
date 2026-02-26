import type { SelectHTMLAttributes } from "react";

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: SelectOption[];
    placeholder?: string;
}

export default function Select({
    label,
    error,
    options,
    placeholder = "-- Chọn --",
    id,
    className = "",
    ...props
}: SelectProps) {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <select
                id={selectId}
                className={`
                    w-full rounded-lg border px-4 py-2.5 text-sm
                    transition-colors duration-200 bg-white
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    disabled:bg-gray-100 disabled:cursor-not-allowed
                    ${error
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300"
                    }
                    ${className}
                `}
                {...props}
            >
                <option value="">{placeholder}</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
}


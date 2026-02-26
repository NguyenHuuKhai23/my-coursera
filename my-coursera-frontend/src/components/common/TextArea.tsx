import type { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export default function TextArea({
    label,
    error,
    helperText,
    id,
    className = "",
    rows = 4,
    ...props
}: TextAreaProps) {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <textarea
                id={textareaId}
                rows={rows}
                className={`
                    w-full rounded-lg border px-4 py-2.5 text-sm
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    disabled:bg-gray-100 disabled:cursor-not-allowed resize-vertical
                    ${error
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300"
                    }
                    ${className}
                `}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            {helperText && !error && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
        </div>
    );
}


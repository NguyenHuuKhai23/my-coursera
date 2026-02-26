import type { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    size?: "sm" | "md" | "lg" | "xl";
    children: ReactNode;
}

const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-2xl",
};

export default function Modal({ isOpen, onClose, title, size = "md", children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />

            {/* Content */}
            <div className={`relative bg-white rounded-xl shadow-xl w-full mx-4 ${sizeClasses[size]} max-h-[90vh] overflow-y-auto`}>
                {/* Header */}
                {title && (
                    <div className="flex items-center justify-between px-6 py-4 border-b">
                        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                        <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                            <X size={20} />
                        </button>
                    </div>
                )}

                {/* Body */}
                <div className="px-6 py-4">{children}</div>
            </div>
        </div>
    );
}


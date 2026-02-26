import { useCallback, useRef, useState, type ChangeEvent } from "react";
import { Upload, X } from "lucide-react";

interface FileUploadProps {
    label?: string;
    accept?: string;
    maxSizeMB?: number;
    error?: string;
    preview?: string;
    onChange: (file: File | null) => void;
    variant?: "default" | "avatar";
}

export default function FileUpload({
    label,
    accept = "image/*",
    maxSizeMB = 5,
    error,
    preview,
    onChange,
    variant = "default",
}: FileUploadProps) {
    const [previewUrl, setPreviewUrl] = useState<string | null>(preview || null);
    const [dragActive, setDragActive] = useState(false);
    const [sizeError, setSizeError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = useCallback(
        (file: File | null) => {
            if (file) {
                if (file.size > maxSizeMB * 1024 * 1024) {
                    setSizeError(`File vượt quá ${maxSizeMB}MB`);
                    return;
                }
                setSizeError(null);
                const url = URL.createObjectURL(file);
                setPreviewUrl(url);
                onChange(file);
            }
        },
        [maxSizeMB, onChange]
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        handleFile(file);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragActive(false);
        const file = e.dataTransfer.files?.[0] || null;
        handleFile(file);
    };

    const handleRemove = () => {
        setPreviewUrl(null);
        setSizeError(null);
        onChange(null);
        if (inputRef.current) inputRef.current.value = "";
    };

    if (variant === "avatar") {
        return (
            <div className="flex flex-col items-center gap-3">
                {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
                <div className="relative group">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 bg-gray-100">
                        {previewUrl ? (
                            <img src={previewUrl} alt="Avatar" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <Upload size={24} />
                            </div>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={() => inputRef.current?.click()}
                        className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs"
                    >
                        Đổi ảnh
                    </button>
                </div>
                <input ref={inputRef} type="file" accept={accept} onChange={handleChange} className="hidden" />
                {(error || sizeError) && <p className="text-sm text-red-500">{error || sizeError}</p>}
            </div>
        );
    }

    return (
        <div className="w-full">
            {label && <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>}
            <div
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
                onClick={() => inputRef.current?.click()}
                className={`
                    relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
                    transition-colors duration-200
                    ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}
                `}
            >
                <input ref={inputRef} type="file" accept={accept} onChange={handleChange} className="hidden" />

                {previewUrl ? (
                    <div className="flex items-center gap-3">
                        <img src={previewUrl} alt="Preview" className="w-16 h-16 object-cover rounded" />
                        <span className="text-sm text-gray-600">File đã chọn</span>
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); handleRemove(); }}
                            className="ml-auto p-1 rounded-full hover:bg-gray-200"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-2">
                        <Upload className="text-gray-400" size={32} />
                        <p className="text-sm text-gray-600">
                            Kéo thả hoặc <span className="text-blue-600 font-medium">nhấn để chọn file</span>
                        </p>
                        <p className="text-xs text-gray-400">Tối đa {maxSizeMB}MB</p>
                    </div>
                )}
            </div>
            {(error || sizeError) && <p className="mt-1 text-sm text-red-500">{error || sizeError}</p>}
        </div>
    );
}


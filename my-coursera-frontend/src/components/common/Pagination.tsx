import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export default function Pagination({ currentPage, totalPages, onPageChange, className = "" }: PaginationProps) {
    if (totalPages <= 1) return null;

    const getPages = (): (number | "...")[] => {
        const pages: (number | "...")[] = [];
        const delta = 2;
        const left = Math.max(2, currentPage - delta);
        const right = Math.min(totalPages - 1, currentPage + delta);

        pages.push(1);
        if (left > 2) pages.push("...");
        for (let i = left; i <= right; i++) pages.push(i);
        if (right < totalPages - 1) pages.push("...");
        if (totalPages > 1) pages.push(totalPages);

        return pages;
    };

    return (
        <nav className={`flex items-center justify-center gap-1 ${className}`}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeft size={18} />
            </button>

            {getPages().map((page, idx) =>
                page === "..." ? (
                    <span key={`dots-${idx}`} className="px-2 text-gray-400">...</span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page as number)}
                        className={`min-w-[36px] h-9 rounded-lg text-sm font-medium transition-colors
                            ${currentPage === page
                                ? "bg-blue-600 text-white"
                                : "hover:bg-gray-100 text-gray-700"
                            }`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRight size={18} />
            </button>
        </nav>
    );
}


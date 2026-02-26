import type { Category, CourseLevel } from "@/types";
import Select from "./Select";
import SearchBar from "./SearchBar";

interface FilterPanelProps {
    keyword: string;
    onKeywordChange: (value: string) => void;
    selectedCategory: string;
    onCategoryChange: (value: string) => void;
    selectedLevel: string;
    onLevelChange: (value: string) => void;
    categories: Category[];
    onSearch?: () => void;
    className?: string;
}

const levelOptions: { value: CourseLevel | ""; label: string }[] = [
    { value: "", label: "Tất cả cấp độ" },
    { value: "BEGINNER", label: "Cơ bản" },
    { value: "INTERMEDIATE", label: "Trung cấp" },
    { value: "ADVANCED", label: "Nâng cao" },
];

export default function FilterPanel({
    keyword,
    onKeywordChange,
    selectedCategory,
    onCategoryChange,
    selectedLevel,
    onLevelChange,
    categories,
    onSearch,
    className = "",
}: FilterPanelProps) {
    return (
        <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
            <SearchBar
                value={keyword}
                onChange={onKeywordChange}
                onSearch={onSearch ? () => onSearch() : undefined}
                placeholder="Tìm kiếm khóa học..."
                className="flex-1"
            />

            <Select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                options={categories.map((c) => ({ value: String(c.id), label: c.name }))}
                placeholder="Tất cả danh mục"
                className="sm:w-48"
            />

            <Select
                value={selectedLevel}
                onChange={(e) => onLevelChange(e.target.value)}
                options={levelOptions}
                placeholder="Tất cả cấp độ"
                className="sm:w-40"
            />
        </div>
    );
}


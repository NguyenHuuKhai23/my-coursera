import type { ReactNode } from "react";

interface Column<T> {
    key: string;
    header: string;
    render: (item: T) => ReactNode;
    className?: string;
    sortable?: boolean;
}

interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    keyExtractor: (item: T) => string | number;
    onSort?: (key: string) => void;
    sortBy?: string;
    sortDir?: "asc" | "desc";
    emptyMessage?: string;
    className?: string;
}

export default function DataTable<T>({
    columns,
    data,
    keyExtractor,
    onSort,
    sortBy,
    sortDir,
    emptyMessage = "Không có dữ liệu",
    className = "",
}: DataTableProps<T>) {
    return (
        <div className={`overflow-x-auto ${className}`}>
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b">
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                className={`px-4 py-3 ${col.sortable ? "cursor-pointer hover:text-gray-700" : ""} ${col.className || ""}`}
                                onClick={() => col.sortable && onSort?.(col.key)}
                            >
                                <div className="flex items-center gap-1">
                                    {col.header}
                                    {col.sortable && sortBy === col.key && (
                                        <span className="text-blue-600">{sortDir === "asc" ? "↑" : "↓"}</span>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} className="px-4 py-12 text-center text-gray-400">
                                {emptyMessage}
                            </td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={keyExtractor(item)} className="border-b hover:bg-gray-50 transition-colors">
                                {columns.map((col) => (
                                    <td key={col.key} className={`px-4 py-3 ${col.className || ""}`}>
                                        {col.render(item)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}


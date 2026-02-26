import type { ReactNode } from "react";
import { InboxIcon } from "lucide-react";
import Button from "./Button";

interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
}

export default function EmptyState({
    icon,
    title,
    description,
    actionLabel,
    onAction,
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="text-gray-300 mb-4">
                {icon || <InboxIcon size={64} />}
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
            {description && <p className="text-sm text-gray-500 mb-6 max-w-md">{description}</p>}
            {actionLabel && onAction && (
                <Button variant="primary" onClick={onAction}>
                    {actionLabel}
                </Button>
            )}
        </div>
    );
}


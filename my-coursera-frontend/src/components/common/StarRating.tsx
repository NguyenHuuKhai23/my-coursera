import { Star } from "lucide-react";

interface StarRatingProps {
    value: number;
    max?: number;
    size?: number;
    interactive?: boolean;
    onChange?: (value: number) => void;
    showValue?: boolean;
}

export default function StarRating({
    value,
    max = 5,
    size = 16,
    interactive = false,
    onChange,
    showValue = false,
}: StarRatingProps) {
    const stars = Array.from({ length: max }, (_, i) => i + 1);

    return (
        <div className="inline-flex items-center gap-0.5">
            {stars.map((star) => (
                <button
                    key={star}
                    type="button"
                    disabled={!interactive}
                    onClick={() => interactive && onChange?.(star)}
                    className={`${interactive ? "cursor-pointer hover:scale-110 transition-transform" : "cursor-default"}`}
                >
                    <Star
                        size={size}
                        className={
                            star <= value
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                        }
                    />
                </button>
            ))}
            {showValue && (
                <span className="ml-1 text-sm text-gray-600 font-medium">{value.toFixed(1)}</span>
            )}
        </div>
    );
}


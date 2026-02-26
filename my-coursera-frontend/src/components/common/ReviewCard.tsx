import type { Review } from "@/types";
import Avatar from "./Avatar";
import StarRating from "./StarRating";

interface ReviewCardProps {
    review: Review;
}

function timeAgo(dateStr: string): string {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Hôm nay";
    if (diffDays === 1) return "Hôm qua";
    if (diffDays < 7) return `${diffDays} ngày trước`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} tuần trước`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} tháng trước`;
    return `${Math.floor(diffDays / 365)} năm trước`;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="border-b border-gray-100 pb-4 last:border-0">
            <div className="flex items-start gap-3">
                <Avatar src={review.userAvatar} name={review.userName || "User"} size="md" />
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-gray-900">
                            {review.userName || "Học viên"}
                        </h4>
                        <span className="text-xs text-gray-400">{timeAgo(review.createdAt)}</span>
                    </div>
                    <StarRating value={review.rating} size={14} />
                    {review.comment && (
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{review.comment}</p>
                    )}
                </div>
            </div>
        </div>
    );
}


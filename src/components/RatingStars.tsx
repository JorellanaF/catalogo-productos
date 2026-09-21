import type { Rating } from "@/types/product";

interface RatingStarsProps {
  rating: Rating;
}

export function RatingStars({ rating }: RatingStarsProps) {
  const filled = Math.round(rating.rate);

  return (
    <div className="flex items-center gap-2">
      <div
        className="flex text-lg"
        role="img"
        aria-label={`${rating.rate} de 5 estrellas`}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            aria-hidden="true"
            className={index < filled ? "text-amber-500" : "text-slate-300"}
          >
            ★
          </span>
        ))}
      </div>
      <span className="text-sm text-slate-500">
        {rating.rate} ({rating.count} opiniones)
      </span>
    </div>
  );
}

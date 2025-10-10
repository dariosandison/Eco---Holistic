// components/mdx/RatingStars.jsx
/**
 * Accessible, SSR-safe star rating that supports fractional values.
 * Usage in MDX:
 *   <RatingStars value={4.5} />
 *   <RatingStars rating={4} outOf={5} showLabel />
 */
export default function RatingStars({
  value,
  rating,
  outOf = 5,
  showLabel = false,
  size = 18,
  label,
}) {
  const max = Math.max(1, Number(outOf) || 5)
  const valRaw = Number(value ?? rating ?? 0)
  const val = Math.min(Math.max(valRaw, 0), max)
  const pct = (val / max) * 100

  const stars = Array.from({ length: max })

  const Star = ({ className }) => (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  )

  return (
    <span
      className="inline-flex items-center gap-2 align-middle not-prose"
      role="img"
      aria-label={label || `${val.toFixed(1)} out of ${max} stars`}
      title={label || `${val.toFixed(1)} / ${max}`}
    >
      <span
        className="relative"
        style={{ width: size * max, height: size, display: 'inline-block' }}
      >
        {/* Background (empty stars) */}
        <span className="absolute inset-0 flex" aria-hidden="true">
          {stars.map((_, i) => (
            <Star key={`bg-${i}`} className="opacity-25 text-yellow-500" />
          ))}
        </span>
        {/* Foreground (filled stars), clipped to percentage */}
        <span
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pct}%` }}
          aria-hidden="true"
        >
          <span className="flex">
            {stars.map((_, i) => (
              <Star key={`fg-${i}`} className="text-yellow-500" />
            ))}
          </span>
        </span>
      </span>
      {showLabel && (
        <span className="text-sm text-neutral-700">
          {val.toFixed(1)} / {max}
        </span>
      )}
    </span>
  )
}

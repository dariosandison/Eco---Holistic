// components/BestForBadges.jsx

export default function BestForBadges({ items = [] }) {
  if (!items || items.length === 0) return null

  return (
    <div className="mt-4 flex flex-wrap gap-2" aria-label="Best for">
      {items.map((t) => (
        <span
          key={t}
          className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm"
        >
          {t}
        </span>
      ))}
    </div>
  )
}

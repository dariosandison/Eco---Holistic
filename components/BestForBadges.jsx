export default function BestForBadges({ items = [] }) {
  if (!items || items.length === 0) return null

  return (
    <div className="best-for-list" aria-label="Best for">
      <span className="best-for-list__label">Best for</span>
      <div>{items.map((t) => <span key={t}>{t}</span>)}</div>
    </div>
  )
}

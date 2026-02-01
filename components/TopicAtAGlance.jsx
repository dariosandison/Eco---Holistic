// components/TopicAtAGlance.jsx

export default function TopicAtAGlance({ title = 'At a glance', items = [] }) {
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <section className="mt-10">
      <h2 className="section-title">{title}</h2>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.slice(0, 3).map((it, idx) => (
          <div key={idx} className="card">
            <h3 className="text-lg font-semibold text-zinc-900">{it.title}</h3>
            {it.subtitle ? <p className="mt-1 text-sm text-zinc-600">{it.subtitle}</p> : null}
            {Array.isArray(it.bullets) && it.bullets.length ? (
              <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
                {it.bullets.slice(0, 5).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}

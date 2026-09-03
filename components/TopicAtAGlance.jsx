export default function TopicAtAGlance({ title = 'At a glance', items = [] }) {
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <section className="topic-glance mt-12">
      <div className="topic-glance__heading">
        <p>Before you compare products</p>
        <h2>{title}</h2>
      </div>
      <div className="topic-glance__list">
        {items.slice(0, 3).map((it, idx) => (
          <article key={idx} className="topic-glance__item">
            <span className="topic-glance__num">0{idx + 1}</span>
            <div>
              <h3>{it.title}</h3>
              {it.subtitle ? <p className="topic-glance__subtitle">{it.subtitle}</p> : null}
              {Array.isArray(it.bullets) && it.bullets.length ? (
                <ul>
                  {it.bullets.slice(0, 5).map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

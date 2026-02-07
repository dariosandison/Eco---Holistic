import Card from '@/components/Card'

function fmtDate(d) {
  if (!d) return null
  try {
    const dt = new Date(d)
    if (Number.isNaN(dt.getTime())) return null
    return dt.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return null
  }
}

function scorePost(post, currentTags = []) {
  const tags = Array.isArray(post?.tags) ? post.tags : []
  const overlap = tags.filter((t) => currentTags.includes(t)).length
  const recency = new Date(post.updated || post.date || 0).getTime()
  return overlap * 10 + Math.floor(recency / 1e9)
}

export default function RelatedReading({ currentSlug, currentTags = [], posts = [] }) {
  const candidates = (posts || [])
    .filter((p) => p?.slug && p.slug !== currentSlug)
    .sort((a, b) => scorePost(b, currentTags) - scorePost(a, currentTags))
    .slice(0, 6)

  if (!candidates.length) return null

  return (
    <section className="mt-12">
      <h2 className="text-lg font-semibold text-zinc-900">Related reading</h2>
      <p className="mt-1 text-sm text-zinc-700">
        Keep learning — then choose the simplest next step.
      </p>

      <div className="mt-5 grid gap-6 md:grid-cols-3">
        {candidates.map((p) => (
          <Card
            key={p.slug}
            slug={p.slug}
            href={`/blog/${p.slug}`}
            title={p.title}
            excerpt={p.description}
            image={p.image}
            topics={p.tags || []}
            category={p.category}
            tag={(p.type || '').toLowerCase() === 'explainer' ? 'Explainer' : 'Insight'}
            date={fmtDate(p.updated || p.date)}
          />
        ))}
      </div>
    </section>
  )
}

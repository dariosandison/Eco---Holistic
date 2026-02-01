// components/TopicFAQ.jsx
import StructuredData from '@/components/StructuredData'

export default function TopicFAQ({ title = 'Common questions', faqs = [], includeJsonLd = true }) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null

  const jsonLd = includeJsonLd
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.slice(0, 10).map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: Array.isArray(f.a) ? f.a.join(' ') : f.a,
          },
        })),
      }
    : null

  return (
    <section className="mt-14" id="faqs">
      {jsonLd ? <StructuredData data={jsonLd} /> : null}

      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">Short answers to the questions that come up most often.</p>

      <div className="mt-6 space-y-3">
        {faqs.slice(0, 8).map((f, idx) => (
          <details key={idx} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-900">
              <span className="align-middle">{f.q}</span>
            </summary>
            <div className="mt-3 text-sm text-zinc-700 space-y-2">
              {Array.isArray(f.a)
                ? f.a.map((p, i) => <p key={i}>{p}</p>)
                : <p>{f.a}</p>}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

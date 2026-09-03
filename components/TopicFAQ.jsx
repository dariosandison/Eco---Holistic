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
          acceptedAnswer: { '@type': 'Answer', text: Array.isArray(f.a) ? f.a.join(' ') : f.a },
        })),
      }
    : null

  return (
    <section className="topic-faq mt-16" id="faqs">
      {jsonLd ? <StructuredData data={jsonLd} /> : null}
      <div className="topic-faq__heading">
        <p>Useful answers, kept short</p>
        <div><h2>{title}</h2><span>Open a question for the practical answer. More detailed guidance is linked from the journey above.</span></div>
      </div>
      <div className="topic-faq__list">
        {faqs.slice(0, 8).map((f, idx) => (
          <details key={idx} className="topic-faq__item">
            <summary><span className="topic-faq__num">0{idx + 1}</span><strong>{f.q}</strong><i aria-hidden="true">+</i></summary>
            <div className="topic-faq__answer">{Array.isArray(f.a) ? f.a.map((p, i) => <p key={i}>{p}</p>) : <p>{f.a}</p>}</div>
          </details>
        ))}
      </div>
    </section>
  )
}

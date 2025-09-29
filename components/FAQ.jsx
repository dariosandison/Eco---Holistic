import React from 'react';

function stripTags(html = '') {
  try { return html.replace(/<[^>]*>/g, '').trim(); } catch { return html || ''; }
}

export default function FAQ({ items = [] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: stripTags(question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripTags(answer),
      },
    })),
  };

  return (
    <section className="faq">
      <h2>FAQs</h2>
      <div>
        {items.map(({ question, answer }, idx) => (
          <details key={idx} style={{ margin: '0.5rem 0', background: '#fafafa', padding: '0.75rem 1rem', borderRadius: 12 }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{question}</summary>
            <div style={{ marginTop: '0.5rem' }}
                 dangerouslySetInnerHTML={{ __html: answer }} />
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}

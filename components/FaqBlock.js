import React from "react";

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function FaqBlock({ faqs = [] }) {
  if (!faqs.length) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="faq">
      <h2>FAQs</h2>
      {faqs.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
      <JsonLd data={faqSchema} />
      <style jsx>{`
        .faq details { border-top: 1px solid #e5e7eb; padding: 10px 0; }
        .faq summary { cursor: pointer; font-weight: 600; }
        .faq p { margin: 8px 0 0; color: #4b5563; }
      `}</style>
    </section>
  );
}

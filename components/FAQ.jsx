// components/FAQ.jsx
import { useMemo } from "react";

export default function FAQ({ items = [], title = "FAQ" }) {
  if (!Array.isArray(items) || !items.length) return null;

  const jsonLd = useMemo(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    };
    return JSON.stringify(data);
  }, [items]);

  return (
    <section style={{ borderTop: "1px solid #eee", paddingTop: 12 }}>
      <h3 style={{ margin: "0 0 8px" }}>{title}</h3>
      <div>
        {items.map(({ q, a }, i) => (
          <details key={i} style={{ margin: "8px 0", background: "#fafafa", border: "1px solid #eee", borderRadius: 8, padding: "8px 12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600 }}>{q}</summary>
            <div style={{ marginTop: 8 }}>{a}</div>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </section>
  );
}

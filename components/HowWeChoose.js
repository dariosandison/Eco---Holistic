import React from "react";

export default function HowWeChoose({ points = [] }) {
  const list = points.length
    ? points
    : [
        "We prioritise safety: fewer additives and clear certifications.",
        "We scan independent lab tests and brand transparency.",
        "We consider replacement/ongoing cost and waste.",
        "We pick simple, reliable options you’ll actually use.",
      ];
  return (
    <section className="choose">
      <h2>How we choose</h2>
      <ul>{list.map((p) => <li key={p}>{p}</li>)}</ul>

      <style jsx>{`
        .choose { border: 1px dashed #cbd5e1; border-radius: 12px; padding: 16px; }
        h2 { margin: 0 0 8px; }
        li { margin: 6px 0; color: #374151; }
      `}</style>
    </section>
  );
}

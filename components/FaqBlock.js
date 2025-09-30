// components/FAQBlock.js
import React, { useState } from 'react';

function clean(obj) {
  if (Array.isArray(obj)) return obj.map(clean).filter((v) => v != null);
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      const cv = clean(v);
      if (cv !== undefined && cv !== null && cv !== '') out[k] = cv;
    }
    return Object.keys(out).length ? out : undefined;
  }
  return obj === undefined ? undefined : obj;
}

function JsonLd({ data }) {
  const content = JSON.stringify(clean(data));
  if (!content || content === '{}' || content === '[]') return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

/**
 * FAQBlock
 * Props:
 * - items: [{question, answer}]
 * - emitJsonLd?: boolean (default true)
 * - title?: string
 */
export default function FAQBlock({ items = [], emitJsonLd = true, title = 'FAQ' }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  const faqLd = emitJsonLd
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      }
    : null;

  return (
    <section className="faq">
      {title ? <h2 className="faq-title">{title}</h2> : null}
      <div className="faq-list">
        {items.map(({ question, answer }, i) => (
          <Item key={i} question={question} answer={answer} />
        ))}
      </div>
      {emitJsonLd ? <JsonLd data={faqLd} /> : null}

      <style jsx>{`
        .faq {
          margin: 24px 0;
        }
        .faq-title {
          margin: 0 0 10px;
          font-size: 1.25rem;
          line-height: 1.3;
        }
        .faq-list {
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
        }
      `}</style>
    </section>
  );
}

function Item({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="item">
      <button
        className="q"
        onClick={() => setOpen((x) => !x)}
        aria-expanded={open ? 'true' : 'false'}
      >
        <span>{question}</span>
        <span className="chev" aria-hidden="true">
          {open ? '▾' : '▸'}
        </span>
      </button>
      {open ? <div className="a" dangerouslySetInnerHTML={{ __html: answer }} /> : null}

      <style jsx>{`
        .item + .item {
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }
        .q {
          width: 100%;
          text-align: left;
          background: #f9fafb;
          padding: 12px 14px;
          border: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
        }
        .a {
          padding: 12px 14px;
          background: #fff;
          line-height: 1.6;
        }
        .chev {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}

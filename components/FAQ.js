// components/FAQ.js
import { useState } from "react";

/**
 * Minimal, dependency-free FAQ accordion.
 * Expects: items = [{ q: string, a: string }, ...]
 * Renders small, clean toggles and supports *very simple* inline markdown
 * in answers: **bold**, *italic*, `code`, [link](https://...).
 */
export default function FAQ({ items = [], title = "FAQs" }) {
  // Tiny inline markdown → HTML (safe-ish for owner-provided content)
  const toHTML = (s = "") => {
    // escape first
    let html = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    // links
    html = html.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="nofollow noopener">$1</a>'
    );
    // bold, italic, code (order matters)
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
    html = html.replace(/`(.+?)`/g, "<code>$1</code>");
    // line breaks
    html = html.replace(/\n/g, "<br/>");
    return { __html: html };
  };

  if (!items.length) return null;

  return (
    <section className="faq">
      {title && <h2 className="faq-title">{title}</h2>}

      <ul className="faq-list">
        {items.map((it, i) => (
          <FAQItem key={i} index={i} q={it.q} a={it.a} toHTML={toHTML} />
        ))}
      </ul>

      <style jsx>{`
        .faq {
          margin-top: 28px;
        }
        .faq-title {
          font-size: 1.35rem;
          margin: 0 0 10px;
          letter-spacing: -0.01em;
        }
        .faq-list {
          list-style: none;
          margin: 0;
          padding: 0;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
        }
      `}</style>
    </section>
  );
}

function FAQItem({ index, q, a, toHTML }) {
  const [open, setOpen] = useState(false);
  const contentId = `faq-panel-${index}`;

  return (
    <li className={`faq-item ${open ? "open" : ""}`}>
      <button
        className="faq-q"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="qtext">{q}</span>
        <span className="chev" aria-hidden="true">
          {open ? "–" : "+"}
        </span>
      </button>
      <div
        id={contentId}
        className="faq-a"
        role="region"
        aria-hidden={!open}
        dangerouslySetInnerHTML={toHTML(a)}
      />

      <style jsx>{`
        .faq-item + .faq-item {
          border-top: 1px solid #e5e7eb;
        }
        .faq-q {
          width: 100%;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: transparent;
          border: 0;
          cursor: pointer;
          font-size: 1rem;
        }
        .qtext {
          font-weight: 600;
          color: #111827;
        }
        .chev {
          font-size: 1.2rem;
          line-height: 1;
          color: #6b7280;
          min-width: 1.2rem;
          text-align: center;
        }
        .faq-a {
          padding: 0 16px 14px;
          color: #374151;
          font-size: 0.98rem;
        }
        .faq-a :global(code) {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
          font-size: 0.92em;
          background: #f3f4f6;
          padding: 0 4px;
          border-radius: 4px;
        }
        .faq-item.open .faq-q {
          background: #fafafa;
        }
      `}</style>
    </li>
  );
}

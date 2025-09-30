// components/RelatedPosts.js
import React from 'react';
import Link from 'next/link';

/**
 * RelatedPosts
 * Renders suggestions produced by scripts/suggest-related.mjs (data/internal-links.json).
 *
 * Props:
 * - slug* (current page slug, e.g., 'sauna-basics')
 * - title?: string
 * - max?: number (default 5)
 */
export default function RelatedPosts({ slug, title = 'Related', max = 5 }) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    let mounted = true;
    import('../data/internal-links.json')
      .then((mod) => {
        const map = mod.default || mod;
        const list = Array.isArray(map?.[slug]) ? map[slug].slice(0, max) : [];
        if (mounted) setItems(list);
      })
      .catch(() => setItems([]));
    return () => {
      mounted = false;
    };
  }, [slug, max]);

  if (!items.length) return null;

  return (
    <section className="rel">
      <h2 className="rel-title">{title}</h2>
      <ul className="rel-list">
        {items.map((p) => (
          <li key={p.slug}>
            <Link href={p.href || p.url || p.path || `/guides/${p.slug}`}>
              {p.title || p.slug}
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .rel {
          margin: 24px 0;
          padding: 14px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          background: #fff;
        }
        .rel-title {
          margin: 0 0 8px;
          font-size: 1.15rem;
        }
        .rel-list {
          padding-left: 18px;
          margin: 0;
        }
        .rel-list li {
          margin: 6px 0;
        }
      `}</style>
    </section>
  );
}

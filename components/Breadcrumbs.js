// /components/Breadcrumbs.js
import Link from "next/link";

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        {items.map((b, i) => (
          <li key={b.url || i}>
            {b.url ? <Link href={b.url}>{b.name}</Link> : <span>{b.name}</span>}
            {i < items.length - 1 && <span aria-hidden="true"> / </span>}
          </li>
        ))}
      </ol>
      <style jsx>{`
        .breadcrumbs {
          margin: 0.5rem 0 1rem;
          font-size: 0.9rem;
          color: #667085;
        }
        .breadcrumbs a { text-decoration: none; }
      `}</style>
    </nav>
  );
}

// components/Card.js
import Link from 'next/link';

export default function Card({ slug, title, excerpt, date }) {
  const img = `/guides/${slug}.jpg`;
  const fallback = '/og-default.jpg';

  return (
    <article className="card">
      <img
        className="card-img"
        src={img}
        alt=""
        onError={(e)=>{ e.currentTarget.src = fallback; }}
        loading="lazy"
      />
      <div className="card-body">
        <h3><Link href={`/guides/${slug}`}>{title || slug}</Link></h3>
        {date && <small>{new Date(date).toLocaleDateString()}</small>}
        {excerpt && <p>{excerpt}</p>}
      </div>
    </article>
  );
}

// components/Card.js
import Link from 'next/link';

export default function Card({ slug, title, excerpt, badge, deal }) {
  return (
    <article className="card">
      <Link href={`/guides/${slug}`} aria-label={title}>
        <div className="pills">
          {badge && <span className="pill pill--top">{badge}</span>}
          {deal && <span className="pill pill--deal">Deal</span>}
        </div>
        <img
          className="card-img"
          src={`/images/guides/${slug}.jpg`}
          alt=""
          loading="lazy"
          onError={(e)=>{ e.currentTarget.src='/images/placeholder-16x9.jpg'; }}
        />
      </Link>
      <div className="card-body">
        <h3><Link href={`/guides/${slug}`}>{title}</Link></h3>
        {excerpt && <p>{excerpt}</p>}
      </div>
    </article>
  );
}

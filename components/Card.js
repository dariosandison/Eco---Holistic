// components/Card.js
import Link from 'next/link';

function badgeClass(badge) {
  if (!badge) return '';
  const b = String(badge).toLowerCase();
  if (b.includes('budget')) return 'pill pill--budget';
  if (b.includes('upgrade')) return 'pill pill--upgrade';
  if (b.includes('top')) return 'pill pill--top';
  return 'pill pill--top';
}

export default function Card({ slug, title, excerpt, date, badge, deal }) {
  // image preference: /public/guides/<slug>.jpg -> /public/og/guides/<slug>.svg -> /public/og-default.jpg
  const primary = `/guides/${slug}.jpg`;
  const altSvg = `/og/guides/${slug}.svg`;
  const fallback = '/og-default.jpg';

  return (
    <article className="card">
      <div className="pills">
        {badge && <span className={badgeClass(badge)}>{badge}</span>}
        {deal && <span className="pill pill--deal">{deal}</span>}
      </div>

      <img
        className="card-img"
        src={primary}
        alt=""
        onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src = altSvg; }}
      />

      <div className="card-body">
        <h3><Link href={`/guides/${slug}`}>{title || slug}</Link></h3>
        {date && <small>{new Date(date).toLocaleDateString()}</small>}
        {excerpt && <p>{excerpt}</p>}
      </div>
    </article>
  );
}

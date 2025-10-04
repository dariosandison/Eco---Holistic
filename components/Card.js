// components/Card.js
import Link from 'next/link';


import Image from 'next/image';
export default function Card({ slug, title, excerpt, badge, deal, image }) {
  // Prefer front-matter image; else try /images/guides/<slug>.jpg; else /cover.png
  const src = image || `/images/guides/${slug}.jpg`;
  const fallback = '/cover.png';

  return (
    <article className="card">
      <Link href={`/guides/${slug}`} aria-label={title}>
        <div className="pills">
          {badge && <span className="pill pill--top">{badge}</span>}
          {deal && <span className="pill pill--deal">Deal</span>}
        </div>
        <ImageclassName="card-img"
          src={src}
          alt=""
          loading="lazy"
          onError={(e) = width={800} height={600} /> { e.currentTarget.src = fallback; }}
        />
      </Link>
      <div className="card-body">
        <h3><Link href={`/guides/${slug}`}>{title}</Link></h3>
        {excerpt && <p>{excerpt}</p>}
      </div>
    </article>
  );
}

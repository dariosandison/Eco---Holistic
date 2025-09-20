// components/ProductCard.js
export default function ProductCard({
  title,
  description,
  image,
  href,
  badge,
  price,
  rating = 0,
}) {
  const stars = Array.from({ length: 5 }, (_, i) => (i < rating ? "★" : "☆")).join("");

  return (
    <a
      className="card"
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      aria-label={`${title} – ${description}`}
    >
      <div className="media">
        <img src={image} alt={title} loading="lazy" />
        {badge && <span className="badge">{badge}</span>}
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p className="desc">{description}</p>
        <div className="meta">
          {price && <span className="price">{price}</span>}
          <span className="rating" aria-label={`${rating} out of 5 stars`}>
            {stars}
          </span>
        </div>
        <span className="cta">View on Amazon →</span>
      </div>

      <style jsx>{`
        .card {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 12px;
          padding: 12px;
          border: 1px solid var(--border, #e5e7eb);
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          background: #fff;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.06); }
        .media { position: relative; }
        img {
          width: 120px; height: 120px; object-fit: cover; border-radius: 10px; border: 1px solid #eef0f2;
          background: #f8fafc;
        }
        .badge {
          position: absolute; left: 6px; top: 6px; font-size: 12px;
          background: #065f46; color: #fff; padding: 2px 8px; border-radius: 999px;
        }
        h3 { margin: 0 0 4px; font-size: 1rem; line-height: 1.3; }
        .desc { margin: 0 0 8px; color: #4b5563; }
        .meta { display: flex; gap: 10px; align-items: center; margin-bottom: 6px; }
        .price { font-weight: 600; color: #111827; }
        .rating { color: #f59e0b; letter-spacing: 1px; font-size: 0.95rem; }
        .cta { font-weight: 600; color: #065f46; }
      `}</style>
    </a>
  );
}

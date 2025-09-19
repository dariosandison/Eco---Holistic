// components/ProductCard.js
export default function ProductCard({
  title,
  description,
  image,
  href,
  badge,
  price,
  rating = 5,
}) {
  return (
    <article className="card">
      <a href={href} target="_blank" rel="nofollow sponsored noopener">
        <div className="thumb">
          <img src={image} alt={title} loading="lazy" />
          {badge ? <span className="badge">{badge}</span> : null}
        </div>
        <div className="body">
          <h3>{title}</h3>
          {price ? <div className="price">{price}</div> : null}
          <div className="stars" aria-label={`${rating} out of 5 stars`}>
            {"★".repeat(rating)}{"☆".repeat(5 - rating)}
          </div>
          <p>{description}</p>
          <div className="cta">View on Amazon →</div>
        </div>
      </a>

      <style jsx>{`
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 18px rgba(0,0,0,0.06);
        }
        a {
          color: inherit;
          text-decoration: none;
          display: grid;
          grid-template-rows: auto 1fr;
          height: 100%;
        }
        .thumb {
          position: relative;
          aspect-ratio: 16/10;
          background: #f5f7f8;
          display: grid;
          place-items: center;
        }
        img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #065f46;
          color: #fff;
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 999px;
        }
        .body {
          padding: 14px 14px 16px;
        }
        h3 {
          font-size: 1rem;
          line-height: 1.35;
          margin: 0 0 6px;
        }
        .price {
          font-weight: 600;
          margin-bottom: 6px;
        }
        .stars {
          color: #f59e0b;
          font-size: 0.9rem;
          margin-bottom: 8px;
        }
        p {
          font-size: 0.95rem;
          color: #4b5563;
          margin: 0 0 12px;
        }
        .cta {
          font-weight: 600;
          text-decoration: underline;
        }
      `}</style>
    </article>
  );
}

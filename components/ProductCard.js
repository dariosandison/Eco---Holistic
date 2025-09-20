// components/ProductCard.js
import { withAmazonTag } from "../utils/affiliate";

export default function ProductCard({
  title,
  description,
  image,
  href,
  badge,
  price,
  rating = 4,
  listName = "recommended", // for analytics grouping
}) {
  const taggedUrl = withAmazonTag(href);

  const trackClick = () => {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", "select_content", {
      content_type: "product",
      item_id: title,
      link_url: taggedUrl,
      item_list_name: listName,
      outbound: true,
      destination: "amazon",
    });
  };

  return (
    <>
      <article className="card">
        {badge && <span className="badge">{badge}</span>}
        <a
          href={taggedUrl}
          onClick={trackClick}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          aria-label={`${title} on Amazon (opens in new tab)`}
        >
          <img src={image} alt={title} />
        </a>

        <div className="body">
          <h3 className="title">
            <a
              href={taggedUrl}
              onClick={trackClick}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
            >
              {title}
            </a>
          </h3>
          <p className="desc">{description}</p>

          <div className="meta">
            <div className="stars" aria-label={`${rating} out of 5 stars`}>
              {"★".repeat(Math.round(rating))}
              {"☆".repeat(5 - Math.round(rating))}
            </div>
            {price && <div className="price">{price}</div>}
          </div>

          <a
            className="cta"
            href={taggedUrl}
            onClick={trackClick}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            View on Amazon
          </a>
        </div>
      </article>

      <style jsx>{`
        .card {
          position: relative;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          background: #f8fafc;
        }
        .badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #065f46;
          color: #ecfdf5;
          font-size: 0.75rem;
          padding: 4px 8px;
          border-radius: 999px;
        }
        .body { padding: 12px 14px 14px; }
        .title { margin: 6px 0 6px; font-size: 1.02rem; }
        .title a { color: var(--text); text-decoration: none; }
        .title a:hover { text-decoration: underline; }
        .desc { color: var(--muted); margin: 0 0 10px; }
        .meta {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 10px; color: #374151;
        }
        .stars { letter-spacing: 1px; }
        .price { font-weight: 600; }
        .cta {
          display: inline-block;
          background: var(--brand);
          color: #ecfdf5;
          padding: 10px 12px;
          border-radius: 10px;
          text-align: center;
          font-weight: 600;
        }
        .cta:hover { background: var(--brand-2); text-decoration: none; }
      `}</style>
    </>
  );
}

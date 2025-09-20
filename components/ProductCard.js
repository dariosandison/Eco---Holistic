// components/ProductCard.js
function withAmazonTag(url) {
  try {
    const u = new URL(url);
    // Only append tag for Amazon links
    if (u.hostname.includes("amazon.")) {
      // Preserve existing params
      u.searchParams.set("tag", "wildandwell0c-21"); // your tag
      // Helpful affiliate hygiene
      u.searchParams.set("linkCode", "osi");
      u.searchParams.set("psc", "1");
    }
    return u.toString();
  } catch {
    return url;
  }
}

export default function ProductCard({
  title,
  description,
  image,
  href,
  badge,
  price,
  rating = 5,
}) {
  const link = withAmazonTag(href);

  return (
    <>
      <article className="card">
        <a
          href={link}
          target="_blank"
          rel="nofollow sponsored noopener"
          aria-label={title}
        >
          <div className="media">
            {/* Use plain <img> to avoid Next remote-image config */}
            <img src={image} alt={title} />
            {badge && <span className="badge">{badge}</span>}
          </div>
          <div className="body">
            <h3>{title}</h3>
            <p className="desc">{description}</p>
            <div className="meta">
              {price && <span className="price">{price}</span>}
              <span className="stars" aria-label={`${rating} star rating`}>
                {"★".repeat(rating)}{"☆".repeat(5 - rating)}
              </span>
            </div>
            <button className="cta" type="button">View on Amazon</button>
          </div>
        </a>
      </article>

      <style jsx>{`
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          overflow: hidden;
          transition: box-shadow .2s ease, transform .2s ease;
          background: #fff;
        }
        .card:hover { box-shadow: 0 10px 25px rgba(0,0,0,.06); transform: translateY(-2px); }
        a { color: inherit; text-decoration: none; display: block; }
        .media { position: relative; aspect-ratio: 4/3; background: #f3f4f6; }
        img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .badge {
          position: absolute; top: 10px; left: 10px;
          background: #065f46; color: #ecfdf5; font-size: .75rem;
          padding: 6px 8px; border-radius: 8px;
        }
        .body { padding: 14px; }
        h3 { margin: 0 0 6px; font-size: 1rem; line-height: 1.35; }
        .desc { color: #4b5563; font-size: .92rem; margin: 0 0 10px; min-height: 42px; }
        .meta { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
        .price { font-weight: 600; color: #111827; }
        .stars { color: #f59e0b; font-size: .9rem; }
        .cta {
          width: 100%;
          background: #065f46; color: #ecfdf5;
          padding: 10px 12px; border: 0; border-radius: 10px; cursor: pointer;
          font-weight: 600;
        }
        .cta:hover { background: #064e3b; }
      `}</style>
    </>
  );
}

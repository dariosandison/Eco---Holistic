import React from "react";
import Image from "next/image";

export default function ProductCard({
  title,
  description,
  image,
  href,
  badge,
  why,
  pros = [],
  cons = [],
}) {
  return (
    <article className="card">
      <div className="pic">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
            priority={false}
          />
        ) : null}
      </div>

      {badge ? <span className="badge">{badge}</span> : null}
      <h3>{title}</h3>
      {why ? <p className="why">{why}</p> : null}
      {description ? <p className="desc">{description}</p> : null}

      {(pros.length || cons.length) ? (
        <div className="split">
          {pros.length ? (
            <div>
              <strong>Pros</strong>
              <ul>{pros.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ) : null}
          {cons.length ? (
            <div>
              <strong>Cons</strong>
              <ul>{cons.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          ) : null}
        </div>
      ) : null}

      {href ? (
        <a
          className="btn"
          href={href}
          target="_blank"
          rel="noopener sponsored nofollow"
        >
          Check price on Amazon
        </a>
      ) : null}

      <style jsx>{`
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 14px;
          background: #fff;
        }
        .badge {
          display: inline-block;
          font-size: 0.75rem;
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
          padding: 2px 8px;
          border-radius: 999px;
          margin: 8px 0;
        }
        h3 { margin: 4px 0 6px; }
        .why { color: #065f46; margin: 0 0 8px; font-weight: 600; }
        .desc { color: #4b5563; margin: 0 0 10px; }
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .btn {
          display: inline-block;
          margin-top: 10px;
          background: #2563eb;
          color: #fff;
          text-decoration: none;
          padding: 10px 14px;
          border-radius: 10px;
          text-align: center;
        }
        .btn:hover { background: #1d4ed8; }
        @media (max-width: 740px) {
          .split { grid-template-columns: 1fr; }
        }
      `}</style>
    </article>
  );
}

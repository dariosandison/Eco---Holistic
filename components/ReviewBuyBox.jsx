// components/ReviewBuyBox.jsx
import Link from "next/link";

import Image from 'next/image';
import { useMemo } from "react";

function prune(value) {
  if (Array.isArray(value)) {
    const arr = value.map(prune).filter((v) => v !== undefined && v !== null && (typeof v !== "object" || Object.keys(v).length));
    return arr.length ? arr : undefined;
  }
  if (value && typeof value === "object") {
    const out = {};
    Object.entries(value).forEach(([k, v]) => {
      const p = prune(v);
      if (p !== undefined && p !== null && !(Array.isArray(p) && p.length === 0)) out[k] = p;
    });
    return Object.keys(out).length ? out : undefined;
  }
  return value;
}

function Stars({ value = 0 }) {
  const full = Math.round(value * 2) / 2;
  return (
    <span aria-label={`${value} out of 5 stars`} title={`${value} / 5`}>
      {"★★★★★☆☆☆☆☆".slice(5 - Math.round(full)).slice(0, 5)}
      <span style={{ marginLeft: 8, opacity: 0.8 }}>{value ? value.toFixed(1) : ""}</span>
    </span>
  );
}

export default function ReviewBuyBox({
  productName,
  subtitle,
  slug,                 // /go/<slug> (required)
  retailer = "Shop",
  label = "Check price",
  image,                 // URL or /public path (optional)
  rating,                // 0–5
  reviewCount,           // integer
  price,                 // "89.00"
  currency = "USD",
  pros = [],
  cons = [],
  highlights = [],       // bullet points
  sku,
  brand = process.env.NEXT_PUBLIC_SITE_NAME || "Recommended",
  canonical,             // absolute URL for the current page (optional)
  second = null,         // optional secondary offer: { slug, retailer, label }
}) {
  const goHref = `/go/${slug}`;

  const jsonLd = useMemo(() => {
    const product = prune({
      "@context": "https://schema.org",
      "@type": "Product",
      name: productName,
      image,
      sku,
      brand: brand ? { "@type": "Brand", name: brand } : undefined,
      review: rating
        ? {
            "@type": "Review",
            reviewBody: subtitle || undefined,
            reviewRating: { "@type": "Rating", ratingValue: rating, bestRating: 5, worstRating: 1 },
            author: { "@type": "Organization", name: process.env.NEXT_PUBLIC_SITE_NAME || "Editorial Team" },
          }
        : undefined,
      aggregateRating:
        rating && reviewCount
          ? { "@type": "AggregateRating", ratingValue: rating, reviewCount }
          : undefined,
      offers:
        price
          ? {
              "@type": "Offer",
              priceCurrency: currency,
              price,
              url: canonical || undefined,
              availability: "https://schema.org/InStock",
            }
          : undefined,
    });
    return JSON.stringify(product);
  }, [productName, image, sku, brand, subtitle, rating, reviewCount, price, currency, canonical]);

  return (
    <aside
      className="buybox"
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: 16,
        display: "grid",
        gap: 14,
        gridTemplateColumns: image ? "100px 1fr" : "1fr",
        alignItems: "center",
        background: "#fafafa",
      }}
    >
      {image ? (
        <div style={{ width: 100, height: 100, borderRadius: 12, overflow: "hidden", background: "#fff", border: "1px solid #eee" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Imagesrc={image} alt={productName} style={{ width: "100%", height: "100%", objectFit: "contain" }} / width={800} height={600} />
        </div>
      ) : null}

      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
          <h2 style={{ margin: "0 0 4px", fontSize: 20, lineHeight: 1.2 }}>{productName}</h2>
          {typeof rating === "number" ? <Stars value={rating} /> : null}
          {price ? <span style={{ marginLeft: "auto", fontWeight: 700 }}>${price}</span> : null}
        </div>
        {subtitle ? <p style={{ margin: "4px 0 10px", opacity: 0.8 }}>{subtitle}</p> : null}

        {highlights?.length ? (
          <ul style={{ margin: "0 0 10px 16px", padding: 0 }}>
            {highlights.slice(0, 4).map((h, i) => (
              <li key={i} style={{ marginBottom: 4 }}>{h}</li>
            ))}
          </ul>
        ) : null}

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link href={goHref} legacyBehavior>
            <a
              rel="nofollow sponsored noopener noreferrer"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 16px",
                borderRadius: 12,
                textDecoration: "none",
                background: "#16a34a",
                color: "#fff",
                border: "1px solid #15803d",
              }}
            >
              <span>{label}</span>
              <span style={{ fontSize: 12, opacity: 0.9, background: "#111", color: "#fff", borderRadius: 999, padding: "2px 8px" }}>
                {retailer}
              </span>
            </a>
          </Link>

          {second?.slug ? (
            <Link href={`/go/${second.slug}`} legacyBehavior>
              <a
                rel="nofollow sponsored noopener noreferrer"
                className="btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 16px",
                  borderRadius: 12,
                  textDecoration: "none",
                  background: "#fff",
                  color: "#111",
                  border: "1px solid #d1d5db",
                }}
              >
                <span>{second.label || "Shop alternative"}</span>
                <span style={{ fontSize: 12, opacity: 0.9, background: "#f3f4f6", color: "#111", borderRadius: 999, padding: "2px 8px" }}>
                  {second.retailer || "Retailer"}
                </span>
              </a>
            </Link>
          ) : null}
        </div>

        {(pros?.length || cons?.length) ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
            {pros?.length ? (
              <div>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>Pros</div>
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  {pros.slice(0, 5).map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            ) : null}
            {cons?.length ? (
              <div>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>Cons</div>
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  {cons.slice(0, 5).map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </aside>
  );
}

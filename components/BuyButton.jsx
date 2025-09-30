// components/BuyButton.jsx
import RetailerBadge from "./RetailerBadge";
import Link from "next/link";

export default function BuyButton({ slug, label="Check price", retailer }) {
  const href = `/go/${slug}`;
  return (
    <Link href={href} legacyBehavior>
      <a
        rel="nofollow sponsored noopener noreferrer"
        className="buy-btn"
        style={{
          display:"inline-flex", alignItems:"center", gap:10,
          padding:"12px 16px", borderRadius:12, textDecoration:"none",
          background:"#16a34a", color:"#fff", border:"1px solid #15803d"
        }}
      >
        <span>{label}</span>
        {retailer ? <RetailerBadge name={retailer} /> : null}
      </a>
    </Link>
  );
}

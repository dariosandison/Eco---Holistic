// components/StickyBuyBar.jsx
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyBuyBar({ slug, label = "Check price", retailer = "Shop" }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const vh = window.innerHeight || 1;
      // Show after user has scrolled 1.2x viewport height
      setShow(y > vh * 1.2);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!slug) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: show ? 12 : -80,
        transition: "bottom .25s ease",
        display: "flex",
        justifyContent: "center",
        pointerEvents: show ? "auto" : "none",
        zIndex: 40,
      }}
    >
      <Link href={`/go/${slug}`} legacyBehavior>
        <a
          rel="nofollow sponsored noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 16px",
            borderRadius: 999,
            textDecoration: "none",
            background: "#16a34a",
            color: "#fff",
            border: "1px solid #15803d",
            boxShadow: "0 8px 20px rgba(0,0,0,.15)",
          }}
        >
          <strong>{label}</strong>
          <span style={{ fontSize: 12, background: "#111", color: "#fff", borderRadius: 999, padding: "2px 8px" }}>{retailer}</span>
        </a>
      </Link>
    </div>
  );
}

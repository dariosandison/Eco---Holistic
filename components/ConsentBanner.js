// components/ConsentBanner.js
import { useEffect, useState } from "react";

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("consent.choice");
      setShow(v !== "granted");
    } catch {
      setShow(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("consent.choice", "granted");
    } catch {}
    if (typeof window !== "undefined" && window.gtag) {
      // Opt into analytics only; keep ad_storage denied unless you manage ads.
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
      });
    }
    setShow(false);
  };

  const dismiss = () => {
    try {
      localStorage.setItem("consent.choice", "dismissed");
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: 12,
        right: 12,
        bottom: 12,
        zIndex: 50,
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        background: "#ffffff",
        boxShadow: "0 8px 24px rgba(0,0,0,.12)",
        padding: 16,
        maxWidth: 800,
        margin: "0 auto",
      }}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and analytics consent"
    >
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <strong>Analytics cookies</strong>
          <p style={{ margin: "6px 0 0", opacity: 0.85 }}>
            We use privacy-friendly analytics to understand traffic. No ads are
            personalized. You can opt in to analytics below.
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            onClick={accept}
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid #15803d",
              background: "#16a34a",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Accept analytics
          </button>
          <button
            onClick={dismiss}
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid #d1d5db",
              background: "#fff",
              color: "#111",
              cursor: "pointer",
            }}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

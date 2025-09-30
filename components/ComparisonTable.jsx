// components/ComparisonTable.jsx
import Link from "next/link";

export default function ComparisonTable({ items = [] }) {
  if (!Array.isArray(items) || !items.length) return null;

  return (
    <div style={{ overflowX: "auto", border: "1px solid #e5e7eb", borderRadius: 12 }}>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
        <thead>
          <tr style={{ background: "#f8fafc" }}>
            <th style={th}>Product</th>
            <th style={th}>Best for</th>
            <th style={th}>Key features</th>
            <th style={th}>Price</th>
            <th style={th}></th>
          </tr>
        </thead>
        <tbody>
          {items.map((it, i) => (
            <tr key={i} style={{ borderTop: "1px solid #e5e7eb" }}>
              <td style={td}><strong>{it.name}</strong>{it.badge ? <span style={badge}>{it.badge}</span> : null}</td>
              <td style={td}>{it.bestFor}</td>
              <td style={td}>{Array.isArray(it.features) ? it.features.join(" • ") : it.features}</td>
              <td style={td}>{it.price ? `$${it.price}` : "—"}</td>
              <td style={{ ...td, textAlign: "right" }}>
                <Link href={`/go/${it.slug}`} legacyBehavior>
                  <a rel="nofollow sponsored noopener noreferrer" style={button}>
                    {it.cta || "Check price"} <span style={pill}>{it.retailer || "Shop"}</span>
                  </a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = { textAlign: "left", padding: "12px 14px", fontWeight: 700, fontSize: 14, borderBottom: "1px solid #e5e7eb" };
const td = { padding: "12px 14px", verticalAlign: "top", fontSize: 14 };
const badge = { marginLeft: 8, background: "#0ea5e9", color: "#fff", borderRadius: 999, padding: "2px 8px", fontSize: 12 };
const pill = { marginLeft: 8, background: "#111", color: "#fff", borderRadius: 999, padding: "2px 8px", fontSize: 12 };
const button = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 14px",
  borderRadius: 10,
  textDecoration: "none",
  background: "#16a34a",
  color: "#fff",
  border: "1px solid #15803d",
};

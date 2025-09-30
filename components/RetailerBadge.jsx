// components/RetailerBadge.jsx
export default function RetailerBadge({ name }) {
  const label = (name || "").toLowerCase();
  const pretty = name || "Shop";
  const bg = "#111";
  const color = "#fff";

  return (
    <span style={{
      display:"inline-block", padding:"4px 8px", borderRadius:999,
      fontSize:12, lineHeight:1, background:bg, color
    }}>
      {pretty}
    </span>
  );
}

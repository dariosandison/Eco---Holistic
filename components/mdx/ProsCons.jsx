import React from 'react';

/**
 * Two-column pros/cons list for MDX.
 *
 * Usage:
 * <ProsCons
 *   pros={["Lightweight", "Great battery life", "Affordable"]}
 *   cons={["No USB-C", "Limited colors"]}
 *   title="Should you buy it?"
 * />
 */
export default function ProsCons({
  pros = [],
  cons = [],
  title,
  prosTitle = 'Pros',
  consTitle = 'Cons',
  ...props
}) {
  const listStyle = { margin: 0, paddingLeft: 18, lineHeight: 1.6, fontSize: 14 };
  const sectionTitleStyle = { fontWeight: 700, marginBottom: 6, fontSize: 14 };

  return (
    <div
      {...props}
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: 16,
        background: '#fff',
      }}
    >
      {title ? <div style={{ fontWeight: 800, marginBottom: 10, fontSize: 16 }}>{title}</div> : null}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 16,
        }}
      >
        <div
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: 10,
            padding: 12,
            background: '#f8fffb',
          }}
        >
          <div style={sectionTitleStyle}>✅ {prosTitle}</div>
          {Array.isArray(pros) && pros.length ? (
            <ul style={listStyle}>
              {pros.map((p, i) => (
                <li key={i} style={{ marginBottom: 4 }}>
                  {p}
                </li>
              ))}
            </ul>
          ) : (
            <div style={{ color: '#6b7280', fontSize: 14 }}>No pros listed.</div>
          )}
        </div>

        <div
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: 10,
            padding: 12,
            background: '#fff7f7',
          }}
        >
          <div style={sectionTitleStyle}>⚠️ {consTitle}</div>
          {Array.isArray(cons) && cons.length ? (
            <ul style={listStyle}>
              {cons.map((c, i) => (
                <li key={i} style={{ marginBottom: 4 }}>
                  {c}
                </li>
              ))}
            </ul>
          ) : (
            <div style={{ color: '#6b7280', fontSize: 14 }}>No cons listed.</div>
          )}
        </div>
      </div>
    </div>
  );
}

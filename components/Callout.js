// components/Callout.js
export default function Callout({ type = 'info', title, children }) {
  const colors = {
    info:   { border: '#2563eb', bg: '#eff6ff' },
    good:   { border: '#065f46', bg: '#ecfdf5' },
    warn:   { border: '#92400e', bg: '#fffbeb' },
    danger: { border: '#7f1d1d', bg: '#fef2f2' },
  };
  const c = colors[type] || colors.info;
  return (
    <div style={{
      borderLeft: `4px solid ${c.border}`,
      background: c.bg,
      padding: '12px 14px',
      borderRadius: 8,
      margin: '12px 0'
    }}>
      {title ? <strong style={{display:'block', marginBottom: 6}}>{title}</strong> : null}
      <div>{children}</div>
    </div>
  );
}

import React from 'react';

/**
 * Simple details/summary disclosure for MDX.
 *
 * <Disclosure title="Affiliate disclosure">
 *   Some text here...
 * </Disclosure>
 */
export default function Disclosure({ title, summary, defaultOpen = false, children, ...props }) {
  const label = summary ?? title ?? 'Details';

  return (
    <details open={defaultOpen} {...props} style={{ margin: '12px 0', background: '#fafafa', borderRadius: 10, border: '1px solid #e5e7eb' }}>
      <summary
        style={{
          cursor: 'pointer',
          padding: '10px 12px',
          fontWeight: 600,
          outline: 'none',
          userSelect: 'none',
        }}
      >
        {label}
      </summary>
      <div style={{ padding: '0 12px 12px', lineHeight: 1.6, fontSize: 14 }}>{children}</div>
    </details>
  );
}

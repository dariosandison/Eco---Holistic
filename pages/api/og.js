// pages/api/og.js
// Simple SVG Open Graph image (1200×630) generated on the fly, no extra deps.
export default function handler(req, res) {
  const {
    slug = '',
    title = 'Wild & Well',
    badge = '',
    deal = '',
  } = Object.fromEntries(new URL(req.url, 'http://x').searchParams);

  const esc = (s) => String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  const badgeFill = /budget/i.test(badge) ? '#059669'
    : /upgrade/i.test(badge) ? '#ea580c'
    : /top/i.test(badge) ? '#2563eb'
    : '#2563eb';

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f8fafc"/>
        <stop offset="1" stop-color="#e2e8f0"/>
      </linearGradient>
      <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="12" flood-opacity="0.15"/>
      </filter>
    </defs>
    <rect width="1200" height="630" fill="url(#g)"/>
    <rect x="80" y="80" width="1040" height="470" rx="24" fill="#fff" stroke="#e2e8f0" filter="url(#s)"/>
    <text x="120" y="160" font-family="Inter, Arial" font-size="28" fill="#0f766e" font-weight="700">Wild &amp; Well</text>

    <text x="120" y="240" font-family="Inter, Arial" font-size="52" fill="#0f172a" font-weight="800">
      ${esc(title).slice(0,90)}
    </text>

    ${badge ? `<g>
      <rect x="120" y="280" rx="14" height="40" width="${Math.min(340, 28 + 12 * esc(badge).length)}" fill="${badgeFill}"/>
      <text x="140" y="308" font-family="Inter, Arial" font-size="22" fill="#fff" font-weight="700">${esc(badge)}</text>
    </g>` : ''}

    ${deal ? `<g>
      <rect x="120" y="330" rx="14" height="40" width="${Math.min(340, 28 + 12 * esc(deal).length)}" fill="#111827"/>
      <text x="140" y="358" font-family="Inter, Arial" font-size="22" fill="#fff" font-weight="700">${esc(deal)}</text>
    </g>` : ''}

    <text x="120" y="420" font-family="Inter, Arial" font-size="22" fill="#475569">wild-and-well.store/guides/${esc(slug)}</text>
  </svg>`;

  res.end(svg);
}

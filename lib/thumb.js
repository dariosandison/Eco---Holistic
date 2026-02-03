function escapeXml(str = '') {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function hash(str = '') {
  // Small deterministic hash for subtle variation
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

export function makeThumbDataUri({ title = '', tag = '', slug = '' } = {}) {
  const seed = hash(`${slug}|${title}|${tag}`)

  // Keep placeholders in the green range to match the brand (avoid blue/teal casts)
  const hue = 96 + (seed % 24) // ~96–119

  const titleSafe = escapeXml(title || 'Wild & Well')
  const tagSafe = escapeXml(tag || 'Insight')

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="hsl(${hue}, 36%, 94%)"/>
        <stop offset="1" stop-color="hsl(${hue}, 46%, 85%)"/>
      </linearGradient>
    </defs>

    <rect width="1200" height="800" fill="url(#g)"/>
    <circle cx="980" cy="180" r="230" fill="hsl(${hue}, 55%, 78%)" opacity="0.42"/>
    <circle cx="260" cy="680" r="270" fill="hsl(${hue}, 55%, 72%)" opacity="0.28"/>

    <rect x="70" y="90" width="1060" height="620" rx="44" fill="rgba(255,255,255,0.72)" stroke="rgba(0,0,0,0.06)"/>
    <rect x="70" y="90" width="1060" height="10" rx="5" fill="rgba(31,106,88,0.55)"/>
    <circle cx="1082" cy="118" r="8" fill="#88c038" opacity="0.95"/>

    <text x="120" y="190" font-family="ui-sans-serif, system-ui, -apple-system" font-size="34" fill="rgba(31, 106, 88, 0.82)">
      Wild &amp; Well • ${tagSafe}
    </text>

    <text x="120" y="300" font-family="ui-sans-serif, system-ui, -apple-system" font-size="66" font-weight="700" fill="#0f172a">
      ${titleSafe}
    </text>

    <text x="120" y="370" font-family="ui-sans-serif, system-ui, -apple-system" font-size="28" fill="rgba(15, 23, 42, 0.60)">
      Calm, practical, UK-focused wellness
    </text>
  </svg>`.trim()

  const encoded = encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22')
  return `data:image/svg+xml;charset=utf-8,${encoded}`
}

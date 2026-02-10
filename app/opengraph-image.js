import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  const title = 'Wild & Well'
  const subtitle = 'Low‑tox living and natural wellness — in plain English (UK)'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background: 'linear-gradient(135deg, #0f766e 0%, #0ea5e9 55%, #22c55e 100%)',
          color: 'white',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: 'rgba(255,255,255,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          >
            <div style={{ fontSize: 30, fontWeight: 800 }}>W</div>
          </div>
          <div style={{ fontSize: 22, opacity: 0.95 }}>wild-and-well.store</div>
        </div>

        <div>
          <div style={{ fontSize: 86, fontWeight: 900, lineHeight: 1.05 }}>{title}</div>
          <div style={{ marginTop: 18, fontSize: 30, opacity: 0.95, maxWidth: 960 }}>{subtitle}</div>

          <div
            style={{
              marginTop: 34,
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
              fontSize: 22,
              opacity: 0.95,
            }}
          >
            {['Topics', 'Shortlists', 'Nutrition', 'Movement', 'Wellness Insights'].map((t) => (
              <div
                key={t}
                style={{
                  padding: '10px 16px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.16)',
                  border: '1px solid rgba(255,255,255,0.22)',
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div style={{ fontSize: 20, opacity: 0.9 }}>
          Calm recommendations • Clear trade‑offs • UK‑friendly
        </div>
      </div>
    ),
    { ...size }
  )
}

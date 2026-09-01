import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  const title = 'Wild & Well'
  const subtitle = 'Evidence-led wellness for real life.'

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
          background: 'linear-gradient(135deg, #183c2f 0%, #285846 58%, #e8dfca 100%)',
          color: '#fffdf6',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: 'rgba(255,255,255,0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.24)',
            }}
          >
            <div style={{ display: 'flex', fontSize: 30, fontWeight: 800 }}>W</div>
          </div>
          <div style={{ display: 'flex', fontSize: 22, opacity: 0.92 }}>wild-and-well.store</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 86, fontWeight: 900, lineHeight: 1.05 }}>{title}</div>
          <div style={{ display: 'flex', marginTop: 18, fontSize: 34, opacity: 0.96, maxWidth: 960 }}>{subtitle}</div>
          <div style={{ display: 'flex', marginTop: 18, fontSize: 24, opacity: 0.88, maxWidth: 980 }}>
            Practical UK guidance on water, air, sleep, nutrition, movement, healthy homes and household resilience.
          </div>

          <div
            style={{
              marginTop: 34,
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
              fontSize: 21,
              opacity: 0.95,
            }}
          >
            {['Water', 'Air', 'Sleep', 'Nutrition', 'Movement', 'Healthy Home', 'Resilience'].map((t) => (
              <div
                key={t}
                style={{
                  display: 'flex',
                  padding: '10px 16px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.13)',
                  border: '1px solid rgba(255,255,255,0.22)',
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 20, opacity: 0.9 }}>
          Learn first. Buy second.
        </div>
      </div>
    ),
    { ...size }
  )
}

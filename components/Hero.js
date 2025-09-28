// components/Hero.js
export default function Hero() {
  const card = {
    background: '#F4EEDB', // warm cream
    borderRadius: '16px',
    padding: '28px 24px',
    border: '1px solid rgba(0,0,0,0.12)',
    boxShadow: '0 2px 0 rgba(0,0,0,0.25) inset',
  };

  const frame = {
    background: '#182613', // deep green like the banner in your screenshot
    borderRadius: '8px',
    height: '360px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const container = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 16px',
  };

  const btn = {
    display: 'inline-block',
    fontWeight: 700,
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(0,0,0,0.12)',
    background: '#2e6f50', // button green
    color: '#fff',
    textDecoration: 'none',
    marginRight: '12px',
  };

  const btnGhost = {
    ...btn,
    background: '#f7f2e6',
    color: '#2e6f50',
    border: '1px solid rgba(0,0,0,0.2)',
  };

  const badgeRow = {
    marginTop: '14px',
    fontSize: '13px',
    color: '#4b4b4b',
    display: 'flex',
    gap: '18px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  return (
    <section style={container}>
      <div style={card}>
        <div style={frame}>
          {/* Optional hero logo; will hide if missing */}
          <img
            src="/logo.svg"
            alt="Wild & Well"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            style={{
              maxWidth: '80%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>

        {/* Slogan */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '18px',
            marginBottom: '10px',
            color: '#3a3a3a',
            fontSize: '18px',
          }}
        >
          <strong>
            Your guide to holistic health, eco living and natural wellness
          </strong>
        </p>

        {/* CTA buttons */}
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <a href="/guides" style={btn}>
            Explore Guides
          </a>
          <a href="/deals" style={btnGhost}>
            Today&apos;s Deals
          </a>
        </div>

        {/* Badges line */}
        <div style={badgeRow}>
          <span>Independent</span>
          <span>•</span>
          <span>Reader-supported</span>
          <span>•</span>
          <span>Evidence-informed picks</span>
          <span>•</span>
          <span>No sponsored posts</span>
        </div>
      </div>
    </section>
  );
}

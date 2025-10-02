// components/Hero.js
export default function Hero() {
  const container = { maxWidth: '1100px', margin: '20px auto 0', padding: '0 16px' };
  const card = {
    background: '#F4EEDB',
    borderRadius: 16,
    padding: '28px 24px',
    border: '1px solid rgba(0,0,0,0.12)',
    boxShadow: '0 2px 0 rgba(0,0,0,0.25) inset',
  };
  const frame = {
    background: '#182613',
    borderRadius: 8,
    height: 360,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };
  const btn = {
    display: 'inline-block',
    fontWeight: 700,
    padding: '12px 16px',
    borderRadius: 8,
    border: '1px solid rgba(0,0,0,0.12)',
    background: '#2e6f50',
    color: '#fff',
    textDecoration: 'none',
    marginRight: 12,
  };
  const btnGhost = {
    ...btn,
    background: '#f7f2e6',
    color: '#2e6f50',
    border: '1px solid rgba(0,0,0,0.2)',
  };

  return (
    <section style={container}>
      <div style={card}>
        <div style={frame}>
          <img
            src="/hero-logo.png"
            alt="Wild & Well"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            style={{ maxWidth: '80%', height: 'auto', display: 'block' }}
          />
        </div>

        <p style={{ textAlign: 'center', marginTop: 18, marginBottom: 10, color: '#3a3a3a', fontSize: 18 }}>
          <strong>Your guide to holistic health, eco living and natural wellness</strong>
        </p>

        <div style={{ textAlign: 'center', marginTop: 10 }}>
          <a href="/guides" style={btn}>Explore Guides</a>
          <a href="/deals" style={btnGhost}>Today&apos;s Deals</a>
        </div>

        <div style={{ marginTop: 14, fontSize: 13, color: '#4b4b4b', display: 'flex', gap: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span>Independent</span><span>•</span>
          <span>Reader-supported</span><span>•</span>
          <span>Evidence-informed picks</span><span>•</span>
          <span>No sponsored posts</span>
        </div>
      </div>
    </section>
  );
}

// components/Footer.js
export default function Footer() {
  const bar = {
    background: 'rgba(0,0,0,0.2)',
    marginTop: '24px',
  };
  const wrap = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '16px',
    color: '#e8e6df',
    display: 'grid',
    gap: '12px',
  };
  const row = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '18px',
    alignItems: 'center',
  };
  const link = {
    color: '#e8e6df',
    textDecoration: 'none',
    opacity: 0.95,
  };

  return (
    <footer style={bar}>
      <div style={wrap}>
        <nav style={row}>
          <a href="/about" style={link}>About</a>
          <a href="/editorial-policy" style={link}>Editorial Policy</a>
          <a href="/how-we-test" style={link}>How We Test</a>
          <a href="/legal/privacy" style={link}>Privacy</a>
          <a href="/legal/cookies" style={link}>Cookies</a>
          <a href="/legal/terms" style={link}>Terms</a>
          <a href="/legal/affiliate-disclosure" style={link}>Affiliate Disclosure</a>
          <a href="/legal/disclaimer" style={link}>Disclaimer</a>
          <a href="/legal/product-disclosure" style={link}>Product Disclosure</a>
        </nav>

        <div style={{ fontSize: '13px', opacity: 0.9 }}>
          © {new Date().getFullYear()} Wild &amp; Well • Independent • Reader-supported
        </div>
      </div>
    </footer>
  );
}

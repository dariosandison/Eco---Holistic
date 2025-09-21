export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container wrap">
        <div>
          <div className="logo" style={{fontWeight:800, marginBottom:8}}>🌿 Wild & Well</div>
          <p>Your guide to eco-living, holistic health, and mindful wellness.</p>
        </div>
        <nav>
          <h4>Site</h4>
          <a href="/">Home</a>
          <a href="/guides/">Guides</a>
          <a href="/recommended/">Recommended</a>
          <a href="/about/">About</a>
          <a href="/disclosure/">Affiliate Disclosure</a>
          <a href="/privacy/">Privacy Policy</a>
          <a href="/cookies/">Cookies Policy</a>
        </nav>
        <nav>
          <h4>Follow</h4>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://pinterest.com/" target="_blank" rel="noreferrer">Pinterest</a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
        </nav>
      </div>
      <div className="legal">
        <small>As an Amazon Associate, we earn from qualifying purchases.</small><br/>
        <small>© {year} Wild & Well. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div>
          <div className="logo">🌿 Wild & Well</div>
          <p>Your guide to eco-living, holistic health, and mindful wellness.</p>
        </div>

        <nav>
          <h4>Site</h4>
          <a href="/">Home</a>
          <a href="/guides">Guides</a>
          <a href="/recommended">Recommended</a>
          <a href="/deals">Deals</a>
          <a href="/disclosure">Affiliate Disclosure</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/cookies">Cookies Policy</a>
          <a href="mailto:hello@wild-and-well.store">Contact</a>
        </nav>

        <nav>
          <h4>Follow</h4>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://pinterest.com/yourhandle" target="_blank" rel="noreferrer">Pinterest</a>
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noreferrer">Facebook</a>
        </nav>
      </div>

      <div className="legal">
        <small>
          As an Amazon Associate, we earn from qualifying purchases. This does not affect the price you pay.
        </small>
        <small>© {year} Wild & Well. All rights reserved.</small>
      </div>
    </footer>
  );
}

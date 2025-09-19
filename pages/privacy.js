// pages/privacy.js
export default function Privacy() {
  return (
    <main style={{maxWidth: 860, margin: "40px auto", padding: "0 20px", lineHeight: 1.7}}>
      <h1>Privacy Policy</h1>
      <p><em>Last updated: {new Date().toLocaleDateString("en-GB")}</em></p>

      <p>
        Wild &amp; Well (“we”, “us”, “our”) operates this website at
        {" "}<strong>https://www.wild-and-well.store</strong>. This Privacy Policy explains
        what we collect and how we use it.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>Basic analytics (page views, referrers) to improve content.</li>
        <li>Information you voluntarily provide via forms (e.g. name, email).</li>
        <li>
          Third-party tracking from partners (e.g. Amazon Associates) when you click
          outbound affiliate links.
        </li>
      </ul>

      <h2>How we use data</h2>
      <ul>
        <li>To run, secure, and improve the site.</li>
        <li>To respond to enquiries you send us.</li>
        <li>To measure affiliate performance and comply with partner requirements.</li>
      </ul>

      <h2>Cookies &amp; third parties</h2>
      <p>
        We use essential cookies for site operation and may use analytics cookies to
        understand traffic. When you click an affiliate link to a retailer such as Amazon,
        that retailer may set its own cookies to track referrals and calculate commission.
        See our <a href="/cookies">Cookie Policy</a> for details.
      </p>

      <h2>Data sharing</h2>
      <p>
        We do not sell your personal data. We may share minimal data with service providers
        (hosting, analytics) under data-processing agreements, and with retailers you visit
        via our links (per their policies).
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can opt out of non-essential cookies via the cookie banner (when enabled).</li>
        <li>You can request access, correction, or deletion of your data by emailing us.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>
      </p>

      <h2>Changes</h2>
      <p>We may update this policy; changes will appear on this page with a new date.</p>
    </main>
  );
}

// pages/cookies.js
export default function Cookies() {
  return (
    <main style={{maxWidth: 860, margin: "40px auto", padding: "0 20px", lineHeight: 1.7}}>
      <h1>Cookie Policy</h1>
      <p><em>Last updated: {new Date().toLocaleDateString("en-GB")}</em></p>

      <p>
        Cookies are small files stored on your device. We use them to keep the site working
        and, where enabled, to understand usage and support affiliate tracking.
      </p>

      <h2>Types of cookies we use</h2>
      <ul>
        <li><strong>Essential:</strong> required for core functionality (security, routing).</li>
        <li>
          <strong>Analytics (optional):</strong> to measure traffic and improve content.
        </li>
        <li>
          <strong>Affiliate/Third-party:</strong> set by retailers (e.g., Amazon) when you
          click outbound links to attribute sales.
        </li>
      </ul>

      <h2>Managing cookies</h2>
      <p>
        You can control cookies in your browser settings. If we enable a consent banner,
        you’ll be able to toggle non-essential cookies from that banner.
      </p>

      <h2>Third-party cookies</h2>
      <p>
        Clicking an affiliate link may take you to a retailer that sets its own cookies.
        Please review their privacy &amp; cookie policies for details.
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>
      </p>
    </main>
  );
}

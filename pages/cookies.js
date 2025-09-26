export const seo = {
  title: 'Cookie Policy',
  description:
    'How Wild & Well uses cookies and similar technologies, and how you can control them.',
};

export default function Cookies() {
  const updated = '2025-01-01';
  return (
    <div className="prose">
      <h1>Cookie Policy</h1>
      <p><strong>Last updated:</strong> {updated}</p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device to help websites work and to
        collect information about how you use them. We also use similar technologies,
        such as local storage and pixels.
      </p>

      <h2>How We Use Cookies</h2>
      <ul>
        <li><strong>Strictly Necessary:</strong> Required for core functionality, security, and fraud prevention.</li>
        <li><strong>Performance/Analytics:</strong> To understand website usage and improve the Site (e.g., page views, popular content).</li>
        <li><strong>Functionality:</strong> To remember your preferences.</li>
        <li><strong>Advertising &amp; Affiliate:</strong> To attribute purchases to our links and manage commissions.</li>
      </ul>

      <h2>Third-Party Cookies</h2>
      <p>
        Some cookies are set by third parties (e.g., analytics providers, affiliate
        networks). These third parties may process your data according to their own
        policies.
      </p>

      <h2>Managing Cookies</h2>
      <ul>
        <li>Most browsers let you block or delete cookies in settings or preferences.</li>
        <li>
          You can typically disable third-party cookies and clear existing cookies at any
          time. Doing so may affect certain features of the Site.
        </li>
      </ul>

      <h2>Do Not Track</h2>
      <p>
        Because industry standards are evolving, we do not currently respond to DNT
        signals.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy to reflect changes in technology, law, or our services.
        Updates will be posted here.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>.
      </p>
    </div>
  );
}

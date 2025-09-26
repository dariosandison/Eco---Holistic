export const seo = {
  title: 'Terms of Service',
  description:
    'The terms and conditions that govern your use of Wild & Well, including disclaimers and limitations of liability.',
};

export default function Terms() {
  const updated = '2025-01-01'; // update when you materially change terms
  return (
    <div className="prose">
      <h1>Terms of Service</h1>
      <p><strong>Last updated:</strong> {updated}</p>

      <h2>1) Acceptance of Terms</h2>
      <p>
        By accessing or using this website (the “Site”), you agree to these Terms of
        Service and our <a href="/privacy">Privacy Policy</a>. If you do not agree, do
        not use the Site.
      </p>

      <h2>2) Eligibility</h2>
      <p>
        You must be at least 13 years old (or the age of digital consent in your
        jurisdiction) to use the Site.
      </p>

      <h2>3) Informational Use Only</h2>
      <p>
        Content is for educational and informational purposes only. Nothing on the Site
        is medical, nutritional, or professional advice. See our{' '}
        <a href="/disclaimer">Disclaimer</a>.
      </p>

      <h2>4) Intellectual Property</h2>
      <p>
        All content on the Site—including text, images, logos, graphics, and
        compilations—is owned by Wild &amp; Well or our licensors and protected by
        applicable copyright, trademark, and other laws. You may not copy, reproduce,
        modify, distribute, or create derivative works without prior written consent.
      </p>

      <h2>5) Affiliate Links &amp; Sponsorships</h2>
      <p>
        We may earn commissions when you purchase through links on the Site. Links may be
        labeled, and we generally use <code>rel="sponsored nofollow"</code> on outbound
        commercial links. See our <a href="/affiliate-disclosure">Affiliate Disclosure</a>.
      </p>

      <h2>6) User Conduct</h2>
      <ul>
        <li>No unlawful, harmful, or deceptive activity.</li>
        <li>No scraping, bulk downloading, or automated access not expressly allowed.</li>
        <li>No posting content that infringes the rights of others.</li>
      </ul>

      <h2>7) Third-Party Links</h2>
      <p>
        The Site contains links to third-party websites. We do not control or endorse
        those sites and are not responsible for their content, policies, or practices.
      </p>

      <h2>8) No Warranties</h2>
      <p>
        THE SITE AND ALL CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT
        WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
        NON-INFRINGEMENT.
      </p>

      <h2>9) Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, WILD &amp; WELL AND ITS OFFICERS,
        DIRECTORS, EMPLOYEES, AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS
        OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF
        DATA, USE, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SITE.
      </p>

      <h2>10) Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless Wild &amp; Well from and
        against any claims, damages, liabilities, costs, and expenses arising from your
        use of the Site or violation of these Terms.
      </p>

      <h2>11) Changes to the Site and Terms</h2>
      <p>
        We may update the Site and these Terms from time to time. Continued use of the
        Site after changes become effective constitutes acceptance of the revised Terms.
      </p>

      <h2>12) Governing Law</h2>
      <p>
        These Terms are governed by the laws of our place of business, without regard to
        conflict of law rules. Venue and jurisdiction shall lie exclusively in the
        competent courts there.
      </p>

      <h2>13) Contact</h2>
      <p>
        Questions? Email <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>.
      </p>
    </div>
  );
}

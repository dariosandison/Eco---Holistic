import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Wild & Well handles personal data, cookies, analytics, newsletters, and affiliate links.',
}

const LAST_UPDATED = '13 February 2026'

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 prose">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-zinc-500">Last updated: {LAST_UPDATED}</p>

      <h2>Quick summary</h2>
      <ul>
        <li><strong>We collect the minimum</strong> data needed to run the site and (if you choose) send emails.</li>
        <li><strong>Analytics are optional</strong>. You can accept or decline analytics cookies at any time.</li>
        <li><strong>Affiliate links</strong> may track that a click came from our site so a commission can be paid.</li>
        <li><strong>We don’t sell your personal data.</strong></li>
      </ul>

      <h2>Who we are</h2>
      <p>
        Wild &amp; Well (“we”, “us”) operates this website. For questions about privacy, contact us via our{' '}
        <Link href="/contact">contact page</Link>.
      </p>

      <h2>What data we collect (and why)</h2>

      <h3>1) Newsletter signups</h3>
      <p>
        If you subscribe (for example to receive the Low‑Tox Shopping List), we collect your email address so we can send you
        the emails you requested, and occasional follow‑ups. You can unsubscribe at any time using the link in any email.
      </p>
      <p>
        Our email service provider may log delivery/open/click events so we can understand whether emails are working and reduce spam.
      </p>

      <h3>2) Contact form messages</h3>
      <p>
        If you contact us, we collect the information you submit (such as your email address and message) so we can respond.
      </p>

      <h3>3) Analytics (optional)</h3>
      <p>
        If you accept analytics, we use tools such as Google Analytics and Microsoft Clarity to understand which pages help readers most,
        diagnose basic issues, and improve content. We do not use analytics to identify you by name.
      </p>
      <p>
        You can manage your analytics preference on our <Link href="/cookies">Cookies</Link> page.
      </p>

      <h3>4) Affiliate links</h3>
      <p>
        Some pages contain affiliate links. If you click an affiliate link, the merchant or affiliate network may set a cookie or use
        similar tracking to attribute the sale to our site. This is how commissions are paid.
        See our <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for details.
      </p>

      <h2>Cookies and local storage</h2>
      <p>
        We use essential cookies (and similar storage) needed for the site to function. If you allow analytics, analytics tools may also
        set cookies or store identifiers in your browser.
      </p>
      <p>
        We store your analytics choice locally in your browser (for example, using local storage) so we can remember your preference.
      </p>
      <p>
        You can change your preference any time on our <Link href="/cookies">Cookies</Link> page.
      </p>

      <h2>Legal bases (UK GDPR)</h2>
      <ul>
        <li><strong>Consent</strong>: for optional analytics cookies and marketing emails where required.</li>
        <li><strong>Legitimate interests</strong>: for essential site security and basic operation (e.g., preventing abuse).</li>
        <li><strong>Contract</strong>: to deliver the emails or services you explicitly request (e.g., sending a download).</li>
      </ul>

      <h2>Sharing and processors</h2>
      <p>
        We use trusted service providers to run the site and deliver emails. These providers act as processors on our behalf and may
        process limited data for the purposes described above. Typical processors include:
      </p>
      <ul>
        <li>Email delivery (newsletter platform)</li>
        <li>Website hosting and content delivery</li>
        <li>Analytics providers (only if you consent)</li>
        <li>Affiliate networks/merchants (to track referrals)</li>
      </ul>

      <h2>International transfers</h2>
      <p>
        Some service providers may process data outside the UK. Where this happens, we rely on appropriate safeguards (such as contractual
        protections) required by applicable law.
      </p>

      <h2>Data retention</h2>
      <ul>
        <li>Newsletter data: kept until you unsubscribe or request deletion.</li>
        <li>Contact messages: kept as long as needed to respond and keep basic records.</li>
        <li>Analytics: retained according to the settings of the analytics provider (only if you consent).</li>
      </ul>

      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data, and to
        object to certain processing. You can also withdraw consent for analytics at any time on our <Link href="/cookies">Cookies</Link> page
        and unsubscribe from emails at any time using the unsubscribe link.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable steps to protect data, but no method of transmission or storage is 100% secure. If you believe your data has been
        compromised, please contact us via our <Link href="/contact">contact page</Link>.
      </p>

      <h2>Children</h2>
      <p>
        This site is intended for a general audience and is not directed to children. If you believe a child has provided personal data,
        contact us and we will delete it where required.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The “Last updated” date at the top shows when changes were made.
      </p>

      <h2>Questions</h2>
      <p>
        For privacy questions or requests, use our <Link href="/contact">contact page</Link>.
      </p>
    </main>
  )
}

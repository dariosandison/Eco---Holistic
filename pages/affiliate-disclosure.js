export const seo = {
  title: 'Affiliate Disclosure',
  description:
    'Transparency about our affiliate relationships, how we earn commissions, and how we keep editorial independence.',
};

export default function AffiliateDisclosure() {
  return (
    <div className="prose">
      <h1>Affiliate Disclosure</h1>

      <p>
        Some links on this Site are affiliate links. If you click a link and make a
        purchase, we may earn a commission at no additional cost to you. We mark or
        treat outbound commercial links with <code>rel="sponsored nofollow"</code>.
      </p>

      <h2>Amazon Associates</h2>
      <p>
        Wild &amp; Well is a participant in various affiliate programs, including the
        Amazon Services LLC Associates Program. <em>As an Amazon Associate, we earn from
        qualifying purchases.</em>
      </p>

      <h2>Editorial Independence</h2>
      <ul>
        <li>Recommendations are based on research, expert input, and where possible hands-on evaluation.</li>
        <li>Affiliate partnerships never determine our verdicts or rankings.</li>
        <li>Manufacturers cannot buy placement or positive coverage.</li>
      </ul>

      <h2>Why It Matters</h2>
      <p>
        Affiliate revenue funds our work so we can keep content free. Our goal is to
        recommend fewer, better products that provide real value.
      </p>

      <h2>Questions?</h2>
      <p>
        Email <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>.
      </p>
    </div>
  );
}

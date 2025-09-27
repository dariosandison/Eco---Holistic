export const seo = {
  title: 'Editorial & Product Testing Disclosure',
  description:
    'How we research, evaluate, and recommend products, plus how we handle samples, sponsorships, and corrections.',
};

export default function EditorialDisclosure() {
  return (
    <div className="prose">
      <h1>Editorial &amp; Product Testing Disclosure</h1>

      <h2>Our Process</h2>
      <ul>
        <li>We start with evidence-guided criteria (materials, safety, durability, value).</li>
        <li>We compare competing products and specifications.</li>
        <li>Where possible, we perform hands-on evaluation and long-term use checks.</li>
        <li>When hands-on testing isn’t feasible, we rely on reputable data, expert input, and transparent methodology.</li>
      </ul>

      <h2>How We Make Money</h2>
      <p>
        We use affiliate links and may receive samples or briefings from brands. Our
        editorial team decides what to cover and recommend. See also our{' '}
        <a href="/affiliate-disclosure">Affiliate Disclosure</a>.
      </p>

      <h2>Samples &amp; Gifts</h2>
      <ul>
        <li>We do not accept compensation for positive reviews.</li>
        <li>Samples do not guarantee coverage and may be returned, donated, or recycled.</li>
        <li>Sponsored content, when present, is clearly labeled.</li>
      </ul>

      <h2>Corrections &amp; Updates</h2>
      <p>
        We update articles as products change or new information emerges. If you spot an
        error, email <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>.
      </p>

      <h2>Conflicts of Interest</h2>
      <p>
        Contributors must disclose relevant financial interests. We avoid assignments
        where a conflict cannot be mitigated.
      </p>
    </div>
  );
}

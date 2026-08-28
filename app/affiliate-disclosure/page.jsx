import Link from "next/link";

export const metadata = {
  title: "Affiliate Disclosure",
  description:
    "How Wild & Well uses affiliate links, keeps editorial decisions separate from commissions, and updates recommendations.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Affiliate Disclosure</h1>
      <p className="text-zinc-700">
        Some links on Wild &amp; Well are affiliate links. If you click one and make a purchase, we may earn a commission
        at no extra cost to you. This helps fund the site and its free guides and tools.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Affiliate revenue does not buy a ranking</h2>
        <p className="text-zinc-700">
          We do not sell paid ranking positions in editorial shortlists. A higher commission does not automatically move a product higher,
          and affiliate availability is not the starting criterion for whether we cover a product or problem.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">How we choose recommendations</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>We start with the problem, the use case and whether a purchase is necessary.</li>
          <li>We consider no-cost and lower-cost alternatives where they solve the problem.</li>
          <li>We prefer clear specifications, checkable evidence and realistic maintenance or replacement costs.</li>
          <li>We avoid exaggerated health, environmental and performance claims.</li>
          <li>We remove or replace options when availability, evidence or value changes.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Research versus hands-on testing</h2>
        <p className="text-zinc-700">
          Unless a page explicitly says otherwise, our buying guides are based on editorial research rather than laboratory or long-term hands-on testing.
          We do not present manufacturer claims as our own test results. Read <Link className="underline" href="/how-we-test">how we evaluate products</Link> for the full process.
        </p>
      </section>

      <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">More on our standards</h2>
        <p className="text-zinc-700 mb-4">
          Our editorial and product-disclosure pages explain how we handle corrections, commercial relationships and recommendation updates.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link className="btn-primary" href="/editorial-policy">Editorial policy</Link>
          <Link className="btn-secondary" href="/product-disclosure">Product disclosure</Link>
          <Link className="btn-secondary" href="/contact">Contact us</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: August 28, 2026</p>
      </section>
    </main>
  );
}

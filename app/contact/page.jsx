import Link from 'next/link'

export const metadata = {
  title: 'Contact | Wild & Well',
  description: 'Contact Wild & Well for corrections, feedback, and questions about our content.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-3 text-zinc-700">
        The fastest way to reach us is email:
      </p>

      <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
        <p className="text-lg font-semibold">
          <a className="underline" href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>
        </p>
        <p className="mt-2 text-sm text-zinc-600">
          Typical response: 1–3 business days.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">What to email us about</h2>
        <ul className="mt-3 list-disc pl-6 text-zinc-700 space-y-2">
          <li><strong>Corrections:</strong> include the page URL and what’s wrong (we fix factual errors quickly).</li>
          <li><strong>Questions:</strong> tell us your goal (air quality, water, fragrance‑free, sleep) and what you’ve already tried.</li>
          <li><strong>Product suggestions:</strong> share the exact model and why it’s worth considering.</li>
          <li><strong>Press / partnerships:</strong> please note we don’t sell paid placements in reviews.</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          For transparency, you can also read our <Link className="underline" href="/editorial-policy">editorial policy</Link> and
          <Link className="underline" href="/how-we-test"> how we test</Link>.
        </p>
      </section>
    </main>
  )
}

import Link from 'next/link'

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-zinc-700">
        That link doesn’t exist (or it’s been moved). If you landed here from an older guide, you can usually find the updated version in Wellness Insights.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Link className="btn-primary text-center" href="/">Go home</Link>
        <Link className="btn-secondary text-center" href="/blog">Browse Wellness Insights</Link>
        <Link className="btn-secondary text-center" href="/topics">Browse Topics</Link>
        <Link className="btn-secondary text-center" href="/favourites">Browse Favourites</Link>
      </div>

      <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-lg font-semibold text-zinc-900">Quick starting points</h2>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link className="underline" href="/topics/air-quality">Air quality</Link>
          <Link className="underline" href="/topics/water">Water</Link>
          <Link className="underline" href="/topics/fragrance-free">Fragrance‑free home</Link>
          <Link className="underline" href="/topics/sleep">Sleep &amp; recovery</Link>
        </div>
        <p className="mt-3 text-sm text-zinc-700">
          Want the beginner swaps? Grab the <Link className="underline" href="/shopping-list">free low‑tox shopping list</Link>.
        </p>
      </div>

      <p className="mt-10 text-xs text-zinc-500">
        If you think this is a mistake, please <Link className="underline" href="/contact">contact us</Link> with the URL.
      </p>
    </main>
  )
}

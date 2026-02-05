import Link from 'next/link'

export const metadata = { title: 'Not found' }

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-zinc-700">
        This page may have moved as we consolidated older sections into Wellness Insights and Topics.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link className="btn-primary" href="/topics">
          Browse Topics
        </Link>
        <Link className="btn-secondary" href="/blog">
          Wellness Insights
        </Link>
        <Link className="btn-secondary" href="/picks">
          Favourites
        </Link>
        <Link className="btn-secondary" href="/shopping-list">
          Free shopping list
        </Link>
      </div>
    </main>
  )
}

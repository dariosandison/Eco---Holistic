import Link from 'next/link'
import { listContent } from '@/lib/content'
import { getAuthor } from '@/lib/authors'

export async function generateStaticParams() {
  return listContent('blog')
    .map((p) => ({ slug: (p.author || 'wild-and-well-editorial') }))
    .filter((v, i, arr) => arr.findIndex((x) => x.slug === v.slug) === i)
}

export async function generateMetadata({ params }) {
  const author = getAuthor(params.slug)
  return {
    title: `${author.name} | Wild & Well`,
    description: author.bio || 'Author profile and latest articles.',
  }
}

export default function Page({ params }) {
  const author = getAuthor(params.slug)
  const posts = listContent('blog')
    .filter((p) => String(p.author || 'wild-and-well-editorial') === author.slug)
    .slice(0, 12)

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">{author.name}</h1>
        {author.role ? <p className="mt-2 text-zinc-600">{author.role}</p> : null}
        {author.bio ? <p className="mt-4 text-zinc-700">{author.bio}</p> : null}
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/authors">All authors</Link>
          <Link className="btn-secondary" href="/blog">Wellness Insights</Link>
          <Link className="btn-secondary" href="/favourites">Favourites</Link>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Latest articles</h2>
        {posts.length ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card hover:shadow-sm transition-shadow">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                {p.description ? <p className="mt-2 text-sm text-zinc-700">{p.description}</p> : null}
                <p className="mt-3 text-xs text-zinc-500">Open →</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-zinc-700">No posts yet.</p>
        )}
      </section>
    </main>
  )
}

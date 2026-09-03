import Link from 'next/link'
import { listContent } from '@/lib/content'
import { AUTHORS, getAuthor } from '@/lib/authors'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

export async function generateStaticParams() {
  const fromPosts = listContent('blog').map((p) => ({ slug: getAuthor(p.author).slug }))
  const fromAuthors = AUTHORS.map((a) => ({ slug: a.slug }))
  return [...fromAuthors, ...fromPosts].filter((v, i, arr) => arr.findIndex((x) => x.slug === v.slug) === i)
}

export async function generateMetadata({ params }) {
  const author = getAuthor(params.slug)
  return {
    title: author.name,
    description: author.bio || 'Editorial responsibility and latest Wild & Well guides.',
  }
}

export default function Page({ params }) {
  const author = getAuthor(params.slug)
  const posts = listContent('blog')
    .filter((p) => getAuthor(p.author).slug === author.slug)
    .slice(0, 12)

  const schemaType = author.schemaType === 'Organization' ? 'Organization' : 'Person'
  const structured = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: author.name,
    url: `${SITE_URL}/authors/${author.slug}`,
    image: author.image ? `${SITE_URL}${author.image}` : undefined,
    description: author.bio || undefined,
  }
  if (schemaType === 'Person') structured.jobTitle = author.role || undefined

  return (
    <main className="trust-page author-profile">
      <StructuredData data={structured} />
      <header className="trust-hero">
        <div><p className="trust-hero__kicker">Editorial responsibility</p><h1>{author.name}</h1></div>
        <div className="trust-hero__lede"><p>{author.bio}</p><div className="author-profile__meta"><span>{author.role}</span><span>UK focused</span><span>Trade-offs first</span><span>Conservative claims</span></div></div>
      </header>

      <div className="trust-grid">
        <aside className="trust-nav"><p>Editorial links</p><Link href="/authors">Authors</Link><Link href="/editorial-policy">Editorial policy</Link><Link href="/how-we-test">How we evaluate products</Link><Link href="/corrections">Corrections</Link></aside>
        <div className="trust-content">
          <section className="trust-section"><p className="trust-section__eyebrow">01 / Role</p><h2>What this byline means</h2><p>This profile identifies editorial responsibility; it is not a substitute for specialist qualifications. Health and safety guidance should be grounded in appropriate authoritative sources, while product recommendations should explain research method, trade-offs and commercial relationships.</p></section>

          <section><p className="trust-section__eyebrow">02 / Recent work</p><h2 className="mt-2 text-[clamp(2rem,3.4vw,3rem)] font-serif font-normal leading-none tracking-[-.035em] text-[var(--brand-dark)]">Latest guides</h2>
            {posts.length ? (
              <div className="author-articles">
                {posts.map((p, index) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="author-article">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div><h3>{p.title}</h3>{p.description ? <p>{p.description}</p> : null}</div>
                    <b>Read →</b>
                  </Link>
                ))}
              </div>
            ) : <p className="mt-4 text-sm text-zinc-600">No published guides currently carry this byline.</p>}
          </section>

          <div className="trust-callout"><div><p>03 / Standards</p><h2>Method matters more than biography.</h2></div><div><p>See how Wild &amp; Well separates editorial research from testing, handles affiliate relationships, and corrects material errors.</p><div className="mt-4 flex flex-wrap gap-2"><Link className="btn-secondary" href="/how-we-test">Evaluation method</Link><Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link></div></div></div>
        </div>
      </div>
    </main>
  )
}

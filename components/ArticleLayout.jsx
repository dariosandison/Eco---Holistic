import Image from 'next/image'

export default function ArticleLayout({ title, description, date, updated, image, author, toc, children }) {
  const parseDate = (d) => {
    if (!d) return null
    const dt = d instanceof Date ? d : new Date(d)
    if (isNaN(dt)) return null
    return {
      iso: dt.toISOString(),
      display: dt.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' }),
    }
  }

  const published = parseDate(date)
  const modified = parseDate(updated)

  return (
    <article className="article-page">
      <header className="article-hero content-shell">
        <div className="article-hero__copy">
          <p className="eyebrow">Wild &amp; Well guide</p>
          <h1>{title}</h1>
          {description ? <p className="article-hero__dek">{description}</p> : null}
          <div className="article-hero__meta">
            {author?.name ? <span>By {author.url ? <a href={author.url}>{author.name}</a> : <b>{author.name}</b>}{author.role ? ` · ${author.role}` : ''}</span> : null}
            {published ? <span>Published <time dateTime={published.iso}>{published.display}</time></span> : null}
            {modified ? <span>Updated <time dateTime={modified.iso}>{modified.display}</time></span> : null}
          </div>
          <div className="article-hero__standards"><span>Evidence-aware</span><span>UK focused</span><span>No-spend options considered</span></div>
        </div>
        {image ? <div className="article-hero__image"><Image src={image} alt="" fill priority sizes="(max-width: 900px) 100vw, 48vw" className="object-cover" /></div> : null}
      </header>

      <div className="article-body content-shell">
        <aside className="article-sidebar">
          {toc?.length ? <nav aria-label="On this page"><p className="eyebrow">On this page</p><ol>{toc.map((item, i) => <li key={item.slug}><a href={`#${item.slug}`}><span>{String(i + 1).padStart(2, '0')}</span>{item.text}</a></li>)}</ol></nav> : null}
          <div className="article-sidebar__trust"><strong>Learn first. Buy second.</strong><p>We separate useful action from product recommendations and keep limitations visible.</p><a href="/editorial-policy">Our editorial standard →</a></div>
        </aside>

        <div className="article-content prose prose-neutral max-w-none">{children}</div>
      </div>

      <section className="article-next"><div className="content-shell article-next__inner"><div><p className="eyebrow">Keep going</p><h2>Turn the reading into a clearer decision.</h2><p>Explore the wider topic, use a practical tool, or compare a focused shortlist only when a product genuinely has a job to do.</p></div><div className="article-next__links"><a href="/topics">Explore the seven journeys <span>→</span></a><a href="/tools">Use a free tool <span>→</span></a><a href="/shortlists">Compare focused shortlists <span>→</span></a><a href="/blog">More guides <span>→</span></a></div></div></section>
    </article>
  )
}

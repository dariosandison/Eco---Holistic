export default function ArticleLayout({
  title,
  description,
  date,
  updated,
  image,
  toc,
  children,
}) {
  const parseDate = (d) => {
    if (!d) return null;
    const dt = d instanceof Date ? d : new Date(d);
    if (isNaN(dt)) return null;
    return {
      iso: dt.toISOString(),
      display: dt.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    };
  };

  const published = parseDate(date);
  const modified = parseDate(updated);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-neutral-600 mt-2">{description}</p>
        )}
        {(published || modified) && (
          <div className="text-sm text-neutral-500 mt-3">
            {published && (
              <>
                <span>Published </span>
                <time dateTime={published.iso}>{published.display}</time>
              </>
            )}
            {published && modified && <span> · </span>}
            {modified && (
              <>
                <span>Updated </span>
                <time dateTime={modified.iso}>{modified.display}</time>
              </>
            )}
          </div>
        )}
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt=""
            className="w-full h-auto rounded-2xl mt-6"
            loading="lazy"
          />
        )}
        {toc && toc.length > 0 && (
          <nav className="mt-6 text-sm">
            <h2 className="font-semibold mb-2">On this page</h2>
            <ul className="space-y-1">
              {toc.map((item) => (
                <li key={item.id} className="text-neutral-600">
                  <a href={`#${item.id}`} className="hover:underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <div className="prose prose-neutral max-w-none">{children}</div>
    </article>
  );
}

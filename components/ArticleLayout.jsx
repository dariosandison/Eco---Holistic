import TableOfContents from '@/components/TableOfContents';

export default function ArticleLayout({ title, description, date, updated, image, toc, children }){
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 grid gap-10 md:grid-cols-[1fr_280px]">
      <article className="prose prose-neutral">
        <h1 className="!mb-2">{title}</h1>
        {description && <p className="!mt-0 text-neutral-600">{description}</p>}
        <p className="text-xs text-neutral-500">{date}{updated ? ` • Updated ${updated}`: ''}</p>
        {children}
      </article>
      <aside className="order-first md:order-none">
        <div className="card p-4 sticky top-24">
          <h3 className="font-semibold mb-3">On this page</h3>
          <TableOfContents toc={toc}/>
        </div>
      </aside>
    </div>
  );
}

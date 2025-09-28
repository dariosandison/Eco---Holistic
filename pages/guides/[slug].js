// pages/guides/[slug].js
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Disclosure from '../../components/Disclosure';
import AuthorBox from '../../components/AuthorBox';
import ProsCons from '../../components/ProsCons';

function parseFrontmatterAndBody(file) {
  const raw = fs.readFileSync(file, 'utf8');
  let fm = {}, body = raw;
  if (raw.startsWith('---')) {
    const end = raw.indexOf('\n---', 3);
    if (end !== -1) {
      const fmRaw = raw.slice(3, end).trim();
      body = raw.slice(end + 4).trim();
      fmRaw.split(/\r?\n/).forEach(line => {
        const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
        if (!m) return;
        const key = m[1];
        let val = m[2].trim();
        // Strip quotes
        val = val.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
        // Simple array support via pipe or comma
        if (val.includes(' | ')) fm[key] = val.split(' | ').map(s => s.trim());
        else if (val.includes('|')) fm[key] = val.split('|').map(s => s.trim());
        else if (val.includes(',') && ['pros','cons','images','tags'].includes(key)) fm[key] = val.split(',').map(s => s.trim());
        else if (!Number.isNaN(Number(val)) && ['rating'].includes(key)) fm[key] = Number(val);
        else fm[key] = val;
      });
    }
  }
  return { meta: fm, body };
}

function mdToHtml(md) {
  // very small, safe-ish MD → HTML (headings, bold/italic, links, lists, paragraphs)
  let html = md
    .replace(/^### (.*)$/gm,'<h3>$1</h3>')
    .replace(/^## (.*)$/gm,'<h2>$1</h2>')
    .replace(/^# (.*)$/gm,'<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
    .replace(/\*(.*?)\*/g,'<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2">$1</a>');

  // unordered lists
  html = html.replace(/(^|\n)- (.*?)(?=\n(?!- )|$)/gs, (m, p1, items) => {
    const lis = items.split('\n- ').map(i=>i.replace(/^- /,'')).map(li=>`<li>${li}</li>`).join('');
    return `${p1}<ul>${lis}</ul>`;
  });

  // paragraphs
  html = html.replace(/\n{2,}/g, '</p><p>');
  html = `<p>${html}</p>`;
  return html;
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), 'content/guides');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.md')) : [];
  return { paths: files.map(f => ({ params: { slug: f.replace(/\.md$/, '') } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const file = path.join(process.cwd(), 'content/guides', `${params.slug}.md`);
  const { meta, body } = parseFrontmatterAndBody(file);

  const contentHtml = mdToHtml(body || '');
  const title = meta.title || params.slug.replace(/-/g,' ');
  const description = meta.description || '';
  const datePublished = meta.date || null;
  const dateModified = meta.updated || meta.date || null;
  const author = meta.author || 'Wild & Well Editorial';

  // JSON-LD: Article
  const articleJsonLd = {
    "@context":"https://schema.org",
    "@type":"Article",
    headline: title,
    description,
    mainEntityOfPage: `https://www.wild-and-well.store/guides/${params.slug}`,
    datePublished,
    dateModified,
    author: { "@type": "Person", name: author }
  };

  // JSON-LD: Product + Review (if rating or pros/cons exist)
  const hasReviewBits = meta.rating || (Array.isArray(meta.pros) && meta.pros.length) || (Array.isArray(meta.cons) && meta.cons.length);
  const productJsonLd = hasReviewBits ? {
    "@context":"https://schema.org",
    "@type":"Product",
    name: meta.product || title,
    brand: meta.brand ? { "@type":"Brand", name: meta.brand } : undefined,
    image: Array.isArray(meta.images) ? meta.images : undefined,
    review: {
      "@type":"Review",
      url: `https://www.wild-and-well.store/guides/${params.slug}`,
      reviewBody: meta.reviewBody || description || title,
      name: `Review: ${meta.product || title}`,
      author: { "@type":"Organization", name:"Wild & Well" },
      reviewRating: meta.rating ? { "@type":"Rating", ratingValue: meta.rating, bestRating: 5, worstRating: 1 } : undefined,
      positiveNotes: Array.isArray(meta.pros) && meta.pros.length ? { "@type":"ItemList", itemListElement: meta.pros.map(p => ({ "@type":"ListItem", name:p })) } : undefined,
      negativeNotes: Array.isArray(meta.cons) && meta.cons.length ? { "@type":"ItemList", itemListElement: meta.cons.map(c => ({ "@type":"ListItem", name:c })) } : undefined
    }
  } : null;

  return {
    props: {
      slug: params.slug,
      meta,
      contentHtml,
      articleJsonLd,
      productJsonLd
    }
  };
}

export default function GuidePage({ slug, meta, contentHtml, articleJsonLd, productJsonLd }) {
  const updated = meta.updated || meta.date;
  const pros = Array.isArray(meta.pros) ? meta.pros : [];
  const cons = Array.isArray(meta.cons) ? meta.cons : [];
  return (
    <>
      <Head>
        <title>{meta.title ? `${meta.title} — Wild & Well` : 'Wild & Well'}</title>
        {meta.description ? <meta name="description" content={meta.description} /> : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        {productJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} /> : null}
      </Head>

      <div className="container">
        <article className="post">
          <h1 className="post-title">{meta.title || slug.replace(/-/g,' ')}</h1>
          <p className="post-meta">
            {meta.date ? <>Published {new Date(meta.date).toLocaleDateString()}</> : null}
            {meta.date && updated ? <> · </> : null}
            {updated ? <>Updated {new Date(updated).toLocaleDateString()}</> : null}
          </p>

          <Disclosure className="my-3" />

          <div className="post-body" dangerouslySetInnerHTML={{ __html: contentHtml }} />

          <ProsCons pros={pros} cons={cons} />

          <AuthorBox
            name={meta.author || "Wild & Well Editorial"}
            title={meta.author_title || "Editor"}
            avatar={meta.author_avatar || "/avatar.png"}
            updated={updated}
            bio={meta.author_bio || "We test low-tox products and publish honest, evidence-informed picks."}
          />
        </article>
      </div>
    </>
  );
}

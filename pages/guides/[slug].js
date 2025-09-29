// pages/guides/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import SEO from '../../components/SEO';
import { serializeMdx, jsonSafeMeta } from '../../lib/mdx';
import Callout from '../../components/Callout';
import CompareInline from '../../components/CompareInline';

const ROOT = process.cwd();

function fileFor(dir, slug) {
  const base = path.join(ROOT, 'content', dir, slug);
  if (fs.existsSync(`${base}.mdx`)) return `${base}.mdx`;
  if (fs.existsSync(`${base}.md`)) return `${base}.md`;
  return null;
}

function listSlugs(dir) {
  const full = path.join(ROOT, 'content', dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => f.replace(/\.(md|mdx)$/,''));
}

function toArr(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v;
  if (typeof v === 'string') return v.split('|').join(',').split(',').map(s => s.trim()).filter(Boolean);
  return [];
}

function readDoc(pathish) {
  if (!pathish) return null;
  let type = '', slug = '';
  if (pathish.includes('/')) {
    const [t, ...rest] = pathish.split('/');
    type = t; slug = rest.join('/');
  } else slug = pathish;

  const dirs = type ? [type] : ['guides','reviews','blog'];
  for (const d of dirs) {
    const f = fileFor(d, slug);
    if (f) {
      const raw = fs.readFileSync(f, 'utf8');
      const { data } = matter(raw);
      return {
        type: d,
        slug,
        title: data?.title || slug.replace(/-/g,' '),
        description: data?.description || ''
      };
    }
  }
  return null;
}

function loadAuthor(authorSlugOrName) {
  if (!authorSlugOrName) return null;
  const guess = String(authorSlugOrName).toLowerCase().replace(/\s+/g,'-');
  const base = path.join(ROOT, 'content', 'authors', guess);
  const file = fs.existsSync(`${base}.mdx`) ? `${base}.mdx` : (fs.existsSync(`${base}.md`) ? `${base}.md` : null);
  if (!file) return { name: authorSlugOrName };
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug: guess,
    name: data?.name || authorSlugOrName,
    title: data?.title || data?.role || '',
    avatar: data?.avatar || '',
    bio: content?.trim() || ''
  };
}

export async function getStaticPaths() {
  return {
    paths: listSlugs('guides').map(slug => ({ params: { slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const file = fileFor('guides', params.slug);
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);

  const related = toArr(data?.related).map(readDoc).filter(Boolean).slice(0, 8);
  const tags    = toArr(data?.tags);
  const author  = loadAuthor(data?.author);

  const mdxSource = await serializeMdx(content || '');

  const meta = jsonSafeMeta({
    ...data,
    related,
    author,
    tags
  });

  const title = meta.title || params.slug.replace(/-/g,' ');
  const description = meta.description || 'Practical, low-tox guide.';
  const url = `https://www.wild-and-well.store/guides/${params.slug}`;
  const datePublished = meta.date || null;
  const dateModified  = meta.updated || meta.date || null;

  const breadcrumbs = [
    { name: 'Home', item: 'https://www.wild-and-well.store/' },
    { name: 'Guides', item: 'https://www.wild-and-well.store/guides' },
    { name: title, item: url }
  ];

  return {
    props: {
      slug: params.slug,
      meta,
      mdxSource,
      seo: {
        title: `${title} — Guide — Wild & Well`,
        description,
        url,
        type: 'article',
        article: { datePublished, dateModified, author: meta.author?.name || meta.author || 'Wild & Well Editorial' },
        breadcrumbs,
        tags
      }
    },
    revalidate: 60 * 60 * 12
  };
}

export default function GuidePage({ slug, meta, mdxSource, seo }) {
  const author = meta.author || null;

  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">{meta.title || slug.replace(/-/g, ' ')}</h1>
          <p className="post-meta">
            {meta.date ? <>Published {new Date(meta.date).toLocaleDateString()}</> : null}
            {meta.date && meta.updated ? <> · </> : null}
            {meta.updated ? <>Updated {new Date(meta.updated).toLocaleDateString()}</> : null}
            {author?.name ? <> · By {author.name}</> : null}
          </p>

          {/* MDX body with safe components */}
          {mdxSource ? (
            <MDXRemote
              {...mdxSource}
              components={{
                Callout,
                CompareInline,
                a: (props) => <a {...props} rel="nofollow noopener noreferrer" />
              }}
            />
          ) : null}

          {/* Related links */}
          {meta.related?.length ? (
            <div className="relbox">
              <div className="relbox-title">Keep exploring</div>
              <ul className="relbox-grid">
                {meta.related.map((r, i) => (
                  <li key={`${r.type}-${r.slug}-${i}`}>
                    <Link href={`/${r.type}/${r.slug}`} className="relbox-card">
                      <span className="relbox-name">{r.title}</span>
                      {r.description ? <span className="relbox-desc">{r.description}</span> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Author bio */}
          {author?.name || author?.bio ? (
            <div className="authorbox">
              {author?.avatar ? <img src={author.avatar} alt={author.name} className="authorbox-avatar" /> : null}
              <div>
                <div className="authorbox-name">{author?.name}</div>
                {author?.title ? <div className="authorbox-title">{author.title}</div> : null}
                {author?.bio ? <p className="authorbox-bio">{author.bio}</p> : null}
              </div>
            </div>
          ) : null}
        </article>
      </div>
    </>
  );
}

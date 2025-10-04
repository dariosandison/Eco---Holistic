// pages/authors/[slug].js
import fs from 'fs';

import Image from 'next/image';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import SEO from '../../components/SEO';

const ROOT = process.cwd();

function fileForAuthor(slug) {
  const base = path.join(ROOT, 'content', 'authors', slug);
  if (fs.existsSync(`${base}.mdx`)) return `${base}.mdx`;
  if (fs.existsSync(`${base}.md`)) return `${base}.md`;
  return null;
}

export async function getStaticPaths() {
  const dir = path.join(ROOT, 'content', 'authors');
  const paths = fs.existsSync(dir) ? fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => ({ params: { slug: f.replace(/\.(md|mdx)$/,'') } })) : [];
  return { paths, fallback: false };
}

function listDocsByAuthor(nameOrSlug) {
  const name = String(nameOrSlug || '').toLowerCase().replace(/\s+/g,'-');
  const out = [];
  for (const section of ['guides', 'reviews', 'blog']) {
    const dir = path.join(ROOT, 'content', section);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      if (!/\.mdx?$/.test(f)) continue;
      const slug = f.replace(/\.(md|mdx)$/,'');
      const raw = fs.readFileSync(path.join(dir, f), 'utf8');
      const { data } = matter(raw);
      const author = (data?.author || '').toString();
      const aSlug = author.toLowerCase().replace(/\s+/g,'-');
      if (aSlug === name) {
        out.push({
          type: section,
          slug,
          title: data?.title || slug.replace(/-/g,' '),
          date: (data?.updated || data?.date) ? new Date(data.updated || data.date).toISOString() : null
        });
      }
    }
  }
  return out.sort((a,b) => (b.date || '').localeCompare(a.date || ''));
}

export async function getStaticProps({ params }) {
  const file = fileForAuthor(params.slug);
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);

  const name = data?.name || params.slug.replace(/-/g,' ');
  const seo = {
    title: `${name} — Author — Wild & Well`,
    description: data?.title || 'Author at Wild & Well',
    url: `https://www.wild-and-well.store/authors/${params.slug}`,
    breadcrumbs: [
      { name: 'Home', item: 'https://www.wild-and-well.store/' },
      { name: 'Authors', item: 'https://www.wild-and-well.store/authors' },
      { name, item: `https://www.wild-and-well.store/authors/${params.slug}` }
    ],
    noindex: false
  };

  const posts = listDocsByAuthor(name);

  return {
    props: {
      author: {
        slug: params.slug,
        name,
        title: data?.title || data?.role || '',
        avatar: data?.avatar || '',
        bio: content?.trim() || ''
      },
      posts,
      seo
    }
  };
}

export default function AuthorPage({ author, posts, seo }) {
  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <div className="authorbox">
            {author.avatar ? <Imagesrc={author.avatar} alt={author.name} className="authorbox-avatar" / width={800} height={600} /> : null}
            <div>
              <h1 className="authorbox-name">{author.name}</h1>
              {author.title ? <div className="authorbox-title">{author.title}</div> : null}
              {author.bio ? <p className="authorbox-bio">{author.bio}</p> : null}
            </div>
          </div>

          {posts.length ? (
            <>
              <h2>Articles by {author.name}</h2>
              <ul>
                {posts.map((p, i) => (
                  <li key={`${p.type}-${p.slug}-${i}`}>
                    <Link href={`/${p.type}/${p.slug}`}>{p.title}</Link>
                    {p.date ? <> — {new Date(p.date).toLocaleDateString()}</> : null}
                  </li>
                ))}
              </ul>
            </>
          ) : <p className="post-meta">No articles yet.</p>}
        </article>
      </div>
    </>
  );
}

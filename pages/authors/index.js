// pages/authors/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import SEO from '../../components/SEO';

function listAuthors() {
  const dir = path.join(process.cwd(), 'content', 'authors');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => {
      const slug = f.replace(/\.(md|mdx)$/,'');
      const raw = fs.readFileSync(path.join(dir, f), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug,
        name: data?.name || slug.replace(/-/g,' '),
        title: data?.title || data?.role || '',
        hasBio: !!content.trim()
      };
    })
    .sort((a,b) => a.name.localeCompare(b.name));
}

export async function getStaticProps() {
  const authors = listAuthors();
  const seo = {
    title: 'Authors — Wild & Well',
    description: 'Meet the editorial team behind Wild & Well.',
    url: 'https://www.wild-and-well.store/authors',
    breadcrumbs: [
      { name: 'Home', item: 'https://www.wild-and-well.store/' },
      { name: 'Authors', item: 'https://www.wild-and-well.store/authors' }
    ]
  };
  return { props: { authors, seo } };
}

export default function AuthorsIndex({ authors, seo }) {
  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">Authors</h1>
          <ul>
            {authors.map(a => (
              <li key={a.slug}>
                <Link href={`/authors/${a.slug}`}>{a.name}</Link>
                {a.title ? <> — {a.title}</> : null}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}

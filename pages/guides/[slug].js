import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Image from 'next/image';
import Link from 'next/link';

import SEO from '@/components/SEO';
import ShareBar from '@/components/ShareBar';
import EmailSignup from '@/components/EmailSignup';
import RelatedGuides from '@/components/RelatedGuides';
import { articleJsonLd } from '@/src/lib/jsonld';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
const GUIDES_DIR = path.join(process.cwd(), 'content', 'guides');

export default function GuidePage({ slug, meta, html, allGuides }) {
  const canonical = `${SITE}/guides/${slug}`;
  const jsonLd = articleJsonLd({
    url: canonical,
    title: meta.title,
    description: meta.description || '',
    datePublished: meta.date || new Date().toISOString(),
    dateModified: meta.updated || meta.date,
    image: meta.ogImage || meta.cover
  });

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <SEO
        title={meta.title}
        description={meta.description || ''}
        canonical={canonical}
        image={meta.ogImage || meta.cover}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header className="mb-6">
          <h1 className="text-3xl font-bold">{meta.title}</h1>
          {meta.description && <p className="text-gray-600 mt-2">{meta.description}</p>}
          {meta.cover && (
            <div className="relative w-full h-64 mt-4 rounded-xl overflow-hidden">
              <Image src={meta.cover} alt={meta.title} fill className="object-cover" />
            </div>
          )}
        </header>

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />

        <div className="mt-8">
          <ShareBar url={canonical} title={meta.title} />
        </div>

        <div className="mt-10">
          <EmailSignup />
        </div>

        <RelatedGuides currentSlug={slug} tags={meta.tags || []} allGuides={allGuides} />
      </article>

      <footer className="mt-12 text-xs text-gray-500">
        <p>
          We may earn from qualifying purchases (affiliate links). We only recommend products we genuinely like.
        </p>
        <p className="mt-1">
          <Link href="/disclosure" className="underline">Read our full disclosure</Link>.
        </p>
      </footer>
    </main>
  );
}

export async function getStaticPaths() {
  const files = fs.existsSync(GUIDES_DIR) ? fs.readdirSync(GUIDES_DIR) : [];
  const paths = files.filter(f => f.endsWith('.md')).map(name => ({
    params: { slug: name.replace(/\.md$/, '') }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(GUIDES_DIR, `${params.slug}.md`);
  const file = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(file);

  // markdown -> HTML
  const html = marked.parse(content);

  // Collect all guides (for Related)
  const files = fs.existsSync(GUIDES_DIR) ? fs.readdirSync(GUIDES_DIR) : [];
  const allGuides = files
    .filter(f => f.endsWith('.md'))
    .map(name => {
      const raw = fs.readFileSync(path.join(GUIDES_DIR, name), 'utf8');
      const { data: fm } = matter(raw);
      return {
        slug: name.replace(/\.md$/, ''),
        title: fm.title || name,
        description: fm.description || '',
        tags: fm.tags || []
      };
    });

  return {
    props: {
      slug: params.slug,
      meta: {
        title: data.title || params.slug,
        description: data.description || '',
        cover: data.cover || '',
        ogImage: data.ogImage || data.cover || '',
        date: data.date || null,
        updated: data.updated || null,
        tags: data.tags || []
      },
      html,
      allGuides
    }
  };
}

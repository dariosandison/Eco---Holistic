// lib/content.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolink from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import readingTime from 'reading-time';

const CONTENT_ROOT = path.join(process.cwd(), 'content');

function dirFor(kind) {
  return path.join(CONTENT_ROOT, kind);
}

export function listSlugs(kind) {
  const full = dirFor(kind);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}

export async function getDoc(kind, slug) {
  const file = path.join(dirFor(kind), `${slug}.md`);
  const fileMdx = path.join(dirFor(kind), `${slug}.mdx`);
  const filepath = fs.existsSync(file) ? file : fileMdx;

  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolink, { behavior: 'wrap' })
    .use(rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] })
    .use(rehypeStringify)
    .process(content);

  const html = String(processed);

  return {
    kind,
    slug,
    frontmatter: {
      title: data.title ?? slug,
      description: data.description ?? '',
      date: data.date ?? null,
      tags: data.tags ?? [],
      coverImage: data.coverImage ?? null,
      products: data.products ?? [],
    },
    readingTime: readingTime(content),
    html,
  };
}

export async function getAllDocs(kind) {
  const slugs = listSlugs(kind);
  const docs = await Promise.all(slugs.map((slug) => getDoc(kind, slug)));
  return docs
    .filter(Boolean)
    .sort((a, b) => {
      const ad = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0;
      const bd = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0;
      return bd - ad;
    });
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const guidesDir = path.join(process.cwd(), 'content', 'guides');

export function getGuideSlugs() {
  if (!fs.existsSync(guidesDir)) return [];
  return fs.readdirSync(guidesDir).filter(f => f.endsWith('.md'));
}

export function getAllGuides() {
  const slugs = getGuideSlugs();
  return slugs.map((file) => {
    const fullPath = path.join(guidesDir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      ...data,
      slug: (data.slug || file.replace(/\.md$/, '')).trim()
    };
  }).sort((a,b) => (a.date > b.date ? -1 : 1));
}

function appendAmazonTags(htmlStr) {
  // Add ?tag=wildandwell0c-21 to any Amazon links that lack it
  return htmlStr.replace(
    /href="(https?:\/\/(?:www\.)?amazon\.[^"]+?)"/g,
    (m, url) => {
      try {
        const u = new URL(url);
        if (!u.searchParams.get('tag')) u.searchParams.set('tag', 'wildandwell0c-21');
        return `href="${u.toString()}"`;
      } catch {
        return m;
      }
    }
  );
}

export async function getGuideBySlug(slug) {
  const mdPath = path.join(guidesDir, `${slug}.md`);
  const source = fs.readFileSync(mdPath, 'utf8');
  const { data, content } = matter(source);

  const processed = await remark().use(gfm).use(html).process(content);
  const contentHtml = appendAmazonTags(processed.toString());

  const front = {
    title: data.title || slug,
    excerpt: data.excerpt || '',
    date: data.date || null,
    slug: data.slug || slug
  };

  return { front, contentHtml };
}

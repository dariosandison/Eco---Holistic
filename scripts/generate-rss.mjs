// scripts/generate-rss.mjs
// Build-time RSS (no Date objects; strings only; HTML stripped)
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SITE = 'https://www.wild-and-well.store';
const OUT = path.join(process.cwd(), 'public', 'feed.xml');

function strip(s = '') {
  return String(s)
    .replace(/<\s*\/?\s*[a-z][\w:-]*(?:\s[^>]*?)?>/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function toISO(v) {
  if (!v) return null;
  const d = new Date(v);
  if (Number.isNaN(+d)) return null;
  return d.toISOString();
}

function list(dir) {
  const root = path.join(process.cwd(), 'content', dir);
  if (!fs.existsSync(root)) return [];
  return fs.readdirSync(root)
    .filter(f => /\.mdx?$/.test(f))
    .map(f => {
      const slug = f.replace(/\.(md|mdx)$/,'');
      const raw = fs.readFileSync(path.join(root, f), 'utf8');
      const { data, content } = matter(raw);
      const url = `${SITE}/${dir}/${slug}`;
      const updated = toISO(data?.updated) || toISO(data?.date) || null;
      return {
        title: data?.title || slug.replace(/-/g,' '),
        url,
        date: updated,
        description: strip(data?.description || content.slice(0, 240))
      };
    })
    .sort((a,b) => (b.date || '').localeCompare(a.date || ''));
}

function rss() {
  const items = [...list('guides'), ...list('reviews'), ...list('blog')].slice(0, 50);
  const lastBuild = items[0]?.date || new Date().toISOString();

  const head = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Wild & Well</title>
<link>${SITE}</link>
<description>Holistic health, eco-friendly living and natural wellness.</description>
<lastBuildDate>${lastBuild}</lastBuildDate>
<ttl>180</ttl>`;

  const body = items.map(it => `
  <item>
    <title>${it.title}</title>
    <link>${it.url}</link>
    <guid>${it.url}</guid>
    ${it.date ? `<pubDate>${it.date}</pubDate>` : ''}
    <description><![CDATA[${it.description}]]></description>
  </item>`).join('\n');

  const tail = `\n</channel>\n</rss>\n`;
  return head + '\n' + body + tail;
}

function generate() {
  const xml = rss();
  const pubDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });
  fs.writeFileSync(OUT, xml, 'utf8');
  console.log('✓ feed.xml generated (', (xml.match(/<item>/g)||[]).length, 'items )');
}

generate();

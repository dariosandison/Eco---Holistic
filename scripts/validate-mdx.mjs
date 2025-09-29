// scripts/validate-mdx.mjs
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const CONTENT_DIRS = [
  'content/blog',
  'content/guides',
  'content/reviews',
  'content/pages',
  'content/legal'
];

const problems = [];
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(md|mdx)$/i.test(entry.name)) files.push(p);
  }
}

for (const d of CONTENT_DIRS) {
  const full = path.join(ROOT, d);
  if (fs.existsSync(full)) walk(full);
}

for (const file of files) {
  const src = fs.readFileSync(file, 'utf8');

  // Angle-bracket autolinks that MDX treats as JSX tags
  if (/<https?:\/\/[^>\s]+>/.test(src)) {
    problems.push(`Angle-bracket autolink in ${file} — use plain URL or [text](url).`);
  }

  // HTML comments, which MDX doesn’t parse; we convert at runtime, but warn here
  if (/<!--[\s\S]*?-->/.test(src)) {
    problems.push(`HTML comment in ${file} — fine (we convert), but prefer MDX {/* ... */}.`);
  }
}

if (problems.length) {
  console.log('MDX content warnings:\n' + problems.map((s) => ' - ' + s).join('\n'));
} else {
  console.log('MDX content check: OK');
}

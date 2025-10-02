/* scripts/fix-content.mjs */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const CONTENT_DIRS = [
  path.join(ROOT, "content", "guides"),
  path.join(ROOT, "content", "blog"),
];

function list(dir) {
  try { return fs.readdirSync(dir).filter(f => /\.mdx?$/.test(f)); } catch { return []; }
}

function fixFrontMatter(text) {
  // Ensure front-matter is wrapped with --- ... ---
  if (!text.startsWith("---")) return text; // assume existing files already have it
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return text;
  let fm = m[1], body = m[2];

  // Quote titles/authors with &
  fm = fm.replace(/^(title|author)\s*:\s*([^\n"].*&[^\n"]*)$/gm, (_,$1,$2)=>`${$1}: "${$2.replace(/"/g,'\\"')}"`);

  // tags: a | b  -> list
  fm = fm.replace(/^tags\s*:\s*([^\n]+)$/gm, (_,$1)=>{
    if ($1.includes("|") || $1.includes(",")) {
      const arr = $1.split(/[|,]/).map(s=>s.trim()).filter(Boolean);
      return "tags:\n" + arr.map(s=>`  - ${s}`).join("\n");
    }
    return `tags:\n  - ${$1.trim()}`;
  });

  // normalise dates to YYYY-MM-DD (basic pass)
  fm = fm.replace(/^(date|updated)\s*:\s*("?)(\d{4}-\d{2}-\d{2}).*"?$/gm, (_,$1,_q,$3)=>`${$1}: "${$3}"`);

  return `---\n${fm}\n---\n${body}`;
}

function fixBody(text) {
  // Replace HTML comments with MDX comments
  text = text.replace(/<!--([\s\S]*?)-->/g, "{/*$1*/}");

  // Replace <https://...> autolinks with just https://... to avoid MDX parser gripes
  text = text.replace(/<https?:\/\/[^>\s]+>/g, (m)=>m.slice(1,-1));

  // If code fences are odd-count, add a closing fence
  const fences = (text.match(/```/g) || []).length;
  if (fences % 2 === 1) text += "\n```";

  return text;
}

for (const dir of CONTENT_DIRS) {
  for (const f of list(dir)) {
    const p = path.join(dir, f);
    let t = fs.readFileSync(p, "utf8");
    const before = t;
    t = fixFrontMatter(t);
    t = fixBody(t);
    if (t !== before) fs.writeFileSync(p, t, "utf8");
  }
}

console.log("fix-content: cleaned MD/MDX in guides & blog.");

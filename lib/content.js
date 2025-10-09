import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = process.cwd();
const DIRS = {
  guides: path.join(ROOT, "content", "guides"),
  blog: path.join(ROOT, "content", "blog"),
  legal: path.join(ROOT, "content", "legal")
};

function listMdxFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith(".md") || f.endsWith(".mdx"));
}

export function getDocBySlug(section, slug) {
  const dir = DIRS[section];
  const mdxPath = path.join(dir, `${slug}.mdx`);
  const mdPath = path.join(dir, `${slug}.md`);
  const file = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;
  if (!file) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { content, data } = matter(raw);
  return { content, meta: data, slug, section };
}

export function getAll(section) {
  const dir = DIRS[section];
  return listMdxFiles(dir).map(f => {
    const slug = f.replace(/\.mdx?$/, "");
    return getDocBySlug(section, slug);
  }).filter(Boolean);
}

// old names some pages were importing:
export const getAllDocs = () => ([
  ...getAll("guides"),
  ...getAll("blog"),
  ...getAll("legal")
]);

export const getAllBlog = () => getAll("blog");

import path from "path";

const ROOT = process.cwd();
const GUIDES_DIR = path.join(ROOT, "content", "guides");

function stripExt(filename) {
  return filename.replace(/\.mdx?$/i, "").replace(/\.json$/i, "");
}

export async function getAllGuideSlugs() {
  // dynamic import so webpack doesn't bundle 'fs'
  const { readdir } = await import("fs/promises");
  try {
    const files = await readdir(GUIDES_DIR);
    return files
      .filter((f) => /\.mdx?$|\.json$/i.test(f))
      .map((f) => stripExt(f));
  } catch {
    return [];
  }
}

export async function readGuideFile(slug) {
  const { readFile } = await import("fs/promises");
  const mdx = path.join(GUIDES_DIR, `${slug}.mdx`);
  const md = path.join(GUIDES_DIR, `${slug}.md`);
  const json = path.join(GUIDES_DIR, `${slug}.json`);

  const tryRead = async (p) => {
    try { return await readFile(p, "utf8"); } catch { return null; }
  };

  let content = await tryRead(mdx);
  if (content) return { format: "mdx", content };
  content = await tryRead(md);
  if (content) return { format: "md", content };
  content = await tryRead(json);
  if (content) return { format: "json", content };
  throw new Error(`Guide not found: ${slug}`);
}

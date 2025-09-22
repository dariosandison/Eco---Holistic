// src/lib/guides.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import slugify from "slugify";

const guidesDir = path.join(process.cwd(), "content", "guides");

export function getAllGuideSlugs() {
  return fs
    .readdirSync(guidesDir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getGuideBySlug(slug) {
  const mdPath = path.join(guidesDir, `${slug}.md`);
  const mdxPath = path.join(guidesDir, `${slug}.mdx`);
  const filePath = fs.existsSync(mdPath) ? mdPath : mdxPath;

  const file = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(file);

  const meta = {
    ...data,
    slug: data.slug || slugify(data.title || slug, { lower: true, strict: true }),
    // leave date as-is here; we serialize it in getStaticProps
  };

  return { content, meta };
}

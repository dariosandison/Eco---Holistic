import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, ""); // removes .md
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || null,
      description: data.description || "",
      content,
    };
  });
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || null,
    description: data.description || "",
    content,
  };
}

export function getAllSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
}



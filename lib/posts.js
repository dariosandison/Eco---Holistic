import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  // Import fs only when function runs (server-side)
  const fs = require("fs");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });
}

export function getPost(slug) {
  const fs = require("fs");
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}


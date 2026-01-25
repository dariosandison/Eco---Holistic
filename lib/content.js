import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const GUIDE_DIR = path.join(process.cwd(), 'content', 'guides');
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function listContent(kind='guides'){
  const dir = kind==='blog'? BLOG_DIR : GUIDE_DIR;
  if(!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.mdx') && !f.endsWith('-duplicate.mdx'))
    .map(file=>{
    const slug = file.replace(/\.mdx$/, '');
    const raw = fs.readFileSync(path.join(dir,file),'utf8');
    const { data } = matter(raw);
    return { slug, ...data };
  }).sort((a,b)=> (new Date(b.date||0)) - (new Date(a.date||0)));
}

export function getContent(kind, slug){
  const dir = kind==='blog'? BLOG_DIR : GUIDE_DIR;
  const file = path.join(dir, slug + '.mdx');
  const raw = fs.readFileSync(file,'utf8');
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export function tocFromMarkdown(md){
  const lines = md.split('\n');
  const items = [];
  for(const line of lines){
    const m = /^(#{2,3})\s+(.*)/.exec(line.trim());
    if(m){
      const level = m[1].length;
      const text = m[2].replace(/[*_`~]/g,'');
      const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-');
      items.push({ id, text, level });
    }
  }
  return items;
}

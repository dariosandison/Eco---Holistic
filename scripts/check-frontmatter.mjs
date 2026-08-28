import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()
const contentRoot = path.join(root, 'content')

function filesUnder(dir) {
  if (!fs.existsSync(dir)) return []
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...filesUnder(full))
    else if (/\.(md|mdx)$/i.test(entry.name)) out.push(full)
  }
  return out
}

const errors = []
const files = filesUnder(contentRoot)

for (const file of files) {
  try {
    matter(fs.readFileSync(file, 'utf8'))
  } catch (err) {
    errors.push({ file: path.relative(root, file), message: err?.reason || err?.message || String(err) })
  }
}

if (errors.length) {
  console.error(`Invalid frontmatter found in ${errors.length} file(s):`)
  for (const error of errors) console.error(`- ${error.file}: ${error.message}`)
  process.exit(1)
}

console.log(`✅ Frontmatter check passed across ${files.length} content files.`)

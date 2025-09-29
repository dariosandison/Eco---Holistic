// lib/mdx.js
// MDX serializer with frontmatter support and guards to neutralize
// HTML comments (<!-- -->) and MkDocs-style admonitions (!!!).
import { serialize } from 'next-mdx-remote/serialize';

function neutralizeAdmonitions(input) {
  return input
    .split('\n')
    .map((line) => (line.trimStart().startsWith('!!!') ? `{/* ${line} */}` : line))
    .join('\n');
}

// Replace HTML comments <!-- ... --> with valid MDX comments {/* ... */}
function replaceHtmlComments(input) {
  // Standard <!-- comment -->
  let out = input.replace(/<!--([\s\S]*?)-->/g, (_m, inner) => `{/* ${inner.trim()} */}`);
  // Handle common em/en-dash typos: <!— ... —> or <!– ... –>
  out = out.replace(/<![-–—]{2}([\s\S]*?)[-–—]{2}>/g, (_m, inner) => `{/* ${inner.trim()} */}`);
  return out;
}

export async function serializeMdx(source) {
  const raw = source || '';
  const cleaned = replaceHtmlComments(neutralizeAdmonitions(raw));
  return serialize(cleaned, {
    parseFrontmatter: true,
    mdxOptions: {
      format: 'mdx',
    },
  });
}

export function jsonSafeMeta(meta) {
  try {
    return JSON.parse(JSON.stringify(meta ?? {}));
  } catch {
    return {};
  }
}


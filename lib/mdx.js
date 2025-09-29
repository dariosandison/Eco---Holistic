// lib/mdx.js
// MDX helpers used by pages during getStaticProps / SSG.
// Provides:
//   - serializeMdx(source, options)
//   - jsonSafeMeta(value)

export async function serializeMdx(
  source,
  { scope = {}, frontmatter = {}, mdxOptions = {} } = {}
) {
  // Always use next-mdx-remote's serializer; if it fails, let the build fail
  // so we don't feed invalid code to MDXRemote.
  const { serialize } = await import('next-mdx-remote/serialize');
  const result = await serialize(source, {
    scope,
    mdxOptions,
    parseFrontmatter: false,
  });
  return { ...result, frontmatter };
}

export function jsonSafeMeta(input) {
  const seen = new WeakSet();
  const sanitize = (value) => {
    if (value === undefined) return null;
    if (value === null) return null;

    const t = typeof value;
    if (t === 'function' || t === 'symbol') return undefined;
    if (t !== 'object') return value;

    if (seen.has(value)) return null;
    seen.add(value);

    if (Array.isArray(value)) {
      return value.map(sanitize).filter((v) => v !== undefined);
    }

    const out = {};
    for (const [k, v] of Object.entries(value)) {
      const sv = sanitize(v);
      if (sv !== undefined) out[k] = sv;
    }
    return out;
  };

  return sanitize(input);
}

export default { serializeMdx, jsonSafeMeta };

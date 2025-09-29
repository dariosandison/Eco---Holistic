// lib/mdx.js
// Canonical MDX helpers used by pages during getStaticProps.
// Exposes two named exports:
//
//   - serializeMdx(source, options)
//     Async. Wraps next-mdx-remote/serialize when available.
//     Falls back gracefully if that package isn't present.
//
//   - jsonSafeMeta(value)
//     Deeply sanitizes any metadata object to be JSON-serializable for Next.js
//     (converts undefined to null, removes functions/symbols, handles cycles).

/**
 * Serialize MDX source for consumption by your MDX renderer.
 * Tries to use next-mdx-remote/serialize. If it's not installed,
 * returns a minimal shape that won't break getStaticProps.
 *
 * @param {string} source - Raw MDX content
 * @param {object} options
 * @param {object} [options.scope] - Variables to pass to MDX
 * @param {object} [options.frontmatter] - Frontmatter to attach
 * @param {object} [options.mdxOptions] - mdx compiler options (remark/rehype plugins, etc.)
 * @returns {Promise<object>}
 */
export async function serializeMdx(
  source,
  { scope = {}, frontmatter = {}, mdxOptions = {} } = {}
) {
  // Attempt to use next-mdx-remote if available
  try {
    const { serialize } = await import('next-mdx-remote/serialize');
    const result = await serialize(source, {
      scope,
      mdxOptions,
      parseFrontmatter: false,
    });
    // Attach frontmatter if caller provided it
    return { ...result, frontmatter };
  } catch (err) {
    // Fallback: return a minimal, stable object so pages can still render/export.
    // NOTE: compiledSource here is just the raw MDX string as a no-op fallback.
    // Your runtime renderer can prefer `__raw` if needed.
    return {
      compiledSource: source,
      scope,
      frontmatter,
      __raw: source,
      __note:
        'fallback serializer used: next-mdx-remote/serialize not available at build time',
    };
  }
}

/**
 * Make any metadata object safe for Next.js JSON serialization.
 * - Converts undefined to null
 * - Removes functions and symbols
 * - Handles circular references
 */
export function jsonSafeMeta(input) {
  const seen = new WeakSet();

  const sanitize = (value) => {
    if (value === undefined) return null;
    if (value === null) return null;
    const t = typeof value;

    if (t === 'function' || t === 'symbol') return undefined; // drop
    if (t !== 'object') return value; // number, string, boolean, bigint

    if (seen.has(value)) return null; // break cycles
    seen.add(value);

    if (Array.isArray(value)) {
      const arr = value
        .map((v) => sanitize(v))
        .filter((v) => v !== undefined);
      return arr;
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

// Optional: default export (some codebases import the whole module).
export default { serializeMdx, jsonSafeMeta };

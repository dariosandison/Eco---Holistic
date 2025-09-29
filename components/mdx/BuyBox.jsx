// components/mdx/BuyBox.jsx
export default function BuyBox({
  title,
  subtitle,
  image,
  href,
  price,
  cta = 'Check price',
  features = [],
  className = '',
}) {
  return (
    <div className={`rounded-2xl border p-4 md:p-6 shadow-sm bg-white dark:bg-zinc-900 ${className}`}>
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      {subtitle && <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{subtitle}</p>}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title || 'Product'}
            className="w-full h-40 object-contain rounded-xl border bg-zinc-50 dark:bg-zinc-800"
          />
        ) : (
          <div className="w-full h-40 rounded-xl border bg-zinc-50 dark:bg-zinc-800" />
        )}
        <div className="md:col-span-2">
          {Array.isArray(features) && features.length > 0 && (
            <ul className="text-sm space-y-1 list-disc pl-5">
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex items-center justify-between">
            <div className="text-base font-medium">{price}</div>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-flex items-center rounded-2xl px-4 py-2 border hover:shadow transition"
              >
                {cta}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

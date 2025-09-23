// /components/AffiliateLink.js
export default function AffiliateLink({ href, children, className, ...rest }) {
  const onClick = () => {
    try {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "affiliate_click", {
          event_category: "engagement",
          event_label: href,
        });
      }
    } catch {}
  };

  // Always ensure sponsored + nofollow + opener protection
  const rel = ["sponsored", "nofollow", "noopener", "noreferrer"]
    .concat((rest.rel || "").split(" ").filter(Boolean))
    .filter((v, i, a) => a.indexOf(v) === i) // dedupe
    .join(" ");

  return (
    <a
      href={href}
      target="_blank"
      rel={rel}
      onClick={onClick}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}

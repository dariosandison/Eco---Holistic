// /components/ShareBar.js
import React from "react";

const SITE_URL = "https://www.wild-and-well.store";

export default function ShareBar({
  path = "/",
  title = "Wild & Well",
  cover = "/cover.png",
}) {
  const url = encodeURIComponent(`${SITE_URL}${path}`);
  const text = encodeURIComponent(title);
  const media = encodeURIComponent(
    cover.startsWith("http") ? cover : `${SITE_URL}${cover}`
  );

  const links = [
    { name: "X", href: `https://twitter.com/intent/tweet?text=${text}&url=${url}` },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { name: "Pinterest", href: `https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${text}` },
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
    { name: "Reddit", href: `https://www.reddit.com/submit?url=${url}&title=${text}` },
    { name: "WhatsApp", href: `https://api.whatsapp.com/send?text=${text}%20${url}` },
    { name: "Email", href: `mailto:?subject=${text}&body=${url}` },
  ];

  return (
    <div className="share">
      <span>Share:</span>
      {links.map((l) => (
        <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer">
          {l.name}
        </a>
      ))}

      <style jsx>{`
        .share {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          padding: 12px 0 4px;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
          margin: 18px 0;
        }
        .share span {
          font-weight: 600;
          color: #111827;
          margin-right: 2px;
        }
        a {
          font-size: 0.95rem;
          text-decoration: none;
          color: #2563eb;
          border: 1px solid #e5e7eb;
          padding: 6px 10px;
          border-radius: 999px;
        }
        a:hover {
          background: #f3f4f6;
        }
      `}</style>
    </div>
  );
}

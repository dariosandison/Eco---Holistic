import React from "react";
import Image from "next/image";

export default function AuthorBox() {
  return (
    <aside className="author">
      <Image
        src="/author.jpg"
        alt="Author"
        width={64}
        height={64}
        style={{ borderRadius: "50%" }}
      />
      <div>
        <strong>D. Sandison</strong>
        <p>
          Research-driven eco & wellness editor. Tests products, reads labels,
          and keeps things practical for UK households.
        </p>
      </div>

      <style jsx>{`
        .author {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 12px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 12px;
          background: #fafafa;
        }
        p { margin: 4px 0 0; color: #4b5563; }
      `}</style>
    </aside>
  );
}

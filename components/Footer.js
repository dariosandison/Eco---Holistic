// components/Footer.js
export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "48px",
        padding: "24px 16px",
        borderTop: "1px solid #eee",
        background: "#fafafa",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          fontSize: "14px",
          lineHeight: 1.6,
          color: "#444",
          textAlign: "center",
        }}
      >
        <strong>Affiliate Disclosure:</strong> Wild &amp; Well may earn a
        commission from qualifying purchases made through links on this site, at
        no extra cost to you.
      </div>
    </footer>
  );
}

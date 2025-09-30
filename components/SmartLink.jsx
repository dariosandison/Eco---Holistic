// components/SmartLink.jsx
import Link from "next/link";

export default function SmartLink({ href = "", children, ...rest }) {
  const isInternal = href?.startsWith("/") || href?.startsWith("#");
  const isGoLink = href?.startsWith("/go/");

  if (isInternal) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  // External
  const rel = ["nofollow", "noopener", "noreferrer"];
  if (isGoLink) rel.unshift("sponsored");

  return (
    <a
      href={href}
      target="_blank"
      rel={rel.join(" ")}
      {...rest}
    >
      {children}
    </a>
  );
}

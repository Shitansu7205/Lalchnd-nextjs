import Link from "next/link";

export default function ButtomBorder({
  href,
  children,
  className = "",
  ...props
}) {
  return (
    <Link
      href={href}
      className={`border-cta-btn tf-btn btn-fill animate-btn ${className}`.trim()}
      {...props}
    >
      {children}
      <i className="icon-arrow-right-2 fs-24" />
    </Link>
  );
}
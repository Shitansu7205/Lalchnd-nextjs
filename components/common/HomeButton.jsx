import Link from "next/link";

export default function HomeButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`home-cta-btn tf-btn btn-fill animate-btn ${className}`.trim()}
    >
      {children}
      <i className="icon-arrow-right-2 fs-24" />
    </Link>
  );
}
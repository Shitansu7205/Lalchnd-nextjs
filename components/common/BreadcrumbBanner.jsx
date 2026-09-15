import Link from "next/link";

export default function BreadcrumbBanner({
  title,
  image,
  current = title,
  homeLabel = "Home",
  homeHref = "/",
  className = "",
}) {
  return (
    <section
      className={`breadcrumb-banner ${className}`.trim()}
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="breadcrumb-banner__overlay" />
      <div className="container breadcrumb-banner__content">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          {/* <ul className="bread-wrap">
            <li>
              <Link href={homeHref} className="text-main-4 link">
                {homeLabel}
              </Link>
            </li>
            <li className="br-line w-12 bg-main" aria-hidden="true" />
            <li aria-current="page">{current}</li>
          </ul> */}
        </nav>
        <h1 className="breadcrumb-banner__title heading fw-normal">{title}</h1>
      </div>
    </section>
  );
}

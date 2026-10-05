"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  allJewlleryPages,
  goldJewlleryPages,
  diamondJewlleryPages,
  silverJewlleryPages,
  morePages,
  payOnlineMenuLinks,
} from "@/data/menu";

export default function MobileNav() {
  const pathname = usePathname();
  const isMenuActive = (link) => {
    return link.href?.split("/")[1] == pathname.split("/")[1];
  };
  const isMenuParentActive = (menu) => {
    return menu.some((elm) => isMenuActive(elm));
  };
  const isMenuParentActive2 = (menu) => {
    return menu.some((elm) => isMenuParentActive(elm.links));
  };
  return (
    <>
      {" "}
      <li className="nav-mb-item">
        <a
          href="#dropdown-menu-home"
          className="collapsed mb-menu-link"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="dropdown-menu-home"
        >
          <span className="sub-title">All Jewellery</span>
          <span className="btn-open-sub" />
        </a>
        <div id="dropdown-menu-home" className="collapse">
          <ul className="sub-nav-menu">
            {allJewlleryPages.map((section, index) => (
              <li key={index} className="nav-mb-item">
                <div className="sub-nav-link sub-title">
                  {section.heading}
                </div>

                <ul className="sub-nav-menu">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="sub-nav-link sub-title" style={{fontSize: "13px"}}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </li>

      <li className="nav-mb-item">
        <a
          href="#dropdown-menu-shop"
          className="collapsed mb-menu-link"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="dropdown-menu-shop"
        >
          <span className="sub-title">Gold</span>
          <span className="btn-open-sub" />
        </a>
        <div id="dropdown-menu-shop" className="collapse">
  <ul className="sub-nav-menu">
    {goldJewlleryPages.map((section, index) => (
      <li key={index} className="nav-mb-item">
        
        <div className="sub-nav-link sub-title">
          {section.heading}
        </div>

        <ul className="sub-nav-menu">
          {section.links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <Link
                href={link.url || "#"}
                className="sub-nav-link sub-title"
                style={{ fontSize: "13px" }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

      </li>
    ))}
  </ul>
</div>
      </li>
      <li className="nav-mb-item">
  <a
    href="#dropdown-menu-product"
    className="collapsed mb-menu-link"
    data-bs-toggle="collapse"
    aria-expanded="true"
    aria-controls="dropdown-menu-product"
  >
    <span className="sub-title">Diamond</span>
    <span className="btn-open-sub" />
  </a>

  <div id="dropdown-menu-product" className="collapse">
    <ul className="sub-nav-menu">
      {diamondJewlleryPages.map((section, index) => (
        <li key={index} className="nav-mb-item">
          <div className="sub-nav-link sub-title">
            {section.heading}
          </div>

          <ul className="sub-nav-menu">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  href={link.url || "#"}
                  className="sub-nav-link sub-title" style={{fontSize: "13px"}}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
</li>
      <li className="nav-mb-item">
        <a
          href="#dropdown-menu-pages"
          className="collapsed mb-menu-link"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="dropdown-menu-pages"
        >
          <span className="sub-title">Silver</span>
          <span className="btn-open-sub" />
        </a>
        <div id="dropdown-menu-pages" className="collapse">
  <ul className="sub-nav-menu">
    {silverJewlleryPages.map((section, index) => (
      <li key={index} className="nav-mb-item">
        <div className="sub-nav-link sub-title">
          {section.heading}
        </div>

        <ul className="sub-nav-menu">
          {section.links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <Link
                href={link.url || "#"}
                className="sub-nav-link sub-title"
                style={{ fontSize: "13px" }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
</div>
      </li>
      <li className="nav-mb-item">
        <a
          href="#dropdown-menu-blog"
          className="collapsed mb-menu-link"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="dropdown-menu-blog"
        >
          <span className="sub-title">More</span>
          <span className="btn-open-sub" />
        </a>
        <div id="dropdown-menu-blog" className="collapse">
  <ul className="sub-nav-menu">
    {morePages.map((section, index) => (
      <li key={index} className="nav-mb-item">
        <div className="sub-nav-link sub-title">
          {section.heading}
        </div>

        <ul className="sub-nav-menu">
          {section.links.map((link, linkIndex) => (
            <li key={linkIndex} className="nav-mb-item">
              <Link
                href={link.href}
                className="sub-nav-link sub-title"
              >
                {link.label}
              </Link>

              {/* Nested Store Links */}
              {link.children && link.children.length > 0 && (
                <ul className="sub-nav-menu">
                  {link.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link
                        href={child.href}
                        className="sub-nav-link sub-title"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
</div>
      </li>
    </>
  );
}

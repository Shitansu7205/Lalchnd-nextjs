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
          <span>All Jewellery</span>
          <span className="btn-open-sub" />
        </a>
        <div id="dropdown-menu-home" className="collapse">
          <ul className="sub-nav-menu">
            {allJewlleryPages.map((section, index) => (
              <li key={index} className="nav-mb-item">
                <div className="sub-nav-link">
                  {section.heading}
                </div>

                <ul className="sub-nav-menu">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="sub-nav-link">
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
          <span>Gold</span>
          <span className="btn-open-sub" />
        </a>
        <div id="dropdown-menu-shop" className="collapse">
          <ul className="sub-nav-menu">
            {goldJewlleryPages.map((section, index) => (
              <li key={index} className="nav-mb-item">
                <div className="sub-nav-link">
                  {section.heading}
                </div>

                <ul className="sub-nav-menu">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="sub-nav-link">
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
          href="#dropdown-menu-product"
          className="collapsed mb-menu-link"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="dropdown-menu-product"
        >
          <span>Diamond</span>
          <span className="btn-open-sub" />
        </a>
        <div id="dropdown-menu-product" className="collapse">
          <ul className="sub-nav-menu">
            {diamondJewlleryPages.map((section, index) => (
              <li key={index} className="nav-mb-item">
                <div className="sub-nav-link">
                  {section.heading}
                </div>

                <ul className="sub-nav-menu">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="sub-nav-link">
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
          href="#dropdown-menu-pages"
          className="collapsed mb-menu-link"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="dropdown-menu-pages"
        >
          <span>Silver</span>
          <span className="btn-open-sub" />
        </a>
        <div id="dropdown-menu-pages" className="collapse">
          <ul className="sub-nav-menu">
            {silverJewlleryPages.map((section, index) => (
              <li key={index} className="nav-mb-item">
                <div className="sub-nav-link">
                  {section.heading}
                </div>

                <ul className="sub-nav-menu">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="sub-nav-link">
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
          href="#dropdown-menu-blog"
          className="collapsed mb-menu-link"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="dropdown-menu-blog"
        >
          <span>More</span>
          <span className="btn-open-sub" />
        </a>
        <div id="dropdown-menu-blog" className="collapse">
          <ul className="sub-nav-menu">
            {morePages.map((section, index) => (
              <li key={index} className="nav-mb-item">
                <div className="sub-nav-link">
                  {section.heading}
                </div>

                <ul className="sub-nav-menu">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="sub-nav-link">
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
    </>
  );
}

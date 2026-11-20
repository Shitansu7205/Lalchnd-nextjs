"use client";
import { products5 } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import QuickView from "../common/QuickView";
import {
  allJewlleryPages,
  giftingPages,
  moreMenuImages,
  goldJewlleryPages,
  silverJewlleryPages,
  diamondJewlleryPages,
  payOnlineMenuLinks,
} from "@/data/menu";
import {
  blogMenuLinks,
  demoPages,
  otherPages,
  productDetailPages,
  shopPages,
  morePages,
} from "@/data/menu";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Circle,
  CircleDot,
  Coins,
  Diamond,
  Gem,
  Link as LinkIcon,
  Sparkles,
  UserRound,
  UsersRound,
  VenusAndMars,
  CalendarDays,
  Crown,
  Feather,
  Heart,
  Star,
} from "lucide-react";
const jewelleryImages = {
  earrings: "/images/lalchnd/jewellery-menu/earrings.webp",
  rings: "/images/lalchnd/jewellery-menu/ring.webp",
  necklaces: "/images/lalchnd/jewellery-menu/necklaces.webp",
  bangles: "/images/lalchnd/jewellery-menu/bangles.webp",
  mangalsutra: "/images/lalchnd/jewellery-menu/mangalsutra.webp",
  pendants: "/images/lalchnd/jewellery-menu/pendants.webp",
  bracelets: "/images/lalchnd/jewellery-menu/bracelets.webp",
  chains: "/images/lalchnd/jewellery-menu/chains.webp",
  coins: "/images/lalchnd/jewellery-menu/coins.webp",
  all: "/images/lalchnd/jewellery-menu/all.webp",

  under25k: "/images/lalchnd/jewellery-menu/under25k.webp",
  range25k50k: "/images/lalchnd/jewellery-menu/range25k50k.webp",
  range50k1l: "/images/lalchnd/jewellery-menu/range50k1l.webp",
  range1l2l: "/images/lalchnd/jewellery-menu/range1l2l.webp",

  men: "/images/lalchnd/jewellery-menu/men.webp",
  women: "/images/lalchnd/jewellery-menu/women.webp",
  kids: "/images/lalchnd/jewellery-menu/kids.webp",
  unisex: "/images/lalchnd/jewellery-menu/unisex.webp",

  dailyWear: "/images/lalchnd/jewellery-menu/dailyWear.webp",
  heavyOccasion: "/images/lalchnd/jewellery-menu/heavyOccasion.webp",
  lightOccasion: "/images/lalchnd/jewellery-menu/lightOccasion.webp",
  bridalWear: "/images/lalchnd/jewellery-menu/bridalWear.webp",
  elevatedEssentials: "/images/lalchnd/jewellery-menu/elevatedEssentials.webp",
};
export default function Menu({ megaMarginRight = true }) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();

  // Keep query parameters because product categories use URLs like
  // /products?metal=gold&category=earrings.
  const normalizePath = (value = "") => {
    const raw = String(value || "");
    const [rawPath, rawQuery = ""] = raw.split("?");
    const withLeadingSlash = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
    const cleanPath = withLeadingSlash.replace(/\/+$/, "") || "/";
    const params = new URLSearchParams(rawQuery.split("#")[0]);
    const sortedParams = [...params.entries()].sort(([a, av], [b, bv]) =>
      a === b ? av.localeCompare(bv) : a.localeCompare(b)
    );
    const query = new URLSearchParams(sortedParams).toString();
    return query ? `${cleanPath}?${query}` : cleanPath;
  };

  const currentPath = normalizePath(
    `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`
  );
  const currentPathOnly = normalizePath(pathname).split("?")[0];

  const getLinkPaths = (link = {}) =>
    [link.href, link.href2, link.url]
      .filter((value) => typeof value === "string" && value.trim() && value !== "#")
      .map(normalizePath);

  // Dropdown item is active only when both its path and query match.
  const isMenuActive = (link) => {
    return getLinkPaths(link).some((menuPath) => currentPath === menuPath);
  };

  // Parent menu is active when a link in that menu matches the current
  // product/category URL. Query parameters are considered for /products pages.
  const isMenuParentActive = (links = []) => {
    return links.some((link) => {
      const paths = getLinkPaths(link);
      const matches = paths.some((menuPath) => {
        if (menuPath.includes("?")) return currentPath === menuPath;
        const menuPathOnly = menuPath.split("?")[0];
        return currentPathOnly === menuPathOnly ||
          (menuPathOnly !== "/" && currentPathOnly.startsWith(`${menuPathOnly}/`));
      });
      if (matches) return true;
      return Array.isArray(link.children) && isMenuParentActive(link.children);
    });
  };

  const isMenuParentActive2 = (sections = []) => {
    return sections.some((section) => isMenuParentActive(section.links || []));
  };

  // Choose ONE parent menu only. Specific categories are checked before All Jewellery,
  // because All Jewellery may contain the same destination links as category menus.
  const activeParent =
    isMenuParentActive2(goldJewlleryPages) ? "gold" :
    isMenuParentActive2(diamondJewlleryPages) ? "diamond" :
    isMenuParentActive2(silverJewlleryPages) ? "silver" :
    isMenuParentActive2(giftingPages) ? "gifting" :
    isMenuParentActive2(morePages) ? "more" :
    isMenuParentActive(payOnlineMenuLinks) ? "payOnline" :
    isMenuParentActive2(allJewlleryPages) ? "allJewellery" :
    "";
  return (
    <>
      <li
        className={`menu-item ${
          activeParent === "allJewellery" ? "active" : ""
        }`}
      >
        <a href="#" className="item-link">
          All Jewellery
          <i className="icon icon-arrow-angle-down" />
        </a>

        <div className="sub-menu mega-menu mega-menu-product">
          <div className="container-layout-right">
            <div className="mega-menu-wrap">
              <div className="wrapper-sub-menu">
                {allJewlleryPages.map((section, sectionIndex) => (
                  <div className="mega-menu-item" key={sectionIndex}>
                    <p className="text-caption menu-heading sub-title">
                      {section.heading}
                    </p>

                    <ul className="menu-list">
                      {section.links.map((link, linkIndex) => {
                        const image = link.icon
                          ? jewelleryImages[link.icon]
                          : null;

                        return (
                          <li key={linkIndex}>
                            <Link
                              href={link.href2 ? link.href2 : link.href}
                              className={`menu-link-text link ${
                                isMenuActive(link) ? "active" : ""
                              }`}
                            >
                              {image && (
    <span className="jewellery-menu-icon ">
        <img
            src={image}
            alt={link.label}
            width={32}
            height={32}
        />
    </span>
)}

                              <span className="sub-title" style={{fontSize: "13px"}}>{link.label}</span>

                              {link.badge && (
                                <span
                                  className={`demo-label ${
                                    link.badgeType || ""
                                  }`.trim()}
                                >
                                  {link.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="wrapper-sub-collection">
                {moreMenuImages.slice(0, 2).map((product, i) => (
                  <div key={i} className="card_product--V01">
                    <div className="card_product-wrapper aspect-ratio-1" style={{borderRadius: "15px"}}>
                      <Link href="/gallery" className="product-img">
                        <Image
                          src={product.imgSrc}
                          alt="Image Product"
                          className="lazyload img-product"
                          width={714}
                          height={900}
                        />

                        {/* <Image
                          src={product.hoverImgSrc}
                          alt="Image Product"
                          className="lazyload img-hover"
                          width={714}
                          height={900}
                        /> */}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </li>
      
      <li
        className={`menu-item ${
          activeParent === "gold" ? "active" : ""
        }`}
      >
        <a href="#" className="item-link">
          Gold
          <i className="icon icon-arrow-angle-down" />
        </a>
        

       <div className="sub-menu mega-menu mega-menu-product">
  <div className="container-layout-right">
    <div className="mega-menu-wrap">

      <div className="wrapper-sub-menu">
        {goldJewlleryPages.map((section, sectionIndex) => (
          <div
            className="mega-menu-item"
            key={section.heading || sectionIndex}
          >
            <p className="text-caption menu-heading sub-title">
              {section.heading}
            </p>

            <ul className="menu-list">
              {section.links.map((link, linkIndex) => (
                <li key={link.name || linkIndex}>
                  <Link
                    href={link.url || "#"}
                    className={`menu-link-text link ${
                      isMenuActive(link) ? "active" : ""
                    }`}
                  >
                    {link.image && (
                      <span className="jewellery-menu-icon">
                        <img
                          src={link.image}
                          alt={link.name || "Gold Jewellery"}
                          width={32}
                          height={32}
                        />
                      </span>
                    )}

                    <span
                      className="sub-title"
                      style={{ fontSize: "13px" }}
                    >
                      {link.name}
                    </span>

                    {link.badge && (
                      <span
                        className={`demo-label ${
                          link.badgeType || ""
                        }`.trim()}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrapper-sub-collection">
        {moreMenuImages.slice(0, 2).map((product, i) => (
          <div key={i} className="card_product--V01">
            <div
              className="card_product-wrapper aspect-ratio-1"
              style={{ borderRadius: "15px" }}
            >
              <Link href="/gallery" className="product-img">
                <Image
                  src={product.imgSrc}
                  alt="Gold Jewellery"
                  className="lazyload img-product"
                  width={714}
                  height={900}
                />

                {/* <Image
                  src={product.hoverImgSrc}
                  alt="Gold Jewellery"
                  className="lazyload img-hover"
                  width={714}
                  height={900}
                /> */}
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</div>
      </li>
      <li
  className={`menu-item ${
    activeParent === "diamond" ? "active" : ""
  }`}
>
  <a href="#" className="item-link">
    Diamond
    <i className="icon icon-arrow-angle-down" />
  </a>

  <div className="sub-menu mega-menu mega-menu-product">
    <div className="container-layout-right">
      <div className="mega-menu-wrap">

        <div className="wrapper-sub-menu">
          {diamondJewlleryPages.map((section, sectionIndex) => (
            <div
              className="mega-menu-item"
              key={section.heading || sectionIndex}
            >
              <p className="text-caption menu-heading sub-title">
                {section.heading}
              </p>

              <ul className="menu-list">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name || linkIndex}>
                    <Link
                      href={link.url || "#"}
                      className={`menu-link-text link ${
                        isMenuActive(link) ? "active" : ""
                      }`}
                    >
                      {link.image && (
                        <span className="jewellery-menu-icon">
                          <img
                            src={link.image}
                            alt={link.name || "Diamond Jewellery"}
                            width={32}
                            height={32}
                          />
                        </span>
                      )}

                      <span className="sub-title" style={{fontSize: "13px"}}>{link.name}</span>

                      {link.badge && (
                        <span
                          className={`demo-label ${
                            link.badgeType || ""
                          }`.trim()}
                        >
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="wrapper-sub-collection">
          {moreMenuImages.slice(0, 2).map((product, i) => (
            <div key={i} className="card_product--V01">
              <div className="card_product-wrapper aspect-ratio-1" style={{borderRadius: "15px"}}>
                <Link
                  href="/gallery"
                  className="product-img"
                >
                  <Image
                    src={product.imgSrc}
                    alt="Diamond Jewellery"
                    className="lazyload img-product"
                    width={714}
                    height={900}
                  />

                  {/* <Image
                    src={product.hoverImgSrc}
                    alt="Diamond Jewellery"
                    className="lazyload img-hover"
                    width={714}
                    height={900}
                  /> */}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</li>
      <li
        className={`menu-item ${
          activeParent === "silver" ? "active" : ""
        }`}
      >
        <a href="#" className="item-link">
          Silver
          <i className="icon icon-arrow-angle-down" />
        </a>

        <div className="sub-menu mega-menu mega-menu-product">
  <div className="container-layout-right">
    <div className="mega-menu-wrap">

      <div className="wrapper-sub-menu">
        {silverJewlleryPages.map((section, sectionIndex) => (
          <div
            className="mega-menu-item"
            key={section.heading || sectionIndex}
          >
            <p className="text-caption menu-heading sub-title">
              {section.heading}
            </p>

            <ul className="menu-list">
              {section.links.map((link, linkIndex) => (
                <li key={link.name || linkIndex}>
                  <Link
                    href={link.url || "#"}
                    className={`menu-link-text link ${
                      isMenuActive(link) ? "active" : ""
                    }`}
                  >
                    {link.image && (
                      <span className="jewellery-menu-icon">
                        <img
                          src={link.image}
                          alt={link.name || "Silver Jewellery"}
                          width={32}
                          height={32}
                        />
                      </span>
                    )}

                    <span
                      className="sub-title"
                      style={{ fontSize: "13px" }}
                    >
                      {link.name}
                    </span>

                    {link.badge && (
                      <span
                        className={`demo-label ${
                          link.badgeType || ""
                        }`.trim()}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrapper-sub-collection">
        {moreMenuImages.slice(0, 2).map((product, i) => (
          <div key={i} className="card_product--V01">
            <div
              className="card_product-wrapper aspect-ratio-1"
              style={{ borderRadius: "15px" }}
            >
              <Link href="/gallery" className="product-img">
                <Image
                  src={product.imgSrc}
                  alt="Silver Jewellery"
                  className="lazyload img-product"
                  width={714}
                  height={900}
                />

                {/* <Image
                  src={product.hoverImgSrc}
                  alt="Silver Jewellery"
                  className="lazyload img-hover"
                  width={714}
                  height={900}
                /> */}
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</div>
      </li>
      <li
        className={`menu-item ${
          activeParent === "gifting" ? "active" : ""
        }`}
      >
        <a href="#" className="item-link">
          Gifting
          <i className="icon icon-arrow-angle-down" />
        </a>

        
<div className="sub-menu mega-menu mega-menu-product">
  <div className="container-layout-right">
    <div className="mega-menu-wrap">

      <div className="wrapper-sub-menu">
        {giftingPages.map((section, sectionIndex) => (
          <div
            className="mega-menu-item"
            key={section.heading || sectionIndex}
          >
            <p className="text-caption menu-heading sub-title">
              {section.heading}
            </p>

            <ul className="menu-list">
              {section.links.map((link, linkIndex) => (
                <li key={link.name || linkIndex}>
                  <Link
                    href={link.url || "#"}
                    className={`menu-link-text link ${
                      isMenuActive(link) ? "active" : ""
                    }`}
                  >
                    {link.image && (
                      <span className="jewellery-menu-icon">
                        <img
                          src={link.image}
                          alt={link.name || "Gift"}
                          width={32}
                          height={32}
                        />
                      </span>
                    )}

                    <span
                      className="sub-title"
                      style={{ fontSize: "13px" }}
                    >
                      {link.name}
                    </span>

                    {link.badge && (
                      <span
                        className={`demo-label ${
                          link.badgeType || ""
                        }`.trim()}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrapper-sub-collection">
        {moreMenuImages.slice(0, 2).map((product, i) => (
          <div key={i} className="card_product--V01">
            <div
              className="card_product-wrapper aspect-ratio-1"
              style={{ borderRadius: "15px" }}
            >
              <Link href="/gallery" className="product-img">
                <Image
                  src={product.imgSrc}
                  alt="Gift Collection"
                  className="lazyload img-product"
                  width={714}
                  height={900}
                />

                {/* <Image
                  src={product.hoverImgSrc}
                  alt="Gift Collection"
                  className="lazyload img-hover"
                  width={714}
                  height={900}
                /> */}
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</div>

      </li>
      <li
        className={`menu-item   ${
          activeParent === "more" ? "active" : ""
        }`}
      >
        <a href="#" className="item-link">
          More
          <i className="icon icon-arrow-angle-down" />
        </a>
        <div className="sub-menu mega-menu mega-menu-product">
          <div className="container-layout-right">
            <div className="mega-menu-wrap">
              <div className="wrapper-sub-menu">
                {morePages.map((section, sectionIndex) => (
                  <div className="mega-menu-item" key={sectionIndex}>
                    <p className="text-caption menu-heading sub-title">
                      {section.heading}
                    </p>
                    <ul className="menu-list">
                      {section.links.map((link, linkIndex) => (
  <li key={linkIndex}>
    <Link
      href={link.href2 ? link.href2 : link.href}
      className={`menu-link-text link ${
        isMenuActive(link) ? "active" : ""
      }`}
    >
      <span className="sub-title" style={{ fontSize: "13px" }}>
        {link.label}
      </span>

      {link.badge && (
        <span
          className={`demo-label ${
            link.badgeType || ""
          }`.trim()}
        >
          {link.badge}
        </span>
      )}
    </Link>

    {link.children && link.children.length > 0 && (
      <ul className="menu-list store-sub-list">
        {link.children.map((child, childIndex) => (
          <li key={childIndex}>
            <Link
              href={child.href}
              className={`menu-link-text link ${
                isMenuActive(child) ? "active" : ""
              }`}
            >
              <span
                className="sub-title"
                style={{ fontSize: "13px" }}
              >
                {child.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </li>
))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="wrapper-sub-collection">
                {moreMenuImages.slice(0, 2).map((product, i) => (
                  <div key={i} className="card_product--V01">
                    <div className="card_product-wrapper aspect-ratio-1" style={{borderRadius: "15px"}}>
                      <Link href="/gallery" className="product-img">
                        <Image
                          src={product.imgSrc}
                          alt="Image Product"
                          className="lazyload img-product"
                          width={714}
                          height={900}
                        />
                        {/* <Image
                          src={product.hoverImgSrc}
                          alt="Image Product"
                          className="lazyload img-hover"
                          width={714}
                          height={900}
                        /> */}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </li>

      <li
        className={`menu-item position-relative   ${
          activeParent === "payOnline" ? "active" : ""
        }`}
      >
        <a href="#" className="item-link">
          Pay OnLine
          <i className="icon icon-arrow-angle-down" />
        </a>
        <div className="sub-menu">
          <div className="mega-menu-item">
            <ul className="menu-list">
              {payOnlineMenuLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`menu-link-text link ${
                      isMenuActive(link) ? "active" : ""
                    }`}
                  >
                    <span className="sub-title" style={{ fontSize: "13px" }}>
  {link.label}
</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}

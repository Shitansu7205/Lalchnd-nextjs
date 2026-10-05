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
import { usePathname } from "next/navigation";
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
      <li
        className={`menu-item ${
          isMenuParentActive2(allJewlleryPages) ? "active" : ""
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

                        <Image
                          src={product.hoverImgSrc}
                          alt="Image Product"
                          className="lazyload img-hover"
                          width={714}
                          height={900}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* <li
                className={`menu-item  ${isMenuParentActive2(shopPages) ? "active" : ""
                    }`}
            >
                <a href="#" className="item-link">
                    Shop
                    <i className="icon icon-arrow-angle-down" />
                </a>
                <div
                    className={`sub-menu mega-menu container-layout-right${megaMarginRight ? "-2" : ""
                        } mega-menu-shop mega-menu-style-2`}
                >
                    <div className="mega-menu-wrap">
                        <div className="wrapper-sub-menu">
                            {shopPages.map((section, index) => (
                                <div className="mega-menu-item" key={index}>
                                    <p className="text-caption menu-heading">{section.heading}</p>
                                    <ul className="menu-list">
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <Link
                                                    href={link.href2 ? link.href2 : link.href}
                                                    className={`menu-link-text link ${isMenuActive(link) ? "active" : ""
                                                        }`}
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="wrapper-sub-collection">
                            <div className="box_image--V01 h-100 hover-img">
                                <div className="image h-100 img-style">
                                    <Image
                                        src="/images/collections/cls-header.jpg"
                                        alt=""
                                        className="lazyload"
                                        width={1188}
                                        height={914}
                                    />
                                </div>
                                <div className="content">
                                    <h5 className="box-text fw-medium text-white">
                                        <span>Flash Sale</span>
                                        <span className="br-line w-22 bg-white d-block" />
                                        <span>30% OFF</span>
                                    </h5>
                                    <div className="box-btn">
                                        <Link
                                            href={`/shop-collection-list`}
                                            className="tf-btn-line style-white text-uppercase"
                                        >
                                            <span className="text-caption lh-28">Shop Now</span>
                                            <i className="icon-arrow-top-right-2 fs-10" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li> */}
      {/* <li
                className={`menu-item   ${isMenuParentActive2(productDetailPages) ? "active" : ""
                    }`}
            >
                <a href="#" className="item-link">
                    Products
                    <i className="icon icon-arrow-angle-down" />
                </a>
                <div className="sub-menu mega-menu mega-menu-product">
                    <div className="container-layout-right">
                        <div className="mega-menu-wrap">
                            <div className="wrapper-sub-menu">
                                {productDetailPages.map((section, sectionIndex) => (
                                    <div className="mega-menu-item" key={sectionIndex}>
                                        <p className="text-caption menu-heading">
                                            {section.heading}
                                        </p>
                                        <ul className="menu-list">
                                            {section.links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <Link
                                                        href={link.href2 ? link.href2 : link.href}
                                                        className={`menu-link-text link ${isMenuActive(link) ? "active" : ""
                                                            }`}
                                                    >
                                                        <>
                                                            {link.label}
                                                            {link.badge && (
                                                                <span
                                                                    className={`demo-label ${link.badgeType || ""
                                                                        }`.trim()}
                                                                >
                                                                    {link.badge}
                                                                </span>
                                                            )}
                                                        </>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="wrapper-sub-collection">
                                {products5.slice(0, 2).map((product, i) => (
                                    <div key={i} className="card_product--V01">
                                        <div className="card_product-wrapper aspect-ratio-1">
                                            <Link
                                                href={`/product-default/${product.id}`}
                                                className="product-img"
                                            >
                                                <Image
                                                    src={product.imgSrc}
                                                    alt="Image Product"
                                                    className="lazyload img-product"
                                                    width={714}
                                                    height={900}
                                                />
                                                <Image
                                                    src={product.hoverImgSrc}
                                                    alt="Image Product"
                                                    className="lazyload img-hover"
                                                    width={714}
                                                    height={900}
                                                />
                                            </Link>
                                            <ul className="list-product-btn center">
                                                <li>
                                                    <QuickView product={product} />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card_product-info">
                                            <Link
                                                href={`/product-default/${product.id}`}
                                                className="name-product h5 fw-normal link text-line-clamp-2"
                                            >
                                                Engagement Ring in 18k Yellow Gold
                                            </Link>
                                            <div className="price-wrap">
                                                <span className="price-new h5">
                                                    ${product.price.toFixed(2)}
                                                </span>
                                                {product.oldPrice && (
                                                    <span className="price-old fw-normal">
                                                        {" "}
                                                        ${product.oldPrice.toFixed(2)}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li
                className={`sub-menu mega-menu mega-menu-page container-layout-right${megaMarginRight ? "-3" : ""
                    } mega-menu-style-2`}
            >
                <a href="#" className="item-link">
                    Pages
                    <i className="icon icon-arrow-angle-down" />
                </a>
                <div className="sub-menu mega-menu mega-menu-page container-layout-right-3 mega-menu-style-2">
                    <div className="mega-menu-wrap">
                        <div className="wrapper-sub-menu">
                            <div className="mega-menu-item">
                                <p className="text-caption menu-heading">PAGES</p>
                                <ul className="menu-list">
                                    {otherPages.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className={`menu-link-text link ${isMenuActive(link) ? "active" : ""
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="wrapper-sub-collection gap-0">
                            <div className="box_image--V01 h-100 hover-img">
                                <div className="image h-100 img-style">
                                    <Image
                                        src="/images/collections/cls-header-2.jpg"
                                        alt=""
                                        className="lazyload"
                                        width={792}
                                        height={914}
                                    />
                                </div>
                                <div className="content">
                                    <h5 className="box-text fw-medium text-white">Most Gifted</h5>
                                    <div className="box-btn">
                                        <Link
                                            href={`/shop-collection-list`}
                                            className="tf-btn-line style-white text-uppercase"
                                        >
                                            <span className="text-caption lh-28">Shop Now</span>
                                            <i className="icon-arrow-top-right-2 fs-10" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="box_image--V01 h-100 hover-img">
                                <div className="image h-100 img-style">
                                    <Image
                                        src="/images/collections/cls-header-3.jpg"
                                        alt=""
                                        className="lazyload"
                                        width={792}
                                        height={914}
                                    />
                                </div>
                                <div className="content">
                                    <h5 className="box-text fw-medium text-white">
                                        <span>Flash Sale</span>
                                        <span className="br-line w-22 bg-white d-block" />
                                        <span>30% OFF</span>
                                    </h5>
                                    <div className="box-btn">
                                        <Link
                                            href={`/shop-collection-list`}
                                            className="tf-btn-line style-white text-uppercase"
                                        >
                                            <span className="text-caption lh-28">Shop Now</span>
                                            <i className="icon-arrow-top-right-2 fs-10" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li> */}
      {/* <li
                className={`menu-item position-relative   ${isMenuParentActive(blogMenuLinks) ? "active" : ""
                    }`}
            >
                <a href="#" className="item-link">
                    Blogs
                    <i className="icon icon-arrow-angle-down" />
                </a>
                <div className="sub-menu">
                    <div className="mega-menu-item">
                        <p className="text-caption menu-heading">BLOGS</p>
                        <ul className="menu-list">
                            {blogMenuLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className={`menu-link-text link ${isMenuActive(link) ? "active" : ""
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </li> */}
      <li
        className={`menu-item ${
          isMenuParentActive2(goldJewlleryPages) ? "active" : ""
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

                <Image
                  src={product.hoverImgSrc}
                  alt="Gold Jewellery"
                  className="lazyload img-hover"
                  width={714}
                  height={900}
                />
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
    isMenuParentActive2(diamondJewlleryPages) ? "active" : ""
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

                  <Image
                    src={product.hoverImgSrc}
                    alt="Diamond Jewellery"
                    className="lazyload img-hover"
                    width={714}
                    height={900}
                  />
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
          isMenuParentActive2(silverJewlleryPages) ? "active" : ""
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

                <Image
                  src={product.hoverImgSrc}
                  alt="Silver Jewellery"
                  className="lazyload img-hover"
                  width={714}
                  height={900}
                />
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
          isMenuParentActive2(allJewlleryPages) ? "active" : ""
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
                  <div className="mega-menu-item" key={sectionIndex}>
                    <p className="text-caption menu-heading sub-title">
                      {section.heading}
                    </p>

                    <ul className="menu-list">
                      {section.links.map((link, linkIndex) => {
                        const image =
    link.icon
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
    <span className="jewellery-menu-icon">
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

                        <Image
                          src={product.hoverImgSrc}
                          alt="Image Product"
                          className="lazyload img-hover"
                          width={714}
                          height={900}
                        />
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
          isMenuParentActive2(productDetailPages) ? "active" : ""
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
                        <Image
                          src={product.hoverImgSrc}
                          alt="Image Product"
                          className="lazyload img-hover"
                          width={714}
                          height={900}
                        />
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
          isMenuParentActive(payOnlineMenuLinks) ? "active" : ""
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

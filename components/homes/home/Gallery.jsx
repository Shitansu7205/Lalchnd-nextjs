"use client";
import React, { useState } from "react";
import { products3 } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import AddtoWishlist from "@/components/common/AddtoWishlist";
import AddtoCart from "@/components/common/AddtoCart";
import QuickView from "@/components/common/QuickView";
import AddtoCompare from "@/components/common/AddtoCompare";
export default function Gallery() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <section className="flat-spacing-3">
      <div className="container">

        {/* Header */}
        <div className="bn-content wow fadeInUp mb-5 home-second">
          <div>
            <h6 className="short-line-heding-dark">LALCHND Collections</h6>

            <h2 className="heading-font">
              <span className="highlight-font">Exquisite</span> Jewelry
            </h2>
          </div>

          <div>
            <Link href="/about-us" className="tf-btn type-large button-font">
              Explore More
              <i className="icon-arrow-right-2 fs-24" />
            </Link>
          </div>
        </div>

        {/* Collection Layout */}
        <div className="collection-five-layout">

          {/* LEFT - TWO VERTICAL IMAGES */}
          <div className="collection-side-column">

            {products3.slice(0, 2).map((product) => (
              <div
                className="card_product--V01 style-2 wow fadeInUp"
                key={product.id}
              >
                <div className="card_product-wrapper aspect-ratio-1">

                  <Link
                    href={`/product-default/${product.id}`}
                    className="product-img"
                  >
                    <Image
                      src={product.imgSrc}
                      alt={product.title}
                      className="lazyload img-product"
                      width={714}
                      height={900}
                    />

                    {product.hoverImgSrc && (
                      <Image
                        src={product.hoverImgSrc}
                        alt={product.title}
                        className="lazyload img-hover"
                        width={714}
                        height={900}
                      />
                    )}
                  </Link>

                  <ul className="list-product-btn">
                    <li className="wishlist">
                      <AddtoWishlist product={product} />
                    </li>

                    <li>
                      <AddtoCart product={product} />
                    </li>

                    <li>
                      <QuickView product={product} />
                    </li>

                    <li className="compare">
                      <AddtoCompare product={product} />
                    </li>
                  </ul>

                  {product.badge && (
                    <div className="badge-box">
                      <span className="badge-item sale">
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}

          </div>


          {/* CENTER - LARGE IMAGE */}
          <div
            className="collection-center-image wow fadeInUp"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
          >
            <Link href="/collections" className="collection-image-link">
              <div className="box_image--V01 style-2 hover-img">

                <div className="image img-style">
                  <Image
                    src="/images/lalchnd/home/second-image.webp"
                    alt="Exquisite Jewelry Collection"
                    className="lazyload"
                    width={1488}
                    height={1900}
                  />
                </div>

                <div className="content wow fadeInUp">
                  <h3
                    className="title fw-medium font-2"
                    style={{ color: "#fff" }}
                  >
                    Shine with Seasonal Picks
                  </h3>
                </div>

                {/* VIEW ALL CURSOR */}
                {isHovering && (
                  <span
                    className="view-all-cursor"
                    style={{
                      left: `${cursor.x}px`,
                      top: `${cursor.y}px`,
                    }}
                  >
                    VIEW ALL
                  </span>
                )}

              </div>
            </Link>
          </div>


          {/* RIGHT - TWO VERTICAL IMAGES */}
          <div className="collection-side-column">

            {products3.slice(2, 4).map((product) => (
              <div
                className="card_product--V01 style-2 wow fadeInUp"
                key={product.id}
              >
                <div className="card_product-wrapper aspect-ratio-1">

                  <Link
                    href={`/product-default/${product.id}`}
                    className="product-img"
                  >
                    <Image
                      src={product.imgSrc}
                      alt={product.title}
                      className="lazyload img-product"
                      width={714}
                      height={900}
                    />

                    {product.hoverImgSrc && (
                      <Image
                        src={product.hoverImgSrc}
                        alt={product.title}
                        className="lazyload img-hover"
                        width={714}
                        height={900}
                      />
                    )}
                  </Link>

                  <ul className="list-product-btn">
                    <li className="wishlist">
                      <AddtoWishlist product={product} />
                    </li>

                    <li>
                      <AddtoCart product={product} />
                    </li>

                    <li>
                      <QuickView product={product} />
                    </li>

                    <li className="compare">
                      <AddtoCompare product={product} />
                    </li>
                  </ul>

                  {product.badge && (
                    <div className="badge-box">
                      <span className="badge-item sale">
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

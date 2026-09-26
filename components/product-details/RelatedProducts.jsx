"use client";
import { products14 } from "@/data/products";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import AddtoWishlist from "../common/AddtoWishlist";
import AddtoCart from "../common/AddtoCart";
import QuickView from "../common/QuickView";
import AddtoCompare from "../common/AddtoCompare";
import { Navigation, Pagination } from "swiper/modules";
export default function RelatedProducts({ product, containerFull = false }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = product?.categories?.[0]?.slug;


  useEffect(() => {
    if (!category) return;

    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(
          `/api/v1/products?category=${category}`
        );

        const data = await response.json();


        const relatedProducts = (data.products || []).filter(
          (item) => item.id !== product.id
        );
        setProducts(relatedProducts);
      } catch (error) {
        console.error("Related products error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [category, product?.id]);

  return (
    <section className="section-padding-bottom-40 section-padding-top-40">
      <div className="container-full-2">
        <div className="sect-top wow fadeInUp">
          <h3 className="s-title">YOU MAY ALSO LIKE</h3>
          <div className="group-btn-slider">
            <div className="nav-prev-swiper tf-sw-nav snbp46">
              <i className="icon-arrow-left" />
            </div>
            <div className="nav-next-swiper tf-sw-nav snbn46">
              <i className="icon-arrow-right" />
            </div>
          </div>
        </div>
        <Swiper
          dir="ltr"
          className="swiper tf-swiper wow fadeInUp"
          breakpoints={{
            0: { slidesPerView: 2 },
            575: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          spaceBetween={15}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            el: ".spd46",
          }}
          navigation={{
            prevEl: ".snbp46",
            nextEl: ".snbn46",
          }}
        >
          {products.map((product) => {
            const image = product.images?.[0]?.src;
            const hoverImage =
              product.images?.[1]?.src || image;

            const price =
              Number(product.prices?.price || 0) / 100;

            const regularPrice =
              Number(product.prices?.regular_price || 0) / 100;

            return (
              <SwiperSlide
                className="swiper-slide"
                key={product.id}
              >
                <div className="card_product--V01">
                  <div className="card_product-wrapper">
                    <Link
                      href={`/products/${product.slug}`}
                      className="product-img"
                    >
                      <Image
                        src={image}
                        alt={product.name || "Product image"}
                        className="lazyload img-product"
                        width={714}
                        height={900}
                      />

                      <Image
                        src={hoverImage}
                        alt={product.name || "Product image"}
                        className="lazyload img-hover"
                        width={714}
                        height={900}
                      />
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
                  </div>

                  <div className="card_product-info">
                    <Link
                      href={`/products/${product.slug}`}
                      className="name-product h5 fw-normal link text-line-clamp-2"
                    >
                      {product.name}
                    </Link>

                    <div className="price-wrap">
                      <span className="price-new h5">
                        ₹
                        {price.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                        })}
                      </span>

                      {product.on_sale &&
                        regularPrice > price && (
                          <span className="price-old fw-normal">
                            ₹
                            {regularPrice.toLocaleString(
                              "en-IN",
                              {
                                minimumFractionDigits: 2,
                              }
                            )}
                          </span>
                        )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="sw-dot-default tf-sw-pagination d-xl-none spd46" />
        </Swiper>
      </div>
    </section>
  );
}

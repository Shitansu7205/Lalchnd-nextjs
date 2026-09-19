"use client";
import { productsImage } from "@/data/products";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import ModalVideo from "@/components/common/ModalVideo";
import { useContextElement } from "@/context/Context";
export default function ProductsImage() {
  const [isOpen, setIsOpen] = useState(false);
  const { setQuickViewItem } = useContextElement();
  return (
    <>
      <section className="flat-spacing-3 pb-0">
        <div className="container">
          <div className="sect-border mt-0" style={{ border: "none" }}>
            <div className="sect-head wow fadeInUp">
              <h2 className="heading-font">
                Designed for Everyday <span className="highlight-font">Glamour</span>
              </h2>
            </div>
            {/* <Swiper
              dir="ltr"
              className="swiper tf-swiper wow fadeInUp"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 80,
                },
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd16",
              }}
            >
              {productsImage.map((product) => (
                <SwiperSlide className="swiper-slide" key={product.id}>
                  <div className="card_product--V02 hover-img video-wrap">
                    <div className="card_product-wrapper">
                      <Link
                        href={`/product-default/${product.id}`}
                        className="image img-style d-flex"
                      >
                        <Image
                          src={product.imgSrc}
                          alt={product.title}
                          className="lazyload"
                          width={774}
                          height={1028}
                        />
                      </Link>
                      <a
                        href="#"
                        className="popup-youtube icon_play"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(true);
                        }}
                      >
                        <i className="icon-retangle" />
                      </a>
                    </div>
                    <div className="content">
                      <Link
                        href={`/product-default/${product.id}`}
                        className="link h5 fw-normal"
                      >
                        {product.title}
                      </Link>
                      <div className="price-wrap">
                        <span className="price-new h5">
                          $
                          {product.price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                        <span className="price-old fw-normal">
                          $
                          {product.oldPrice.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <ul className="rate-wrap">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <li key={i}>
                            <i className="icon-star" />
                          </li>
                        ))}
                      </ul>
                      <p className="text-hurry-up text-caption">
                        Hurry up! Only{" "}
                        <span className="number-left">
                          {" "}
                          {product.stockLeft}
                        </span>{" "}
                        left
                      </p>
                    </div>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      onClick={() => setQuickViewItem(product)}
                      className="tf-btn text-uppercase"
                    >
                      Quick View
                    </a>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-dot-default tf-sw-pagination spd16" />
            </Swiper> */}
            <Swiper
              dir="ltr"
              className="swiper tf-swiper image-focus-slider"
              centeredSlides={true}
              loop={true}
              slidesPerView={5}
              spaceBetween={10}
              speed={800}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
                el: ".spd16",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.8,
                  spaceBetween: 8,
                },
                575: {
                  slidesPerView: 2.5,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3.5,
                  spaceBetween: 15,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
              }}
            >
              {productsImage.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="focus-product-card">

                    {/* Product Image */}
                    <div className="focus-image-card">

                      <Link
                        href={`/product-default/${product.id}`}
                        className="focus-image-link"
                      >
                        <Image
                          src={product.imgSrc}
                          alt={product.title}
                          width={774}
                          height={1028}
                          className="focus-image"
                        />
                      </Link>

                      {/* Quick View - Same Position as Play Button */}
                      <a
                        href="#quickView"
                        data-bs-toggle="modal"
                        onClick={() => setQuickViewItem(product)}
                        className="focus-quick-view"
                      >
                        QUICK VIEW
                      </a>
                    </div>

                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-dot-default tf-sw-pagination spd16" />
            </Swiper>

          </div>
        </div>
      </section>{" "}
      <ModalVideo
        isOpen={isOpen}
        videoId={"MLpWrANjFbI"}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
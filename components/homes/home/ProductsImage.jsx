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
      <section className=" section-padding-top-40 bg-white">
        <div className="container">
          <div className="sect-border mt-0" style={{ border: "none" }}>
            <div className="sect-head wow fadeInUp">
              <h2 className="heading-font">
                Designed for Everyday <span className="highlight-font">Glamour</span>
              </h2>
            </div>

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
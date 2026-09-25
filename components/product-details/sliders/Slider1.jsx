"use client";

import { useEffect, useRef, useState } from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PhotoSwipeLightbox from "photoswipe/lightbox";

import Drift from "drift-zoom";
import Image from "next/image";

export default function Slider1({ images = [] }) {
  const items = images.map((image, index) => ({
    id: image.id || index + 1,
    imgSrc: image.src,
    alt: image.alt || "Product image",
  }));

  const [thumbSwiper, setThumbSwiper] = useState(null);
  const swiperRef = useRef(null);
  const lightboxRef = useRef(null);

  useEffect(() => {
    if (!items.length) return;

    const checkWindowSize = () => window.innerWidth >= 1200;

    if (!checkWindowSize()) return;

    const imageZoom = () => {
      const driftAll = document.querySelectorAll(".tf-image-zoom");
      const pane = document.querySelector(".tf-zoom-main");

      driftAll.forEach((el) => {
        new Drift(el, {
          zoomFactor: 2,
          paneContainer: pane,
          inlinePane: false,
          handleTouch: false,
          hoverBoundingBox: true,
          containInline: true,
        });
      });
    };

    imageZoom();

    const zoomElements =
      document.querySelectorAll(".tf-image-zoom");

    const handleMouseOver = (event) => {
      const parent = event.target.closest(".section-image-zoom");

      if (parent) {
        parent.classList.add("zoom-active");
      }
    };

    const handleMouseLeave = (event) => {
      const parent = event.target.closest(".section-image-zoom");

      if (parent) {
        parent.classList.remove("zoom-active");
      }
    };

    zoomElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      zoomElements.forEach((element) => {
        element.removeEventListener(
          "mouseover",
          handleMouseOver
        );

        element.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      });
    };
  }, [items.length]);

  useEffect(() => {
    if (!items.length) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery-swiper-started",
      children: ".item",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    lightboxRef.current = lightbox;

    return () => {
      lightbox.destroy();
    };
  }, [items.length]);

  if (!items.length) {
    return (
      <div className="flat-wrap-media-product">
        <div className="text-center py-5">
          No product images available.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flat-wrap-media-product">
        <Swiper
          dir="ltr"
          className="swiper tf-product-media-main"
          id="gallery-swiper-started"
          thumbs={{
            swiper:
              thumbSwiper && !thumbSwiper.destroyed
                ? thumbSwiper
                : null,
          }}
          modules={[Thumbs]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {items.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="swiper-slide"
            >
              <a
                href={slide.imgSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="item"
                data-pswp-width="1000"
                data-pswp-height="1000"
              >
                <Image
                  className="tf-image-zoom lazyload"
                  data-zoom={slide.imgSrc}
                  data-src={slide.imgSrc}
                  alt={slide.alt}
                  src={slide.imgSrc}
                  width={1000}
                  height={1000}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        dir="ltr"
        className="swiper tf-product-media-thumbs"
        onSwiper={setThumbSwiper}
        modules={[Thumbs]}
        spaceBetween={8}
        slidesPerView={4}
      >
        {items.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="swiper-slide stagger-item"
          >
            <div className="item">
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.alt}
                src={slide.imgSrc}
                width={828}
                height={1241}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
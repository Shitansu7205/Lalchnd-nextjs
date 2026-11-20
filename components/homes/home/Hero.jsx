
"use client";

import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const fourthSliderData = [
  {
    desktopImage: "/images/lalchnd/home/new-banner.webp",
    mobileImage: "/images/lalchnd/home/new-banner-mobile.webp",
    imageWidth: 2790,
    imageHeight: 1226,
  },

  {
    desktopImage: "/images/lalchnd/home/banner-fourth.webp",
    mobileImage: "/images/lalchnd/home/banner-3-mobile.png",
    imageWidth: 2790,
    imageHeight: 1226,
  },
];

export default function Hero() {
  return (
    <div className="tf-slideshow">
      <div>
        <Swiper
          dir="ltr"
          className="swiper tf-swiper sw-slide-show slider_effect_fade"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect="fade"
          modules={[Autoplay, EffectFade, Pagination]}
          pagination={{
            clickable: true,
            el: ".spd33",
          }}
        >
          {fourthSliderData.map((slide, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="slider_wrap">
                <div className="sld-image">
                  <picture>
                    {/* Mobile and Tablet Image */}
                    <source
                      media="(max-width: 1024px)"
                      srcSet={slide.mobileImage}
                    />

                    {/* Desktop Image */}
                    <Image
                      src={slide.desktopImage}
                      alt={`Banner ${index + 1}`}
                      width={slide.imageWidth}
                      height={slide.imageHeight}
                      priority={index === 0}
                      className="hero-banner-image"
                      sizes="100vw"
                    />
                  </picture>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="sw-dot-default style-white tf-sw-pagination spd33" />
        </Swiper>
      </div>
    </div>
  );
}

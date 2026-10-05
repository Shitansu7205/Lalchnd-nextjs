"use client";
import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const fourthSliderData = [
  {
    desktopImage: "/images/lalchnd/home/banner-2.webp",
    mobileImage: "/images/lalchnd/home/banner-2-mobile.png",
    imageWidth: 2790,
    imageHeight: 1226,
  },
  {
    desktopImage: "/images/lalchnd/home/banner-3.webp",
    mobileImage: "/images/lalchnd/home/banner-3-mobile.png",
    imageWidth: 2790,
    imageHeight: 1226,
  },
  {
    desktopImage: "/images/lalchnd/home/banner-4.webp",
    mobileImage: "/images/lalchnd/home/banner-4-mobile.png",
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
          loop
          autoplay={{
            delay: 3000,
          }}
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
                    <source
                      media="(max-width: 767px)"
                      srcSet={slide.mobileImage}
                    />

                    <Image
                      src={slide.desktopImage}
                      alt=""
                      className="lazyload"
                      width={slide.imageWidth}
                      height={slide.imageHeight}
                      priority={index === 0}
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
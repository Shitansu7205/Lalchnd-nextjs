"use client";
import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
const fourthSliderData = [
  {
    image: "/images/lalchnd/home/banner-2.webp",
    imageWidth: 2790,
    imageHeight: 1226,
    title: (
      <>
        <span className="fst-italic">Elevate</span> Your
        <br />
        Elegance
      </>
    ),
    buttonClass: "tf-btn type-large style-white-2",
  },
  {
    image: "/images/lalchnd/home/banner-3.webp",
    imageWidth: 2790,
    imageHeight: 1226,
    title: (
      <>
        <span className="fst-italic">Elegance,</span>
        <br />
        Redefined
      </>
    ),
    buttonClass: "tf-btn type-large",
    titleClass: "text-main",
  },
  {
    image: "/images/lalchnd/home/banner-4.webp",
    imageWidth: 2790,
    imageHeight: 1226,
    title: (
      <>
        <span className="fst-italic">Jewels</span>
        <br />
        That Speak
      </>
    ),
    buttonClass: "tf-btn type-large style-white-2",
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
                  <Image
                    src={slide.image}
                    alt=""
                    className="lazyload"
                    width={slide.imageWidth}
                    height={slide.imageHeight}
                  />
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

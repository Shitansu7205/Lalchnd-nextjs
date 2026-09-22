"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { instagramFeed } from "@/data/products";

export default function InstagramFeed() {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];

    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];

    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="section-padding-top-40 section-padding-bottom-40 light-bg">
      <div className="container-full-2">
        {/* =================================
            HEADER
        ================================= */}

        <div className="instagram-feed-header">
          <h2 className="heading-font">Follow Us</h2>

          <p className="instagram-feed-description">
            All the business growth and profit revolve around effective catchy
            marketing sales always in the limelight
          </p>
        </div>

        {/* =================================
            SWIPER
        ================================= */}

        <div className="instagram-feed-slider">
          <Swiper
            className="instagram-swiper"
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={0}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              576: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 3,
              },

              992: {
                slidesPerView: 4,
              },
            }}
          >
            {instagramFeed.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-feed-card"
                >
                  <div className="instagram-feed-media">
                    <Image
                      src={item.poster}
                      alt="Instagram Reel"
                      fill
                      sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, 25vw"
                    />

                    <div className="instagram-feed-overlay">
                      <span className="instagram-feed-icon">
                        <span className="icon">
                          <i className="icon-instagram"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

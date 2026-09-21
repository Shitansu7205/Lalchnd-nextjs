"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
// import "bootstrap-icons/font/bootstrap-icons.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Camera } from "lucide-react";

import { instagramFeed } from "@/data/products";

export default function InstagramFeed() {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];

    if (video) {
      video.play().catch(() => { });
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

          <h2 className="heading-font">
            Instagram
          </h2>

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

            {instagramFeed.map((item, index) => (

              <SwiperSlide key={item.id}>

                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-feed-card"
                >

                  {/* MEDIA */}

                  <div
                    className="instagram-feed-media"

                    onMouseEnter={() =>
                      item.type === "video" &&
                      handleMouseEnter(index)
                    }

                    onMouseLeave={() =>
                      item.type === "video" &&
                      handleMouseLeave(index)
                    }
                  >

                    {item.type === "video" ? (

                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        src={item.src}
                        poster={item.poster}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />

                    ) : (

                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, 25vw"
                      />

                    )}


                    {/* OVERLAY */}

                    <div className="instagram-feed-overlay">

                      <span className="instagram-feed-icon">
                        <span class="icon"><i class="icon-instagram"></i></span>
                      </span>

                    </div>

                  </div>


                  {/* TITLE */}

                  <div className="instagram-feed-caption">
                    <span>{item.title}</span>
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
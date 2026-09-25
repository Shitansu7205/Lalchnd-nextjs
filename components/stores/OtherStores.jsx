"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight, MapPin, Phone } from "lucide-react";

import { storeLocations } from "@/data/storeDetails";

export default function OtherStores({ containerFull = false }) {
    return (
        <section className="section-padding-bottom-40 section-padding-top-40 light-bg">
            <div className="container-full-2">
                <div className="sect-top wow fadeInUp">
                    <h3 className="heading-font">Our Other <span className="highlight-font">Stores</span></h3>

                    <div className="group-btn-slider">
                        <div className="nav-prev-swiper tf-sw-nav snbp45">
                            <ArrowLeft size={20} strokeWidth={1.5} />
                        </div>

                        <div className="nav-next-swiper tf-sw-nav snbn45">
                            <ArrowRight size={20} strokeWidth={1.5} />
                        </div>
                    </div>
                </div>

                <Swiper
                    dir="ltr"
                    className="swiper tf-swiper wow fadeInUp"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    spaceBetween={15}
                    modules={[Navigation, Pagination]}
                    pagination={{
                        clickable: true,
                        el: ".spd45",
                    }}
                    navigation={{
                        prevEl: ".snbp45",
                        nextEl: ".snbn45",
                    }}
                >
                    {storeLocations.map((store, index) => (
                        <SwiperSlide
                            className="swiper-slide"
                            key={store.url || index}
                        >
                            <div className="card_product--V01">
                                {/* Store Image */}
                                <div className="card_product-wrapper">
                                    <Link
                                        href={store.url}
                                        className="product-img"
                                    >
                                        <Image
                                            src={store.image}
                                            alt={store.title}
                                            className="lazyload img-product"
                                            width={714}
                                            height={900}
                                        />
                                    </Link>
                                </div>

                                {/* Store Information */}
                                <div className="card_product-info">
                                    <Link
                                        href={store.url}
                                        className="name-product h5 fw-normal link text-line-clamp-2"
                                    >
                                        {store.title}
                                    </Link>

                                    <div className="store-location-info mt-2">
                                        <div className="d-flex align-items-start gap-2">
                                            <MapPin
                                                size={18}
                                                strokeWidth={1.5}
                                            />

                                            <span className="fw-normal">
                                                {store.location}
                                            </span>
                                        </div>

                                        <div className="d-flex align-items-center gap-2 mt-2">
                                            <Phone
                                                size={18}
                                                strokeWidth={1.5}
                                            />

                                            <span className="fw-normal">
                                                {store.phone}
                                            </span>
                                        </div>
                                    </div>

                                    {/* <div className="mt-3">
                                        <Link
                                            href={store.url}
                                            className="tf-btn fw-medium"
                                        >
                                            View Store
                                            <ArrowRight
                                                size={18}
                                                strokeWidth={1.5}
                                            />
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="sw-dot-default tf-sw-pagination d-xl-none spd45" />
                </Swiper>
            </div>
        </section>
    );
}
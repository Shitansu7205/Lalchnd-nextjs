"use client";
import React, { useState } from "react";
import ProgressBarComponent from "../../common/Progressbar";
import { useContextElement } from "@/context/Context";
import Slider2 from "@/components/product-details/sliders/Slider2";
import { storeLocations } from "@/data/storeDetails";
import { ArrowRight, Rotate3D } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function RaghunathpurDetails() {
    const [activeColor, setActiveColor] = useState("gold");
    const [quantity, setQuantity] = useState(1);
    const {
        addProductToCart,
        isAddedToCartProducts,

        cartProducts,
        updateQuantity,
    } = useContextElement();
    return (
        <section className="themesFlat section-padding-top-40">
            <div className="tf-main-product section-image-zoom">
                <div className="container-full-2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tf-product-media-wrap sticky-top">
                                <div className="thumbs-slider thumbs-right">
                                    <div className="image">
                                        <Image
                                            alt="Banner"
                                            loading="lazy"
                                            width={1000}
                                            height={900}
                                            className="lazyload"
                                            src="/images/lalchnd/store/bhubaneswar/raghunathpur/1.webp"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tf-product-info-wrap">
                                <div className="tf-zoom-main sticky-top" />
                                <div className="tf-product-info-list other-image-zoom">
                                    <div className="tf-product-info-heading">
                                        <ul className="product-info-rate rate-wrap golden-star">
                                            <li>
                                                <i className="icon-star" />
                                            </li>
                                            <li>
                                                <i className="icon-star" />
                                            </li>
                                            <li>
                                                <i className="icon-star" />
                                            </li>
                                            <li>
                                                <i className="icon-star" />
                                            </li>
                                            <li>
                                                <i className="icon-star" />
                                            </li>
                                        </ul>
                                        <h3 className="product-info-name fw-normal">
                                            Your Trusted Jewellery Store in Raghunathpur
                                        </h3>
                                        <p className="product-infor-sub h6 fw-normal text-main-4">
                                            Welcome to Lalchnd Jewellers, your ultimate destination for exquisite gold, diamond, and designer jewellery. Renowned as the best jewellery showroom in Raghunathpur, we specialize in crafting jewellery that blends tradition with contemporary elegance. Whether you’re looking for a perfect bridal set or a special piece to celebrate your moments, our expert team is here to assist you in choosing the perfect piece. the best jewellery shop in Raghunathpur, our collection includes intricately designed gold necklaces, stunning diamond sets, and elegant bangles, each piece reflecting impeccable craftsmanship. With a legacy of trust and excellence, Lalchnd Jewellers is committed to making your moments special. Visit us today to explore our latest collections and indulge in a jewellery shopping experience like no other.
                                        </p>


                                    </div>

                                    <div className="tf-product-share">
                                        <ul className="tf-social-icon">
                                            <li>
                                                <a href="https://www.facebook.com/LalchndJewellersPvtLtd" className="social-facebook">
                                                    <span className="icon">
                                                        <i className="icon-facebook" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/lalchnd.jewellers/" className="social-instagram">
                                                    <span className="icon">
                                                        <i className="icon-instagram" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/channel/UCrO61El0o9WsM3fw3r7lolw" >
                                                    <span className="icon">
                                                        <svg
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="section-padding-top-40 store-action-buttons">
                                        <ul className="entry_tag tag-wrap d-flex align-items-center">
                                            <li>
                                                <Link
                                                    href="https://www.google.com/maps/place/Lalchnd+Jewellers/@20.3727489,85.8288903,17z/data=!4m16!1m7!3m6!1s0x3a1909b3b7641cfb:0x242ea86a13dc1dca!2sLalchnd+Jewellers!8m2!3d20.3728465!4d85.8315898!16s%2Fg%2F11h_14__8h!3m7!1s0x3a1909b3b7641cfb:0x242ea86a13dc1dca!8m2!3d20.3728465!4d85.8315898!9m1!1b1!16s%2Fg%2F11h_14__8h?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D"
                                                    className="tf-btn btn-fill store-map-button"
                                                >
                                                    Write a Review
                                                    <ArrowRight size={24} strokeWidth={1.8} />
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="https://www.google.com/local/place/fid/0x3a1909b3b7641cfb:0x242ea86a13dc1dca/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DiDJKX5XZYJfoPxYY01quYA%26cb_client%3Dsearch.gws-prod.gps%26yaw%3D23.98967%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFmlESktYNVhaWUpmb1B4WVkwMXF1WUE%3D&sa=X&ved=2ahUKEwi-scC9q_WWAxVJj-EIHdZlDL0Qpx96BAgdEBI"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="tf-btn btn-fill-white store-map-button"
                                                >
                                                    360° View
                                                    <Rotate3D size={24} strokeWidth={1.8} />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

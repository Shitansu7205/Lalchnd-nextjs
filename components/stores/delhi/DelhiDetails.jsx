"use client";
import React, { useState } from "react";
import { useContextElement } from "@/context/Context";
import { ArrowRight, Rotate3D } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function DelhiDetails() {
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
                                    <div className="image" >
                                        <Image
                                            alt="Banner"
                                            loading="lazy"
                                            width={1000}
                                            height={900}
                                            className="lazyload"
                                            src="/images/lalchnd/store/delhi/2.jpg"
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
                                            Lalchnd Jewellers, Lajpat Nagar, Delhi
                                        </h3>
                                        <p className="product-infor-sub h6 fw-normal text-main-4">
                                            Lalchnd has been a trusted name in Odisha since 1948 and Lalchnd Jewellers the most trusted jewellery brand in the state for over three decades. Lalchnd Jewellers has left no stone unturned to make sure that its first and only jewellery store in the national capital not only showcases the finest of its hugely popular collections of gold, silver, diamond (including polki) and platinum jewellery, but also highlights the immeasurably rich cultural and jewellery heritage of its home state before the world. The Delhi showroom is home to 20,000-plus pieces of exquisite and 100%-certified jewellery, backed by great schemes and exchange policies and matched by world-class customer service. This effectively makes every buying experience a celebration for customers -- and Lalchnd Jewellers the best jewellery shop in Delhi.
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
                                                    href="https://www.google.com/maps/place/Lalchnd+Jewellers+lajpat+nagar/@28.5712406,77.2381729,17z/data=!4m8!3m7!1s0x390ce309090603d7:0x1d5ca51e53fb3038!8m2!3d28.5712406!4d77.2381729!9m1!1b1!16s%2Fg%2F11k9kftb01!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                                                    className="tf-btn btn-fill store-map-button"
                                                >
                                                    Write a Review
                                                    <ArrowRight size={24} strokeWidth={1.8} />
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="https://www.google.com/local/place/fid/0x390ce309090603d7:0x1d5ca51e53fb3038/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DshPa_uoBQ__2v1ShOtd10g%26cb_client%3Dsearch.gws-prod.gps%26yaw%3D150.2881%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFnNoUGFfdW9CUV9fMnYxU2hPdGQxMGc%3D&sa=X&ved=2ahUKEwidq_76p_WWAxXgleEIHT_AGpUQpx96BAgeEBI"
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

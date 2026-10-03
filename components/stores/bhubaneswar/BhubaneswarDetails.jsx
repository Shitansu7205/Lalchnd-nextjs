"use client";
import React, { useState } from "react";
import ProgressBarComponent from "../../common/Progressbar";
import { useContextElement } from "@/context/Context";
import Slider2 from "@/components/product-details/sliders/Slider2";
import { storeLocations } from "@/data/storeDetails";
import { ArrowRight, Rotate3D } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function BhubaneswarDetails() {
    const [activeColor, setActiveColor] = useState("gold");
    const [quantity, setQuantity] = useState(1);
    const {
        addProductToCart,
        isAddedToCartProducts,

        cartProducts,
        updateQuantity,
    } = useContextElement();
    return (
        <>
        <link rel="stylesheet" href="/css/store/innerstore.css" />
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
                                            src="/images/lalchnd/store/store-img.webp"
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
                                        <h3>
                                           Unveiling the Latest Jewellery Collection Showroom in <span className="highlight-font" style={{fontSize: "38px"}}>Bhubaneswar - Lalchnd </span>
                                        </h3>
                                        <p className="sub-title">
                                            Welcome to Lalchnd, your go-to destination for the latest and finest jewellery collections in Bhubaneswar. As the premier Gold Jewellery Shop in Bhubaneswar, we take pride in offering a diverse range of 22-carat gold jewellery that reflects timeless elegance and craftsmanship. Step into our Jewellery Showroom in Bhubaneswar, where every piece tells a story of artistry and sophistication. Lalchnd stands out as the Best Jewellery Shop in Bhubaneswar, known for curating 
                                            the most exquisite designs to cater to the diverse tastes of our esteemed customers. Our commitment to excellence has earned us the reputation of being one of the top Jewellers in Bhubaneswar. At Lalchnd, we understand that gold is not just a 
                                            metal; it’s a symbol of tradition, wealth, and beauty. That’s why we take immense pride in being recognized as the Best Gold Jewellery Shop in Bhubaneswar.<br /><br />

Indulge in the opulence of Lalchnd, where the Best Gold Ring Design Showroom in Bhubaneswar awaits you. Our curated collection is not just jewellery; it’s a statement of your unique style and taste. At Lalchnd, we go beyond the ordinary, offering a Diamond Jewellery Store in Bhubaneswar for those who seek brilliance in every facet. Explore the Best Bangles Design Collection in Bhubaneswar and adorn yourself with timeless elegance.
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
                                        <ul className="entry_tag tag-wrap d-flex align-items-center inner-btn">
                                            <li className="inner-page-btn">
                                                <Link
                                                    href="#review"
                                                    className="home-cta-btn tf-btn btn-fill animate-btn type-large"
                                                style={{width: "100%"}}>
                                                    Write a Review
                                                    <ArrowRight size={24} strokeWidth={1.8} />
                                                </Link>
                                            </li>

                                            <li className="inner-page-btn">
                                                <Link
                                                    href="https://www.google.com/maps/place/Lalchnd+Jewellers/@20.2692697,85.8413965,64a,75y,42.4h,90.71t/data=!3m7!1e1!3m5!1sXwwXc-hkIUEjfN_psqt37g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.7077242045555465%26panoid%3DXwwXc-hkIUEjfN_psqt37g%26yaw%3D42.39953924068941!7i16384!8i8192!4m14!1m7!3m6!1s0x3a19a744227e1903:0xb7b54fad41895a76!2sLalchnd+Jewellers!8m2!3d20.2691643!4d85.8415713!16s%2Fg%2F11g1lmdlp6!3m5!1s0x3a19a744227e1903:0xb7b54fad41895a76!8m2!3d20.2691643!4d85.8415713!16s%2Fg%2F11g1lmdlp6?entry=ttu"
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
        </>
    );
}

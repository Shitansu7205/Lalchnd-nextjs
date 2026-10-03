"use client";
import React, { useState } from "react";
import ProgressBarComponent from "../../common/Progressbar";
import { useContextElement } from "@/context/Context";
import Slider2 from "@/components/product-details/sliders/Slider2";
import { storeLocations } from "@/data/storeDetails";
import { ArrowRight, Rotate3D } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function CuttackDetails() {
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
                                          Unveiling the Latest Jewellery Collection Showroom in <span className="highlight-font" style={{fontSize: "38px"}}>Cuttack - Lalchnd</span>
                                        </h3>
                                        <p className="sub-title">
                                            Lalchnd Jewellers, your ultimate destination for the finest gold jewellery in Cuttack! As the 
                                            Best Gold Jewellery Shop in Cuttack, we take pride in offering a captivating array of exquisite 
                                            designs that blend traditional craftsmanship with contemporary elegance. What sets us apart as 
                                            the premier Jewellery Shop in Cuttack is our commitment to quality and craftsmanship. Each 
                                            piece is crafted with precision, using the finest materials to ensure longevity and timeless 
                                            beauty. Our skilled artisans infuse passion and dedication into every creation, making Lalchnd 
                                            Jewellers a name synonymous with trust and excellence. Step into the world of Lalchnd Jewellers, 
                                            where every piece tells a story of craftsmanship, elegance, and everlasting beauty. Discover the 
                                            allure of our Best Gold Jewellery Shop in Cuttack and let us adorn your life’s special moments 
                                            with the brilliance of gold.
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
                                                    href="https://www.google.com/maps/place/Lalchnd+Jewellers+CDA/@20.4794162,85.8396722,17z/data=!3m1!4b1!4m6!3m5!1s0x3a191166ffa7db7b:0x5fe1ccac866b17f6!8m2!3d20.4794162!4d85.8396722!16s%2Fg%2F11vxqt9psy?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D"
                                                    className="home-cta-btn tf-btn btn-fill animate-btn type-large" target="_blank" rel="noopener noreferrer"
                                                style={{width: "100%"}}
                                                >
                                                    Write a Review
                                                    <ArrowRight size={24} strokeWidth={1.8} />
                                                </Link>
                                            </li>

                                            <li className="inner-page-btn">
                                                <Link
                                                    href="https://www.google.com/local/place/fid/0x3a191166ffa7db7b:0x5fe1ccac866b17f6/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DwZ4rrwvLxdUVQCxfu08onw%26cb_client%3Dsearch.gws-prod.gps%26yaw%3D90.04523%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFndaNHJyd3ZMeGRVVlFDeGZ1MDhvbnc%3D&sa=X&ved=2ahUKEwjtzYGzqfWWAxWhkOEIHRHvNX0Qpx96BAgWEBI"
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

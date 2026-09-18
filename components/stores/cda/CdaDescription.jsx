import React from "react";
import Image from "next/image";

export default function CdaDescription() {
    return (
        <div className="flat-spacing-3">
            <div className="container-full-2">
                <div className="widget-accordion wd-product-descriptions">
                    <div
                        className="accordion-title collapsed"
                        data-bs-target="#description"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="description"
                        role="button"
                    >
                        <span className="icon icon-arrow-right-down" />
                        <span>Description</span>
                    </div>
                    <div id="description" className="collapse widget-desc">
                        <div className="accordion-body">
                            <h6 className="text-main-4 fw-normal">
                                At Lalchnd Jewellers, we pride ourselves on being the best jewellery shop in CDA. Our reputation is built on unparalleled quality, customer service, and trust. With years of expertise, we bring you jewellery that reflects elegance, durability, and the highest standards of craftsmanship. From delicate gold necklaces to intricately designed diamond rings, our collection showcases the finest pieces for every taste and occasion. Whether you’re shopping for an engagement ring, a festive set, or a custom design, we have something truly special waiting for you. We are committed to offering a luxurious selection of fine jewellery that combines timeless craftsmanship with modern designs.

                            </h6>
                        </div>
                    </div>
                </div>
                <div className="widget-accordion wd-product-descriptions">
                    <div
                        className="accordion-title collapsed"
                        data-bs-target="#material"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="material"
                        role="button"
                    >
                        <span className="icon icon-arrow-right-down" />
                        <span>additional information</span>
                    </div>
                    <div id="material" className="collapse widget-material">
                        <div className="accordion-body">
                            <table className="table-material">
                                <tbody>
                                    <tr>
                                        <td className="h6">Address</td>
                                        <td className="h6">Lalchnd Jewellers, CDA Sector VI, <br /> Kataka, Odisha 753014</td>
                                    </tr>
                                    <tr>
                                        <td className="h6">Reviews</td>
                                        <td className="h6">1,180 + Google reviews</td>
                                    </tr>
                                    <tr>
                                        <td className="h6">Contact Details</td>
                                        <td className="h6">09124113240</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="widget-accordion wd-product-descriptions">
                    <div
                        className="accordion-title collapsed"
                        data-bs-target="#review"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="review"
                        role="button"
                    >
                        <span className="icon icon-arrow-right-down" />
                        <span>reviews</span>
                    </div>
                    <div id="review" className="collapse widget-review">
                        <div className="accordion-body">
                            <div className="wd-rating-review">
                                <div className="rate-head">
                                    <ul className="rate-wrap align-items-center" style={{ color: "#f5c518" }} >
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
                                        <li>(1.1K + )</li>
                                    </ul>
                                    <p>4.3/5.0</p>
                                </div>
                                <ul className="rating-progress">
                                    <li>
                                        <div className="rate-number">
                                            <span>5</span>
                                            <i className="icon-star" />
                                        </div>
                                        <span
                                            className="line-progress-rate progress"
                                            role="progressbar"
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <span className="progress-bar" />
                                        </span>
                                        <span className="rate-count">3</span>
                                    </li>
                                    <li>
                                        <div className="rate-number">
                                            <span>4</span>
                                            <i className="icon-star" />
                                        </div>
                                        <span
                                            className="line-progress-rate progress"
                                            role="progressbar"
                                            aria-valuenow={0}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <span className="progress-bar" style={{ width: 0 }} />
                                        </span>
                                        <span className="rate-count">0</span>
                                    </li>
                                    <li>
                                        <div className="rate-number">
                                            <span>3</span>
                                            <i className="icon-star" />
                                        </div>
                                        <span
                                            className="line-progress-rate progress"
                                            role="progressbar"
                                            aria-valuenow={0}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <span className="progress-bar" style={{ width: 0 }} />
                                        </span>
                                        <span className="rate-count">0</span>
                                    </li>
                                    <li>
                                        <div className="rate-number">
                                            <span>2</span>
                                            <i className="icon-star" />
                                        </div>
                                        <span
                                            className="line-progress-rate progress"
                                            role="progressbar"
                                            aria-valuenow={0}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <span className="progress-bar" style={{ width: 0 }} />
                                        </span>
                                        <span className="rate-count">0</span>
                                    </li>
                                    <li>
                                        <div className="rate-number">
                                            <span>1</span>
                                            <i className="icon-star" />
                                        </div>
                                        <span
                                            className="line-progress-rate progress"
                                            role="progressbar"
                                            aria-valuenow={0}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <span className="progress-bar" style={{ width: 0 }} />
                                        </span>
                                        <span className="rate-count">0</span>
                                    </li>
                                </ul>
                                <a href="https://www.google.com/maps/place/Lalchnd+Jewellers+CDA/@20.4794162,85.8396722,17z/data=!4m8!3m7!1s0x3a191166ffa7db7b:0x5fe1ccac866b17f6!8m2!3d20.4794162!4d85.8396722!9m1!1b1!16s%2Fg%2F11vxqt9psy?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D" className="tf-btn fw-medium">
                                    write a review
                                </a>
                            </div>
                            <div className="box-preview-wrapper">
                                <div className="review-post-list" style={{ borderBottom: 0 }}>
                                    <h5 className="title">5 Star reviews</h5>
                                    <ul>
                                        <li className="post-review-item">
                                            <div className="rv-image">
                                                <Image src="/images/lalchnd/icons/user.webp" alt="" className="lazyload" width={400} height={400} />
                                            </div>
                                            <div className="rv-content">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <ul className="meta">
                                                        <li className="entry_name h6">Devi Upasana Rath</li>
                                                        <li className="br-line" />
                                                        <li className="entry_date">Mar 3rd, 2025</li>
                                                    </ul>
                                                    <ul className="rate-wrap align-items-center" style={{ color: "#f5c518" }}>
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
                                                            <i className="icon-star text-main-10" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h6 className="rv-text">
                                                    Good ambience with best offer thanks lalchand . They have more option with unique collection, Awesome dealing by the employees 👏  As rakhi is round the corner they offer best price and silver rakhis are also there and tbh its not a paid review they make our shopping really relaxing 😌 thanks team lalchand …
                                                </h6>
                                            </div>
                                        </li>
                                        <li className="post-review-item">
                                            <div className="rv-image">
                                                <Image src="/images/lalchnd/icons/user.webp" alt="" className="lazyload" width={400} height={400} />
                                            </div>
                                            <div className="rv-content">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <ul className="meta">
                                                        <li className="entry_name h6">Pritipadma Behera</li>
                                                        <li className="br-line" />
                                                        <li className="entry_date">Mar 3rd, 2025</li>
                                                    </ul>
                                                    <ul className="rate-wrap align-items-center" style={{ color: "#f5c518" }}>
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
                                                </div>
                                                <h6 className="rv-text">
                                                    BEST EXPERIENCE
                                                    TILL LIFE LONG WE BEHERA FAMILY WANT TO THANKS U A LOT FOR YOUR CUSTOMER SERVICE
                                                    WELL done✔ 👍 …
                                                </h6>
                                            </div>
                                        </li>
                                        <li className="post-review-item">
                                            <div className="rv-image">
                                                <Image src="/images/lalchnd/icons/user.webp" alt="" className="lazyload" width={400} height={400} />
                                            </div>
                                            <div className="rv-content">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <ul className="meta">
                                                        <li className="entry_name h6">Sid Dash</li>
                                                        <li className="br-line" />
                                                        <li className="entry_date">Mar 3rd, 2025</li>
                                                    </ul>
                                                    <ul className="rate-wrap align-items-center" style={{ color: "#f5c518" }}>
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
                                                </div>
                                                <h6 className="rv-text">
                                                   Good designs in the store and extremely cordial behavior.
                                                </h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="review-post-comment" id="write-review">
                                    {/* <ReviewForm /> */}
                                    <a
                                        href="https://www.google.com/maps/place/Lalchnd+Jewellers+CDA/@20.4794162,85.8396722,17z/data=!4m8!3m7!1s0x3a191166ffa7db7b:0x5fe1ccac866b17f6!8m2!3d20.4794162!4d85.8396722!9m1!1b1!16s%2Fg%2F11vxqt9psy?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="tf-btn fw-medium view-more-google"
                                    >
                                        View More
                                        <img
                                            src="/images/lalchnd/icons/google.png"
                                            alt="Google Reviews"
                                            style={{ width: "20px", height: "20px", marginLeft: "5px" }}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

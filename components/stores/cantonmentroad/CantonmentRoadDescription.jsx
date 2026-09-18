import React from "react";
import Image from "next/image";

export default function CantonmentRoadDescription() {
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
                                Lalchnd Jewellers stands as the leading jewellery shop on Cantonment Road, known for its transparent pricing, personalized service, and a wide selection of exquisite designs. Each piece in our collection is meticulously crafted with precision, ensuring unmatched quality and timeless elegance. From stunning bridal sets to everyday accessories, we offer a diverse range of gold, diamond, and gemstone jewellery that caters to every style and occasion. Whether you’re seeking classic pieces or the latest trends, our extensive collection of gold necklaces, bangles, earrings, and rings combines modern craftsmanship with traditional charm. At Lalchnd Jewellers, we don’t just sell jewellery—we create lasting memories. Visit us today and experience jewellery shopping like never before.
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
                                        <td className="h6">Cantonment Rd, opposite DCP Office,<br/> Maachhua Bazar, Kataka, Odisha 753001</td>
                                    </tr>
                                    <tr>
                                        <td className="h6">Reviews</td>
                                        <td className="h6">1,441 + Google reviews</td>
                                    </tr>
                                    <tr>
                                        <td className="h6">Contact Details</td>
                                        <td className="h6">0671 230 2505</td>
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
                                        <li>(1.4K + )</li>
                                    </ul>
                                    <p>4.5/5.0</p>
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
                                <a href="https://www.google.com/maps/place/Lalchnd+Gems+and+Jewellers/@20.4778339,85.8798162,17z/data=!4m8!3m7!1s0x3a19120c10c56f8d:0xbc04869ee1b9d77c!8m2!3d20.4778339!4d85.8798162!9m1!1b1!16s%2Fg%2F11bx5qc4m3?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D" className="tf-btn fw-medium">
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
                                                        <li className="entry_name h6">Pradyumna Behera</li>
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
                                                  I had a fantastic experience shopping today.the staff Rajashree madam was incredibly welcoming, patient, and knowledgeable about the different diamond cuts and gold karats. They helped me find the perfect piece without applying any pressure, making the whole process truly special. Highly recommend their service.
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
                                                        <li className="entry_name h6">Saffina Rahman</li>
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
                                                 It's a grand jewelery store which has variety of watches, gold jewelery, silver jewelery, bronze jewelry, silver containers, worship items made of silver and may more things. And variety of jewelery are just awesome. When I want to get something in silver I always go to lalchand because of the service and minimal price and lots of variety to choose.
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
                                                        <li className="entry_name h6">ipsita odisha</li>
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
                                                   Latest collections good store in odisha staff behaviour very good 😊👍
                                                </h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="review-post-comment" id="write-review">
                                    {/* <ReviewForm /> */}
                                    <a
                                        href="https://www.google.com/maps/place/Lalchnd+Gems+and+Jewellers/@20.4778339,85.8798162,17z/data=!4m8!3m7!1s0x3a19120c10c56f8d:0xbc04869ee1b9d77c!8m2!3d20.4778339!4d85.8798162!9m1!1b1!16s%2Fg%2F11bx5qc4m3?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D"
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

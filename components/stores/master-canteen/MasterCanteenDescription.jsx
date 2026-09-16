import React from "react";
import Image from "next/image";

export default function MasterCanteenDescription() {
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
                                Our showroom is your one-stop destination for a vast collection of high-quality jewellery, crafted to suit your individual taste and style. Whether you are looking for exquisite gold jewellery, elegant diamond pieces, or customized designs, we offer everything under one roof. With years of expertise in the jewellery industry, we pride ourselves on our legacy of delivering excellence in both product and service. Our jewellery shop in Master Canteen, you can rest assured that you are buying certified jewellery that guarantees purity and authenticity. Whether it’s a simple pendant or a sophisticated necklace, we provide the finest selection that reflects our attention to detail and passion for craftsmanship.
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
                                        <td className="h6">Station Rd, Master Canteen Area,<br /> Kharvela Nagar, Bhubaneswar, <br />Odisha 751001</td>
                                    </tr>
                                    <tr>
                                        <td className="h6">Reviews</td>
                                        <td className="h6">2,057 + Google reviews</td>
                                    </tr>
                                    <tr>
                                        <td className="h6">Contact Details</td>
                                        <td className="h6">0674 - 2534016 / 17 / 18</td>
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
                                        <li>(2K + )</li>
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
                                <a href="https://www.google.com/maps/place/Lalchnd+Jewellers/data=!4m2!3m1!1s0x0:0xb7b54fad41895a76?sa=X&ved=1t:2428&ictx=111" className="tf-btn fw-medium">
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
                                                        <li className="entry_name h6">aparna rout</li>
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
                                                    Me and my mother went to lalchnd jeweller's in the morning hr and bought an earing, they have very beautiful collection of jewelleries✨️
                                                    I had a little  inconvenient experience earlier, However, after posting my review, the store promptly reached out to me, and assured that they would take necessary action to improve their customer service. I truly appreciate their quick response and willingness to address the issue.
                                                    Hoping for a much better experience in the future.
                                                    Thank you 🌸
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
                                                        <li className="entry_name h6">SANTHOJI RAO M</li>
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
                                                    Good location near to the Bhubaneswar railway station.  Lift facility available.  Veriety of Silver, Gold and Diamond ornaments available.
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
                                                        <li className="entry_name h6">Iqbal Hussain</li>
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
                                                    One place where you would like to come to  buy jewellery for your loved ones then this is the place for you in Bhubaneswar. Higly recommended the place . It is one of the best in town for all kinds of jewellery, the quality is unquestionable they have hallmarked jewellery with all upgraded designs and the staff is really well mannered and trained to handle your choices .
                                                </h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="review-post-comment" id="write-review">
                                    {/* <ReviewForm /> */}
                                    <a
                                        href="https://www.google.com/maps/place/Lalchnd+Jewellers/data=!4m2!3m1!1s0x0:0xb7b54fad41895a76?sa=X&ved=1t:2428&ictx=111"
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

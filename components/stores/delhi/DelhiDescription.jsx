import React from "react";
import Image from "next/image";

export default function DelhiDescription() {
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
                                Lalchnd has been a trusted name in Odisha since 1948 and Lalchnd Jewellers the most trusted jewellery brand in the state for over three decades. Lalchnd Jewellers has left no stone unturned to make sure that its first and only jewellery store in the national capital not only showcases the finest of its hugely popular collections of gold, silver, diamond (including polki) and platinum jewellery, but also highlights the immeasurably rich cultural and jewellery heritage of its home state before the world. The Delhi showroom is home to 20,000-plus pieces of exquisite and 100%-certified jewellery, backed by great schemes and exchange policies and matched by world-class customer service. This effectively makes every buying experience a celebration for customers -- and Lalchnd Jewellers the best jewellery shop in Delhi.
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
                                        <td className="h6">A-57/B, Veer Savarkar Marg, <br /> Block A, Lajpat Nagar II, Lajpat Nagar, <br/> New Delhi, Delhi 110024</td>
                                    </tr>
                                    <tr>
                                        <td className="h6">Reviews</td>
                                        <td className="h6">534 + Google reviews</td>
                                    </tr>
                                    <tr>
                                        <td className="h6">Contact Details</td>
                                        <td className="h6">08800948800</td>
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
                                        <li>(535 + )</li>
                                    </ul>
                                    <p>4.9/5.0</p>
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
                                <a href="https://www.google.com/maps/place/Lalchnd+Jewellers+lajpat+nagar/@28.5712406,77.2381729,17z/data=!4m8!3m7!1s0x390ce309090603d7:0x1d5ca51e53fb3038!8m2!3d28.5712406!4d77.2381729!9m1!1b1!16s%2Fg%2F11k9kftb01!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D" className="tf-btn fw-medium">
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
                                                        <li className="entry_name h6">Chandan Bhatia</li>
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
                                                    I have been shopping at Lalchnd since 2 years. The experience has always been amazing, the staff is very kind and keen to show new designs with patience. Moreover the making charges are less than other brands and gold is hallmark. Do check them out.
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
                                                        <li className="entry_name h6">Ayush Tandon</li>
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
                                                    The piece here is really great and the staff is really friendly you can ask for Anjali she will take good care of you
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
                                                        <li className="entry_name h6">Tamanna Thakur</li>
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
                                                    Bought gold earrings with only 3.9% making charges from Lalchnd Jewellers, The quality is amazing, and I rate the purity 1000%. The staff is very polite and understanding. Highly recommended! Best in Lajpat Nagar
                                                </h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="review-post-comment" id="write-review">
                                    {/* <ReviewForm /> */}
                                    <a
                                        href="https://www.google.com/maps/place/Lalchnd+Jewellers+lajpat+nagar/@28.5712406,77.2381729,17z/data=!4m8!3m7!1s0x390ce309090603d7:0x1d5ca51e53fb3038!8m2!3d28.5712406!4d77.2381729!9m1!1b1!16s%2Fg%2F11k9kftb01!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D"
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

import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Features() {
  return (
    <>
      {/* Fearture */}
      <section className="section-padding-bottom-40 section-padding-top-40 feature-intro pb-[140px] bg-transparent-svg1">
        <div className="container-full-2">
          <div className="row flex-wrap-reverse">
            <div className="col-xxl-5 offset-xxl-1 col-md-6 d-flex align-items-center">
              <div className="text-content">

                <h2 className="heading-font">
                  Our <span className="highlight-font">Mission</span> and <span className="highlight-font">Vision</span>
                </h2>
                <p className="feature-subtitle">
                  With an unwavering focus on product quality and customer satisfaction,
                  Lalchnd Jewellers has succeeded in its mission of changing the jewellery scene for the better in Odisha. Now, it is singularly focused on its vision of becoming one of the world’s most trusted and celebrated jewellery brands.

                </p>
                <Link
                  href={`/shop-default`}
                  className="home-cta-btn tf-btn btn-fill animate-btn"
                >
                  shop all jewellry
                  <i className="icon-arrow-right-2 fs-24"> </i>
                </Link>
              </div>
            </div>
            <div className="col-xxl-5 col-md-6">
              <div className="visual-content mb-xl-0">
                <Image
                  src="/images/lalchnd/about/about-img.webp"
                  alt=""
                  className="lazyload img-visual"
                  width={1000}
                  height={1000}
                />
                {/* <div className="brand-box">
                  <Image
                    src="/images/lalchnd/about/about-img-2.webp"
                    alt=""
                    className="lazyload"
                    width={1000}
                    height={1000}
                  />
                </div> */}
              </div>
            </div>
            <div className="offset-xl-1 col-xl-10">
              <div className="" />
            </div>
          </div>
        </div>
      </section>
      {/* /Fearture */}
    </>
  );
}

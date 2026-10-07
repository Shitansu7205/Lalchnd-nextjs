import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtomBorder from "@/components/common/ButtomBorder";
export default function About() {
  return (
    <div className="deep-bg section-padding-bottom-40 section-padding-top-40">
      <div className="container">
        <div className="banner_V05 style-2 about-section" style={{ gap: "40px" }}>
          <div className="shape-image wow fadeInUp">
            <div className="image" style={{ borderRadius: "0 60px 0 60px" }}>
              <Image
                src="/images/lalchnd/home/image-1.png"
                alt="Banner"
                className="lazyload"
                width={1000}
                height={1000}
              />
            </div>
            {/* <span className="line-circle" /> */}
            <Image
              className="img-ic-star"
              alt=""
              src="/icon/dou-star.svg"
              width={64}
              height={63}
            />

          </div>
          <div className="bn-content wow fadeInUp">
            <h6 className="text-uppercase short-line-heding ">WHY LALCHND</h6>
            <h2 className="title heading-font fw-normal" style={{ color: "#fff" }}>
              Odisha's Top Trusted 
 <span className="highlight-font">Jewellery</span> Brand
            </h2>
            <p className="sub-title text-main-4 text-white">
              Since 1948, Lalchnd has built a legacy of quality, craftsmanship and trust in jewellery. 
              Our collections include gold, diamond and silver jewellery, created with careful
               attention to every piece. With skilled artisans and a commitment to customer 
               satisfaction, Lalchnd continues to uphold the values that have shaped its reputation 
               over the years.

            </p>
            <ButtomBorder href="/about-us" className="type-large">
              our story
            </ButtomBorder>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtomBorder from "@/components/common/ButtomBorder";
export default function About() {
  return (
    <div className="deep-bg section-padding-bottom-40 section-padding-top-40">
      <div className="container">
        <div className="banner_V05 style-2" style={{ gap: "0px" }}>
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
            <h6 className="text-uppercase short-line-heding ">Our Promise</h6>
            <h2 className="title heading-font fw-normal" style={{ color: "#fff" }}>
              Responsibly Produced <span className="highlight-font">Jewelry</span>
            </h2>
            <p className="sub-title text-main-4 text-white">
              At Lalchnd, we believe every piece tells a story. Founded on passion
              and precision, our curated collections blend traditional
              craftsmanship with modern design. We create jewelry that not only
              complements your style but also celebrates the moments that
              matter. Discover our journey of beauty, innovation, and unwavering
              quality.
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

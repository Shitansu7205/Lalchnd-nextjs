import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div className="flat-spacing-12 pb-0 deep-bg">
      <div className="container">
        <div className="banner_V05 style-2" style={{gap: "0px"}}>
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
            <h6 className="text-uppercase short-line-heding">Our Promise</h6>
            <h2 className="title heading-font fw-normal" style={{color: "#fff"}}>
              Responsibly Produced <span className="highlight-font">Jewelry</span>
            </h2>
            <p className="sub-title text-main-4" style={{color: "#ffffffc7"}}>
              At Lalchnd, we believe every piece tells a story. Founded on passion
              and precision, our curated collections blend traditional
              craftsmanship with modern design. We create jewelry that not only
              complements your style but also celebrates the moments that
              matter. Discover our journey of beauty, innovation, and unwavering
              quality.
            </p>
            <Link href={`/about-us`} className="tf-btn type-large button-font">
              our story
              <i className="icon-arrow-right-2 fs-24" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container border-bt-13 flat-spacing pt-0" />
    </div>
  );
}

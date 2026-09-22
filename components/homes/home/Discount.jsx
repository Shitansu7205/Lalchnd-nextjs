import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtomBorder from "@/components/common/ButtomBorder";
export default function Discount() {
  return (
    <div className="banner_V02">
      <div className="bn-image-blur">
        <div className="blur">
          {/* <Image
            src="/images/home-page/discount-img.webp"
            alt=""
            className="lazyload"
            width={964}
            height={1066}
          /> */}
        </div>
      </div>
      <div className="bn-content deep-bg text-white-2">

        <h6 className="text-uppercase short-line-heding mb-4">discount code: vemus20off</h6>

        <h2 className="heading-font wow fadeInUp text-white" >
          <span className="highlight-font">Unveil</span> Your Sparkle
        </h2>
        <p className="sub-title wow fadeInUp">
          Discover our handcrafted jewelry collection designed to elevate your
          style. Enjoy
          exclusive deals and limited-time offers—your moment to shine is now!
        </p>

        <ButtomBorder href="/about-us" className="type-large">
          Explore for More
        </ButtomBorder>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
        <h6 className="caption text-uppercase wow fadeInUp">
          discount code: vemus20off
        </h6>
        <h2 className="heading-font wow fadeInUp">
          <span className="highlight-font">Unveil</span> Your Sparkle
        </h2>
        <p className="sub-title wow fadeInUp">
          Discover our handcrafted jewelry collection designed to elevate your
          style. Enjoy <br className="d-none d-xxl-block" />
          exclusive deals and limited-time offers—your moment to shine is now!
        </p>
        <Link
          href={`/shop-default`}
          className="tf-btn type-large button-font wow fadeInUp"
        >
          Shop Now
          <i className="icon icon-arrow-right-2" />
        </Link>
      </div>
    </div>
  );
}

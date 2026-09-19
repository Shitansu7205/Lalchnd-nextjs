import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div className="flat-spacing-2 pb-0">
      <div className="container">
        <div className="banner_V05 style-2">
          
          <div className="bn-content wow fadeInUp">
            <h6 className="short-line-heding-dark">About Us</h6>
            <h2 className="heading-font">
              About <span className="highlight-font">Lalchnd Jewellers</span>
            </h2>
            <p className="sub-title text-main-4">
              The Lalchnd Group’s founding and flagship company, Lalchnd Jewellers, is a long-established market leader in its space. Boasting three of the largest jewellery showrooms in eastern India, Lalchnd Jewellers offers the widest range of the very finest jewellery and jewellery designs in Odisha – what with all its core products either conceptualised and crafted, or inspired and sourced from not just across its home state and country, but from various corners of the globe. Combining that with customer service that follows global best practices while still being in tune with Indian sensibilities, Lalchnd Jewellers has earned its position as the most trusted luxury brand in Odisha.
            </p>
            <Link href={`/about-us`} className="tf-btn type-large button-font">
              our story
              <i className="icon-arrow-right-2 fs-24" />
            </Link>
          </div>
          <div className="shape-image wow fadeInUp">
            <div className="image">
              <Image
                src="/images/lalchnd/about/about-us-image.webp"
                alt="Banner"
                className="lazyload"
                width={1000}
                height={1000}
              />
            </div>
            <span className="line-circle" />
            <Image
              className="img-ic-star"
              alt=""
              src="/icon/dou-star.svg"
              width={64}
              height={63}
            />
          </div>
        </div>
      </div>
      <div className="container border-bt-13 flat-spacing pt-0" />
    </div>
  );
}

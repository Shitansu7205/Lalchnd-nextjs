import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="s-brand-intro flat-spacing-2 light-bg">
      <div className="container-full-2">
        <div className="row d-flex align-items-center">
          <div className="col-md-4">
            <div className="brand-intro_image mb-md-0">
              <Image
                src="/images/lalchnd/about/owner.webp"
                alt=""
                className="lazyload intro-photo"
                width={918}
                height={1228}
              />
              {/* <div className="brand-box">
                <Image
                  src="/images/section/item-1.png"
                  alt=""
                  className="lazyload"
                  width={1000}
                  height={1000}
                />
              </div> */}
            </div>
          </div>
          <div className="col-md-8">
            <h2 className="heading-font pb-2">
              Our Founder-<span className="highlight-font">Chairman</span>
            </h2>
            <p className="brand-intro_text">
              The Lalchnd Group’s founding and flagship company, Lalchnd Jewellers, is a long-established market leader in its space. Boasting three of the largest jewellery showrooms in eastern India, Lalchnd Jewellers offers the widest range of the very finest jewellery and jewellery designs in Odisha – what with all its core products either conceptualised and crafted, or inspired and sourced from not just across its home state and country, but from various corners of the globe. Combining that with customer service that follows global best practices while still being in tune with Indian sensibilities, Lalchnd Jewellers has earned its position as the most trusted luxury brand in Odisha.
            </p>
            <span className="br-line" />
            <div className="brand-intro_author flex-sm-nowrap">
              <div className="author-info">
                <Image
                  alt="Author"
                  className="img-author"
                  src="/images/lalchnd/about/short-img.webp"
                  width={100}
                  height={100}
                />
                <div className="info">
                  <h5 className="name">
                    <a href="#" className="link">
                      Sunjay Hans
                    </a>
                  </h5>
                  <span className="duty text-main-4">Founder of Lalchnd</span>
                </div>
              </div>
              {/* <div className="author-signature">
                <Image
                  alt="Signature"
                  src="/images/section/signature.svg"
                  width={296}
                  height={81}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

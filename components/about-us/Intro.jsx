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
            After venturing into the jewellery business with a humble silver gifts store in Bhubaneswar 
            well over three decades ago, Dr Sunjoy Hans endeavoured tirelessly during the early 
            years to raise awareness among the people of Odisha about the importance of buying pure 
            gold and to introduce them to the endlessly eclectic possibilities of fine jewellery 
            designs. This made Lalchnd Jewellers a household name – in both rural and urban Odisha. 
            Working just as hard now as the Founder Chairman of the Lalchnd Group of Companies – 
            which includes Lalchnd Jewellers, Lalchnd Builders, Lalchnd Resorts and LCJ Developers, 
            among others – Dr. Sunjoy Hans is one of the state’s most popular and influential 
            entrepreneurs.

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

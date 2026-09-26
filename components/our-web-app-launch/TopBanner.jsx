import React from "react";
import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "@/components/common/Countdown";
export default function TopBanner() {
  return (
    <div className="banner_countdown mt-5">
      
      <div className="bn_image">
        <Image
          src="/images/lalchnd/app/app.webp"
          alt=""
          className="lazyload"
          width={1914}
          height={1436}
        />
      </div>
      <div className="bn_content p-5" style={{background: "#fff"}}>
        <div className="heading wow fadeInUp">
          <h2 className="pb-3">We are pleased to inform you that the <span className="highlight-font">Lalchnd Jewellers</span> <br />
          Mobile App is now <span className="highlight-font">Live!</span>
          </h2>
          <p className="sub-title">
            You can now conveniently pay your monthly installment against your Sone Pe Suhaga (SPS) account number 
            directly through the App, without visiting the showroom or using any other payment mode.
          </p>
        </div>
        <Link href={`https://play.google.com/store/apps/details?id=com.acme.jewelloApp.lalchndJw&pcampaignid=web_share&pli=1.`} className="home-cta-btn tf-btn btn-fill animate-btn type-large" target="_blank">
          Download Now
          <i className="icon-arrow-right-2 fs-24" />
        </Link>
      </div>
    </div>
  );
}

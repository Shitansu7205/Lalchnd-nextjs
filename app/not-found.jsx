

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer2 from "@/components/footers/Footer2";
export const metadata = {
  title: "Page Not Found || Lalchnd Jewellery",
  description: "Page Not Found || Lalchnd Jewellery",
};
export default function page() {
  return (
     <>
          <div className="bg-surface">
            <div id="wrapper">
              
              <div className="wg-404 tf-grid-layout sm-col-2 gap-0 vh-100">
        <div className="image">
          <Image
            src="/images/lalchnd/404/404.webp"
            alt={404}
            className="lazyload"
            width={1920}
            height={1868}
          />
        </div>
        <div className="content">
          <h1 className="error-title">
  <span className="highlight-font">Oops!</span>
  <br />
  <span>Page not found!</span>
</h1>
          <p className="sub-head">
            The page you are looking is not available or has been removed. Try
            going to HomePage by using the button below.
          </p>
          <Link href={`/`} className="home-cta-btn tf-btn btn-fill animate-btn type-large">
            RETURN TO HOMEPAGE
          </Link>
        </div>
      </div>
              
            </div>
          </div>
        </>
 
  );
}


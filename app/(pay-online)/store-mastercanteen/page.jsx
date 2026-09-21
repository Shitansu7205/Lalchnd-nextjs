import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import Footer2 from "@/components/footers/Footer2";
import StoreMastercanteen from "@/components/pay-online/StoreMastercanteen";
import Link from "next/link";
export const metadata = {
  title: "Master Canteen || Vemus - Jewelry Ecommerce React Nextjs Template",
  description: "Lalchnd - Jewelry Ecommerce React Nextjs Template",
};
export default function page() {
  return (
    <>
      <Topbar1 />
      <Header1 parentClass="tf-header" />
      <BreadcrumbBanner
        title="Our Beautiful Moments"
        current="Gallery"
        image="https://lalchnd.com/wp-content/uploads/2026/09/Desktop-2560-x-931.jpg.jpeg"
      />
      {/* <section className="flat-spacing-2">
        <div className="container">
          <div className="page-title">
            <div className="breadcrumbs">
              <ul className="bread-wrap mb-0">
                <li>
                  <Link href={`/`} className="text-main-4 link-secondary">
                    Home
                  </Link>
                </li>
                <li className="br-line w-12 bg-main" />
                <li>About Us</li>
              </ul>

            </div>

          </div>
        </div>
      </section> */}
      {/* <div className="sect-border p-0 mt-0">

        <div className="sect-head wow fadeInUp">
          <h2 className="s-title font-2 text-capitalize">

          </h2>
        </div>
      </div> */}
      <StoreMastercanteen />
      <Footer2 />
    </>
  );
}

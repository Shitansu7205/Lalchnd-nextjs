import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import TopBar from "@/components/headers/TopBar";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Partion from "@/components/common/Partion";
import React from "react";
import Link from "next/link";
import SonePeSuhaga from "@/components/sone-pe-suhaga/SonePeSuhaga";
export const metadata = {
  title: "Gold Savings Scheme – Sone Pe Suhaga | Lalchnd Jewellers",
  description: "Explore Sone Pe Suhaga, Lalchnd Jewellers’ Gold Savings Scheme. Plan your gold jewellery purchase with monthly instalments, scheme benefits and applicable making-charge discounts.",
  alternates: {
    canonical: "https://lalchnd.com/sone-pe-suhaga/",
  },
};
export default function page() {
  return (
    <>
      <TopBar />
      <Header parentClass="tf-header" />
                  <BreadcrumbBanner
                      title="Sone Pe Suhaga"
                      current="Sone Pe Suhaga"
                      image="/images/lalchnd/about/about-banner.webp"
                  />
                  <Partion />
      <SonePeSuhaga />
      <Footer2 />
    </>
  );
}

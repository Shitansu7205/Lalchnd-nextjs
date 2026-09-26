import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import TopBar from "@/components/headers/TopBar";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Partion from "@/components/common/Partion";
import React from "react";
import Link from "next/link";
import SonePeSuhaga from "@/components/sone-pe-suhaga/SonePeSuhaga";
export const metadata = {
  title: "Our Stores || Vemus - Jewelry Ecommerce React Nextjs Template",
  description: "Vemus - Jewelry Ecommerce React Nextjs Template",
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

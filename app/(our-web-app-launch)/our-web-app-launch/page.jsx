import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import TopBar from "@/components/headers/TopBar";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Partion from "@/components/common/Partion";
import React from "react";
import Link from "next/link";
import Banner from "@/components/our-web-app-launch/Banner";
import TopBanner from "@/components/our-web-app-launch/TopBanner";
import Installation from "@/components/our-web-app-launch/Installation";
export const metadata = {
  title: "Lalchnd Jewellers App – Download Our Jewellery App",
  description: "Download the Lalchnd Jewellers App to manage your Sone Pe Suhaga account, view your scheme details, and pay your monthly instalments securely and conveniently.",
  alternates: {
    canonical: "https://lalchnd.com/our-web-app-launch/",
  },
};
export default function page() {
  return (
    <>
      <TopBar />
      <Header parentClass="tf-header" />
                  <BreadcrumbBanner
                      title="Our Web App Launch"
                      current="Our Web App Launch"
                      image="/images/lalchnd/about/about-banner.webp"
                  />
                  <Partion />
                  <TopBanner />
      <Installation />
      <Banner/>
      <Footer2 />
    </>
  );
}

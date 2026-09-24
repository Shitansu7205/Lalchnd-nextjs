import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import TopBar from "@/components/headers/TopBar";
import Link from "next/link";
import Partion from "@/components/common/Partion";
import Delhi from "@/components/pay-online/Delhi";
import Topbar1 from "@/components/headers/Topbar1";
export const metadata = {
  title: "Delhi || Lalchnd - Jewelry Ecommerce React Nextjs Template",
  description: "Lalchnd - Jewelry Ecommerce React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="bg-surface">
        <div id="wrapper">
          <Topbar1 />
          <Header />
          <BreadcrumbBanner
            title="Pay Online"
            current="New Delhi"
            image="/images/lalchnd/banner/pay-online-banner.webp"
          />
          <Partion />
          <Delhi />
          <Footer2 />
        </div>
      </div>
    </>
  );
}

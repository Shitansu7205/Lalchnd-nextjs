import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import TopBar from "@/components/headers/TopBar";
import Link from "next/link";
import Partion from "@/components/common/Partion";
import BrahmapurStore from "@/components/pay-online/BrahmapurStore";
import Topbar1 from "@/components/headers/Topbar1";
export const metadata = {
  title: "Lalchnd Brahmapur Store | Online Payment & Monthly Scheme",
  description: "Online advance payment and monthly jewellery scheme options available at Lalchnd Brahmapur store.",
  alternates: {
    canonical: "https://lalchnd.com/brahmapur-store/",
  },
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
            current="Bramhapur"
            image="/images/lalchnd/banner/pay-online-banner.webp"
          />
          <Partion />
          <BrahmapurStore />
          <Footer2 />
        </div>
      </div>
    </>
  );
}

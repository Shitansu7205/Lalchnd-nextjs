import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import TopBar from "@/components/headers/TopBar";
import Link from "next/link";
import Partion from "@/components/common/Partion";
import StoreRaghunathpur from "@/components/pay-online/StoreRaghunathpur";
import Topbar1 from "@/components/headers/Topbar1";
export const metadata = {
  title: "Lalchnd Raghunathpur Store | Online Payment & Monthly Scheme",
  description: "Online advance payment and monthly jewellery scheme options available at Lalchnd Raghunathpur store in Bhubaneswar.",
  alternates: {
    canonical: "https://lalchnd.com/store-raghunathpur/",
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
            current="Raghunathpur"
             image="/images/lalchnd/banner/pay-online-banner.webp"
          />
          <Partion />
          <StoreRaghunathpur />
          <Footer2 />
        </div>
      </div>
    </>
  );
}

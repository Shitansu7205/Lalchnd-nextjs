import Topbar1 from "@/components/headers/Topbar1";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import AwardGridPopup from "@/components/common/AwardGridPopup";
import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import Partion from "@/components/common/Partion";
export const metadata = {
  title: "Awards & Achievements | Lalchnd Jewellers",
  description:
    "Explore the awards and achievements that reflect Lalchnd Jewellers' excellence in jewellery craftsmanship, trusted service, and timeless design.",
  alternates: {
    canonical: "https://lalchnd.com/award/",
  },
};
export default function page() {
  return (
    <>
      <Topbar1 />
      <Header parentClass="tf-header" />
      <BreadcrumbBanner
        title="Our Awards & Achievements"
        current="Awards"
        image="/images/lalchnd/banner/store-inner-banner.webp"
      />
      <Partion />
      <AwardGridPopup />
      <Footer2 />
    </>
  );
}

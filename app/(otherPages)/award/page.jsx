import Topbar1 from "@/components/headers/Topbar1";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import AwardGridPopup from "@/components/common/AwardGridPopup";
import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import Partion from "@/components/common/Partion";
export const metadata = {
  title: "Lalchnd Jewellers Awards & Recognition | Achievements",
  description:
    "Lalchnd Jewellers’ awards and recognition for excellence in jewellery and trusted brand leadership, reflecting its achievements and industry presence.",
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

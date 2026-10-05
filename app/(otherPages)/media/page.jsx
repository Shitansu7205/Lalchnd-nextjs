import Topbar1 from "@/components/headers/Topbar1";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import MediaGridPopup from "@/components/common/MediaGridPopup";
import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import Partion from "@/components/common/Partion";
export const metadata = {
  title: "Lalchnd Jewellers in Media | Press & Recognition",
  description:
    "Lalchnd Jewellers’ media coverage, press releases and recognitions featuring the brand’s achievements, milestones and presence in the jewellery industry.",
  alternates: {
    canonical: "https://lalchnd.com/media/",
  },
};
export default function page() {
  return (
    <>
      <Topbar1 />
      <Header parentClass="tf-header" />
      <BreadcrumbBanner
        title="In the News"
        current="Media"
        image="/images/lalchnd/banner/media-banner.webp"
      />
      <Partion/>
      <MediaGridPopup />
      <Footer2 />
    </>
  );
}

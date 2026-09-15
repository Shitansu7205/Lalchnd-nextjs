import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import GalleryGridPopup from "@/components/common/GalleryGridPopup";
import Footer2 from "@/components/footers/Footer2";
export const metadata = {
  title: "Gallery - Lalchnd Jewellers",
  description:
    "Browse Lalchnd Jewellers' jewellery gallery featuring exquisite designs, fine craftsmanship, elegant collections, and timeless pieces created for every occasion.",
  alternates: {
    canonical: "https://lalchnd.com/gallery/",
  },
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
      <GalleryGridPopup />
      <Footer2 />
    </>
  );
}

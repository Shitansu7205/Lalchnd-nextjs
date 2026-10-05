import TopBar from "@/components/headers/TopBar";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import Footer2 from "@/components/footers/Footer2";
import ContactUs from "@/components/otherPages/ContactUs";
import Header from "@/components/headers/Header";
import Partion from "@/components/common/Partion";
export const metadata = {
  title: "Contact Lalchnd Jewellers | Stores & Contact Details",
  description:
    "Contact Lalchnd Jewellers for store locations, contact details and assistance across Bhubaneswar, Cuttack, Berhampur and New Delhi.",
  alternates: {
    canonical: "https://lalchnd.com/contact/",
  },
};
export default function page() {
  return (
    <>
      <TopBar />
      <Header parentClass="tf-header" />
      <BreadcrumbBanner
        title="Contact Us"
        current="Contact"
        image="/images/lalchnd/banner/store-inner-banner.webp"
      />
      <Partion />
      <ContactUs />
      <Footer2 />
    </>
  );
}

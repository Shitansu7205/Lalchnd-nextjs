import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import Footer2 from "@/components/footers/Footer2";
import ContactUs from "@/components/otherPages/ContactUs";
export const metadata = {
  title: "Contact - Lalchnd Jewellers",
  description:
    "Get in touch with Lalchnd Jewellers for jewellery enquiries, store information, and assistance from our team. We’re here to help you find the perfect jewellery.",
  alternates: {
    canonical: "https://lalchnd.com/contact/",
  },
};
export default function page() {
  return (
    <>
      <Topbar1 />
      <Header1 parentClass="tf-header" />
      <BreadcrumbBanner
        title="Contact Us"
        current="Contact"
        image="https://lalchnd.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-06-23-at-6.03.24-PM-1.jpeg"
      />
      <ContactUs />
      <Footer2 />
    </>
  );
}

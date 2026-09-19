import Topbar1 from "@/components/headers/Topbar1";
import Footer2 from "@/components/footers/Footer2";
import PrivacyPolicy from "@/components/termsPolicy/PrivacyPolicy";
import Link from "next/link";

import React from "react";
import Header from "@/components/headers/Header";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";

export const metadata = {
  title: "Privacy Policy - Lalchnd Jewellers",
  description:
    "Read the privacy policy of Lalchnd Jewellers.",
};
export default function page() {
  return (
    <>
      <Topbar1 />
      <Header parentClass="tf-header" />
      <BreadcrumbBanner
        title="Privacy Policy"
        current="Privacy Policy"
        image="https://lalchnd.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-06-23-at-6.03.24-PM-1.jpeg"
      />


      <PrivacyPolicy />
      <Footer2 />
    </>
  );
}

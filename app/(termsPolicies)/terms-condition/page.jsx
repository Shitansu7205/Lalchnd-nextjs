import Topbar1 from "@/components/headers/Topbar1";
import Footer2 from "@/components/footers/Footer2";
import TermsCondition from "@/components/termsPolicy/TermsCondition";
import Link from "next/link";

import React from "react";
import Header from "@/components/headers/Header";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";

export const metadata = {
  title: "Terms & Condition - Lalchnd Jewellers",
  description:
    "Read the terms and conditions of Lalchnd Jewellers.",
};
export default function page() {
  return (
    <>
      <Topbar1 />
      <Header parentClass="tf-header" />
      <BreadcrumbBanner
        title="Contact Us"
        current="Contact"
        image="https://lalchnd.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-06-23-at-6.03.24-PM-1.jpeg"
      />
      <TermsCondition />
      <Footer2 />
    </>
  );
}

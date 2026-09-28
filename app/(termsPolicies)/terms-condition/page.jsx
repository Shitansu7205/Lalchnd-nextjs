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
  alternates: {
    canonical: "https://lalchnd.com/terms-condition/",
  },
};
export default function page() {
  return (
    <>
      <Topbar1 />
      <Header parentClass="tf-header" />
      <BreadcrumbBanner
        title="Terms and Conditions"
        current="Policy"
        image="/images/lalchnd/banner/media-banner.webp"
      />
      <TermsCondition />
      <Footer2 />
    </>
  );
}

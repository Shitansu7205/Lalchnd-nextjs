import Topbar1 from "@/components/headers/Topbar1";
import Footer2 from "@/components/footers/Footer2";
import TermsCondition from "@/components/termsPolicy/TermsCondition";
import Link from "next/link";

import React from "react";
import Header from "@/components/headers/Header";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Partion from "@/components/common/Partion";

export const metadata = {
  title: "Terms & Conditions | Lalchnd Jewellers",
  description:
    "Terms and conditions governing the use of the Lalchnd Jewellers website, services, offers and related transactions.",
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
      <Partion />
      <TermsCondition />
      <Footer2 />
    </>
  );
}

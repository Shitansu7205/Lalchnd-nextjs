import Topbar1 from "@/components/headers/Topbar1";
import Footer2 from "@/components/footers/Footer2";
import PrivacyPolicy from "@/components/termsPolicy/PrivacyPolicy";
import Link from "next/link";

import React from "react";
import Header from "@/components/headers/Header";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Partion from "@/components/common/Partion";

export const metadata = {
  title: "Privacy Policy | Lalchnd Jewellers",
  description:
    "Understand how Lalchnd Jewellers collects, uses and protects your personal information. Learn about data security, privacy practices and your choices when using our website.",
  alternates: {
    canonical: "https://lalchnd.com/privacy-policy/",
  },
};
export default function page() {
  return (
    <>
      <Topbar1 />
      <Header parentClass="tf-header" />
      <BreadcrumbBanner
        title="Privacy Policy"
        current="Privacy Policy"
        image="/images/lalchnd/banner/gallery-banner.webp"
      />
      <Partion />
      <PrivacyPolicy />
      <Footer2 />
    </>
  );
}

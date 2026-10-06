import Footer2 from "@/components/footers/Footer2";
import Link from "next/link";
import React from "react";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Header from "@/components/headers/Header";
import Partion from "@/components/common/Partion";
import Topbar1 from "@/components/headers/Topbar1";
import OurSchemes from "@/components/our-Schemes/OurSchemes";

export const metadata = {
    title: "Our Jewellery Schemes | Gold, Diamond & Savings | Lalchnd",
    description: "Explore Lalchnd’s jewellery schemes, including monthly instalments, gold exchange, diamond purchase plans and special offers. Find the right scheme for your jewellery needs.",
    alternates: {
    canonical: "https://lalchnd.com/our-schemes/",
  },
};
export default function page() {
    return (
        <>
            <Topbar1 />
            <Header parentClass="tf-header" />
            <BreadcrumbBanner
                title="Our Schemes"
                descriprion="Lalchand Jewellers blends timeless craftsmanship with exquisite designs sourced from across India and the world. With trusted service and a legacy of excellence, it stands as one of Odisha’s most cherished luxury jewellery brands."
                current="Our Schemes"
                image="/images/lalchnd/about/about-banner.webp"
            />
            <Partion />
            <OurSchemes />
            <Footer2 />
        </>
    );
}

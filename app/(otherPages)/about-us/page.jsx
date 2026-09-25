import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import TopBar from "@/components/headers/TopBar";
import Link from "next/link";
import Features from "@/components/about-us/Features";
import Intro from "@/components/about-us/Intro";
import React from "react";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import About from "@/components/about-us/About";
import Header from "@/components/headers/Header";
import Partion from "@/components/common/Partion";
import Topbar1 from "@/components/headers/Topbar1";

export const metadata = {
    title: "About Us || Lalchnd - Jewelry Ecommerce React Nextjs Template",
    description: "Lalchnd - Jewelry Ecommerce React Nextjs Template",
};
export default function page() {
    return (
        <>
            <Topbar1 />
            <Header parentClass="tf-header" />
            <BreadcrumbBanner
                title="Our Story"
                descriprion="Lalchand Jewellers blends timeless craftsmanship with exquisite designs sourced from across India and the world. With trusted service and a legacy of excellence, it stands as one of Odisha’s most cherished luxury jewellery brands."
                current="About Us"
                image="/images/lalchnd/about/about-banner.webp"
            />
            <Partion />
            <About />
            <Intro />
            <Features />
            <Footer2 />
        </>
    );
}

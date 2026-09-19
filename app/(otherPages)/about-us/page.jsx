import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Link from "next/link";
import Features from "@/components/about-us/Features";
import Intro from "@/components/about-us/Intro";
import React from "react";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import About from "@/components/about-us/About";

export const metadata = {
    title: "About Us || Lalchnd - Jewelry Ecommerce React Nextjs Template",
    description: "Lalchnd - Jewelry Ecommerce React Nextjs Template",
};
export default function page() {
    return (
        <>
            <Topbar1 />
            <Header1 parentClass="tf-header" />
            <BreadcrumbBanner
                title="Our Story"
                descriprion="Lalchand Jewellers blends timeless craftsmanship with exquisite designs sourced from across India and the world. With trusted service and a legacy of excellence, it stands as one of Odisha’s most cherished luxury jewellery brands."
                current="About Us"
                image="/images/lalchnd/about/about-banner.webp"
            />
            <section className="flat-spacing-2">
                <div className="container">
                    <div className="page-title">
                        <div className="breadcrumbs">
                            <ul className="bread-wrap mb-0">
                                <li>
                                    <Link href={`/`} className="text-main-4 link-secondary">
                                        Home
                                    </Link>
                                </li>
                                <li className="br-line w-12 bg-main" />
                                <li>About Us</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </section>
            <div className="sect-border p-0 mt-0">

                <div className="sect-head wow fadeInUp">
                    <h2 className="s-title font-2 text-capitalize">

                    </h2>
                </div>
            </div>
            <About />
            <Intro />
            <Features />
            <Footer2 />
        </>
    );
}

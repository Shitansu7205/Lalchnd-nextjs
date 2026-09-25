import Footer2 from "@/components/footers/Footer2";
import TopBar from "@/components/headers/TopBar";
import Store from "@/components/stores/Store";
import React from "react";
import Link from "next/link";

import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Header from "@/components/headers/Header";
import Partion from "@/components/common/Partion";
export const metadata = {
    title: "Our Stores || Lalchnd - Jewelry ",
    description: "Lalchnd - Jewelry Ecommerce ",
};
export default function page() {
    return (
        <>
            <TopBar />
            <Header parentClass="tf-header" />
            <BreadcrumbBanner
                title="Our Presence"
                current="Stores"
                image="/images/banner/our-store-banner.webp"
            />
            <Partion />
            <Store />
            <Footer2 />
        </>
    );
}

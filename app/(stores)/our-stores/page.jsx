import Footer2 from "@/components/footers/Footer2";
import Topbar1 from "@/components/headers/Topbar1";
import Store from "@/components/stores/Store";
import React from "react";
import Link from "next/link";

import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Header from "@/components/headers/Header";
import Partion from "@/components/common/Partion";
export const metadata = {
    title: "Our Stores || Vemus - Jewelry Ecommerce React Nextjs Template",
    description: "Vemus - Jewelry Ecommerce React Nextjs Template",
};
export default function page() {
    return (
        <>
            <Topbar1 />
            <Header parentClass="tf-header" />
            <BreadcrumbBanner
                title="Our Presence"
                current="Stores"
                image="/images/lalchnd/banner/our-store-banner.webp"
            />
            <Partion />
            <Store />
            <Footer2 />
        </>
    );
}

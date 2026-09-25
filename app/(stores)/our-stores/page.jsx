import Footer2 from "@/components/footers/Footer2";
import TopBar from "@/components/headers/TopBar";
import Store from "@/components/stores/Store";
import React from "react";
import Link from "next/link";

import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Header from "@/components/headers/Header";
import Partion from "@/components/common/Partion";
import Topbar1 from "@/components/headers/Topbar1";
export const metadata = {
    title: "Our Stores || Lalchnd - Jewelry ",
    description: "Lalchnd - Jewelry Ecommerce ",
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

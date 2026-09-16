import Footer2 from "@/components/footers/Footer2";
import Topbar1 from "@/components/headers/Topbar1";
import Store from "@/components/stores/Store";
import React from "react";
import Link from "next/link";

import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Header from "@/components/headers/Header";
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
                image="https://lalchnd.com/wp-content/uploads/2026/09/Desktop-2560-x-931.jpg.jpeg"
            />
            <section className="flat-spacing-2 pb-0">
                <div className="container">
                    <div className="page-title">
                        <div className="breadcrumbs">
                            <ul className="bread-wrap">
                                <li>
                                    <Link href={`/`} className="text-main-4 link-secondary">
                                        Home
                                    </Link>
                                </li>
                                <li className="br-line w-12 bg-main" />
                                <li>Our Store</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </section>
            <Store />
            <Footer2 />
        </>
    );
}

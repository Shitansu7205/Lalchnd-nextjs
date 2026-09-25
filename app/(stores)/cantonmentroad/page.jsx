import TopBar from "@/components/headers/TopBar";
import React from "react";
import Link from "next/link";
import { allProducts } from "@/data/products";
import Header from "@/components/headers/Header";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Footer2 from "@/components/footers/Footer2";
import OtherStores from "@/components/stores/OtherStores";
import CantonmentRoadDetails from "@/components/stores/cantonmentroad/CantonmentRoadDetails";
import CantonmentRoadDescription from "@/components/stores/cantonmentroad/CantonmentRoadDescription";
import Partion from "@/components/common/Partion";
export const metadata = {
    title: "Product Details || Vemus - Jewelry Ecommerce React Nextjs Template",
    description: "Vemus - Jewelry Ecommerce React Nextjs Template",
};
export default async function ProductDetailPage({ params }) {
    const { id } = await params;

    const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
    return (
        <>
            <TopBar/>

            <Header parentClass="tf-header" />
            <BreadcrumbBanner title="Cantonment Road - Lalchnd Jewellers"
                current="Cantonment Road - Lalchnd Jewellers"
                image="/images/lalchnd/banner/store-inner-banner.webp"
            />
            <Partion/>
            <CantonmentRoadDetails />
            <CantonmentRoadDescription />
            <OtherStores />
            <Footer2 />
        </>
    );
}

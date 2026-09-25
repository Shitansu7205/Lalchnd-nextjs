import TopBar from "@/components/headers/TopBar";
import React from "react";
import Link from "next/link";
import { allProducts } from "@/data/products";
import TextSlider from "@/components/common/TextSlider3";
import Details2 from "@/components/product-details/Details2";
import Header from "@/components/headers/Header";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Footer2 from "@/components/footers/Footer2";
import MasterCanteenDetails from "@/components/stores/master-canteen/MasterCanteenDetails";
import MasterCanteenDescription from "@/components/stores/master-canteen/MasterCanteenDescription";
import OtherStores from "@/components/stores/OtherStores";
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
            <BreadcrumbBanner title="Master Canteen"
                current="Master Canteen - Lalchnd Jewellers"
                image="/images/lalchnd/banner/store-inner-banner.webp"
            />
            <Partion />
            <MasterCanteenDetails  />
            <MasterCanteenDescription />
            <OtherStores />
            <Footer2 />
        </>
    );
}

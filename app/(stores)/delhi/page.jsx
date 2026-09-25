import Topbar1 from "@/components/headers/Topbar1";
import React from "react";
import { allProducts } from "@/data/products";
import Header from "@/components/headers/Header";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Footer2 from "@/components/footers/Footer2";
import OtherStores from "@/components/stores/OtherStores";
import DelhiDetails from "@/components/stores/delhi/DelhiDetails";
import DelhiDescription from "@/components/stores/delhi/DelhiDescription";
export const metadata = {
    title: "Product Details || Vemus - Jewelry Ecommerce React Nextjs Template",
    description: "Vemus - Jewelry Ecommerce React Nextjs Template",
};
export default async function ProductDetailPage({ params }) {
    const { id } = await params;

    const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
    return (
        <>
            <Topbar1 />

            <Header parentClass="tf-header" />
            <BreadcrumbBanner title="Delhi - Lalchnd Jewellers"
                current="Delhi - Lalchnd Jewellers"
                image="https://lalchnd.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-06-23-at-6.03.24-PM-1.jpeg"
            />
            <DelhiDetails />
            <DelhiDescription />
            <OtherStores />
            <Footer2 />
        </>
    );
}

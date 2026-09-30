import TopBar from "@/components/headers/TopBar";
import React from "react";
import { allProducts } from "@/data/products";
import Header from "@/components/headers/Header";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Footer2 from "@/components/footers/Footer2";
import OtherStores from "@/components/stores/OtherStores";
import DelhiDetails from "@/components/stores/delhi/DelhiDetails";
import DelhiDescription from "@/components/stores/delhi/DelhiDescription";
import Partion from "@/components/common/Partion";
export const metadata = {
  title: "Best Jewellery Shop in Lajpat Nagar Delhi – Lalchnd Jewellers",
  description: "Explore the best jewellery shop in Lajpat Nagar, Delhi, offering stunning gold, diamond, and silver jewellery. Famous for quality craftsmanship. Visit our store for the finest collections!",
  alternates: {
    canonical: "https://lalchnd.com/delhi/"
  },
};
export default async function ProductDetailPage({ params }) {
    const { id } = await params;

    const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
    return (
        <>
            <TopBar/>

            <Header parentClass="tf-header" />
            <BreadcrumbBanner title="Delhi - Lalchnd Jewellers"
                current="Delhi - Lalchnd Jewellers"
                image="/images/lalchnd/banner/store-inner-banner.webp"
            />
            <Partion />
            <DelhiDetails />
            <DelhiDescription />
            <OtherStores />
            <Footer2 />
        </>
    );
}

import TopBar from "@/components/headers/TopBar";
import React from "react";
import Link from "next/link";
import { allProducts } from "@/data/products";
import Header from "@/components/headers/Header";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Footer2 from "@/components/footers/Footer2";
import OtherStores from "@/components/stores/OtherStores";
import CuttackDetails from "@/components/stores/cuttack/CuttackDetails";
import Partion from "@/components/common/Partion";
export const metadata = {
  title: "Best Gold Jewellery Shop in Cuttack – Lalchnd Jewellers",
  description: "Explore exquisite gold collections at Lalchnd Jewellers, the premier jewellery destination in Cuttack. Unmatched craftsmanship and timeless designs await you.",
  alternates: {
    canonical: "https://lalchnd.com/cuttack/"
  },
};
export default async function ProductDetailPage({ params }) {
    const { id } = await params;

    const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
    return (
        <>
            <TopBar />

            <Header parentClass="tf-header" />
            <BreadcrumbBanner title="Cuttack  - Lalchnd Jewellers"
                current="Cuttack  - Lalchnd Jewellers"
                image="/images/lalchnd/banner/store-inner-banner.webp"
            />
            <Partion />
            <CuttackDetails />
            <OtherStores />
            <Footer2 />
        </>
    );
}

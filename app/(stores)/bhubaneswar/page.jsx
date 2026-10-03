import TopBar from "@/components/headers/TopBar";
import React from "react";
import Link from "next/link";
import { allProducts } from "@/data/products";
import Header from "@/components/headers/Header";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Footer2 from "@/components/footers/Footer2";
import OtherStores from "@/components/stores/OtherStores";
import BhubaneswarDetails from "@/components/stores/bhubaneswar/BhubaneswarDetails";
import Partion from "@/components/common/Partion";
export const metadata = {
  title: "Best Gold & Diamond Jewellers Shop in Bhubaneswar - Lalchnd Jeweller",
  description: "Find out exquisite 22-carat gold jewellery at Lalchnd, the best showroom in Bhubaneswar. Explore stunning designs and indulge in the luxury of fine craftsmanship.",
  alternates: {
    canonical: "https://lalchnd.com/bhubaneswar/"
  },
};
export default async function ProductDetailPage({ params }) {
    const { id } = await params;

    const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
    return (
        <>
            <TopBar />

            <Header parentClass="tf-header" />
            <BreadcrumbBanner title="Bhubaneswar  - Lalchnd Jewellers"
                current="Bhubaneswar  - Lalchnd Jewellers"
                image="/images/lalchnd/banner/store-inner-banner.webp"
            />
            <Partion />
            <BhubaneswarDetails />
            <OtherStores />
            <Footer2 />
        </>
    );
}

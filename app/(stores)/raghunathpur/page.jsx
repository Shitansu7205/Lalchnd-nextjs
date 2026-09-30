import TopBar from "@/components/headers/TopBar";
import React from "react";
import Link from "next/link";
import { allProducts } from "@/data/products";
import Header from "@/components/headers/Header";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Footer2 from "@/components/footers/Footer2";
import OtherStores from "@/components/stores/OtherStores";
import RaghunathpurDetails from "@/components/stores/raghunathpur/RaghunathpurDetails";
import RaghunathpurDescription from "@/components/stores/raghunathpur/RaghunathpurDescription";
import Partion from "@/components/common/Partion";
export const metadata = {
  title: "Best Jewellery Store in Raghunathpur at Lalchnd Jewellers",
  description: "Lalchnd Jewellers the foremost Showroom in Raghunathpur. Find the Best Jewellers & Gold Jewellery Shop for stunning designs & quality pieces.",
  alternates: {
    canonical: "https://lalchnd.com/raghunathpur/"
  },
};
export default async function ProductDetailPage({ params }) {
    const { id } = await params;

    const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
    return (
        <>
            <TopBar />

            <Header parentClass="tf-header" />
            <BreadcrumbBanner title="Raghunathpur"
                current="Raghunathpur - Lalchnd Jewellers"
                image="/images/lalchnd/banner/store-inner-banner.webp"
            />
            <Partion/>
            <RaghunathpurDetails />
            <RaghunathpurDescription />
            <OtherStores />
            <Footer2 />
        </>
    );
}

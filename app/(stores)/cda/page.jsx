import TopBar from "@/components/headers/TopBar";
import React from "react";
import Link from "next/link";
import { allProducts } from "@/data/products";
import Header from "@/components/headers/Header";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Footer2 from "@/components/footers/Footer2";
import OtherStores from "@/components/stores/OtherStores";
import CdaDetails from "@/components/stores/cda/CdaDetails";
import CdaDescription from "@/components/stores/cda/CdaDescription";
import Partion from "@/components/common/Partion";
export const metadata = {
  title: "Best Jewellery Store in CDA – Lalchnd Jewellers",
  description: "Explore the finest gold & diamond jewellery at Lalchnd Jewellers, the premier showroom in CDA. Each piece is crafted with exceptional quality, blending luxury and elegance for any special occasion.",
  alternates: {
    canonical: "https://lalchnd.com/cda/"
  },
};
export default async function ProductDetailPage({ params }) {
    const { id } = await params;

    const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
    return (
        <>
            <TopBar/>

            <Header parentClass="tf-header" />
            <BreadcrumbBanner title="CDA - Lalchnd Jewellers"
                current="Cda - Lalchnd Jewellers"
                image="/images/lalchnd/banner/store-inner-banner.webp"
            />
            <Partion />
            <CdaDetails />
            <CdaDescription />
            <OtherStores />
            <Footer2 />
        </>
    );
}

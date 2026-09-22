import Features from "@/components/common/Features";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import ProductsListing from "@/components/products/ProductsListing";
import Categories from "@/components/shop/Categories";

import Products1 from "@/components/shop/Products1";
import Link from "next/link";
import React from "react";
export const metadata = {
    title: "Shop || Vemus - Jewelry Ecommerce React Nextjs Template",
    description: "Vemus - Jewelry Ecommerce React Nextjs Template",
};
export default function page() {
    return (
        <>
            <Topbar1 parentClass="tf-topbar bg-dark-olive" />
            <Header1 parentClass="tf-header" />
            <ProductsListing />
            <Footer1 />
        </>
    );
}

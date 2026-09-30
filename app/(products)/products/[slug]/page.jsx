
import Features from "@/components/homes/home/Features";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Descriptions1 from "@/components/product-details/Descriptions1";
import Details1 from "@/components/product-details/Details1";
import RecentProducts from "@/components/product-details/RecentProducts";
import RelatedProducts from "@/components/product-details/RelatedProducts";
import TextSlider from "@/components/common/TextSlider3";
import Link from "next/link";
import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
// import { Home, ChevronRight } from "lucide-react";

export default async function ProductDetailPage({ params }) {
    const { slug } = await params;
    const apiBaseUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL ||
        "http://localhost:3000/api/v1";

    const response = await fetch(
        `${apiBaseUrl}/products/${encodeURIComponent(slug)}`,
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!response.ok) {
        return (
            <div className="container py-5 text-center">
                <h2>Product not found</h2>
                <Link href="/products" className="link">
                    Back to Products
                </Link>
            </div>
        );
    }

    const data = await response.json();
    const product = data.product;

    return (
        <>
            <Topbar1 parentClass="tf-topbar bg-dark-blue" />

            <Header parentClass="tf-header" />




            <Details1 product={product} />
            <Features />
            <RelatedProducts product={product} />

            <Footer2 />
        </>
    );
}
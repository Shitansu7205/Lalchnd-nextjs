import Features from "@/components/common/Features";
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

            <div className="flat-spacing-16 pb-0">
                <div className="container">
                    <div className="page-title border-0">
                        <div className="breadcrumbs">
                            <ul className="bread-wrap mb-0">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-main-4 link"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li className="br-line w-12 bg-main" />

                                <li>
                                    <Link
                                        href="/products"
                                        className="text-main-4 link"
                                    >
                                      Products
                                    </Link>
                                </li>

                                <li className="br-line w-12 bg-main" />

                                <li>
                                    <p>{product.name}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Details1 product={product} />

            <RelatedProducts />


            <Footer2 />
        </>
    );
}
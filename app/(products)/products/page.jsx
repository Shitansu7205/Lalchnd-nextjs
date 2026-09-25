import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Partion from "@/components/common/Partion";
import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import TopBar from "@/components/headers/TopBar";
import ProductListing from "@/components/shop/ProductListing";
export const metadata = {
    title: "Products || Vemus - Jewelry Ecommerce React Nextjs Template",
    description: "Products - Jewelry Ecommerce React Nextjs Template",
};
export default function page() {
    return (
        <>
            <TopBar />
            <Header parentClass="tf-header" />
            <BreadcrumbBanner
                title="Our Products"
                current="Blogs"
                image="/images/lalchnd/banner/media-banner.webp"
            />
            <Partion />
            <ProductListing />
            <Footer2 />
        </>
    );
}

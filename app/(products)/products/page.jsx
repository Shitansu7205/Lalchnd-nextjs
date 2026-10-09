import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Partion from "@/components/common/Partion";
import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import TopBar from "@/components/headers/TopBar";
import ProductListing from "@/components/shop/ProductListing";
export const metadata = {
  title: "Jewellery Collection | Rings, Bangles, Earrings & More | Lalchnd Jewellers",
  description: "Explore all jewellery collections at Lalchnd, from rings and bangles to earrings, necklaces and more in gold, diamond and silver jewellery.",
  alternates: {
    canonical: "https://lalchnd.com/products/"
  },
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
            <ProductListing />
            <Footer2 />
        </>
    );
}

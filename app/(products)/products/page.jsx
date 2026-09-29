import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import Partion from "@/components/common/Partion";
import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import TopBar from "@/components/headers/TopBar";
import ProductListing from "@/components/shop/ProductListing";
export const metadata = {
  title: "Online Diamond Sellers,Necklace & Gold Ring Shopping Stores India",
  description: "Lalchnd is the online jewellery shopping store & diamond seller in India where well designed necklace, gold ring and artificial earrings near me are available.",
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
            {/* <Partion /> */}
            <ProductListing />
            <Footer2 />
        </>
    );
}

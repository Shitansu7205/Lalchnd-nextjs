import Features from "@/components/homes/home/Features";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Collections from "@/components/homes/home-1/Collections";
import Hero from "@/components/homes/home/Hero";
import Products1 from "@/components/homes/home-1/Products1";
import Products2 from "@/components/homes/home-1/Products2";
import Products3 from "@/components/homes/home-1/Products3";
import Testimonials from "@/components/homes/home/Testimonials";
import TextBanner from "@/components/homes/home-1/TextBanner";
import TextSlider from "@/components/common/TextSlider";
import NewsLetter from "@/components/modals/NewsLetter";
import Header from "@/components/headers/Header";
import Footer2 from "@/components/footers/Footer2";
import TopBar from "@/components/headers/TopBar";
import Gallery from "@/components/homes/home/Gallery";
import About from "@/components/homes/home/About";
import Categories from "@/components/homes/home/Categories";
import Gold from "@/components/homes/home/Gold";
import Diamond from "@/components/homes/home/Diamond";
import Silver from "@/components/homes/home/Silver";
import ImageSection from "@/components/homes/home/ImageSection";
import ProductsImage from "@/components/homes/home/ProductsImage";
import Discount from "@/components/homes/home/Discount";
import JewelleryLocations from "@/components/homes/home/JewelleryLocations";
import WhyUs from "@/components/homes/home/WhyUs";
import Blogs from "@/components/homes/home/Blogs";
import InstagramFeed from "@/components/homes/home/InstagramFeed";
import Banner from "@/components/homes/home-4/Banner";
import FloatingActions from "@/components/common/FloatingActions";

export const metadata = {
  title: "Home 01 || Vemus - Jewelry Ecommerce React Nextjs Template",
  description: "Vemus - Jewelry Ecommerce React Nextjs Template",
};
export default function Home() {
  return (
    <>
      <div className="bg-surface">
        <div id="wrapper">
          <TopBar />
          <Header />
          <Hero />
          <Gallery />
          <About />
          {/* <TextSlider /> */}
          <Categories />
          <Gold />
          <Diamond />
          <Silver />
          <ImageSection />
          <ProductsImage />
          <Discount />
          <JewelleryLocations />
          {/* <WhyUs /> */}
          <Banner />
          <Features />
          <Testimonials />
          <Blogs />
          <InstagramFeed />
          <Footer2 />
          {/* <NewsLetter /> */}
        </div>
      </div>
      {/* <div className="bg-surface">
        <div id="wrapper">
          <Topbar1 />
          <Header />
          <Hero />
          <TextBanner />
          <Products1 />
          <Products2 />
          <Collections />
          <TextSlider />
          <Products3 />
          <Testimonials />
          <Banner />
          <Features />
          <Footer2 />
          <NewsLetter />
        </div>
      </div> */}
    </>
  );
}

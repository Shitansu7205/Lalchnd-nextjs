
import Features from "@/components/homes/home/Features";
import Hero from "@/components/homes/home/Hero";
import Testimonials from "@/components/homes/home/Testimonials";
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
import Blogs from "@/components/homes/home/Blogs";
import InstagramFeed from "@/components/homes/home/InstagramFeed";
import Banner from "@/components/homes/home/Banner";
import Watch from "@/components/homes/home/Watch";
import SonePeSuhagaBanner from "@/components/homes/home/SonePeSuhagaBanner";
import Kids from "@/components/homes/home/Kids";


export const metadata = {
  title: "Best Jewellery Showroom in Odisha – Lalchnd Jewellers",
  description: "Explore exquisite gold jewellery at Lalchnd, the best gold jewellery store in Odisha. Elevate your style with the finest gold pieces. Your trusted choice for luxurious jewellery shopping.",
  alternates: {
    canonical: "https://lalchnd.com/",
  },
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
         <SonePeSuhagaBanner />
          <Silver />
          <Kids/>
          {/* <Watch /> */}
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
          <NewsLetter />
        </div>
      </div>
    </>
  );
}

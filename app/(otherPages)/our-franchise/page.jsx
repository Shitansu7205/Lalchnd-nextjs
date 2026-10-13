
import Features from "@/components/homes/home/Features";
import Hero from "@/components/franchise/Hero";
import Testimonials from "@/components/homes/home/Testimonials";
import NewsLetter from "@/components/modals/NewsLetter";
import Header from "@/components/headers/Header";
import Footer2 from "@/components/footers/Footer2";
import TopBar from "@/components/headers/TopBar";



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
          
          <Footer2 />
          <NewsLetter />
        </div>
      </div>
    </>
  );
}

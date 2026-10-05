import Topbar1 from "@/components/headers/Topbar1";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import BlogGrids from "@/components/blogs/BlogGrids";
import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import "@/public/css/blogs/blogs.css"
import Partion from "@/components/common/Partion";

export const metadata = {
  title: "Jewellery Guides & Tips | Gold, Diamond & Bridal Jewellery",
  description:
    "Jewellery guides and tips on gold, diamond, bridal jewellery, jewellery designs, gemstones, styling, buying and jewellery care from Lalchnd Jewellers.",
  alternates: {
    canonical: "https://lalchnd.com/blogs/",
  },
};

export default async function Page({ searchParams }) {
  const params = await searchParams;

  const page = Number(params?.page) || 1;

  return (
    <>
      <Topbar1 />
      <Header parentClass="tf-header" />
      <BreadcrumbBanner
        title="Insights & Stories of Lalchnd"
        current="Blogs"
        image="/images/lalchnd/banner/blogs-banner.webp"
      />
      <Partion />
      <BlogGrids page={page} />
      <Footer2 />
    </>
  );
}
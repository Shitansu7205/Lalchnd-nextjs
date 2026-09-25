import Topbar1 from "@/components/headers/Topbar1";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import BlogGrids from "@/components/blogs/BlogGrids";
import Footer2 from "@/components/footers/Footer2";
import Header from "@/components/headers/Header";
import "@/public/css/blogs/blogs.css"

export const metadata = {
  title: "Blogs || Lalchnd Jewellers",
  description:
    "Explore jewellery insights, trends, buying guides and stories from Lalchnd Jewellers.",
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
        image="https://lalchnd.com/wp-content/uploads/2026/03/2560-x-931.jpg.jpeg"
      />
      <BlogGrids page={page} />
      <Footer2 />
    </>
  );
}
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import BlogGrids from "@/components/blogs/BlogGrids";
import Footer2 from "@/components/footers/Footer2";
export const metadata = {
  title: "Blogs || Vemus - Jewelry Ecommerce React Nextjs Template",
  description: "Vemus - Jewelry Ecommerce React Nextjs Template",
};
export default function page() {
  return (
    <>
      <Topbar1 />
      <Header1 parentClass="tf-header" />
      <BreadcrumbBanner
        title="Insights & Stories of Lalchnd"
        current="Blogs"
        image="https://lalchnd.com/wp-content/uploads/2026/03/2560-x-931.jpg.jpeg"
      />
      <BlogGrids />
      <Footer2 />
    </>
  );
}

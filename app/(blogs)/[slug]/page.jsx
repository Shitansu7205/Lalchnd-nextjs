import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import React from "react";
import Link from "next/link";
import BlogDetails from "@/components/blogs/BlogDetails";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import { blogEntries } from "@/data/blogs";
import Footer2 from "@/components/footers/Footer2";
export const metadata = {
  title: "Blog Single || Vemus - Jewelry Ecommerce React Nextjs Template",
  description: "Vemus - Jewelry Ecommerce React Nextjs Template",
};
export default function page({ params }) {
  const blogEntry = blogEntries.find((entry) => entry.slug === params.slug);
  return (
    <>
      <Topbar1 />
      <Header1 parentClass="tf-header" />
      <BreadcrumbBanner
        title={blogEntry?.title || "Blog Details"}
        current="Blogs"
        image={blogEntry?.image?.src || "/images/blog/blog-single-1.jpg"}
      />
      <BlogDetails blogEntry={blogEntry} />
      <Footer2 />
    </>
  );
}

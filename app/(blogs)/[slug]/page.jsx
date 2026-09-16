import Topbar1 from "@/components/headers/Topbar1";
import React from "react";
import BlogSingleComponent from "@/components/blogs/BlogSingleComponent";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import { blogGrids } from "@/data/blogs";
import { blogDetails } from "@/data/blogDetails";
import Footer2 from "@/components/footers/Footer2";
import { notFound } from "next/navigation";
import Header from "@/components/headers/Header";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blogEntry = blogGrids.find(
    (entry) => entry.slug === slug
  );

  if (!blogEntry) {
    return {
      title: "Blog Not Found || Lalchnd Jewellers",
      description: "The requested blog could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${blogEntry.metaTitle || blogEntry.title} || Lalchnd Jewellers`,

    description:
      blogEntry.metaDescription ||
      blogEntry.excerpt ||
      "",

    alternates: {
      canonical:
        blogEntry.canonicalUrl ||
        `https://lalchnd.com/${blogEntry.slug}`,
    },

    robots: blogEntry.metaRobots || "index, follow",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const blogEntry = blogGrids.find(
    (entry) => entry.slug === slug
  );

  const details = blogDetails[slug];

  // console.log("SLUG:", slug);
  // console.log("BLOG ENTRY:", blogEntry);
  // console.log("BLOG DETAILS:", details);

  if (!blogEntry) {
    notFound();
  }

  if (!details) {
    console.log("DETAIL NOT FOUND FOR:", slug);
    notFound();
  }

  const currentIndex = blogGrids.findIndex(
    (entry) => entry.slug === slug
  );

  const previousPost =
    currentIndex > 0
      ? blogGrids[currentIndex - 1]
      : null;

  const nextPost =
    currentIndex < blogGrids.length - 1
      ? blogGrids[currentIndex + 1]
      : null;

  return (
    <>
      <Topbar1 />

      <Header parentClass="tf-header" />

      <BreadcrumbBanner
        title={blogEntry.title}
        current="Blogs"
        image={
          blogEntry.image?.src ||
          "/images/blog/blog-single-1.jpg"
        }
      />

      <BlogSingleComponent
        blogEntry={blogEntry}
        details={details}
        previousPost={previousPost}
        nextPost={nextPost}
      />

      <Footer2 />
    </>
  );
}
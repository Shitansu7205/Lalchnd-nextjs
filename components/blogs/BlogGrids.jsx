import { blogGrids } from "@/data/blogs";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const POSTS_PER_PAGE = 9;

export default function BlogGrids({ page = 1 }) {
  const totalPosts = blogGrids.length;

  const totalPages = Math.ceil(
    totalPosts / POSTS_PER_PAGE
  );

  const currentPage = Math.min(
    Math.max(Number(page) || 1, 1),
    totalPages || 1
  );

  const startIndex =
    (currentPage - 1) * POSTS_PER_PAGE;

  const endIndex =
    startIndex + POSTS_PER_PAGE;

  const currentPosts = blogGrids.slice(
    startIndex,
    endIndex
  );

  const createPageUrl = (pageNumber) => {
    if (pageNumber === 1) {
      return "/blogs";
    }

    return `/blogs?page=${pageNumber}`;
  };

  return (
    <>
      <section className="flat-spacing">
        <div className="container-full-2">
          <div className="row">
            <div className="col-lg-12">
              <div className="tf-grid-layout sm-col-2 lg-col-3">
                {currentPosts.map((entry) => {
                  const HeadingTag =
                    entry.headingLevel || "h4";

                  return (
                    <div
                      className="article-blog hover-img"
                      key={entry.slug}
                    >
                      <div className="entry_image">
                        <Link
                          href={`/${entry.slug}`}
                          className="image img-style blog-image-link"
                        >
                          <Image
                            src={entry.image.src}
                            alt={
                              entry.image.alt ||
                              entry.title
                            }
                            width={
                              entry.image.width ||
                              972
                            }
                            height={
                              entry.image.height ||
                              790
                            }
                            className="blog-grid-image"
                          />
                        </Link>

                        <div className="entry_tag">
                          {entry.tags?.map(
                            (tag) => (
                              <Link
                                key={tag}
                                href={`/${entry.slug}`}
                                className="name-tag text-caption link"
                              >
                                {tag}
                              </Link>
                            )
                          )}
                        </div>
                      </div>

                      <div className="blog-content">
                        <div className="box-title">
                          <ul className="meta-list">
                            <li className="entry_author">
                              <div className="avt">
                                <Image
                                  src={
                                    entry
                                      .author
                                      ?.img ||
                                    "/images/lalchnd/blogs/blog-icons-ava.png"
                                  }
                                  alt={
                                    entry
                                      .author
                                      ?.name ||
                                    "Author"
                                  }
                                  className="lazyload"
                                  width={100}
                                  height={100}
                                />
                              </div>

                              <Link
                                href={`/${entry.slug}`}
                                className="name_author text-main-4 link"
                              >
                                {entry
                                  .author
                                  ?.name ||
                                  "Lalchnd Jewellers"}
                              </Link>
                            </li>

                            <li className="br-line" />

                            <li className="entry_day">
                              <p className="letter-space-0 text-main-4">
                                {entry.date}
                              </p>
                            </li>
                          </ul>

                          <HeadingTag>
                            <Link
                              href={`/${entry.slug}`}
                              className="link fw-medium text-black text-uppercase"
                            >
                              {entry.title}
                            </Link>
                          </HeadingTag>

                          <p
                            className={`text-main-6 ${entry.headingLevel ===
                                "h4"
                                ? "text-line-clamp-2"
                                : ""
                              }`}
                          >
                            {entry.excerpt}
                          </p>
                        </div>

                        <div className="box-btn">
                          <Link
                            href={`/${entry.slug}`}
                            className="tf-btn-line text-uppercase lh-28 fw-normal"
                          >
                            READ MORE
                            <i className="icon-arrow-top-right fs-10" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="wd-full">
                  <div className="wg-pagination">
                    {currentPage > 1 ? (
                      <Link
                        href={createPageUrl(
                          currentPage - 1
                        )}
                        className="tf-btn-line style-line-2"
                      >
                        <span className="text-body">
                          PREV
                        </span>
                      </Link>
                    ) : (
                      <span
                        className="tf-btn-line style-line-2"
                        aria-disabled="true"
                      >
                        <span className="text-body">
                          PREV
                        </span>
                      </span>
                    )}

                    <ul className="pagition-list">
                      {Array.from(
                        {
                          length: totalPages,
                        },
                        (_, index) =>
                          index + 1
                      ).map(
                        (pageNumber) => (
                          <li
                            key={pageNumber}
                          >
                            {pageNumber ===
                              currentPage ? (
                              <p className="pagination-item active">
                                {pageNumber}
                              </p>
                            ) : (
                              <Link
                                href={createPageUrl(
                                  pageNumber
                                )}
                                className="pagination-item link"
                              >
                                {pageNumber}
                              </Link>
                            )}
                          </li>
                        )
                      )}
                    </ul>

                    {currentPage <
                      totalPages ? (
                      <Link
                        href={createPageUrl(
                          currentPage + 1
                        )}
                        className="tf-btn-line style-line-2"
                      >
                        <span className="text-body">
                          NEXT
                        </span>
                      </Link>
                    ) : (
                      <span
                        className="tf-btn-line style-line-2"
                        aria-disabled="true"
                      >
                        <span className="text-body">
                          NEXT
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
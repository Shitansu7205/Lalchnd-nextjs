import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentForm from "./CommentForm";
import { blogGrids } from "@/data/blogs";

export default function BlogSingleComponent({
    blogEntry,
    details,
    previousPost,
    nextPost,
}) {
    if (!blogEntry) {
        return null;
    }

    // Latest 4 posts
    const recentPosts = blogGrids.slice(0, 4);

    return (
        <section className="flat-spacing-14">
            <div className="container-full-2">
                <div className="s-blog-detail align-items-start">
                    <div className="blog-single">
                        <div className="single-wrap flat-spacing-3 pt-0">
                            <div className="box-title">
                                <ul className="entry_meta">
                                    <li>
                                        <span className="icon">
                                            <i className="icon-author" />
                                        </span>

                                        <Link href="#" className="link">
                                            By{" "}
                                            {blogEntry.author?.name ||
                                                "Lalchnd Jewellers"}
                                        </Link>
                                    </li>

                                    <li>
                                        <span className="icon">
                                            <i className="icon-calender" />
                                        </span>

                                        <p>{blogEntry.date}</p>
                                    </li>

                                    <li>
                                        <span className="icon">
                                            <i className="icon-tag" />
                                        </span>

                                        <p className="text-caption">
                                            {blogEntry.tags?.join(", ")}
                                        </p>
                                    </li>

                                    <li>
                                        <span className="icon">
                                            <i className="icon-comment" />
                                        </span>

                                        <p className="text-caption">
                                            No Comment
                                        </p>
                                    </li>
                                </ul>

                                {/* INTRO */}

                                {details?.intro && (
                                    <div className="box-text">
                                        <div
                                            className="text-main-4 text-justify"
                                            dangerouslySetInnerHTML={{
                                                __html: details.intro,
                                            }}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* FEATURED IMAGE */}

                            <div className="entry_image blog-detail-image">
                                <Image
                                    src={
                                        blogEntry.image?.src ||
                                        "/images/blog/blog-single-1.jpg"
                                    }
                                    alt={
                                        blogEntry.image?.alt ||
                                        blogEntry.title
                                    }
                                    className="lazyload"
                                    width={
                                        blogEntry.image?.width || 2176
                                    }
                                    height={
                                        blogEntry.image?.height || 790
                                    }
                                />
                            </div>

                            {/* BLOG CONTENT */}

                            {details?.content && (
                                <div
                                    className="box-text blog-detail-content"
                                    dangerouslySetInnerHTML={{
                                        __html: details.content,
                                    }}
                                />
                            )}

                            {/* BOTTOM */}

                            <div className="bottom">
                                <div className="entry_media">
                                    <ul className="entry_tag">
                                        {blogEntry.tags?.map((tag) => (
                                            <li key={tag}>
                                                <Link
                                                    href="#"
                                                    className="text-caption"
                                                >
                                                    {tag}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="entry_social">
                                        <p>Share:</p>

                                        <ul className="tf-social-icon style-large">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/LalchndJewellersPvtLtd"
                                                    className="social-facebook"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="icon">
                                                        <i className="icon-facebook" />
                                                    </span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="https://www.instagram.com/lalchnd.jewellers/"
                                                    className="social-instagram"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="icon">
                                                        <i className="icon-instagram" />
                                                    </span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="https://www.youtube.com/channel/UCrO61El0o9WsM3fw3r7lolw"
                                                    className="social-youtube"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="YouTube"
                                                >
                                                    <span className="icon">
                                                        <svg
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>


                                        </ul>
                                    </div>
                                </div>

                                {/* PREVIOUS / NEXT */}

                                <div className="related-post post-navigator">
                                    {previousPost ? (
                                        <Link
                                            href={`/${previousPost.slug}`}
                                            className="post prev text-black link"
                                        >
                                            <span className="icon">
                                                <i className="icon-arrow-left" />
                                            </span>

                                            <p className="fw-normal">
                                                PREVIOUS POST
                                            </p>
                                        </Link>
                                    ) : (
                                        <span className="post prev text-black">
                                            <span className="icon">
                                                <i className="icon-arrow-left" />
                                            </span>

                                            <p className="fw-normal">
                                                PREVIOUS POST
                                            </p>
                                        </span>
                                    )}

                                    {nextPost ? (
                                        <Link
                                            href={`/${nextPost.slug}`}
                                            className="post prev text-black link"
                                        >
                                            <p className="fw-normal">
                                                NEXT POST
                                            </p>

                                            <span className="icon">
                                                <i className="icon-arrow-right" />
                                            </span>
                                        </Link>
                                    ) : (
                                        <span className="post prev text-black">
                                            <p className="fw-normal">
                                                NEXT POST
                                            </p>

                                            <span className="icon">
                                                <i className="icon-arrow-right" />
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <CommentForm />
                    </div>

                    {/* SIDEBAR */}

                    <div className="blog-sidebar sidebar-content-wrap d-none d-lg-block sticky-top">
                        <div className="sidebar-item">
                            <div className="sb-author text-center">
                                <div className="entry_author">
                                    <div className="avatar">
                                        <Image
                                            src={
                                                blogEntry.author?.img ||
                                                "/images/lalchnd/blogs/blog-icons-ava.png"
                                            }
                                            alt={
                                                blogEntry.author?.name ||
                                                "Lalchnd Jewellers"
                                            }
                                            className="lazyload"
                                            width={400}
                                            height={400}
                                        />
                                    </div>

                                    <div className="infor">
                                        <p className="name">
                                            Lalchnd Groups
                                        </p>

                                        <p className="duty text-main-4">
                                            {blogEntry.date}
                                        </p>
                                    </div>
                                </div>

                                <ul className="tf-social-icon">
                                    <li>
                                        <a
                                            href="https://www.facebook.com/LalchndJewellersPvtLtd"
                                            className="social-facebook"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="icon">
                                                <i className="icon-facebook" />
                                            </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.instagram.com/lalchnd.jewellers/"
                                            className="social-instagram"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="icon">
                                                <i className="icon-instagram" />
                                            </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.youtube.com/channel/UCrO61El0o9WsM3fw3r7lolw"
                                            className="social-youtube"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="YouTube"
                                        >
                                            <span className="icon">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="sidebar-item">
                            <h5 className="sb-title text-uppercase fw-normal">
                                Categories
                            </h5>

                            <ul className="sb-category">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-main-4 link"
                                    >
                                        {blogEntry.category || "Jewellery"}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div
                            id="widget_recent_post-3"
                            className="widget widget-recent-news"
                        >
                            <h4 className="widget-title">
                                RECENT POSTS
                            </h4>

                            <ul className="recent-news recent-blog-list sb-recent clearfix">
                                {recentPosts.map((post) => (
                                    <li key={post.slug}>
                                        <div className="wg-recent hover-img">
                                            <Link
                                                className="image img-style"
                                                href={`/${post.slug}`}
                                            >
                                                <Image
                                                    src={post.image.src}
                                                    alt={
                                                        post.image.alt ||
                                                        post.title
                                                    }
                                                    width={150}
                                                    height={150}
                                                />
                                            </Link>

                                            <div className="content">
                                                <ul className="entry_meta">
                                                    <li>
                                                        {post.date}
                                                    </li>


                                                </ul>

                                                <Link
                                                    href={`/${post.slug}`}
                                                    className="fw-medium text-uppercase link text-line-clamp-2"
                                                    rel="bookmark"
                                                >
                                                    {post.title}
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="sidebar-item">
                            <h5 className="sb-title text-uppercase fw-normal">
                                tags
                            </h5>

                            <ul className="sb-tag">
                                {blogEntry.tags?.map((tag, index) => (
                                    <React.Fragment key={tag}>
                                        {index > 0 && (
                                            <li>
                                                <span className="text-body text-main-4">
                                                    /
                                                </span>
                                            </li>
                                        )}

                                        <li>
                                            <Link
                                                href="#"
                                                className="text-body text-main-4 link"
                                            >
                                                {tag}
                                            </Link>
                                        </li>
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>

                        {/* RECENT POSTS */}


                    </div>
                </div>
            </div>
        </section>
    );
}
"use client";

import React from "react";
import Link from "next/link";
import {
  CalendarDays,
  ArrowRight,
  RefreshCcw,
  Gem,
  Gift,
  HandHeart,
} from "lucide-react";

const schemesData = [
  {
    id: 1,
    category: "MONTHLY SAVINGS PLAN",
    title: "Sone Pe Suhaga",
    description:
      "Put aside a little each month for 11 months, then pick the jewellery you love and pay less on making charges. No rush, no big one-time payment.",
    image:
      "/images/OurSchemes/mangalsutra.webp",
    icon: CalendarDays,
    url: "/sone-pe-suhaga",
  },
  
];

export default function OurSchemes() {
  return (
    <>
  <link
    rel="stylesheet"
    href="/css/schemes-section/schemesSection.css"
  />

  <section className="section-padding-bottom-40 section-padding-top-40 bg-white bg-transparent-svg1">
    <div className="container-full-2">

      {/* Schemes Grid */}
      <div className="schemesGrid">
        {schemesData.map((scheme) => {
          const Icon = scheme.icon;

          return (
            <Link
              href={scheme.url}
              className="schemeCard"
              key={scheme.id}
            >
              {/* Image */}
              <div className="imageWrapper">
                <img
                  src={scheme.image}
                  alt={scheme.title}
                  className="schemeImage"
                />

                <div className="imageOverlay"></div>
              </div>

              {/* Content */}
              <div className="schemeContent">

                {/* Icon */}
                <div className="iconBox">
                  <Icon
                    size={24}
                    strokeWidth={1.4}
                  />
                </div>

                {/* Category */}
                <span className="category sub-title">
                  {scheme.category}
                </span>

                {/* Title */}
                <h3 className="schemeTitle">
                  {scheme.title}
                </h3>

                {/* Gold Line */}
                <div className="goldLine"></div>

                {/* Description */}
                <p className="description sub-title">
                  {scheme.description}
                </p>

                {/* Button */}
                <span className="viewDetails sub-title">
                   Know More
                  <ArrowRight
                    size={17}
                    strokeWidth={1.5}
                  />
                </span>

                {/* Decorative Element */}
                <span className="decorativeLeaf">
                  ✧
                </span>

              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="bottomCta">

        <div className="ctaDecoration">
          <HandHeart size={28} strokeWidth={1.3} />
        </div>

        <div className="ctaContent">

          <span className="ctaSmallTitle sub-title">
           WE ARE HERE TO HELP
          </span>

          <h2>
             Let Us Find the Right Scheme for You
          </h2>

          <p className="sub-title">
             Tell us what you are saving for, a wedding, a festival or a gift, and we will help you pick the one that fits.
          </p>

        </div>

        <Link
          href="/contact"
          className="home-cta-btn tf-btn btn-fill animate-btn type-large"
        >
          Talk to Us

          <ArrowRight size={17} />
        </Link>

      </div>

    </div>
  </section>
</>
  );
}
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
    category: "MONTHLY INSTALMENT",
    title: "Monthly Instalment Scheme",
    description:
      "Turn your dreams into timeless jewellery with our easy monthly instalment plan. Make your favourite pieces yours, without the wait.",
    image:
      "/images/OurSchemes/mangalsutra.webp",
    icon: CalendarDays,
    url: "#",
  },
  {
    id: 2,
    category: "GOLD EXCHANGE",
    title: "Gold Exchange Scheme",
    description:
      "Upgrade your old gold and get the best value towards your new jewellery collection.",
    image:
      "/images/OurSchemes/earrings.webp",
    icon: RefreshCcw,
    url: "#",
  },
  {
    id: 3,
    category: "DIAMOND PURCHASE",
    title: "Diamond Purchase Scheme",
    description:
      "Step into a world of brilliance with our exclusive diamond jewellery scheme designed for your special moments.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85",
    icon: Gem,
    url: "#",
  },
  {
    id: 4,
    category: "SPECIAL OFFERS",
    title: "Special Offers",
    description:
      "Enjoy limited-time offers and exclusive benefits on your favourite jewellery pieces.",
    image:
      "/images/OurSchemes/bracelet.webp",
    icon: Gift,
    url: "#",
  },
];

export default function OurSchemes() {
  return (
    <>
  <link
    rel="stylesheet"
    href="/css/schemes-section/schemesSection.css"
  />

  <section className="section-padding-bottom-40 section-padding-top-40 bg-white">
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
                  View Details
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
            YOUR SPECIAL MOMENTS, OUR PRIORITY
          </span>

          <h2>
            Find the Perfect Scheme for You
          </h2>

          <p className="sub-title">
            Because every moment deserves a little more sparkle.
          </p>

        </div>

        <Link
          href="/contact"
          className="home-cta-btn tf-btn btn-fill animate-btn type-large"
        >
          Contact Us
          <ArrowRight size={17} />
        </Link>

      </div>

    </div>
  </section>
</>
  );
}
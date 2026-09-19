"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { jewelleryLocations } from "@/data/products";

export default function JewelleryLocations() {
  return (
    <section className="jewellery-location-section flat-spacing">
      <div className="jewellery-location-container">
        <div className="jewellery-location-content">

          <div className="pb-4">
            <h6 className="short-line-heding-dark">Attractve jewellery Found Here</h6>
              <h2 className="heading-font pb-2">
                Lalchnd in Your <span className="highlight-font">City</span>
              </h2>

         <p className="sub-title jewellery-location-description">
                Discover exquisite jewelry pieces at unbeatable prices. With our <br />
                limited-time offer, every second counts—shop now before the
                timer runs out!
              </p>
          </div>

          <div className="jewellery-location-list">
            {jewelleryLocations.map((location) => (
              <Link
                href={location.link}
                className="jewellery-location-item"
                 target="_blank"
                key={location.id}
              >
                <div className="jewellery-location-image">
                  <Image
                    src={location.image}
                    alt={location.name}
                    width={100}
                    height={100}
                  />
                </div>

                <h3>{location.name}</h3>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
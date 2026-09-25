"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { storeLocations } from "@/data/storeDetails";

export default function Store() {
    return (
        <section className="stores-section section-padding-bottom-40">
            <div className="container-full-2">
                <div className="sect-border border-0">
                    <div className="sect-head wow fadeInUp">
                        <h2 className="s-title font-2 text-capitalize">
                            <span className="fst-italic">Visit Our</span>  Exclusive Showrooms
                        </h2>
                    </div>
                </div>
                <div className="stores-grid">
                    {storeLocations.map((store) => (
                        <article className="cls_videoV01 hover-img3" key={store.title}>
                            <div className="img-style3">
                                <Image
                                    className="store-image"
                                    src={store.image}
                                    alt={`${store.title} Lalchnd Jewellers showroom`}
                                    fill
                                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                                />
                            </div>

                            <div className="cls-content">
                                <div className="store-content">
                                    <span className="store-city">{store.city}</span>
                                    <Link href={store.url} className="store-name h4 fw-normal link text-white">
                                        {store.title}
                                    </Link>
                                    <div className="store-meta">
                                        <span>
                                            <MapPin size={14} strokeWidth={1.8} />
                                            {store.location}
                                        </span>
                                        <a href={`tel:${store.phone.replace(/[^\d+]/g, "")}`}>
                                            <Phone size={14} strokeWidth={1.8} />
                                            {store.phone}
                                        </a>
                                    </div>
                                </div>
                                <Link href={store.url} className="store-view-more link text-white">
                                    View More
                                    <ArrowUpRight size={15} strokeWidth={1.8} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

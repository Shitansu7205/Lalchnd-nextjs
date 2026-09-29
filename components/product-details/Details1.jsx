"use client";
import React, { useState } from "react";
import Slider1 from "./sliders/Slider1";
import ProgressBarComponent from "../common/Progressbar";
import Image from "next/image";
import Link from "next/link";
import BoughtTogther from "./BoughtTogther";
import ColorSelect from "./ColorSelect";
import { useContextElement } from "@/context/Context";
import QuantitySelect from "../common/QuantitySelect";
import AddtoWishlist from "../common/AddtoWishlist";
import AddtoCompare from "../common/AddtoCompare";
import SizePicker from "./SizeSelect";
import HomeButton from "../common/HomeButton";
import { Home, ChevronRight } from "lucide-react";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  Share2,
} from "lucide-react";
import ButtomBorder from "../common/ButtomBorder";
import HomeOnlyButton from "../common/HomeOnlyButton";
export default function Details1({ product }) {
  const [activeColor, setActiveColor] = useState("gold");
  const getAttributeValue = (name) => {
    return (
      product.attributes
        ?.find(
          (attribute) =>
            attribute.name?.toLowerCase() === name.toLowerCase()
        )
        ?.terms?.map((term) => term.name)
        .join(", ") || ""
    );
  };
  const formatIndianPrice = (price) => {
    if (!price) return "0";

    return Number(price).toLocaleString("en-IN");
  };

  // Inside your existing product detail component:
  const [openSections, setOpenSections] = useState({
    description: false,
    specification: true,
    metals: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderAccordion = (id, title, content) => {
    const isOpen = openSections[id];

    return (
      <div className={`lalchnd-accordion-item ${isOpen ? "active" : ""}`}>
        <button
          type="button"
          className="lalchnd-accordion-header"
          onClick={() => toggleSection(id)}
          aria-expanded={isOpen}
          aria-controls={`panel-${id}`}
        >
          <span>{title}</span>
          <span className="lalchnd-accordion-icon">
            {isOpen ? "−" : "+"}
          </span>
        </button>

        <div
          id={`panel-${id}`}
          className="lalchnd-accordion-panel"
          aria-hidden={!isOpen}
        >
          <div className="lalchnd-accordion-inner">
            {content}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <section className="themesFlat section-padding-bottom-40 bg-transparent-svg2">
        <div className="tf-main-product section-image-zoom">
          <div className="container-full-2">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-md-4">
                <div className="tf-product-media-wrap sticky-top">
                  <div className="thumbs-slider">
                    <Slider1
                      // firstItem={product.images[0].src}
                      images={product.images}
                      activeColor={activeColor}
                      setActiveColor={setActiveColor}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="tf-product-info-wrap">
                  <div className="tf-zoom-main sticky-top" />
                  <div className="tf-product-info-list other-image-zoom">
                    <div className="lalchnd-product-info">
                      <div className="page-title border-0 mb-3">
                        <div className="breadcrumbs">
                          <ul className="bread-wrap mb-0 d-flex align-items-center">
                            {/* Home */}
                            <li className="font-size-mobile-11">
                              <Link
                                href="/"
                                className="text-main-4 link d-flex align-items-center gap-1"
                              >
                                <Home size={14} strokeWidth={1.7} />
                                <span>Home</span>
                              </Link>
                            </li>

                            {/* Separator */}
                            <li className="d-flex align-items-center mx-1">
                              <ChevronRight size={14} strokeWidth={1.5} />
                            </li>

                            {/* Products */}
                            <li className="font-size-mobile-11">
                              <Link
                                href="/products"
                                className="text-main-4 link"
                              >
                                Products
                              </Link>
                            </li>

                            {/* Separator */}
                            <li className="d-flex align-items-center mx-1">
                              <ChevronRight size={14} strokeWidth={1.5} />
                            </li>

                            {/* Current Product */}
                            <li className="font-size-mobile-11">
                              <p className="mb-0">
                                {product.name}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Rating */}
                      <div className="lalchnd-product-rating">
                        <ul className="product-info-rate rate-wrap mb-0">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <li key={star}>
                              <i
                                className="icon-star"
                                style={{ color: "#C9A227" }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Product Name + Share */}
                      <div className="lalchnd-product-title-row">
                        <h3 className="product-info-name fw-normal mb-0">
                          {product.name}
                        </h3>

                        <div className="lalchnd-product-share">
                          <span className="lalchnd-share-label">
                            Share
                          </span>

                          {/* WhatsApp */}
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();

                              const message = `${product.name} - ${window.location.href}`;

                              window.open(
                                `https://wa.me/?text=${encodeURIComponent(message)}`,
                                "_blank",
                                "noopener,noreferrer"
                              );
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lalchnd-share-icon"
                            aria-label="Share on WhatsApp"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="16"
                              height="16"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.56 0 .25 5.31.25 11.83c0 2.08.54 4.11 1.57 5.9L.15 24l6.43-1.64a11.8 11.8 0 0 0 5.5 1.4h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.4-8.45ZM12.09 21.75h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.82.98 1.02-3.72-.23-.38a9.83 9.83 0 0 1-1.5-5.22C2.17 6.4 6.61 1.96 12.08 1.96c2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.44 9.91-9.9 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                            </svg>
                          </a>

                          {/* Facebook */}
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                              window.location.href
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lalchnd-share-icon"
                            aria-label="Share on Facebook"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="16"
                              height="16"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M13.5 22v-8h2.75l.41-3h-3.16V9.08c0-.87.24-1.46 1.5-1.46h1.6V4.94c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.06V11H7.65v3h2.65v8h3.2Z" />
                            </svg>
                          </a>

                          {/* Telegram */}
                          <a
                            href={`https://t.me/share/url?url=${encodeURIComponent(
                              window.location.href
                            )}&text=${encodeURIComponent(product.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lalchnd-share-icon"
                            aria-label="Share on Telegram"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="16"
                              height="16"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M21.9 3.1 2.72 10.5c-1.31.53-1.3 1.26-.24 1.58l4.92 1.54 1.9 5.86c.23.64.12.9.78.9.51 0 .74-.23 1.03-.51l2.4-2.33 4.99 3.68c.92.51 1.58.24 1.81-.85l3.27-15.4c.34-1.35-.52-1.96-1.68-1.36Zm-3.57 4.94-8.2 7.3-.32 3.05-1.55-4.8 9.47-5.95c.42-.26.8-.08.6.4Z" />
                            </svg>
                          </a>

                          {/* Copy Link */}
                          <button
                            type="button"
                            className="lalchnd-share-icon"
                            aria-label="Copy product link"
                            onClick={() => {
                              navigator.clipboard.writeText(window.location.href);
                              toast.success("Product link copied!");
                            }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="16"
                              height="16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M10 13a5 5 0 0 0 7.07.07l2-2a5 5 0 0 0-7.07-7.07l-1.15 1.15" />
                              <path d="M14 11a5 5 0 0 0-7.07-.07l-2 2A5 5 0 0 0 7 20l1.15-1.15" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Product Code */}
                      <div className="lalchnd-product-code">
                        {/* <span className="lalchnd-code-label">
                          Product Code:
                        </span> */}

                        <span className="lalchnd-code-value">
                          {getAttributeValue("Product Code") || "—"}
                        </span>

                        {getAttributeValue("Product Code") && (
                          <button
                            type="button"
                            className="lalchnd-copy-code"
                            onClick={() =>
                              navigator.clipboard.writeText(
                                getAttributeValue("Product Code")
                              )
                            }
                            aria-label="Copy product code"
                          >
                            <i className="icon-clip-board" />
                          </button>
                        )}
                      </div>

                      {/* Description */}
                      <div className="lalchnd-product-description">
                        <p
                          className="product-infor-sub mb-0"
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                        />
                      </div>


                      {/* Description */}
                      <div className="lalchnd-product-description">
                        <p className="product-infor-sub mb-0" style={{ color: "#e4562e" }}>
                          {getAttributeValue("Purity") || "—"}{" "}
                          {getAttributeValue("Color") || ""}{" "}
                          |{" "}
                          {getAttributeValue("Gross Weight (Grs)") || "—"}  Gross wt.
                        </p>
                      </div>

                      <div className="d-flex flex-row justify-content-between align-items-center">
                        {/* Price */}
                        <div className="lalchnd-product-price">
                          <div className="price-wrap">
                            <span className="price-new price-on-sale h4 mb-0">
                              ₹{formatIndianPrice(product.prices.price)} <span className="lalchnd-code-label" style={{ fontSize: "16px", color: "#6c6969" }}>
                                (Approx)
                              </span>
                            </span>
                          </div>
                        </div>

                        {/* Stock */}
                        <div className="lalchnd-product-stock">
                          <h6 className="text-hurry-up fw-normal mb-2">
                            In stock
                          </h6>

                          <div className="progress-cart">
                            <ProgressBarComponent max={70} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lalchnd-product-actions">
                      <HomeButton
                        href="#additional-information"
                        className="type-large"
                      >
                        View More
                      </HomeButton>

                      <ButtomBorder
                        href="#askQuestions"
                        data-bs-toggle="offcanvas"
                        className="type-large border-1 btn-blue"
                      >
                        Enquire Now
                      </ButtomBorder>
                    </div>

      

                    <div className="tf-product-info-extra-link">
                      <div className="extra-link-divider" />

                      <div className="extra-link-items">
                        <a
                          href="#whyLalchnd"
                          data-bs-toggle="offcanvas"
                          className="product-extra-icon link text-caption"
                        >
                          <i className="icon icon-description fs-14" />
                          <span>Why Choose Lalchnd</span>
                        </a>

                        <a
                          href="/privacy-policy"
                          className="product-extra-icon link text-caption"
                        >
                          <i className="icon icon-delivery-2 fs-20" />
                          <span>Lalchnd Policy</span>
                        </a>
                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="additional-information"
        className="lalchnd-details-section"
      >
        <div className="container-full-2">
          <div className="row" style={{ justifyContent: "center" }}>
            {/* LEFT SIDE - IMAGE */}
            <div className="col-md-4">
              <div className="lalchnd-details-image">
                <img
                  src={
                    product.images?.[3]?.src ||
                    product.images?.[2]?.src ||
                    "/images/lalchnd/home/model-5.webp"
                  }
                  alt={product.name}
                />
              </div>
            </div>
            {/* RIGHT SIDE - PRODUCT DETAILS */}
            <div className="col-lg-5">
              <div className="lalchnd-details-content">
                <h3 className="product-info-name fw-normal mb-0">
                  {product.name}
                </h3>

                <div className="lalchnd-accordion">

                  {/* PRODUCT DESCRIPTION */}
                  {renderAccordion(
                    "description",
                    "Product Description",
                    <div className="lalchnd-description-content">
                      {product?.description ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                        />
                      ) : (
                        <p>Product description is not available.</p>
                      )}
                    </div>
                  )}

                  {/* PRODUCT SPECIFICATION */}
                  {renderAccordion(
                    "specification",
                    "Product Specification",
                    <div className="table-responsive">
                      <table className="lalchnd-product-spec-table mb-0">
                        <tbody>
                          {[
                            ["Color", getAttributeValue("Color")],
                            ["Size", getAttributeValue("Size") || "Free Size"],
                            ["Gender", getAttributeValue("Gender")],
                            ["Occasion", getAttributeValue("Occasion")],
                            ["Product Code", getAttributeValue("Product Code")],
                            ["Stone", getAttributeValue("Stone")],
                          ].map(([label, value]) => (
                            <tr key={label}>
                              <td>{label}</td>
                              <td>{value || "—"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* METALS */}
                  {renderAccordion(
                    "metals",
                    "Metals",
                    <div className="lalchnd-metals-content">
                      <p>
                        <strong>Material:</strong>{" "}
                        {getAttributeValue("Metal") || "—"}
                      </p>
                      <p>
                        <strong>Purity:</strong>{" "}
                        {getAttributeValue("Purity") || "—"}
                      </p>
                      <p>
                        <strong>Gross Weight:</strong>{" "}
                        {getAttributeValue("Gross Weight (Grs)") || "—"}
                      </p>
                      <p>
                        <strong>Net Weight:</strong>{" "}
                        {getAttributeValue("Net Weight (Net)") || "—"}
                      </p>
                    </div>
                  )}

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

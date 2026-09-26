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
  return (
    <section className="themesFlat section-padding-bottom-40">
      <div className="tf-main-product section-image-zoom">
        <div className="container-full-2">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-md-5">
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
                  <div className="tf-product-info-heading">
                    <ul className="product-info-rate rate-wrap">
                      <li>
                        <i className="icon-star" style={{ color: "#C9A227" }} />
                      </li>
                      <li>
                        <i className="icon-star" style={{ color: "#C9A227" }} />
                      </li>
                      <li>
                        <i className="icon-star" style={{ color: "#C9A227" }} />
                      </li>
                      <li>
                        <i className="icon-star" style={{ color: "#C9A227" }} />
                      </li>
                      <li>
                        <i className="icon-star" style={{ color: "#C9A227" }} />
                      </li>
                    </ul>
                    <h3 className="product-info-name fw-normal">
                      {product.name}
                    </h3>
                    <div className="product-info-price">
                      <div className="price-wrap">
                        <span className="price-new price-on-sale h4">
                          ₹{product.prices.price}
                        </span>
                      </div>
                    </div>
                    <p
                      className="product-infor-sub h6 fw-normal "
                      dangerouslySetInnerHTML={{
                        __html: product.description,
                      }}
                    />
                    <div className="product-info-progress-sale">
                      <h6 className="text-hurry-up fw-normal">
                        In stock
                      </h6>
                      <div className="progress-cart">
                        <ProgressBarComponent max={70} />
                      </div>
                    </div>
                  </div>
                  <div className="tf-product-info-variant product-specs-grid">

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Material
                      </div>
                      <span className="variant-picker-label-value">
                        {getAttributeValue("Metal") || "—"}
                      </span>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Color
                      </div>
                      <span className="variant-picker-label-value">
                        {getAttributeValue("Color") || "—"}
                      </span>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Size
                      </div>
                      <span className="variant-picker-label-value">
                        {getAttributeValue("Size") || "—"}
                      </span>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Purity
                      </div>
                      <span className="variant-picker-label-value">
                        {getAttributeValue("Purity") || "—"}
                      </span>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Gender
                      </div>
                      <span className="variant-picker-label-value">
                        {getAttributeValue("Gender") || "—"}
                      </span>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Occasion
                      </div>
                      <span className="variant-picker-label-value">
                        {getAttributeValue("Occasion") || "—"}
                      </span>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Product Code
                      </div>
                      <span className="variant-picker-label-value">
                        {getAttributeValue("Product Code") || "—"}
                      </span>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Gross Weight
                      </div>
                      <span className="variant-picker-label-value">
                        {getAttributeValue("Gross Weight (Grs)") || "—"}
                      </span>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Net Weight
                      </div>
                      <span className="variant-picker-label-value">
                        {getAttributeValue("Net Weight (Net)") || "—"}
                      </span>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Stone
                      </div>
                      <span className="variant-picker-label-value">
                        {getAttributeValue("Stone") || "—"}
                      </span>
                    </div>

                  </div>
                  <div
                    className="tf-product-info-heading"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <HomeButton
                      href="/products?metal=silver"
                      className="type-large"
                    >
                      Shop Now
                    </HomeButton>

                    {/* <HomeButton
                      href="/products?metal=silver"
                      className="type-large"
                    >
                      Find Near Store
                    </HomeButton> */}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

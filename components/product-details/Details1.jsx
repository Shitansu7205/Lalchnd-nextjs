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
    <section className="themesFlat">
      <div className="tf-main-product section-image-zoom">
        <div className="container-full-2">
          <div className="row">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <div className="tf-product-info-wrap">
                <div className="tf-zoom-main sticky-top" />
                <div className="tf-product-info-list other-image-zoom">
                  <div className="tf-product-info-heading">
                    <ul className="product-info-rate rate-wrap">
                      <li>
                        <i className="icon-star" />
                      </li>
                      <li>
                        <i className="icon-star" />
                      </li>
                      <li>
                        <i className="icon-star" />
                      </li>
                      <li>
                        <i className="icon-star" />
                      </li>
                      <li>
                        <i className="icon-star" />
                      </li>
                    </ul>
                    <h3 className="product-info-name fw-normal">
                      {product.name}
                    </h3>
                    <div className="product-info-price">
                      <div className="price-wrap">
                        <span className="price-new price-on-sale h4">
                          ₹{product.prices.price}     {/* Size */}
                          <div className="variant-picker-item">
                            <div className="variant-picker-label h6 fw-normal">
                              Size:{" "}
                              <span className="variant-picker-label-value">
                                {product.attributes
                                  ?.find((attr) => attr.name === "Size")
                                  ?.terms?.map((term) => term.name)
                                  .join(", ")}
                              </span>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <p className="product-infor-sub h6 fw-normal text-main-4">
                      {product.description}
                    </p>
                    <div className="product-info-progress-sale">
                      <h6 className="text-hurry-up fw-normal">
                        In stock
                      </h6>
                      <div className="progress-cart">
                        <ProgressBarComponent max={70} />
                      </div>
                    </div>
                  </div>
                  <div className="tf-product-info-variant">

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Material:{" "}
                        <span className="variant-picker-label-value">
                          {getAttributeValue("Metal")}
                        </span>
                      </div>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Color:{" "}
                        <span className="variant-picker-label-value">
                          {getAttributeValue("Color")}
                        </span>
                      </div>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Size:{" "}
                        <span className="variant-picker-label-value">
                          {getAttributeValue("Size")}
                        </span>
                      </div>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Purity:{" "}
                        <span className="variant-picker-label-value">
                          {getAttributeValue("Purity")}
                        </span>
                      </div>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Gender:{" "}
                        <span className="variant-picker-label-value">
                          {getAttributeValue("Gender")}
                        </span>
                      </div>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Occasion:{" "}
                        <span className="variant-picker-label-value">
                          {getAttributeValue("Occasion")}
                        </span>
                      </div>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Product Code:{" "}
                        <span className="variant-picker-label-value">
                          {getAttributeValue("Code")}
                        </span>
                      </div>
                    </div>

                    <div className="variant-picker-item">
                      <div className="variant-picker-label h6 fw-normal">
                        Weight:{" "}
                        <span className="variant-picker-label-value">
                          {getAttributeValue("Weight")} g
                        </span>
                      </div>
                    </div>

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

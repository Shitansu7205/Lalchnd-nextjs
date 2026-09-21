
"use client";
import { secondSliderData } from "@/data/heroSlides";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function ImageSection() {
  const slide = secondSliderData[0];
  
  return (
    <div className="tf-slideshow">
      {" "}
      <div className="slider_wrap" style={{ height: "auto" }}>
        {" "}
        <div className="sld-image">
          {" "}
          <Image
            src={slide.image}
            alt=""
            className="lazyload"
            width={slide.imageWidth}
            height={slide.imageHeight}
            style={{ width: "100%", height: "auto", display: "block" }}
          />{" "}
        </div>{" "}
        <div className="sld-content">
          {" "}
          <div className="container">
            {" "}
            <div className="content-sld text-center wow fadeInUp">
              {" "}
              <p className="title-sld-2 font-2 fade-item fade-item-1">
                {" "}
                <span className="fst-italic">{slide.titleItalic}</span>{" "}
                {slide.titleRest}{" "}
              </p>{" "}
              <div className="fade-item fade-item-2">
                {" "}
               
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

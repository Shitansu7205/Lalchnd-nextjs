"use client";
import { collectionsMedia } from "@/data/collections";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GalleryGridPopup() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedImage]);

  return (
    <div className="section-padding-bottom-40 section-padding-top-40">
      <div className="container-full-2">
        <div className="gallery-grid-popup__grid">
          {collectionsMedia.map((item, index) => (
            <div className="gallery-grid-popup__item" key={index}>
              <button
                type="button"
                aria-label={`View gallery image ${index + 1}`}
                onClick={() => setSelectedImage(item.image)}
                className="gallery-grid-popup__trigger wg-cls hover-img wow fadeInUp"
                {...(item.delay ? { "data-wow-delay": item.delay } : {})}
              >
                <div className="image img-style">
                  <Image
                    src={item.image}
                    alt={item.title || `Gallery image ${index + 1}`}
                    className="lazyload"
                    width={915}
                    height={150}
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="modal modalCentered fade show gallery-grid-popup__modal"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          style={{ display: "block" }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-content gallery-grid-popup__modal-content">
              <button
                type="button"
                className="icon-close-popup"
                aria-label="Close image preview"
                onClick={() => setSelectedImage(null)}
              >
                <i className="icon-close" />
              </button>
              <div className="modal-body p-0">
                <Image
                  src={selectedImage}
                  alt="Gallery preview"
                  width={1200}
                  height={1600}
                  sizes="(max-width: 991px) 92vw, 1100px"
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "88vh",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

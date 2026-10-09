"use client";

import { useState } from "react";
import { testimonialsTwo } from "@/data/testimonials";

function LotusDecoration({ side }) {
  const isLeft = side === "left";

  return (
    <svg
      className={`testimonial-lotus testimonial-lotus-${side}`}
      viewBox="0 0 280 480"
      fill="none"
      aria-hidden="true"
    >
      <g
        transform={isLeft ? undefined : "translate(280 0) scale(-1 1)"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M-40 330 C35 280 48 170 98 110 C95 200 75 270 -40 330Z" />
        <path d="M-20 340 C65 300 100 210 165 185 C145 255 90 320 -20 340Z" />
        <path d="M-30 340 C45 365 130 335 210 285 C160 355 65 390 -30 340Z" />
        <path d="M-10 345 C70 390 145 405 220 385 C160 425 60 415 -10 345Z" />
        <path d="M20 320 C55 285 75 235 98 160" />
        <path d="M10 345 C75 325 120 270 155 210" />
        <path d="M0 350 C70 370 135 345 195 300" />
        <path d="M-30 100 C50 125 80 180 80 225" />
        <path d="M-20 410 C45 450 105 445 150 430" />
        <path d="M85 110 C115 75 150 80 175 45" />
        <path d="M-5 455 C60 470 105 455 145 430" />
        <circle cx="88" cy="110" r="4" fill="currentColor" />
      </g>
    </svg>
  );
}

export default function TestimonialsTwo() {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonialsTwo.length) return null;

  const current = testimonialsTwo[activeIndex];

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonialsTwo.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === testimonialsTwo.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
    <link rel="stylesheet" href="/css/Testimonials/testimonials.css" />
    <section className="testimonial-section">
       

      <div className="testimonial-container">
        <header className="testimonial-heading">
          <span className="text-uppercase short-line-heding" style={{ color: "#06273F" }}>
            Testimonials
          </span>

          <h2 className="title heading-font fw-normal">What They <span className="highlight-font">Say</span></h2>

          
        </header>

        <div className="testimonial-slider">
          <button
            className="testimonial-arrow testimonial-prev"
            onClick={prevSlide}
            type="button"
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 5L8 12L15 19"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <article className="testimonial-card" key={current.id}>
           

            <div className="testimonial-review">
              <span
                className="testimonial-quote testimonial-quote-open"
                aria-hidden="true"
              >
                “
              </span>

              <p>{current.review}</p>

              <span
                className="testimonial-quote testimonial-quote-close"
                aria-hidden="true"
              >
                ”
              </span>
            </div>

            <h3 className="testimonial-name">{current.name}</h3>

            <div
              className="testimonial-stars"
              role="img"
              aria-label={`${current.rating} out of 5 stars`}
            >
              {"★".repeat(
                Math.max(0, Math.min(5, current.rating))
              )}
            </div>
          </article>

          <button
            className="testimonial-arrow testimonial-next"
            onClick={nextSlide}
            type="button"
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 5L16 12L9 19"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div
          className="testimonial-dots"
          aria-label="Choose a testimonial"
        >
          {testimonialsTwo.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`testimonial-dot ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={
                activeIndex === index ? "true" : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
"use client";

import React from "react";
import { boxFeatures } from "@/data/features";

export default function Features() {
  return (
    <section className="lalchnd-promises">
      <div className="container-full-2">
        <div className="lalchnd-promises-heading">
          <h2 className="title heading-font fw-normal" >
            The Lalchnd <span className="highlight-font">     Promises</span>
          </h2>
        </div>

        <div className="lalchnd-promises-grid">
          {boxFeatures.map((item, index) => (
            <div
              className="lalchnd-promise-item wow fadeInUp"
              key={index}
              {...(item.delay && {
                "data-wow-delay": item.delay,
              })}
            >
              <div className="lalchnd-promise-icon">
                <img
                  src={item.image}
                  alt={item.title}
                  width="80"
                  height="80"
                />
              </div>

              <div className="lalchnd-promise-content">
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
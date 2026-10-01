
"use client";

import { Gem, Sparkles } from "lucide-react";
import Image from "next/image";
import "@/public/css/LoadingSpinner.css";

export default function LoadingSpinner({
  label = "Loading products...",
  className = "",
}) {
  return (
    <div
      className={`lalchnd-loader ${className}`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="lalchnd-loader-content">

        {/* Animated Jewellery Icon */}
        <div className="jewellery-loader">
          <div className="jewellery-orbit jewellery-orbit-one" />
          <div className="jewellery-orbit jewellery-orbit-two" />

          <Sparkles className="jewellery-sparkle sparkle-one" />
          <Sparkles className="jewellery-sparkle sparkle-two" />

          <div className="jewellery-gem">
            <Gem size={46} strokeWidth={1.2} />
          </div>
        </div>

        {/* Loading Text */}
        <p className="lalchnd-loader-label">{label}</p>

        <div className="lalchnd-loader-divider">
          <span />
          <Gem size={14} strokeWidth={1.4} />
          <span />
        </div>
      </div>
    </div>
  );
}
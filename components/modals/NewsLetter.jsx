"use client";

import React, { useState } from "react";
import { X, Phone } from "lucide-react";

export default function FloatingActions() {
  const [showGoldRate, setShowGoldRate] = useState(false);

  return (
    <div className="lalchnd-floating-actions">

      {/* GOLD RATE POPUP */}
      {showGoldRate && (
        <div className="lalchnd-gold-popup">

          <button
            type="button"
            className="lalchnd-gold-close"
            onClick={() => setShowGoldRate(false)}
            aria-label="Close gold rate"
          >
            <X size={19} strokeWidth={1.5} />
          </button>

          <p className="lalchnd-gold-rate">
            Today's Gold Rate is Rs.14270 per gm (22kt).
          </p>

          <p className="lalchnd-gold-updated">
            Last updated on 21/09/2026 05:00 PM
          </p>

          <h4>✨ Special Offers</h4>

          <p>💎 Up to 30% off on diamond value*</p>

          <p>
            💰 Up to 20% off on gold jewellery making charges*
          </p>

          <p>
            🔒 Double Gold Rate Protection : Pay 25% advance and lock the
            gold rate. If price rises, pay the locked rate. If price reduces,
            pay the reduced rate.*
          </p>

          <p>
            ♻️ 0% DEDUCTION ON OLD GOLD on any karat*
          </p>

          <p>
            ⏳ Limited time only. *T&C Apply
          </p>
        </div>
      )}

      {/* GOLD RATE */}
      <button
        type="button"
        className="lalchnd-floating-button lalchnd-gold-button"
        onClick={() => setShowGoldRate((prev) => !prev)}
        aria-label="Today's gold rate"
      >
        <span className="lalchnd-floating-icon">
          <span className="lalchnd-gold-bars">▰</span>
          <span className="lalchnd-gold-spark">✦</span>
        </span>

        <span className="lalchnd-floating-tooltip">
          Today's gold rate
        </span>
      </button>

      {/* CALL */}
      <a
        href="tel:+919999999999"
        className="lalchnd-floating-button lalchnd-call-button"
        aria-label="Call us"
      >
        <Phone size={27} strokeWidth={1.8} />

        <span className="lalchnd-floating-tooltip">
          Call us
        </span>
      </a>

    </div>
  );
}
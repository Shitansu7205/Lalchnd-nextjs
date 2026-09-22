"use client";

import React, { useState } from "react";
import { X, Phone } from "lucide-react";

export default function FloatingActions() {
    const [showGoldRate, setShowGoldRate] = useState(false);
    const updatedAt = new Date();

    const formattedDate = updatedAt.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    return (
        <div className="lalchnd-floating-actions">

            {/* GOLD POPUP */}
            {showGoldRate && (
                <div className="lalchnd-gold-popup">
                    <button
                        type="button"
                        className="lalchnd-gold-close"
                        onClick={() => setShowGoldRate(false)}
                        aria-label="Close"
                    >
                        <X />
                    </button>

                    <p className="lalchnd-gold-rate">
                        Today's Gold Rate: ₹14,270/gm (22KT)
                    </p>

                    <p className="lalchnd-gold-updated">
                        Updated: {formattedDate}
                    </p>

                    <h4>✨ Special Offers</h4>

                    <p>💎 Up to 30% off on diamond value*</p>
                    <p>💰 Up to 20% off on gold making charges*</p>
                    <p>🔒 Lock gold rate with 25% advance*</p>
                    <p>♻️ 0% deduction on old gold*</p>
                    <p>⏳ Limited time only. *T&C Apply</p>
                </div>
            )}

            {/* GOLD RATE */}
            <div className="lalchnd-gold-label">

                <span className="lalchnd-gold-label-text">
                    Today's gold rate
                </span>

                <button
                    type="button"
                    className="lalchnd-floating-button lalchnd-gold-button"
                    onClick={() => setShowGoldRate(true)}
                    aria-label="Today's gold rate"
                >
                    <span className="lalchnd-floating-icon">
                        <span className="lalchnd-gold-bars">▰</span>
                        <span className="lalchnd-gold-spark">✦</span>
                    </span>
                </button>

            </div>

            {/* CALL */}
            <a
                href="tel:+919999999999"
                className="lalchnd-floating-button lalchnd-call-button"
                aria-label="Call us"
            >
                <Phone />
            </a>

        </div>
    );
}
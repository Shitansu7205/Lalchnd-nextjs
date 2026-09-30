"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
    const [showFloatingActions, setShowFloatingActions] = useState(false);
    const [showGoldRate, setShowGoldRate] = useState(false);
    const [goldData, setGoldData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowFloatingActions(window.scrollY > 100);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    useEffect(() => {
        const fetchGoldRates = async () => {
            try {
                const response = await fetch(
                    "https://snapdata.dev/api/v1/gold/in/latest.json"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch gold rates");
                }

                const data = await response.json();
                setGoldData(data);
            } catch (error) {
                console.error("Gold rate fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGoldRates();
    }, []);

    const getRate = (instrument) => {
        return goldData?.observations?.find(
            (item) => item.instrument === instrument
        );
    };

    const rate18K = getRate("XAU.18K");
    const rate22K = getRate("XAU.22K");
    const rate24K = getRate("XAU.24K");

    const formatRate = (value) => {
        if (!value) return "—";

        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(value);
    };

    const formattedDate = goldData?.generated_at
        ? new Date(goldData.generated_at).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        })
        : "—";

    if (!showFloatingActions) return null;

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
                        Today's Gold Rate : -
                    </p>

                    <div className="lalchnd-gold-rates">

                        {/* 24K */}
                        <div className="lalchnd-gold-rate-item">
                            <span>24KT (999) - </span>
                            <strong>
                                {loading
                                    ? "Loading..."
                                    : formatRate(rate24K?.value)}
                            </strong>
                            <small>/gm</small>
                        </div>

                        {/* 22K */}
                        <div className="lalchnd-gold-rate-item">
                            <span>22KT (916) - </span>
                            <strong>
                                {loading
                                    ? "Loading..."
                                    : formatRate(rate22K?.value)}
                            </strong>
                            <small>/gm</small>
                        </div>

                        {/* 18K */}
                        <div className="lalchnd-gold-rate-item">
                            <span>18KT (750) - </span>
                            <strong>
                                {loading
                                    ? "Loading..."
                                    : formatRate(rate18K?.value)}
                            </strong>
                            <small>/gm</small>
                        </div>

                    </div>

                    <p className="lalchnd-gold-updated">
                        Updated: {formattedDate}
                    </p>

                    <h4>✨ Special Offers</h4>

                    <p>💎 Up to 30% off on diamond value*</p>
                    <p>💰 Up to 20% off on gold making charges*</p>
                    <p>🔒 Lock gold rate with 25% advance*</p>
                    <p>♻️ 0% deduction on old gold*</p>
                    <p>⏳ Limited time only. *T&C Apply</p>

                    <small className="lalchnd-gold-source">
                        <a href="https://www.ibja.co/">Source: IBJA</a>
                    </small>
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


            {/* WHATSAPP */}
            <a
                href="https://wa.me/919937296745"
                className="lalchnd-floating-button lalchnd-call-button"
                aria-label="WhatsApp us"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp />
            </a>

        </div>
    );
}
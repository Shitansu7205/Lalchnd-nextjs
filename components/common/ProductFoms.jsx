"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ProductFoms({ product }) {
    // ---------------------------------------------------------
    // Form submission/loading state
    // ---------------------------------------------------------
    const [loading, setLoading] = useState(false);

    // Success/error message shown below the form

    // ---------------------------------------------------------
    // Customer form fields
    // These fields match the backend:
    // customer.name
    // customer.email
    // customer.phone
    // customer.message
    // ---------------------------------------------------------
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // ---------------------------------------------------------
    // Get a WooCommerce product attribute
    //
    // Supports both:
    // - attribute name
    // - attribute taxonomy
    //
    // Example:
    // getAttribute("pa_metal")
    // getAttribute("Metal")
    // ---------------------------------------------------------
    const getAttribute = (name) => {
        const attribute = product?.attributes?.find(
            (item) =>
                item.name?.toLowerCase() === name.toLowerCase() ||
                item.taxonomy?.toLowerCase() === name.toLowerCase()
        );

        return attribute?.terms?.[0]?.name || attribute?.options?.[0] || "";
    };

    // ---------------------------------------------------------
    // Handle customer form input changes
    // ---------------------------------------------------------
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ---------------------------------------------------------
    // Submit product enquiry
    // ---------------------------------------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent duplicate submissions
        if (loading) return;

        const offcanvas = e.currentTarget.closest(".offcanvas");
        setLoading(true);


        // -----------------------------------------------------
        // Prepare product information
        //
        // This structure matches the backend API:
        //
        // {
        //     customer: {...},
        //     product: {...}
        // }
        // -----------------------------------------------------
        const enquiryData = {
            // Customer information
            customer: {
                name: form.name.trim(),
                email: form.email.trim(),
                phone: form.phone.trim(),
                message: form.message.trim(),
            },

            // Product information
            product: {
                id: product?.id || null,

                name: product?.name || "",

                slug: product?.slug || "",

                // Product Code from WooCommerce attributes
                code: getAttribute("Product Code") || "N/A",

                // Metal
                metal:
                    getAttribute("pa_metal") ||
                    getAttribute("Metal") ||
                    "N/A",

                // Purity
                purity:
                    getAttribute("pa_purity") ||
                    getAttribute("Purity") ||
                    "N/A",

                // Net Weight
                netWeight:
                    getAttribute("pa_net-weight-net") ||
                    getAttribute("Net Weight") ||
                    "N/A",

                // Price comes from your calculated pricing system,
                // not WooCommerce's old prices object.
                price: product?.pricing?.finalPrice ?? null,

                // Current product page URL
                url: window.location.href,
            },
        };

        try {
            // -------------------------------------------------
            // Send enquiry to our Next.js API
            // -------------------------------------------------
            const response = await fetch("/api/v1/enquiry/product", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(enquiryData),
            });

            // Try to read the API response
            const result = await response.json();

            // -------------------------------------------------
            // Handle backend/API error
            // -------------------------------------------------
            if (!response.ok) {
                throw new Error(
                    result?.message || "Failed to send enquiry."
                );
            }

            // -------------------------------------------------
            // Success
            // -------------------------------------------------
            toast.success(
                result?.message ||
                "Enquiry submitted successfully!"
            );

            // Clear the form after successful submission
            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
            });

            offcanvas
                ?.querySelector('[data-bs-dismiss="offcanvas"]')
                ?.click();
        } catch (error) {
            // -------------------------------------------------
            // Handle frontend/API/network errors
            // -------------------------------------------------
            console.error("Product enquiry error:", error);

            toast.error(
                error?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            // Re-enable submit button
            setLoading(false);
        }
    };

    return (
        <div
            className="offcanvas offcanvas-end canvas-sidebar canvas-description"
            id="askQuestions"
        >
            {/* -------------------------------------------------
                Offcanvas Header
            ------------------------------------------------- */}
            <div className="canvas-header">
                <h3 className="title fw-normal text-uppercase">
                    Ask a Question
                </h3>

                <span
                    className="icon-close link icon-close-popup"
                    data-bs-dismiss="offcanvas"
                />
            </div>

            {/* -------------------------------------------------
                Offcanvas Body
            ------------------------------------------------- */}
            <div className="canvas-body">
                <form
                    className="form-ask"
                    onSubmit={handleSubmit}
                >
                    <div className="form-content">

                        {/* -----------------------------------------
                            Customer Name
                        ----------------------------------------- */}
                        <fieldset className="tf-field">
                            <input
                                className="tf-input"
                                type="text"
                                name="name"
                                placeholder=" "
                                value={form.name}
                                onChange={handleChange}
                                required
                            />

                            <label className="tf-lable">
                                Name *
                            </label>
                        </fieldset>

                        {/* -----------------------------------------
                            Customer Email
                        ----------------------------------------- */}
                        <fieldset className="tf-field">
                            <input
                                className="tf-input"
                                type="email"
                                name="email"
                                placeholder=" "
                                value={form.email}
                                onChange={handleChange}
                                required
                            />

                            <label className="tf-lable">
                                Email *
                            </label>
                        </fieldset>

                        {/* -----------------------------------------
                            Customer Phone
                        ----------------------------------------- */}
                        <fieldset className="tf-field">
                            <input
                                className="tf-input"
                                type="tel"
                                name="phone"
                                placeholder=" "
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />

                            <label className="tf-lable">
                                Phone Number *
                            </label>
                        </fieldset>

                        {/* -----------------------------------------
                            Customer Message
                        ----------------------------------------- */}
                        <fieldset className="tf-field">
                            <textarea
                                className="tf-input"
                                name="message"
                                placeholder=" "
                                value={form.message}
                                onChange={handleChange}
                                required
                            />

                            <label className="tf-lable">
                                Message *
                            </label>
                        </fieldset>
                    </div>



                    {/* -------------------------------------------------
                        Submit Button
                    ------------------------------------------------- */}
                    <button
                        type="submit"
                        className="tf-btn btn-fill fw-medium w-100 animate-btn home-cta-btn"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                    aria-hidden="true"
                                />
                                Submitting...
                            </>
                        ) : (
                            "Submit Now"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

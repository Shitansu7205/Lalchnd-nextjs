"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsListing() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchData = async (url, params = {}) => {
        try {
            const queryParams = new URLSearchParams(params);

            const finalUrl = queryParams.toString()
                ? `${url}?${queryParams.toString()}`
                : url;

            console.log("REQUEST URL:", finalUrl);

            const response = await fetch(finalUrl);

            const data = await response.json();

            console.log("API RESPONSE:", data);
            console.log("IS ARRAY:", Array.isArray(data));

            if (!response.ok) {
                throw new Error(
                    data?.message ||
                    data?.error ||
                    `Request failed: ${response.status}`
                );
            }

            return data;
        } catch (error) {
            console.error("Fetch Error:", error);
            throw error;
        }
    };

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                setError("");

                const data = await fetchData("/api/v1/products", {
                    page: 2,
                });

                if (!Array.isArray(data)) {
                    console.error("Expected array but received:", data);

                    throw new Error(
                        "Products API did not return an array."
                    );
                }

                setProducts(data);
            } catch (error) {
                console.error("Products Loading Error:", error);

                setProducts([]);
                setError(error.message || "Failed to load products.");
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    console.log("PRODUCTS:", products);

    console.log(
        "FIRST IMAGE:",
        products?.[0]?.images?.[0]?.src
    );

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return (
            <div>
                <p>Failed to load products.</p>
                <p>{error}</p>
            </div>
        );
    }

    if (!products.length) {
        return <div>No products found.</div>;
    }

    return (
        <div className="wrapper-shop tf-grid-layout tf-col-3">
            {products.map((product) => {
                const firstImage =
                    product.images?.[0]?.src || "";

                const secondImage =
                    product.images?.[1]?.src ||
                    firstImage;

                return (
                    <div
                        key={product.id}
                        className="loadItem card_product--V01 grid"
                    >
                        <div className="card_product-wrapper">

                            <Link
                                href={`/product-default/${product.id}`}
                                className="product-img"
                            >
                                {firstImage && (
                                    <img
                                        src={firstImage}
                                        alt={product.name || "Product"}
                                        width={714}
                                        height={900}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                )}

                                {secondImage && (
                                    <img
                                        src={secondImage}
                                        alt={product.name || "Product"}
                                        className="lazyload img-hover"
                                        width={714}
                                        height={900}
                                    />
                                )}
                            </Link>

                        </div>
                    </div>
                );
            })}
        </div>
    );
}
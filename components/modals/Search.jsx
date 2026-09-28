
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Search() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams({
          page: "1",
          per_page: "4",
        });

        if (search.trim()) {
          params.set("search", search.trim());
        }

        const response = await fetch(
          `/api/v1/products?${params.toString()}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Unable to fetch products");
        }

        const data = await response.json();
        setProducts(data.products || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Unable to load products. Please try again.");
          setProducts([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, search.trim() ? 350 : 0);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search]);

  const formatPrice = (product) => {
    const price = product.prices;

    if (!price?.price) return "";

    const amount =
      Number(price.price) /
      Math.pow(10, Number(price.currency_minor_unit ?? 2));

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: price.currency_code || "INR",
    }).format(amount);
  };

  return (
    <div
      className="offcanvas offcanvas-top offcanvas-search"
      id="search"
    >
      <div className="offcanvas-content">
        <div className="container">
          <div className="popup-content">
            <form
              className="form-search"
              onSubmit={(e) => e.preventDefault()}
            >
              <fieldset>
                <input
                  type="text"
                  placeholder="ENTER YOUR SEARCH"
                  name="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  tabIndex={0}
                  aria-label="Search products"
                  autoComplete="off"
                />
              </fieldset>

              <button type="submit" className="link">
                <i className="icon icon-search" />
              </button>

              <span
                className="icon-close-popup"
                data-bs-dismiss="offcanvas"
                onClick={() => setSearch("")}
              >
                <i className="icon-close" />
              </span>
            </form>

            <div className="tf-grid-layout sm-col-2">
              {/* QUICK LINKS */}
              <div className="feature-wrap">
                <p className="title">QUICK LINK</p>

                <ul className="quick-link-list">
                  <li>
                    <Link
                      href="/products?category=gift-items"
                      className="link-item text-main-4 link"
                    >
                      Gift Items
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/products?category=bracelets"
                      className="link-item text-main-4 link"
                    >
                      Bracelets
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/products?category=earrings"
                      className="link-item text-main-4 link"
                    >
                      Earrings
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/products?category=rings"
                      className="link-item text-main-4 link"
                    >
                      Rings
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/products?category=pendants"
                      className="link-item text-main-4 link"
                    >
                      Pendants
                    </Link>
                  </li>
                </ul>
              </div>

              {/* DYNAMIC PRODUCT SUGGESTIONS */}
              <div className="feature-wrap">
                <p className="title">
                  {search.trim()
                    ? "SEARCH RESULTS"
                    : "SUGGESTION FOR YOU"}
                </p>

                {loading ? (
                  <p className="text-main-4">
                    Searching products...
                  </p>
                ) : error ? (
                  <p className="text-main-4">{error}</p>
                ) : products.length > 0 ? (
                  <ul className="product-list">
                    {products.slice(0, 5).map((product) => {
                      const image = product.images?.[0]?.thumbnail
                        || product.images?.[0]?.src;

                      return (
                        <li key={product.id}>
                          <div className="tf-product-mini-view">
                            <Link
                              href={`/products/${product.slug}`}
                              className="prd-image"
                            >
                              {image && (
                                <img
                                  src={image}
                                  alt={product.name}
                                  width={80}
                                  height={100}
                                />
                              )}
                            </Link>

                            <div className="prd-content">
                              <Link
                                href={`/products/${product.slug}`}
                                className="prd-name link text-uppercase"
                              >
                                {product.name}
                              </Link>

                              <div className="price-wrap">
                                <span className="price-new">
                                  {formatPrice(product)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-main-4">
                    {search.trim()
                      ? "No matching products found."
                      : "No suggestions available."}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <span
        className="close"
        data-bs-dismiss="offcanvas"
      />
    </div>
  );
}

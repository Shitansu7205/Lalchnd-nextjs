"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import AddtoWishlist from "../common/AddtoWishlist";
import AddtoCart from "../common/AddtoCart";
import QuickView from "../common/QuickView";
import AddtoCompare from "../common/AddtoCompare";
import Pagination from "../common/Pagination";
import LayoutHandler from "./LayoutHandler";
import ApiFilterSidebar from "./ApiFilterSidebar";
import { useContextElement } from "@/context/Context";

const filterKeys = ["category", "metal", "gender", "occasion", "purity"];
const mapProduct = (product) => ({
  id: product.id,
  title: product.name || "",
  price: Number(product.prices?.price || 0) / 100,
  oldPrice: product.on_sale ? Number(product.prices?.regular_price || 0) / 100 : null,
  imgSrc: product.images?.[0]?.src || "",
  hoverImgSrc: product.images?.[1]?.src || product.images?.[0]?.src || "",
  outOfStock: !product.is_in_stock,
  wooProduct: product,
});
const label = (value) => value.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

function Products1Content({ defaultLayout = 4 }) {
  const [activeLayout, setActiveLayout] = useState(defaultLayout);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("Sort by (Default)");
  const router = useRouter();
  const searchParams = useSearchParams();
  const { fetchProducts } = useContextElement();
  const filters = Object.fromEntries(filterKeys.map((key) => [key, searchParams.get(key) || ""]));

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchProducts(filters).then((result) => {
      if (!cancelled) setProducts((result.products || []).map(mapProduct));
    }).catch(() => {
      if (!cancelled) setProducts([]);
    }).finally(() => {
      if (!cancelled) setLoading(false);
    });
    return () => { cancelled = true; };
  }, [searchParams.toString()]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    value ? params.set(key, value) : params.delete(key);
    router.push(params.toString() ? `?${params.toString()}` : "?");
  };
  const clearFilters = () => router.push("?");
  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "Price Ascending") return a.price - b.price;
    if (sort === "Price Descending") return b.price - a.price;
    if (sort === "Title Ascending") return a.title.localeCompare(b.title);
    if (sort === "Title Descending") return b.title.localeCompare(a.title);
    return 0;
  });

  return <>
    <div className="flat-spacing pt-0"><div className="container">
      <div className="tf-shop-control">
        <div className="tf-control-filter">
          <a href="#filterShop" data-bs-toggle="offcanvas" className="tf-btn-filter h4 link"><span className="icon icon-filter" /><span className="text">FILTER</span></a>
          <div className="meta-filter-shop"><div id="applied-filters">
            {Object.entries(filters).filter(([, value]) => value).map(([key, value]) => <span className="filter-tag remove-tag" key={key} onClick={() => updateFilter(key, "")}>{label(value)} <span className="icon icon-close" /></span>)}
          </div></div>
        </div>
        <div className="tf-group-layout"><ul className="tf-control-layout"><LayoutHandler setActiveLayout={setActiveLayout} activeLayout={activeLayout} /></ul>
          <div className="tf-dropdown-sort" data-bs-toggle="dropdown"><div className="btn-select"><span className="text-sort-value">{sort}</span><span className="icon icon-arrow-angle-down" /></div>
            <div className="dropdown-menu">{["Sort by (Default)", "Title Ascending", "Title Descending", "Price Ascending", "Price Descending"].map((option) => <div onClick={() => setSort(option)} key={option} className={`select-item ${sort === option ? "active" : ""}`}><span className="text-value-item">{option}</span></div>)}</div>
          </div>
        </div>
      </div>
      <div className="wrapper-control-shop gridLayout-wrapper"><div className={`wrapper-shop tf-grid-layout tf-col-${activeLayout}`} id="gridLayout">
        {loading && <div className="wd-full text-center">Loading products...</div>}
        {!loading && !sortedProducts.length && <div className="wd-full text-center">No products found.</div>}
        {sortedProducts.map((product) => <div key={product.id} className={`loadItem card_product--V01 grid ${product.outOfStock ? "out-of-stock" : ""}`}>
          <div className="card_product-wrapper"><Link href={`/${product.outOfStock ? "product-notify-avaiable" : "product-default"}/${product.id}`} className="product-img"><img src={product.imgSrc} alt={product.title} className="lazyload img-product" width={714} height={900} /><img src={product.hoverImgSrc} alt={product.title} className="lazyload img-hover" width={714} height={900} /></Link>
            {!product.outOfStock && <ul className="list-product-btn"><li className="wishlist"><AddtoWishlist product={product} /></li><li><AddtoCart product={product} /></li><li><QuickView product={product} /></li><li className="compare"><AddtoCompare product={product} /></li></ul>}
          </div>
          <div className="card_product-info"><Link href={`/${product.outOfStock ? "product-notify-avaiable" : "product-default"}/${product.id}`} className="name-product h5 fw-normal link text-line-clamp-2">{product.title}</Link><div className="price-wrap"><span className="price-new h5">${product.price.toFixed(2)}</span>{product.oldPrice && <span className="price-old fw-normal">${product.oldPrice.toFixed(2)}</span>}</div></div>
        </div>)}
        <div className="wd-full tempo"><Pagination /></div>
      </div></div>
    </div></div>
    <ApiFilterSidebar filters={filters} updateFilter={updateFilter} clearFilters={clearFilters} />
  </>;
}

export default function Products1(props) {
  return (
    <Suspense fallback={<div className="wd-full text-center">Loading products...</div>}>
      <Products1Content {...props} />
    </Suspense>
  );
}

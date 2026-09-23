"use client";

import React from "react";

const filterGroups = [
  { key: "category", label: "Category", values: ["bangles", "rings", "earrings", "necklaces", "necklace-sets", "mangalsutra", "bracelets", "pendants", "chains", "anklets", "toe-rings", "coins", "gift-items"] },
  { key: "metal", label: "Metal", values: ["gold", "silver", "diamond", "platinum"] },
  { key: "gender", label: "Gender", values: ["female", "male", "unisex"] },
  { key: "occasion", label: "Occasion", values: ["daily-wear", "festive", "party", "wedding"] },
  { key: "purity", label: "Purity", values: ["22k", "24k"] },
];

const displayValue = (value) => value.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

export default function ApiFilterSidebar({ filters, updateFilter, clearFilters }) {
  return (
    <div className="offcanvas offcanvas-start canvas-sidebar canvas-filter" id="filterShop">
      <div className="canvas-wrapper">
        <div className="canvas-header">
          <span className="title">FILTER</span>
          <span className="icon-close link icon-close-popup" data-bs-dismiss="offcanvas" />
        </div>
        <div className="canvas-body">
          <div className="apply-filter-wrap">
            <p className="title h6 fw-normal text-uppercase">Applied Filters</p>
            {Object.values(filters).some(Boolean) ? (
              <div className="meta-filter-shop">
                <div id="applied-filters">
                  {Object.entries(filters).filter(([, value]) => value).map(([key, value]) => (
                    <span className="filter-tag remove-tag" key={key} onClick={() => updateFilter(key, "")}>
                      {displayValue(value)} <span className="icon icon-close" />
                    </span>
                  ))}
                </div>
              </div>
            ) : <div className="count-text text-main-4">No Filter Selected</div>}
          </div>
          {filterGroups.map((group) => (
            <div className="widget-facet" key={group.key}>
              <div className="facet-title h6 fw-normal" data-bs-target={`#${group.key}`} role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls={group.key}>
                <span className="h6 fw-normal text-uppercase">{group.label}</span>
                <span className="icon ic-accordion-custom" />
              </div>
              <div id={group.key} className="collapse show">
                <ul className="collapse-body filter-group-check current-scrollbar">
                  {group.values.map((value) => (
                    <li className="list-item" key={value} onClick={() => updateFilter(group.key, filters[group.key] === value ? "" : value)}>
                      <input type="radio" name={group.key} className="tf-check style-2" checked={filters[group.key] === value} readOnly />
                      <label className="label"><span>{displayValue(value)}</span></label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <button type="button" className="tf-btn w-100" onClick={clearFilters}>Clear filters</button>
        </div>
      </div>
    </div>
  );
}

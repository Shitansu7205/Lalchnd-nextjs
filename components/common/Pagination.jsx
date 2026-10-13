
"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function PaginationContent({
  currentPage = 1,
  totalPages = 1,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (totalPages <= 1) {
    return null;
  }

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;

    const params = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page);
    }

    router.push(`?${params.toString()}`);
  };

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="wg-pagination">
      {/* PREV */}
      <button
        type="button"
        className="tf-btn-line style-line-2"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="text-body">PREV</span>
      </button>

      {/* PAGE NUMBERS */}
      <ul className="pagition-list">
        {getPageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <li key={`dots-${index}`}>
                <span className="pagination-item">...</span>
              </li>
            );
          }

          return (
            <li key={page}>
              {page === currentPage ? (
                <p className="pagination-item active">{page}</p>
              ) : (
                <button
                  type="button"
                  className="pagination-item link"
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              )}
            </li>
          );
        })}
      </ul>

      {/* NEXT */}
      <button
        type="button"
        className="tf-btn-line style-line-2"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="text-body">NEXT</span>
      </button>
    </div>
  );
}

export default function Pagination(props) {
  return (
    <Suspense fallback={null}>
      <PaginationContent {...props} />
    </Suspense>
  );
}

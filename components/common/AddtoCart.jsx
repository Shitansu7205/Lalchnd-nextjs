"use client";

import { useContextElement } from "@/context/Context";

export default function AddtoCart({ tooltipDirection = "left", product }) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <a
      href="#shoppingCart"
      data-bs-toggle="offcanvas"
      onClick={() => {
        if (product.id) {
          addProductToCart(product.id, 1, true, product);
        }
      }}
      className={`hover-tooltip tooltip-${tooltipDirection} box-icon`}
    >
      <span className="icon icon-shop-cart" />
      <span className="tooltip">
        {isAddedToCartProducts(product.id) ? "Already Added" : "Add to Cart"}
      </span>
    </a>
  );
}

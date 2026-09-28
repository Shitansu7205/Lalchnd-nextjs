import React from "react";
import Link from "next/link";
import { Gem, MapPin, Phone } from "lucide-react";
export default function Toolbar() {
  return (
    <div className="tf-toolbar-bottom">
      {/* Collections */}
      <div className="toolbar-item">
        <Link href="/products">
          <span className="toolbar-icon">
            <Gem size={20} strokeWidth={1.7} />
          </span>
          <span className="toolbar-label">Shops</span>
        </Link>
      </div>

      {/* Search */}
      <div className="toolbar-item">
        <a href="#search" data-bs-toggle="offcanvas">
          <span className="toolbar-icon">
            <i className="icon icon-search-2" />
          </span>
          <span className="toolbar-label">Search</span>
        </a>
      </div>

      {/* Home */}
      <div className="toolbar-item">
        <Link href="/">
          <span className="toolbar-icon">
            <i className="icon icon-menu-home" />
          </span>
          <span className="toolbar-label">Home</span>
        </Link>
      </div>

      {/* Call Us */}
      <div className="toolbar-item">
        <a href="tel:+916000000000">
          <span className="toolbar-icon">
            <Phone size={20} strokeWidth={1.7} />
          </span>
          <span className="toolbar-label">Call Us</span>
        </a>
      </div>

      {/* Stores */}
      <div className="toolbar-item">
        <Link href="/our-stores">
          <span className="toolbar-icon">
            <MapPin size={20} strokeWidth={1.7} />
          </span>
          <span className="toolbar-label">Stores</span>
        </Link>
      </div>
    </div>
  );
}

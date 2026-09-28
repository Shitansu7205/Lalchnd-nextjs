"use client";
import React from "react";
import Link from "next/link";
import MobileNav from "../headers/MobileNav";
import CurrencySelect from "../common/CurrencySelect";
import LanguageSelect from "../common/LanguageSelect";
export default function MobileMenu() {
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span className="icon-close-popup" data-bs-dismiss="offcanvas">
        <i className="icon-close" />
      </span>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">
            <form className="form-search" onSubmit={(e) => e.preventDefault()}>
              <fieldset>
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className=""
                  name="text"
                  tabIndex={0}
                  defaultValue=""
                  aria-required="true"
                  required
                />
              </fieldset>
              <button type="submit" className="link">
                <i className="icon icon-search" />
              </button>
            </form>
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <MobileNav />
            </ul>
          </div>
          <div className="mb-other-content">
            <div className="mb-notice">
              <Link href={`/contact-us`} className="text-need">
                Follow Us!
              </Link>
            </div>
            <div className="group-icon ">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="site-nav-icon mobile-site-nav-icons"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="site-nav-icon mobile-site-nav-icons"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 8.5H2.75V21H6.5V8.5ZM4.63 3A2.18 2.18 0 1 0 4.63 7.36 2.18 2.18 0 0 0 4.63 3ZM21.25 13.85c0-3.76-2.01-5.51-4.69-5.51-2.16 0-3.13 1.19-3.67 2.03V8.5H9.14V21h3.75v-6.2c0-1.63.31-3.2 2.32-3.2 1.98 0 2.01 1.86 2.01 3.31V21H21l.25-7.15Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UCrO61El0o9WsM3fw3r7lolw"
                target="_blank"
                rel="noopener noreferrer"
                className="site-nav-icon mobile-site-nav-icons"
                aria-label="YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="site-nav-icon mobile-site-nav-icons"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-8h2.75l.5-3h-3.25V8.05c0-.87.29-1.55 1.62-1.55h1.73V3.82A23.1 23.1 0 0 0 14.33 3c-2.75 0-4.63 1.68-4.63 4.76V10H7v3h2.7v8h3.8Z" />
                </svg>
              </a>

            </div>
            <div className="mb-notice">
              <Link href={`/contact-us`} className="text-need">
                Need Help?
              </Link>
            </div>
            <ul className="mb-info">
              <li>
                <p>
                  Address:
                  <a
                    href="https://goo.gl/maps/AjU4cYxmFm1zzXL79"
                    className="fw-medium"
                    target="_blank"
                  >
                    Station Square, Bhubaneswar
                  </a>
                </p>
              </li>
              <li>
                Email:
                <a href="mailto:info@lalchnd.com" className="fw-medium">
                  info@lalchnd.com
                </a>
              </li>
              <li>
                Phone:
                <a href="tel:06742534014" className="fw-medium">
                  06742534014
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-bottom">
          <div className="bottom-bar-language">
            <div className="tf-currencies">
              <CurrencySelect />
            </div>
            <div className="tf-languages">
              <LanguageSelect />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

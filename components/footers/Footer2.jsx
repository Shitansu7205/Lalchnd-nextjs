"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CurrencySelect from "../common/CurrencySelect";
import {
  Download,
  Mail,
  Phone,
  Clock,
  MapPin,
  Smartphone,
  Store,
} from "lucide-react";

export default function Footer2() {
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer className="tf-footer style-2 bg-dark-blue">
      <div className="footer-body p-xl-0">
        <div className="container-full-2">
          <div className="footer-inner-wrap d-xl-flex flex-xl-nowrap">
            <div className="footer-infor">
              <div className="box-title">
                <Link href={`/home-2`} className="logo-site d-inline-block">
                  <Image
                    alt=""
                    src="/images/lalchnd/blogs/logo.png"
                    width={122}
                    height={31}
                  />
                </Link>
                <p className="text-main-5 lt-sp-nor">
                  <span className="text-white">Discover</span> our exquisite
                  collections crafted to{" "}
                  <span className="text-white">
                    elevate every <br className="d-none d-xl-block" />
                    occasion
                  </span>
                  , from <span className="text-white">
                    timeless classics
                  </span>{" "}
                  to <span className="text-white">contemporary designs</span>.
                  Explore <br className="d-none d-xl-block" />
                  and find the <span className="text-white">
                    perfect jewel
                  </span>{" "}
                  to express your <span className="text-white">unique</span>{" "}
                  style.
                </p>
              </div>
              <ul className="tf-social-icon style-white">
                <li>
                  <a
                    href="https://www.facebook.com/LalchndJewellersPvtLtd"
                    target="_blank"
                    className="social-facebook"
                  >
                    <span className="icon">
                      <i className="icon-facebook" />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lalchnd.jewellers/"
                    target="_blank"
                    className="social-instagram"
                  >
                    <span className="icon">
                      <i className="icon-instagram" />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/lalchnd-jewelers-74842420a/"
                    target="_blank"
                    className="social-linkin"
                  >
                    <span className="icon">
                      <i className="icon-linkin" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCrO61El0o9WsM3fw3r7lolw" >
                    <span className="icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                      </svg>
                    </span>
                  </a>
                </li>

              </ul>
            </div>
            <div className="footer-col-block">
              <p className="footer-heading footer-heading-mobile text-white font-2">
                Categories
              </p>
              <div className="tf-collapse-content">
                <ul className="footer-menu-list">
                  <li>
                    <Link
                      href={`/shop-collection-list`}
                      className="text-white link"
                    >
                      Gold
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/shop-collection-list`}
                      className="text-white link"
                    >
                      Silver
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/shop-collection-list`}
                      className="text-white link"
                    >
                      Diamond
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/shop-collection-list`}
                      className="text-white link"
                    >
                      Watches
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/shop-collection-list`}
                      className="text-white link"
                    >
                      Gifts Items
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/shop-collection-list`}
                      className="text-white link"
                    >
                      All Jewellery
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col-block">
              <p className="footer-heading footer-heading-mobile text-white font-2">
                Useful Links
              </p>
              <div className="tf-collapse-content">
                <ul className="footer-menu-list">
                  <li>
                    <Link href={`/gallery`} className="text-white link">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href={`/media`} className="text-white link">
                      Media
                    </Link>
                  </li>
                  <li>
                    <Link href={`/awards`} className="text-white link">
                      Awards
                    </Link>
                  </li>

                  <li>
                    <Link href={`/our-stores`} className="text-white link">
                      Our Stores
                    </Link>
                  </li>
                  <li>
                    <Link href={`/return`} className="text-white link">
                      Returns &amp; Refunds
                    </Link>
                  </li>
                  <li>
                    <Link href={`/term-condition`} className="text-white link">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col-block">
              <p className="footer-heading footer-heading-mobile text-white font-2">
                Visit Us
              </p>
              <div className="tf-collapse-content">
                <ul className="footer-menu-list">
                  <li className="text-caption d-flex align-items-center gap-2">
                    <Mail size={16} strokeWidth={1.8} className="text-white" />
                    <span className="fw-medium text-white">Email: </span>
                    <a
                      href="mailto:info@example.com"
                      className="text-white link fw-normal"
                    >
                      info@lalchnd.com
                    </a>
                  </li>

                  <li className="text-caption d-flex align-items-center gap-2">
                    <Phone size={16} strokeWidth={1.8} className="text-white" />
                    <span className="fw-medium text-white">Phone: </span>
                    <a
                      href="tel:18002108383"
                      className="text-white link fw-normal"
                    >
                      0674 - 2534016 / 17 / 18
                    </a>
                  </li>

                  <li className="text-caption d-flex align-items-center gap-2">
                    <Clock size={16} strokeWidth={1.8} className="text-white" />
                    <span className="fw-medium text-white">Hours: </span>
                    <span className="text-white fw-normal">
                      11:00AM - 8:30PM
                    </span>
                  </li>

                  <li className="text-caption d-flex align-items-center gap-2">
                    <MapPin
                      size={16}
                      strokeWidth={1.8}
                      className="text-white"
                    />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                      className="text-white link fw-normal"
                    >
                      Station Square, Unit- 3, Bhubaneswar
                    </a>
                  </li>
                  <li className="text-caption d-flex align-items-center gap-2">
                    <Store size={16} strokeWidth={1.8} className="text-white" />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                      className="text-white link fw-normal"
                    >
                      9:00AM - 9:00PM <i className="icon-arrow-right-2 fs-16" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-col-block">
              <p className="footer-heading footer-heading-mobile text-white font-2">
                Store Information
              </p>

              <div className="tf-collapse-content">
                <ul className="footer-menu-list">
                  {/* Bhubaneswar */}
                  <li className="store-location">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <MapPin
                        size={17}
                        strokeWidth={1.8}
                        className="text-white"
                      />
                      <span className="fw-medium text-white">Bhubaneswar</span>
                    </div>

                    <ul className="ps-4">
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="/master-canteen"
                          className="text-white link fw-normal"
                        >
                          Master Canteen
                        </Link>
                      </li>

                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="/raghunathpur"
                          className="text-white link fw-normal"
                        >
                          Raghunathpur
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Cuttack */}
                  <li className="store-location">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <MapPin
                        size={17}
                        strokeWidth={1.8}
                        className="text-white"
                      />
                      <span className="fw-medium text-white">Cuttack</span>
                    </div>

                    <ul className="ps-4">
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="/cda"
                          className="text-white link fw-normal"
                        >
                          CDA
                        </Link>
                      </li>

                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="/cantonmentroad"
                          className="text-white link fw-normal"
                        >
                          Cantonment Road
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Berhampur */}
                  <li className="store-location">
                    <Link
                      rel="noopener noreferrer"
                      href="/brahmapur"
                      className="text-white link d-flex align-items-center gap-2"
                    >
                      <MapPin size={17} strokeWidth={1.8} />
                      <span className="fw-medium">Berhampur</span>
                    </Link>
                  </li>

                  {/* Delhi */}
                  <li className="store-location">
                    <Link
                      rel="noopener noreferrer"
                      href="/delhi"
                      className="text-white link d-flex align-items-center gap-2"
                    >
                      <MapPin size={17} strokeWidth={1.8} />
                      <span className="fw-medium">Delhi</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-full-2">
          <div className="footer-bottom-wrap">
            <p className="text-nocopy text-white footer-app-title">
              All Rights Reserved By <strong>Lalchnd Groups</strong>.
            </p>
            <div className="tf-currencies">
              <div className="footer-app-promo">
                <div className="footer-app-brand">
                  {/* <Image
                    src="/images/logo/short-logo-white.svg"
                    alt="Lalchnd"
                    width={34}
                    height={34}
                  /> */}
                  <div>
                    <p className="footer-app-title">Install our mobile app</p>
                  </div>
                </div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.acme.jewelloApp.lalchndJw&pcampaignid=web_share&pli=1."
                  className="footer-app-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/lalchnd/icons/playstore.webp"
                    alt="Google Play Store"
                    width={120}
                    height={40}
                  />
                </a>
              </div>
            </div>
            <ul className="paymend-method-list">
              <li>
                <a href="#">
                  <Image
                    alt="Paymend Method"
                    src="/images/payment/am-ex.svg"
                    width={40}
                    height={25}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    alt="Paymend Method"
                    src="/images/payment/apple-pay.svg"
                    width={40}
                    height={25}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    alt="Paymend Method"
                    src="/images/payment/dinner.svg"
                    width={40}
                    height={25}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    alt="Paymend Method"
                    src="/images/payment/discover.svg"
                    width={40}
                    height={25}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    alt="Paymend Method"
                    src="/images/payment/gg-pay.svg"
                    width={38}
                    height={24}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    alt="Paymend Method"
                    src="/images/payment/master-2.svg"
                    width={40}
                    height={25}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    alt="Paymend Method"
                    src="/images/payment/master.svg"
                    width={40}
                    height={25}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    alt="Paymend Method"
                    src="/images/payment/shop-pay.svg"
                    width={40}
                    height={25}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    alt="Paymend Method"
                    src="/images/payment/unicon-pay.svg"
                    width={40}
                    height={25}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    alt="Paymend Method"
                    src="/images/payment/visa.svg"
                    width={40}
                    height={25}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="logo-bottom wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-full-2">
          <div className="d-flex justify-content-center">
            <Image
              className="lazyload"
              alt="Logo"
              src="/images/logo/logo-very-large.webp"
              width={1422}
              height={185}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

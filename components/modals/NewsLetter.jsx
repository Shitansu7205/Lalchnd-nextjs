"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeOnlyButton from "../common/HomeOnlyButton";
import toast from "react-hot-toast";

export default function NewsLetter() {
  const modalElement = useRef(null);
  const modalInstance = useRef(null);

  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let timer;

    const showModal = async () => {
      // Only show on homepage
      if (window.location.pathname !== "/") return;

      // Don't show again if already shown
      const alreadyShown = localStorage.getItem("lalchnd_newsletter_shown");

      if (alreadyShown) return;

      const bootstrap = await import("bootstrap");

      const modalEl = document.getElementById("newsletterPopup");

      if (!modalEl) return;

      const myModal = new bootstrap.Modal(modalEl, {
        keyboard: true,
        backdrop: true,
      });

      modalInstance.current = myModal;

      // Show after 2 seconds
      timer = setTimeout(() => {
        myModal.show();

        // Mark as shown
        localStorage.setItem("lalchnd_newsletter_shown", "true");
      }, 2000);
    };

    showModal();

    return () => {
      clearTimeout(timer);

      if (modalInstance.current) {
        modalInstance.current.hide();
        modalInstance.current.dispose();
        modalInstance.current = null;
      }

      // Remove any leftover Bootstrap backdrop
      document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
        backdrop.remove();
      });

      document.body.classList.remove("modal-open");
      document.body.style.removeProperty("padding-right");
      document.body.style.removeProperty("overflow");
    };
  }, []);

  const closeModal = () => {
    modalInstance.current?.hide();

    // Extra cleanup to prevent black overlay
    setTimeout(() => {
      document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
        backdrop.remove();
      });

      document.body.classList.remove("modal-open");
      document.body.style.removeProperty("padding-right");
      document.body.style.removeProperty("overflow");
    }, 300);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!email.trim() || submitting) return;

    setSubmitting(true);

    try {
      const response = await fetch("/api/v1/enquiry/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message || "Unable to subscribe right now."
        );
      }

      toast.success(
        result?.message || "Successfully subscribed!"
      );

      closeModal();
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);

      toast.error(
        error?.message ||
        "Unable to subscribe right now. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>


      <div
        className="modal modalCentered fade auto-popup modal-auto-newletter"
        id="newsletterPopup"
        ref={modalElement}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <span
              className="icon-close-popup"
              onClick={closeModal}
              role="button"
              aria-label="Close newsletter"
            >
              <i className="icon-close" />
            </span>

            <div className="modal-body">
              <div className="image">
                <Image
                  alt="Lalchnd Jewellers Exclusive Collection"
                  width={876}
                  height={1120}
                  src="/images/lalchnd/banner/pop-up-image.webp"
                />
              </div>

              <div className="content text-center">
                <div className="heading">
                  <h2 className="title heading-font fw-normal">
                    Exclusive Jewellery{" "}
                    <span className="highlight-font">Offers</span>
                  </h2>

                  <p className="sub-title">
                    Subscribe For New Collections, Special Offers &amp; Gold
                    Rate Updates
                  </p>
                </div>

                <form
                  onSubmit={sendEmail}
                  className="form-newleter style-border"
                >
                  <input
                    className="text-center"
                    type="email"
                    name="email"
                    placeholder="ENTER YOUR EMAIL ADDRESS"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <div className="btn-group">
                    <HomeOnlyButton
                      href="#"
                      className={`type-large ${submitting ? "disabled" : ""}`}
                      onClick={sendEmail}
                    >
                      {submitting ? (
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
                    </HomeOnlyButton>
                  </div>
                </form>

                <p className="privacy text-main-6">
                  Your information will be used in accordance with our{" "}
                  <Link
                    href="/privacy-policy"
                    className="tf-btn-line style-line-2 text-main link"
                  >
                    <span className="text-body">Privacy Policy</span>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
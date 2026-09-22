"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeOnlyButton from "../common/HomeOnlyButton";

export default function NewsLetter() {
  const modalElement = useRef(null);
  const modalInstance = useRef(null);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const showModal = async () => {
      const bootstrap = await import("bootstrap");

      const myModal = new bootstrap.Modal(
        document.getElementById("newsletterPopup"),
        {
          keyboard: false,
        }
      );

      modalInstance.current = myModal;

      await new Promise((resolve) => setTimeout(resolve, 2000));

      myModal.show();
    };

    showModal();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Make sure email is entered
    if (!email.trim()) {
      return;
    }

    // Show success message
    setMessage("Thank you! You have successfully subscribed.");

    // Close popup
    modalInstance.current?.hide();

    // Clear email
    setEmail("");

    // Remove message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <>
      {/* Simple success message */}
      {message && (
        <div
          style={{
            position: "fixed",
            top: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            background: "#fff",
            padding: "14px 25px",
            borderRadius: "4px",
            boxShadow: "0 5px 25px rgba(0, 0, 0, 0.15)",
            color: "#34a853",
            fontSize: "15px",
            textAlign: "center",
          }}
        >
          {message}
        </div>
      )}

      <div
        className="modal modalCentered fade auto-popup modal-auto-newletter"
        id="newsletterPopup"
        ref={modalElement}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <span className="icon-close-popup" data-bs-dismiss="modal">
              <i className="icon-close" />
            </span>

            <div className="modal-body">
              <div className="image">
                <Image
                  alt="Lalchnd Jewellers Exclusive Collection"
                  width={876}
                  height={1120}
                  src="/images/lalchnd/pay-online/popup.webp"
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
                      className="type-large"
                      onClick={sendEmail}
                    >
                      Submit Now
                    </HomeOnlyButton>
                  </div>
                </form>

                <p className="privacy text-main-6">
                  Your information will be used in accordance with our{" "}
                  <Link
                    href="/privacy"
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


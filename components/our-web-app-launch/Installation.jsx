"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "1",
    image: "/images/lalchnd/app/google-play.webp",
    title: "Step 1",
    text: (
      <>
        Go to the Google Play Store and search for{" "}
        <strong>Lalchnd Jewellers</strong> or click on the link below.
      </>
    ),
  },
  {
    number: "2",
    image: "/images/lalchnd/app/step-2.webp",
    title: "Step 2",
    text: (
      <>
        Download the App and enter the mobile number registered with your
        passbook.
      </>
    ),
  },
  {
    number: "3",
    image: "/images/lalchnd/app/step-3.webp",
    title: "Step 3",
    text: (
      <>
        An OTP will be sent to your registered mobile number.
      </>
    ),
  },
  {
    number: "4",
    image: "/images/lalchnd/app/step-4.webp",
    title: "Step 4",
    text: (
      <>
        Enter the OTP and click on the <strong>Scheme</strong> button.
      </>
    ),
  },
  {
    number: "5",
    image: "/images/lalchnd/app/step-5.webp",
    title: "Step 5",
    text: (
      <>
        Select your desired SPS account number and pay the installment.
      </>
    ),
  },
];

export default function Installation() {
  return (
    <>
      <link
        rel="stylesheet"
        href="/css/our-web-app-launch/applaunch.css"
      />

      <section style={{padding: "100px 0"}}>
        <div className="container-full-2">

          <div className="steps-wrapper">

            {steps.map((step, index) => (
              <React.Fragment key={step.number}>

                {/* Step Card */}
                <div className="step-card">

                  {/* Step Number */}
                  <div className="step-number">
                    {step.number}
                  </div>

                  {/* Step Image */}
                  <div className="step-image-wrapper">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={300}
                      height={220}
                      className="step-image"
                    />
                  </div>

                  {/* Step Content */}
                  <div className="step-content">

                    <h3>{step.title}</h3>

                    <span className="gold-line"></span>

                    <p className="sub-title">{step.text}</p>

                  </div>

                </div>

                {/* Arrow Between Cards */}
                {index !== steps.length - 1 && (
                  <div
                    className="step-arrow"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 40 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12H33"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />

                      <path
                        d="M25 4L34 12L25 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

              </React.Fragment>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}
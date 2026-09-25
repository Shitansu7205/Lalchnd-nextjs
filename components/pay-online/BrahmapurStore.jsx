"use client";

import Image from "next/image";
import { BrahmapurData } from "@/data/service";


export default function BrahmapurStore() {
  const { heading, headingHighlight, subtitle, cards } =
    BrahmapurData;

  return (
    <section className="payonline-section store-payonline-page">
      <div className="container-full-2">

        {/* Header */}
        <div className="payonline-header">

          {/* <div className="brand-line">
            <span></span>

            <p>LALCHND JEWELLERS</p>

            <span></span>
          </div> */}
          
          <h2 className="heading-font">
            {heading} <span className="highlight-font">{headingHighlight}</span>
          </h2>
          <p className="s-sub-title">
            {subtitle}
          </p>
        </div>


        {/* Cards */}
        <div className="payonline-cards">

          {cards.map((card) => (
            <div
              className={`payonline-card ${card.type}-card`}
              key={card.id}
            >

              {/* =========================
                  APP CARD
              ========================= */}

              {card.type === "app" && (
                <>
                  <div className="card-background"></div>

                  <div className="card-content">

                    <div className="card-label">
                      <span></span>

                      <p>{card.label}</p>

                      <span></span>
                    </div>

                    {/* <div className="card-number">
                      {card.number}
                    </div> */}

                    <h2>{card.title}</h2>

                    <p className="card-description">
                      {card.description}
                    </p>

                    <SupportBox
                      support={card.support}
                      button={card.button}
                    />

                  </div>

                  <div className="app-image-wrap">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="app-image"
                    />
                  </div>

                  {/* <div className="decorative-gold"></div> */}
                </>
              )}


              {/* =========================
                  PAYMENT CARD
              ========================= */}

              {card.type === "payment" && (
                <>
                  <div className="payment-bg-image">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="payment-jewellery"
                    />
                  </div>

                  <div className="payment-content">

                    <div className="card-label dark-label">
                      <span></span>

                      <p>{card.label}</p>

                      <span></span>
                    </div>

                    {/* <div className="card-number dark-number">
                      {card.number}
                    </div> */}

                    <h2>{card.title}</h2>

                    <h4>{card.subTitle}</h4>

                    <p className="payment-description">
                      {card.description}
                    </p>

                    <SupportBox
                      support={card.support}
                      button={card.button}
                      payment
                    />

                  </div>


                  {/* Book Now Badge */}

                  {card.badge && (
                    <div className="book-now">

                      <div className="calendar-icon">
                        ▣
                      </div>

                      <p>{card.badge.title}</p>

                      <p>{card.badge.subtitle}</p>

                    </div>
                  )}
                </>
              )}

            </div>
          ))}

        </div>


      </div>
    </section>
  );
}


/* =========================================
   SUPPORT BOX COMPONENT
========================================= */

function SupportBox({
  support,
  button,
  payment = false,
}) {
  return (
    <div
      className={`support-box ${payment ? "payment-support" : ""
        }`}
    >

      <h3>
        {support.title}

        <span></span>
      </h3>

      <div className="support-item">
        <span className="support-icon">
          ☎
        </span>

        <p>{support.phone}</p>
      </div>

      <div className="support-item">
        <span className="support-icon">
          ●
        </span>

        <p>{support.address}</p>
      </div>

     <a
  href={button.link}
  className={`home-cta-btn tf-btn btn-fill animate-btn type-large button-font ${
    payment ? "" : "gold-button"
  }`}
>
  {button.text}
  <span>→</span>
</a>

    </div>
  );
}
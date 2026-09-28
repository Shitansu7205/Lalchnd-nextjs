"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtomBorder from "@/components/common/ButtomBorder";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Banner() {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const wordSplit = new SplitText(element, {
      type: "words",
      wordsClass: "word-wrapper",
    });

    const charSplit = new SplitText(wordSplit.words, {
      type: "chars",
      charsClass: "char-wrapper",
    });

    gsap.set(charSplit.chars, {
      color: "#A9A9A9",
      opacity: 1,
    });

    const animation = gsap.to(charSplit.chars, {
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "bottom 35%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
      color: "#ffffff",
      stagger: {
        each: 0.05,
        from: "start",
      },
      duration: 0.5,
      ease: "power2.out",
    });

    return () => {
      animation.kill();
      wordSplit.revert();
      charSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="banner_V04">
      <div className="bn-content" style={{color: "#fff"}}>
        <h3 className="heading-font" style={{color: "#fff"}}>
         Thank you for choosing <span className="highlight-font">Lalchnd Jewellers</span>.
        </h3>

        <p className="sub-title mb-3">We truly value your continued trust and association with us. 🙏</p>
        <h6>
  For any assistance, please contact us at:{" "}
  <a href="tel:9938081378" style={{color: "#ed9a00"}}>+91 9938081378</a>
</h6>
      </div>
    </div>
  );
}

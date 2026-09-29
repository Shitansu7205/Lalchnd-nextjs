"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtomBorder from "@/components/common/ButtomBorder";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function SonePeSuhagaBanner() {
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
    <div className="banner_V04 sonepesuhagabanner">
      <div className="bn-content">
         <Image
      src="/images/lalchnd/sone-pe-suhag/sone-pe-suhaga-img.webp"
      alt="Sone Pe Suhaga"
      width={250}
      height={50}
      className="sone-pe-suhaga-title mb-4"
    />
        <h3 className="mb-4" style={{color: "#fff"}}>Where <span className="highlight-font">Gold</span> Meets Timeless <span className="highlight-font">Elegance</span></h3>

        <ButtomBorder href="/sone-pe-suhaga" className="type-large">
          For More Information
        </ButtomBorder>
      </div>
    </div>
  );
}

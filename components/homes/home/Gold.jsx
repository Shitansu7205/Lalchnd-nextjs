"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeButton from "@/components/common/HomeButton";
import gsap from "gsap";
import CountdownTimer from "@/components/common/Countdown";
export default function Gold() {
  useEffect(() => {
    const playArea = document.querySelector(".play-area-2");
    const dodger = document.querySelector(".dodger-2");

    if (!playArea || !dodger) return;

    const dodgerWidth = dodger.offsetWidth;
    const dodgerHeight = dodger.offsetHeight;
    const areaWidth = playArea.clientWidth;
    const areaHeight = playArea.clientHeight;
    const safeMargin = 50;

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const setInitialPosition = () => {
      dodger.style.top = `${areaHeight - dodgerHeight}px`;
      dodger.style.left = `${areaWidth - dodgerWidth}px`;
      dodger.style.bottom = "auto";
      dodger.style.right = "auto";
      dodger.style.position = "absolute";
    };

    const handleMouseMove = (e) => {
      const rect = playArea.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const dodgerLeft = dodger.offsetLeft;
      const dodgerTop = dodger.offsetTop;

      const leftEdge = dodgerLeft - safeMargin;
      const rightEdge = dodgerLeft + dodgerWidth + safeMargin;
      const topEdge = dodgerTop - safeMargin;
      const bottomEdge = dodgerTop + dodgerHeight + safeMargin;

      if (
        mouseX > leftEdge &&
        mouseX < rightEdge &&
        mouseY > topEdge &&
        mouseY < bottomEdge
      ) {
        const dx = dodgerLeft + dodgerWidth / 2 - mouseX;
        const dy = dodgerTop + dodgerHeight / 2 - mouseY;
        const angle = Math.atan2(dy, dx);

        let newX = dodgerLeft + Math.cos(angle) * 50;
        let newY = dodgerTop + Math.sin(angle) * 50;

        newX = Math.max(0, Math.min(newX, areaWidth - dodgerWidth));
        newY = Math.max(0, Math.min(newY, areaHeight - dodgerHeight));

        gsap.to(dodger, {
          left: newX,
          top: newY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      const rect = dodger.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      e.preventDefault();
    };

    const handleMouseDrag = (e) => {
      if (!isDragging) return;

      const containerRect = playArea.getBoundingClientRect();
      let x = e.clientX - containerRect.left - offsetX;
      let y = e.clientY - containerRect.top - offsetY;

      x = Math.max(0, Math.min(x, areaWidth - dodgerWidth));
      y = Math.max(0, Math.min(y, areaHeight - dodgerHeight));

      dodger.style.left = `${x}px`;
      dodger.style.top = `${y}px`;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    if (window.innerWidth >= 1440) {
      setInitialPosition();
      playArea.addEventListener("mousemove", handleMouseMove);
      dodger.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseDrag);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      dodger.removeAttribute("style");
    }

    // Cleanup
    return () => {
      playArea.removeEventListener("mousemove", handleMouseMove);
      dodger.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseDrag);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return (
    <div className="section-padding-bottom-40 section-padding-top-40 bg-white bg-transparent-svg1">
      <div className="container">
        <div className="banner_countdown-v2" style={{ gap: "80px" }}>
          <div className="bn_image play-area-2">
            <div className="img p-0">
              <Image
                src="/images/lalchnd/home/gold-main.webp"
                alt=""
                className="lazyload"
                width={1084}
                height={1084}
              />
            </div>
            {/* <span className="item-square dodger-2 d-none d-lg-block" /> */}
          </div>
          <div className="bn_content wow fadeInUp">
            <div className="heading">
              <Image alt="" src="/icon/luxury.svg" width={48} height={48} />
              <h2 className="heading-font">
                Timeless <span className="highlight-font">Gold</span>, Crafted With Elegance
              </h2>
              <p className="sub-title">
                Discover exquisite gold jewellery designed to celebrate every moment. From classic essentials to statement pieces, find timeless craftsmanship that adds a touch of elegance to every occasion.
              </p>
            </div>

            <div className="btn-group">
              <HomeButton href="/products?metal=gold" className="type-large">
                Shop Collection
              </HomeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

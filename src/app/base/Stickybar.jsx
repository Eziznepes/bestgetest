"use client";
import React, { useEffect, useState } from "react";
import { checkSvg } from "./SVG";

export default function Stickybar() {
  const [scrollWidth, setScrollWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  const start = 350;
  const onScroll = () => {
    if (window.scrollY > start) {
      document.getElementById("stickybar").classList.add("sticky");
    } else {
      document.getElementById("stickybar").classList.remove("sticky");
    }
    setScrollWidth(
      (window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight)
    );
  };
  return (
    <div className="stickybar" id="stickybar">
      <div className="auto__container">
        <div className="stickybar__inner">
          <div
            className="stickybar__scroll"
            style={{ width: `${scrollWidth}%` }}
          ></div>
          <div className="stickybar__item">
            {checkSvg}
            <span>Gratis</span> bezorging in Nederland
          </div>
          <div className="stickybar__item">
            {checkSvg}
            <span>Gratis</span> ruilen binnen 30 dagen
          </div>
          <div className="stickybar__item">
            {checkSvg}
            <span>Gratis</span> retourneren
          </div>
        </div>
      </div>
    </div>
  );
}

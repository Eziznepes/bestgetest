"use client";
import React, { useEffect, useState } from "react";
import { checkSvg } from "./SVG";

export default function Stickybar() {
  const [scrollWidth, setScrollWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
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
          <div className="stickybar__box">
            <div className="stickybar__box-image">
              <div className="stickybar__box-image-icon">
                <img src="images/icons/like.png" alt="" />
              </div>
              <div className="stickybar__box-image-inner">
                <img src="images/product/1.png" alt="" />
              </div>
            </div>
            <div className="stickybar__box-content">
              <div className="stickybar__box-content-left">
                <h6>Hi-Fi Bausus Howie D05</h6>
                <div className="stickybar__box-content-left-row">
                  <div className="stickybar__box-content-left-rating">
                    <img src="images/icons/star.png" alt="" /> <span> 4.7</span>
                  </div>
                  <h4 className="prc">
                    €59,95 <span>€159,95</span>
                  </h4>
                  <div className="stickybar__box-content-left-tag">
                    Top deal
                  </div>
                </div>
              </div>
              <button className="stickybar__box-content-btn">
                Direct kopen
              </button>
            </div>
          </div>
          <div className="stickybar__items">
            <div className="stickybar__item">
              {checkSvg}
              <span>Gratis </span> bezorging in Nederland
            </div>
            <div className="stickybar__item">
              {checkSvg}
              <span>Gratis </span> ruilen binnen 30 dagen
            </div>
            <div className="stickybar__item">
              {checkSvg}
              <span>Gratis </span> retourneren
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

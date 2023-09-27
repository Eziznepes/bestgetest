"use client";
import React, { useEffect } from "react";

export default function SideMain() {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
  }, []);
  const onScroll = () => {
    let header = document.getElementById("header");
    let wrapper = document.getElementById("wrapper");
    let side = document.getElementById("side");
    let stickybar = document.getElementById("stickybar");
    if (window.scrollY >= wrapper.offsetTop - header.offsetHeight) {
      side.classList.add("sticky");
    } else {
      side.classList.remove("sticky");
    }
  };
  return (
    <div className="side big" id="side">
      <div className="sideConfirm">
        <div className="sideConfirm__box">
          <div className="sideConfirm__box-row">
            <div className="sideConfirm__product">
              <div className="sideConfirm__product-image">
                <div className="sideConfirm__product-image-inner">
                  <img src="images/product/1.png" alt="" />
                </div>
              </div>
              <div className="sideConfirm__product-content">
                <h6 className="sm">Hi-Fi Bausus - Noise cancelling</h6>
                <p className="sm">Kleur: Gebroken wit / Taupe</p>
              </div>
            </div>
            <div className="sideConfirm__info">
              <p className="sm">€ 249,-</p>
              <h6 className="sm">€ 99,-</h6>
            </div>
          </div>
          <div className="sideConfirm__box-row">
            <h6 className="xsm">Bezorging</h6>
            <h6 className="xsm">Gratis</h6>
          </div>
          <div className="sideConfirm__box-row">
            <div className="sideConfirm__box-row-left">
              <h6 className="sm">Totaalbedrag</h6>
              <p>Inclusief BTW</p>
            </div>
            <div className="sideConfirm__box-row-right">
              <h6>€ 99,-</h6>
            </div>
          </div>
          <div className="sideConfirm__btn">
            <img src="images/icons/tickWhite.png" alt="" /> Betaald
          </div>
        </div>
      </div>
    </div>
  );
}

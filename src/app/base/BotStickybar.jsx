"use client";

import { useEffect } from "react";

export default function BotStickybar() {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
  }, []);
  const onScroll = () => {
    const botsticky = document.getElementById("botstickybar");
    if (window.scrollY > botsticky.offsetTop + 100) {
      botsticky.classList.add("sticky");
    } else {
      botsticky.classList.remove("sticky");
    }
  };
  return (
    <div className="botstickybar" id="botstickybar">
      <div className="botstickybar__inner">
        <div className="botstickybar__inner-icon">
          <img src="images/icons/shopping-cart.png" alt="" />
        </div>
        <div className="botstickybar__btns">
          <button className="button primary light">In de winkelwagen</button>
          <button className="button primary">Nu kopen</button>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect } from "react";
import { OverSuperList } from "../../OverviewModul";
import CardItem from "../CardItem";

export default function SideMain() {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
  }, []);
  const onScroll = () => {
    let header = document.getElementById("header");
    let wrapper = document.getElementById("wrapper3");
    let side = document.getElementById("side1");
    let stickybar = document.getElementById("stickybar");
    if (
      window.scrollY >=
      wrapper.offsetTop - header.offsetHeight - stickybar.offsetHeight
    ) {
      side.classList.add("sticky");
    } else {
      side.classList.remove("sticky");
    }
  };
  return (
    <div className="side" id="side1">
      <div className="sideOver">
        <div className="sideOver__tag">meest verkocht</div>
        <div className="cards">
          {OverSuperList.map((item, index) => {
            return <CardItem itemData={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

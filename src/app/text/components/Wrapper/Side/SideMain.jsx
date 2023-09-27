"use client";
import React, { useEffect } from "react";

export default function SideMain() {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
  }, []);
  const onScroll = () => {
    let header = document.getElementById("header");
    let wrapper = document.getElementById("wrapper4");
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
  useEffect(() => {
    const links = document.querySelectorAll(".sideText__link");
    const sections = document.querySelectorAll(".anchor");
    function changeLinkState() {
      let index = sections.length;
      while (--index && window.scrollY - 100 < sections[index].offsetTop) {}
      links.forEach((link) => link.classList.remove("active"));
      links[index]?.classList.add("active");
    }
    window.addEventListener("scroll", changeLinkState);
  }, []);
  return (
    <div className="side pc " id="side1">
      <div className="sideText">
        <div className="sideText__links">
          <div className="sideText__links-top">
            <a href="#kopersbescherming" className="sideText__link active">
              <h6 className="xbig">Kopersbescherming</h6>
            </a>
            <a href="#garantie" className="sideText__link">
              <h6 className="uniq">Geld terug garantie</h6>
            </a>
          </div>
          <div className="sideText__links-bot">
            <a href="#krijg" className="sideText__link">
              <h6>Hoe krijg ik mijn geld terug?</h6>
            </a>
            <a href="#contact" className="sideText__link">
              <h6 className="uniq">Neem contact op</h6>
            </a>
            <a href="#terugbetaling" className="sideText__link">
              <h6 className="uniq">Terugbetaling aanvragen</h6>
            </a>
            <a href="#geld" className="sideText__link">
              <h6 className="uniq">Geld terug</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { caretDown, cartIcon, heartIcon, mobileIcon } from "./SVG";
import Link from "next/link";

export default function Header() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  const close = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  return (
    <>
      <header className="header" id="header">
        <div className="header__inner">
          <div className="header__promo">
            <div className="auto__container">
              <div className="header__promo-inner">
                <h6 className="pc">
                  <strong> Waanzinnige kortingsweken! </strong> Deze unieke
                  tijdelijke promotie loopt af over <span>01:48:59</span>
                </h6>
                <h6 className="mob">
                  <strong> Opruiming! </strong> Deze unieke actie eindigt over:{" "}
                  <span>06:02:67</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="header__top">
            <div className="auto__container">
              <div className="header__top-inner">
                <a href="#" className="header__top-link">
                  Kopersbescherming
                </a>
                <a href="#" className="header__top-link">
                  {mobileIcon}
                  Mobiel
                </a>
                <div className="langSelect">
                  <div className="langSelect__selected">
                    <img src="images/netherlandsFlag.png" alt="" />/ Nederland /
                    EUR
                    {caretDown}
                  </div>
                </div>
                <a href="#" className="header__top-link">
                  {heartIcon}
                  Verlanglijstje
                </a>
              </div>
            </div>
          </div>
          <div className="header__bot">
            <div className="auto__container">
              <div className="header__bot-inner">
                <Link href="/" className="header__bot-logo">
                  <img src="images/logo.png" alt="" />
                </Link>
                <nav
                  className={"nav " + (menu ? "active" : "")}
                  id="menu"
                  onClick={close}
                >
                  <div className="nav__inner">
                    <div className="nav__inner-links">
                      <a href="#" className="nav__inner-link">
                        Meest verkocht
                      </a>
                      <a href="#" className="nav__inner-link active">
                        Electronica
                      </a>
                      <a href="#" className="nav__inner-link">
                        Tuinieren
                      </a>
                      <a href="#" className="nav__inner-link">
                        Sport
                      </a>
                      <a href="#" className="nav__inner-link">
                        Audio & Video
                      </a>
                      <a href="#" className="nav__inner-link">
                        Earbuds
                      </a>
                      <button type="button" className="nav__inner-btn">
                        Sale
                      </button>
                    </div>
                    <div className="nav__inner-top">
                      <div className="langSelect">
                        <div className="langSelect__selected">
                          <img src="images/netherlandsFlag.png" alt="" />/
                          Nederland / EUR
                          {caretDown}
                        </div>
                      </div>
                      <a href="#" className="nav__inner-top-link">
                        {heartIcon}
                        Verlanglijstje
                      </a>
                      <a href="#" className="nav__inner-top-link">
                        Kopersbescherming
                      </a>
                    </div>
                    <div className="nav__cart">
                      {cartIcon}
                      <div className="nav__cart-number">
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                </nav>
                <div className="header__bot-right">
                  <div
                    className={"burger " + (menu ? "active" : "")}
                    id="menuBtn"
                    onClick={() => {
                      setMenu(!menu);
                    }}
                  >
                    <span></span>
                  </div>
                  <div className="header__bot-cart">
                    {cartIcon}
                    <div className="header__bot-cart-number">
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

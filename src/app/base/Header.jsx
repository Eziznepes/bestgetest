import React from "react";
import { caretDown, cartIcon, heartIcon, mobileIcon } from "./SVG";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header" id="header">
        <div className="header__promo">
          <div className="auto__container">
            <div className="header__promo-inner">
              <h6>
                <strong> Waanzinnige kortingsweken! </strong> Deze unieke
                tijdelijke promotie loopt af over <span>01:48:59</span>
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
              <nav className="nav">
                <div className="nav__inner">
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
              </nav>
              <div className="header__bot-cart">
                {cartIcon}
                <div className="header__bot-cart-number">
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

"use client";
import React, { useState } from "react";
import {
  chevronBottom,
  faceBookIcon,
  instagramIcon,
  tiktokIcon,
  twitterIcon,
} from "./SVG";
import Link from "next/link";

export default function Footer() {
  const [isActive, setIsActive] = useState(null);
  return (
    <div className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-wrapper">
            <div className="footer__left">
              <div className="footer__left-info">
                <Link href="/" className="footer__logo">
                  <img src="images/footer-logo.png" alt="" />
                </Link>
                <div className="footer__left-socials">
                  <div className="footer__left-socials-title">Volg ons:</div>
                  <div className="footer__left-socials-inner">
                    <a href="#" className="footer__left-socials-item">
                      {faceBookIcon}
                    </a>
                    <a href="#" className="footer__left-socials-item">
                      {instagramIcon}
                    </a>
                    <a href="#" className="footer__left-socials-item">
                      {twitterIcon}
                    </a>
                    <a href="#" className="footer__left-socials-item">
                      {tiktokIcon}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__right">
              <div className="footer__right-col">
                <div
                  className={
                    "footer__right-col-btn " +
                    (isActive === "1" ? "active" : "")
                  }
                  onClick={() => {
                    if (isActive === "1") {
                      setIsActive(null);
                    } else {
                      setIsActive("1");
                    }
                  }}
                >
                  <h6 className="xsmr">Bij ons winkelen</h6>
                  {chevronBottom}
                </div>
                <div
                  className={
                    "footer__right-col-content " +
                    (isActive === "1" ? "active" : "")
                  }
                >
                  <a className="footer__right-col-link">
                    Prijzen en verzending
                  </a>
                  <a className="footer__right-col-link">Kopersbescherming</a>
                  <a className="footer__right-col-link">Algemene voorwaarden</a>
                  <a className="footer__right-col-link">Retourvoorwaarden</a>
                </div>
              </div>
              <div className="footer__right-col">
                <div
                  className={
                    "footer__right-col-btn " +
                    (isActive === "2" ? "active" : "")
                  }
                  onClick={() => {
                    if (isActive === "2") {
                      setIsActive(null);
                    } else {
                      setIsActive("2");
                    }
                  }}
                >
                  <h6 className="xsmr">Klantenservice</h6>
                  {chevronBottom}
                </div>
                <div
                  className={
                    "footer__right-col-content " +
                    (isActive === "2" ? "active" : "")
                  }
                >
                  <a className="footer__right-col-link">Helpcentrum</a>
                  <a className="footer__right-col-link">Klachtencentrum</a>
                </div>
              </div>
              <div className="footer__right-col">
                <div
                  className={
                    "footer__right-col-btn " +
                    (isActive === "3" ? "active" : "")
                  }
                  onClick={() => {
                    if (isActive === "3") {
                      setIsActive(null);
                    } else {
                      setIsActive("3");
                    }
                  }}
                >
                  <h6 className="xsmr">Werk met ons samen</h6>
                  {chevronBottom}
                </div>
                <div
                  className={
                    "footer__right-col-content " +
                    (isActive === "3" ? "active" : "")
                  }
                >
                  <div className="footer__right-col-title">
                    Als best getest B.V
                  </div>
                  <a href="#" className="footer__right-col-extra">
                    support@als-best-getest.nl
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__left-text">
            <span>Als-best-getest.nl</span> is eigendom van{" "}
            <span>Bestgetest B.V</span> KVK nr:
          </div>
        </div>
      </div>
    </div>
  );
}

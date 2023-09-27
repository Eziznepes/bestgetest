"use client";
import { useState } from "react";

export default function ContentMain() {
  const [amount, setAmount] = useState(1);
  return (
    <div className="content big">
      <div className="contentEmail crt">
        <div className="contentEmail__detail">
          <button className="contentEmail__detail-btn">Wijzigen</button>
          <div className="contentEmail__detail-col">
            <h6>Hier gaan we bezorgen</h6>
            <h6 className="sm">Weesperzijde 110 E</h6>
            <h6 className="sm">1091 EN, Amsterdam</h6>
            <h6 className="sm">Nederland</h6>
          </div>
          <div className="contentEmail__detail-col">
            <h6>Contactgegevens</h6>
            <h6 className="sm">Voornaam achternaam</h6>
            <h6 className="sm">l.lawluit@gmail.com</h6>
            <h6 className="sm">06442334343</h6>
          </div>
        </div>
        <h5 className="uniq">Winkelwagen</h5>
        <div className="contentEmail__box">
          <div className="contentEmail__box-row">
            <div className="contentEmail__product">
              <div className="contentEmail__product-image">
                <div className="contentEmail__product-image-inner">
                  <img src="images/product/1.png" alt="" />
                </div>
              </div>
              <div className="contentEmail__product-content">
                <h6 className="sm">Hi-Fi Bausus - Noise cancelling</h6>
                <p className="sm">Kleur: Gebroken wit / Taupe</p>
              </div>
            </div>
            <div className="contentEmail__info">
              <div className="contentEmail__info-row">
                <p className="sm">€ 249,-</p>
                <h6 className="sm">€ 99,-</h6>
              </div>
              <div className="contentEmail__spinbox-outer">
                <p className="sm">Verwijder</p>
                <div className="contentEmail__spinbox">
                  <div
                    className="contentEmail__spinbox-opr"
                    onClick={() => {
                      if (!(amount - 1 === 0)) {
                        setAmount(amount - 1);
                      }
                    }}
                  >
                    -
                  </div>
                  <div className="contentEmail__spinbox-number">{amount}</div>
                  <div
                    className="contentEmail__spinbox-opr"
                    onClick={() => setAmount(amount + 1)}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contentEmail__box-row">
            <h6 className="xsm">Bezorging</h6>
            <h6 className="xsm">Gratis</h6>
          </div>
          <div className="contentEmail__box-row">
            <div className="contentEmail__box-row-left">
              <h6 className="sm">Totaalbedrag</h6>
              <p>Inclusief BTW</p>
            </div>
            <div className="contentEmail__box-row-right">
              <h6>€ 99,-</h6>
            </div>
          </div>
          <button className="contentEmail__btn">Wijzig winkelwagen</button>
        </div>
        <div className="contentEmail__ship">
          <div className="contentEmail__ship-item">
            <img src="images/icons/green.png" alt="" />
            <h6 className="xsm">
              <span>Gratis bezorgd</span> binnen 12 dagen
            </h6>
          </div>
          <div className="contentEmail__ship-item">
            <img src="images/icons/package.png" alt="" />
            <h6 className="xsm">
              Verwachte leverdag: <span>25 augustus</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

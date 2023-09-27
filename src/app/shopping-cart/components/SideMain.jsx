"use client";
import React from "react";

export default function SideMain() {
  return (
    <div className="side big">
      <div className="sideCart">
        <div className="sideCart__inner">
          <h5 className="uniq">Samenvatting</h5>
          <div className="sideCart__row">
            <h6 className="sm">Totale artikelkosten</h6>
            <h6 className="sm">€ 99,-</h6>
          </div>
          <div className="sideCart__row">
            <div className="sideCart__row-promo">
              <img src="images/icons/gift.png" alt="" />
              <h6 className="sm">Promotiecode</h6>
            </div>
            <h6 className="uniq">Voer de code hier in</h6>
          </div>
          <div className="sideCart__row">
            <h6 className="sm">Verzendkosten</h6>
            <h6 className="xsm">Gratis</h6>
          </div>
          <div className="sideCart__info">
            <div className="sideCart__info-left">
              <h5 className="xsm">Alles bij elkaar</h5>
              <p className="sm">Inclusief BTW</p>
            </div>
            <h4 className="big">€ 99,-</h4>
          </div>
          <button className="button primary">Bestellen</button>
        </div>
        <div className="sideCart__payment">
          <div className="sideCart__payment-title">
            Betaal veilig via
            <img src="images/icons/stripe.png" alt="" />
          </div>
          <div className="sideCart__payment-items">
            <div className="sideCart__payment-item">
              <img src="images/icons/ideal-logo.png" alt="" />
            </div>
            <div className="sideCart__payment-item">
              <img src="images/icons/visa.png" alt="" />
            </div>
            <div className="sideCart__payment-item">
              <img src="images/icons/masterCard.png" alt="" />
            </div>
            <div className="sideCart__payment-item">
              <img src="images/icons/americanExp.png" alt="" />
            </div>
            <div className="sideCart__payment-item">
              <img src="images/icons/sepa.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

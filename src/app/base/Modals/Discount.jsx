import React from "react";
import Modal from "./Modal";
import { cancelIcon } from "../SVG";

export default function Discount({ setDiscount }) {
  return (
    <Modal setModal={setDiscount} addClass={"light"}>
      <div className="modalDiscount">
        <div
          className="modalDiscount__close"
          onClick={() => setDiscount(false)}
        >
          {cancelIcon}
        </div>
        <div className="modalDiscount__bg">
          <img src="images/modals/discountBg.png" alt="discountBg" />
        </div>
        <div className="modalDiscount__inner">
          <div className="modalDiscount__image">
            <div className="modalDiscount__image-inner">
              <img src="images/product/1.png" alt="" />
            </div>
          </div>
          <h2 className="sm">
            Krijg <span>10% extra korting</span>
          </h2>
          <p className="uniq">
            Schrijf je in voor onze nieuwsbrief en ontvang 10% extra korting op
            je huidige bestelling!
          </p>
          <div className="modalDiscount__input">
            <input type="text" placeholder="Vul hier je e-mail adres in" />
          </div>
          <div className="modalDiscount__btns">
            <button className="button primary">Inschrijven</button>
            <button className="modalDiscount__btn">Nee bedankt</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

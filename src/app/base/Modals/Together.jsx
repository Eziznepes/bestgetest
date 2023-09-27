import React from "react";
import Modal from "./Modal";
import { cancelIcon } from "../SVG";

const togetherList = [
  {
    id: "1",
    image: "images/together/together-1.png",
    num: "2x",
    price: (
      <>
        €29,95 <span>€119,95</span>
      </>
    ),
  },
  {
    id: "1",
    image: "images/together/together-2.png",
    num: "5x",
    price: (
      <>
        €69,95 <span>€299,95</span>
      </>
    ),
  },
  {
    id: "1",
    image: "images/together/together-3.png",
    num: "10x",
    price: (
      <>
        €109,95 <span>€599,95</span>
      </>
    ),
  },
];

export default function Together({ setTogether }) {
  return (
    <Modal setModal={setTogether}>
      <div className="modalTogether">
        <div className="modalTogether__inner">
          <div className="modalTogether__top">
            <div className="modalTogether__top-icon">
              <img src="images/icons/verified.png" alt="" />
            </div>
            <div className="modalTogether__top-content">
              <h6 className="xbig">
                Het artikel is toegevoegd aan je winkelwagen
              </h6>
              <p>
                Top Kwaliteit Led Strip 5050 RGB - Led Strip 5 Meter Led Strips
                Met 44 Keys Afstandsbediening Met Batterij aansluiting
              </p>
              <div className="modalTogether__top-btns">
                <button className="button primary">Bestelling afronden</button>
              <button className="modalTogether__top-btn">Verder winkelen</button>
              </div>
            </div>
          </div>
          <div className="modalTogether__bot">
            <h6 className="xbig">
              Welkom bij bestgetest! Voordat je afrekent...
            </h6>
            <p>
              Leuk dat je bij ons rondsnuffelt voor de laatste koopjes. Als
              blijk van waardering hebben wij een keuze uit{" "}
              <span>3 eenmalige aanbiedingen</span> voor jou! Kies 1 van de
              volgende aanbiedingen:
            </p>
            <div className="modalTogether__bot-items">
              {togetherList.map((item, index) => {
                return (
                  <div className="modalTogether__bot-item" key={index}>
                    <div className="modalTogether__bot-item-image">
                      <img src={item.image} alt="" />
                      <div className="modalTogether__bot-item-num">{item.num}</div>
                    </div>
                    <div className="modalTogether__bot-item-price">
                      <h4 className="prc">{item.price}</h4>
                    </div>
                    <button className="button primary">
                      <span>+</span>
                      Toevoegen
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

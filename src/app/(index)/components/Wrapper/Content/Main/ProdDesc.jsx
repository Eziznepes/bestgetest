"use client";
import React, { useState } from "react";

export default function ProdDesc() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="contentMain__desc">
      <div className={"contentMain__desc-inner " + (isActive ? "active" : "")}>
        <h5>
          Productomschrijving <span>+</span>
        </h5>
        <p className="big">
          Op zoek naar een draadloze koptelefoon met noise cancelling? Zoek dan
          niet verder. De Bausus 2.0 is ziet er niet alleen fantastisch uit, de
          draadloze koptelefoon beschikt over de nieuwste versie van noise
          cancelling en onderdrukt dus geluiden in uw omgeving.
        </p>
        <div className="contentMain__desc-image">
          <img src="images/product/desc.png" alt="" />
          <div className="contentMain__desc-image-text">
            <div className="contentMain__desc-image-text-title">
              <span>Bowie</span> 2.0
            </div>
            <div className="contentMain__desc-image-text-subtitle">
              70 uur <span>luistergenot</span>
            </div>
          </div>
        </div>
        <h6 className="xbig mbs">
          Bausus Howie 2.0 - Draadloze koptelefoon met bluetooth
        </h6>
        <p className="big">
          Op zoek naar een draadloze koptelefoon met noise cancelling? Zoek dan
          niet verder. De Bausus 2.0 is ziet er niet alleen fantastisch uit, de
          draadloze koptelefoon beschikt over de nieuwste versie van noise
          cancelling en onderdrukt dus geluiden in uw omgeving.
        </p>
        <h6 className="xbig">De eigenschappen</h6>
        <div className="contentMain__desc-items">
          <div className="contentMain__desc-item">
            <div className="contentMain__desc-item-image">
              <img src="images/product/desc-1.png" alt="" />
            </div>
          </div>
          <div className="contentMain__desc-item">
            <div className="contentMain__desc-item-image">
              <img src="images/product/desc-2.png" alt="" />
            </div>
          </div>
          <div className="contentMain__desc-item">
            <div className="contentMain__desc-item-image">
              <img src="images/product/desc-3.png" alt="" />
            </div>
          </div>
        </div>
        <h6 className="xbig">Unboxing video</h6>
        <div className="contentMain__desc-iframe">
          <iframe
            width="1280"
            height="851"
            src="https://www.youtube.com/embed/sCPEJiI1jmc"
            title="Скриптонит feat Jillzay, Райда, Truwer. Лучшие трэки скриптонита. Рэп, вечерний вайб"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <button
        className="button secondary"
        onClick={() => setIsActive(!isActive)}
      >
        Lees meer
      </button>
    </div>
  );
}

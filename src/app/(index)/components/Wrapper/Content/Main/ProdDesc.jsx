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

import React from "react";
import Modal from "./Modal";
import { cancelIcon, checkSvg } from "../SVG";

export default function Promo({ setPromo }) {
  return (
    <Modal setModal={setPromo}>
      <div className="modalPromo">
        <div className="modalPromo__close" onClick={() => setPromo(false)}>
          {cancelIcon}
        </div>
        <div className="modalPromo__inner">
          <h5 className="sm">Promotiecode verzilveren</h5>
          <p>
            Heb je een promotiecode ontvangen? Dan kun je deze hieronder
            invullen. De korting wordt automatisch verwerkt in je winkelwagen.
          </p>
          <h6>Vul hier je promotiecode in</h6>
          <div className="input">
            <input type="text" placeholder="Promotiecode" />
            {checkSvg}
          </div>
          <button className="button primary">Bevestigen</button>
        </div>
      </div>
    </Modal>
  );
}

"use client";
import React from "react";

export default function SideMain() {
  return (
    <div className="side big">
      <div className="sideEmail">
        <div className="sideEmail__inner">
          <h5 className="sm">Uw e-mail adres</h5>
          <p className="sm">
            Vul je e-mail adres in zodat wij je op de hoogte kunnen houden van
            je bestelling. Je ontvangt ook je betalingsbewijs per e-mail.
          </p>
          <div className="input__outer">
            <label htmlFor="">E-mailadres</label>
            <div className="input">
              <input type="text" placeholder="Vul hier uw e-mail adres in" />
            </div>
          </div>
          <button className="button primary">Doorgaan</button>
          <div className="sideEmail__link">
            Door te klikken op “Doorgaan” bevestig je dat je de{" "}
            <a href="#">algemene voorwaarden</a> hebt gelezen en deze als
            zodanig accepteert.
          </div>
        </div>
      </div>
    </div>
  );
}

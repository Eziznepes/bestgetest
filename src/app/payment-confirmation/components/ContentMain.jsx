"use client";
import CardItem from "@/app/overview/components/Wrapper/CardItem";
import { useState } from "react";
import { ConfProdList, ConfSuperList } from "./ConfModul";
import { checkSvg } from "@/app/base/SVG";

export default function ContentMain() {
  const [amount, setAmount] = useState(1);
  return (
    <div className="content big">
      <div className="contentConfirm">
        <div className="contentConfirm__inner">
          <div className="contentConfirm__inner-title">
            <h4>Betaling succesvol verwerkt</h4>
            <img src="images/icons/tick.png" alt="" />
          </div>
          <h6 className="sm">
            Bedankt voor je bestelling bij als-best-getest.nl!
          </h6>
          <p className="uniq">
            Wij gaan direct aan de slag met jouw bestelling. Ter bevestiging heb
            je zojuist een e-mail ontvangen met de orderbevestiging en
            ordernummer.
          </p>
          <h5 className="uniq">Wat gebeurt er nu?</h5>
          <p className="uniq">
            Je bestelling wordt momenteel voorbereid voor verzending. Omdat dit
            direct vanaf de fabriek gebeurt kan het enkele dagen duren voor je
            het track & trace nummer ontvangt via het e-mail adres dat je hebt
            opgegeven.
          </p>
        </div>
        <div className="contentConfirm__super">
          <div className="contentConfirm__super-tag">bekijk ook eens</div>
          <div className="cards">
            {ConfSuperList.map((item, index) => {
              return <CardItem itemData={item} key={index} />;
            })}
          </div>
        </div>
        <div className="contentConfirm__main">
          <div className="cards">
            {ConfProdList.map((item, index) => {
              return <CardItem itemData={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

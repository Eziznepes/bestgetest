import React from "react";
import ContentSpecItems from "./ContentSpecItems";

const specList = [
  {
    id: "1",
    title: "Product details",
    items: [
      {
        id: "1",
        title: "Artikelnummer",
        value: "892995",
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
      {
        id: "2",
        title: "Fabrikantnummer",
        value: "746433",
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
      {
        id: "3",
        title: "Merk",
        value: "Bauseus",
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
      {
        id: "4",
        title: "Garantie",
        value: "2 jaar",
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
    ],
  },
  {
    id: "2",
    title: "Kenmerken",
    items: [
      {
        id: "1",
        title: "Gewicht in gram",
        value: "252 g",
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
      {
        id: "2",
        title: "Kleur",
        value: "Zwart",
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
      {
        id: "3",
        title: "Materiaal",
        value: "Kunststof",
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
      {
        id: "4",
        title: "Ingebouwde microfoon",
        tick: true,
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
      {
        id: "5",
        title: "Doelgroep",
        value: "Volwassenen",
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
    ],
  },
  {
    id: "3",
    title: "Geluid",
    items: [
      {
        id: "1",
        title: "Geluidsweergave",
        value: "Mono, Stereo",
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
      {
        id: "2",
        title: "Hi-res audio",
        tick: true,
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
      {
        id: "3",
        title: "Volumebegrenzing",
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
      {
        id: "4",
        title: "Actieve hoofdtelefoon",
        tick: true,
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
      {
        id: "5",
        title: "Noise cancelling",
        tick: true,
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
      {
        id: "6",
        title: "Kwaliteit noise cancelling",
        value: "Middenklasse",
        desc: "Elk artikel heeft een uniek nummer waardoor het makkelijker is om het product te indentificeren.",
      },
    ],
  },
];

export default function ContentSpec() {
  return (
    <div className="content">
      <div className="contentSpec">
        <h5>Specificaties</h5>
        <div className="contentSpec__inner">
          {specList.map((item, index) => {
            return <ContentSpecItems {...item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

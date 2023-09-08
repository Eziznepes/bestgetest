import React from "react";

const list = [
  {
    id: "1",
    image: "images/icons/rating.png",
    title: "De beste prijzen",
    desc: "We bieden de beste prijzen voor meer dan 200 producten in Nederland",
  },
  {
    id: "2",
    image: "images/icons/refund.png",
    title: "Geld terug garantie",
    desc: "Betaal gemakkelijk en veilig via Ideal, creditcard of SEPA via stripe",
  },
  {
    id: "3",
    image: "images/icons/credit-card.png",
    title: "Veilig betalen",
    desc: "Betaal gemakkelijk en veilig via Ideal, creditcard of SEPA via stripe",
  },
  {
    id: "4",
    image: "images/icons/verify.png",
    title: "Webwinkel Keurmerk",
    desc: "Wij staan klaar om u te helpen bij klachten of persoonlijke hulp.",
  },
  {
    id: "5",
    image: "images/icons/users.png",
    title: "Klantenservice",
    desc: "Wij staan klaar om u te helpen bij klachten of persoonlijke hulp.",
  },
  {
    id: "6",
    image: "images/icons/eco-friendly.png",
    title: "Duurzaam bezorgd",
    desc: "Onze producten worden direct uit de fabriek aan u verzonden via de trein.",
  },
];

export default function Features() {
  return (
    <div className="features">
      <div className="auto__container">
        <div className="features__inner">
          {list.map((item, index) => {
            return <FeaturesItem {...item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
const FeaturesItem = (props) => {
  return (
    <div className="features__item">
      <div className="features__item-image">
        <img src={props.image} alt="" />
      </div>
      <h6 className="xsm">{props.title}</h6>
      <p className="xsm">{props.desc}</p>
    </div>
  );
};

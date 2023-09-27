import React from "react";

export default function CardItem({ itemData }) {
  return (
    <div className="cardsItem">
      <div className="cardsItem__image">
        <div className="cardsItem__image-inner">
          <img src={itemData.image} alt="" />
        </div>
      </div>
      <div className="cardsItem__content">
        <h6 className="xbig">{itemData.price}</h6>
        <h6 className="xsm">{itemData.title}</h6>
        <div className="cardsItem__content-row">
          <p className="sm">{itemData.selled}</p>
          <div className="cardsItem__content-rating">
            <img src="images/icons/star.png" alt="" />
            <p className="sm">{itemData.rating}</p>
          </div>
        </div>
        {itemData.shipment && (
          <div className="cardsItem__content-ship">
            <p className="sm">{itemData.shipment}</p>
          </div>
        )}
      </div>
    </div>
  );
}

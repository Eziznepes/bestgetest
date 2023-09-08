import React from "react";

export default function ProsCons() {
  return (
    <div className="contentMain__pros">
      <h5>De voor en nadelen</h5>
      <div className="contentMain__pros-inner">
        <div className="contentMain__pros-col">
          <h5 className="sm">Pluspunten</h5>
          <div className="contentMain__pros-items">
            <div className="contentMain__pros-item">
              <div className="contentMain__pros-item-image">
                <img src="images/icons/starSoloFilled.png" alt="" />
              </div>
              <h6 className="xbig">Goede prijs/kwaliteits verhouding</h6>
            </div>
            <div className="contentMain__pros-item">
              <div className="contentMain__pros-item-image">
                <img src="images/icons/starSoloFilled.png" alt="" />
              </div>
              <h6 className="xbig">Prachtig design</h6>
            </div>
            <div className="contentMain__pros-item">
              <div className="contentMain__pros-item-image">
                <img src="images/icons/starSoloFilled.png" alt="" />
              </div>
              <h6 className="xbig">Noise cancelling voor ruisonderdrukking</h6>
            </div>
            <div className="contentMain__pros-item">
              <div className="contentMain__pros-item-image">
                <img src="images/icons/starSoloFilled.png" alt="" />
              </div>
              <h6 className="xbig">De koptelefoon is niet waterbestendig</h6>
            </div>
          </div>
        </div>
        <div className="contentMain__pros-col">
          <h5 className="sm">Minpunten</h5>
          <div className="contentMain__pros-items">
            <div className="contentMain__pros-item">
              <div className="contentMain__pros-item-image">
                <img src="images/icons/starSoloEmpty.png" alt="" />
              </div>
              <h6 className="xbig">Niet waterdicht</h6>
            </div>
            <div className="contentMain__pros-item">
              <div className="contentMain__pros-item-image">
                <img src="images/icons/starSoloEmpty.png" alt="" />
              </div>
              <h6 className="xbig">Geen oplader meegeleverd</h6>
            </div>
            <div className="contentMain__pros-item">
              <div className="contentMain__pros-item-image">
                <img src="images/icons/starSoloEmpty.png" alt="" />
              </div>
              <h6 className="xbig">Niet opklapbaar</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

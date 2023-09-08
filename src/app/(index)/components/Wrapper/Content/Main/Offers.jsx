import { cartPlusIcon } from "@/app/base/SVG";
import React from "react";

const list = [
  {
    id: "1",
    image1: "images/product/1.png",
    image2: "images/product/1.png",
    price: "359,95",
    priceAfter: "159,95",
    tag: "Bundelvoordeel",
    class: "orange",
  },
  {
    id: "2",
    image1: "images/product/1.png",
    image2: "images/product/5.png",
    price: "209,95",
    priceAfter: "109",
    tag: "Vaak samen gekocht",
    class: "blue",
  },
];

export default function Offers() {
  return (
    <div className="contentMain__offers">
      <div className="contentMain__offers-inner">
        {list.map((item, index) => {
          return (
            <div className="contentMain__offers-col" key={index}>
              {item.tag && (
                <div className={"contentMain__offers-col-tag " + item.class}>
                  {item.tag}
                </div>
              )}
              <div className="contentMain__offers-row">
                <div className="contentMain__offers-row-image">
                  <div className="contentMain__offers-row-image-inner">
                    <img src={item.image1} alt="" />
                  </div>
                </div>
                <div className="contentMain__offers-row-plus">+</div>
                <div className="contentMain__offers-row-image">
                  <div className="contentMain__offers-row-image-inner">
                    <img src={item.image2} alt="" />
                  </div>
                </div>
              </div>
              <div className="contentMain__offers-info">
                <div className="contentMain__offers-price">
                  <h4 className="prc">
                    €{item.priceAfter} <span>€{item.price}</span>
                  </h4>
                </div>
                <div className="contentMain__offers-cart">{cartPlusIcon}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

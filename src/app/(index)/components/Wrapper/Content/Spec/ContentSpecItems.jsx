import { checkSvg, infoIcon } from "@/app/base/SVG";
import React from "react";

export default function ContentSpecItems(props) {
  return (
    <div className="contentSpec__items">
      <h5 className="xsm">{props.title}</h5>
      <div className="contentSpec__items-inner">
        {props.items.map((item, index) => {
          return <Item {...item} key={index} />;
        })}
      </div>
    </div>
  );
}
const Item = (props) => {
  return (
    <div className="contentSpec__item">
      <div className="contentSpec__item-left">
        <div className="contentSpec__item-tooltip">
          <div className="contentSpec__item-tooltip-icon">{infoIcon}</div>
          <div className="contentSpec__item-tooltip-content">
            <h6>{props.title}</h6>
            <p>{props.desc}</p>
          </div>
        </div>
        <p className="sm">{props.title}</p>
      </div>
      <div className="contentSpec__item-right">
        {props.value && <p className="sm">{props.value}</p>}
        {props.tick && checkSvg}
      </div>
    </div>
  );
};

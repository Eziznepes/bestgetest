"use client";
import { questionIcon } from "@/app/base/SVG";
import { formatCurrency } from "@/app/base/globalFunc";
import React, { useEffect, useState } from "react";

export default function SideMain({ product }) {
  const [amount, setAmount] = useState(1);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  const onScroll = () => {
    console.log(document.getElementById("header").offsetHeight);
    if (
      window.scrollY >=
        document.getElementById("wrapper1").offsetTop -
          document.getElementById("header").offsetHeight &&
      window.scrollY <
        document.getElementById("wrapper2").offsetTop -
          document.getElementById("header").offsetHeight
    ) {
      document.getElementById("side1").classList.add("sticky");
      // document.getElementById("side2").classList.remove("sticky2");
    } else if (
      window.scrollY >=
      document.getElementById("wrapper2").offsetTop -
        document.getElementById("header").offsetHeight
    ) {
      document.getElementById("side1").classList.remove("sticky");
      // document.getElementById("side2").classList.add("sticky2");
    } else {
      document.getElementById("side1").classList.remove("sticky");
      // document.getElementById("side2").classList.remove("sticky2");
    }
  };
  return (
    <div className="side" id="side1">
      <div className="sideMain">
        <div className="sideMain__title">
          <h6 className="sm">Wordt verzonden naar</h6>
          <p>Nederland</p>
        </div>
        <div className="sideMain__deliver">
          <div className="sideMain__deliver-left">
            <div className="sideMain__deliver-image">
              <img src="images/delivery.png" alt="" />
            </div>
            <span>
              <strong>Gratis ECO verzending</strong> Levering binnen 12 dagen
            </span>
          </div>
          <div className={"sideMain__tooltip"}>
            <div className="sideMain__tooltip-icon">{questionIcon}</div>
            <div className="sideMain__tooltip-content">
              <div className="sideMain__tooltip-content-title">
                <img src="images/eco.png" alt="" />
                <span>Bezorging</span>
              </div>
              <p>
                Wij maken gebruik van duurzame bezorging. Hierdoor zijn
                producten soms iets langer onderweg.
              </p>
            </div>
          </div>
        </div>
        <div className="sideMain__levering">
          <div className="sideMain__levering-title">
            <h6 className="xsm">Levering</h6>
          </div>
          <div className="sideMain__levering-content">
            <h6 className="xsm">
              Levering verwacht op: <span>24 augustus</span>
            </h6>
          </div>
        </div>
        <div className="sideMain__service">
          <div className="sideMain__service-title">
            <h6 className="xsm">Service</h6>
          </div>
          <div className="sideMain__service-content">
            <h6 className="xsm">
              <span>Gratis retourneren </span>
            </h6>
            <h6 className="xsm">30 dagen bedenktijd</h6>
            <h6 className="xsm">Veilig en eenvoudig betalen</h6>
          </div>
        </div>
        <div className="sideMain__amount">
          <div className="sideMain__amount-title">
            <h6 className="xsm">Aantal</h6>
          </div>
          <div className="sideMain__amount-content">
            <div className="sideMain__amount-spinbox">
              <div
                className="sideMain__amount-spinbox-opr"
                onClick={() => {
                  if (!(amount - 1 === 0)) {
                    setAmount(amount - 1);
                  }
                }}
              >
                -
              </div>
              <div className="sideMain__amount-spinbox-number">{amount}</div>
              <div
                className="sideMain__amount-spinbox-opr"
                onClick={() => setAmount(amount + 1)}
              >
                +
              </div>
            </div>
            <h4 className="prc">
              {product.off ? (
                <>
                  €
                  {formatCurrency(
                    (
                      ((parseFloat(product.price) * (100 - product.off)) /
                        100) *
                      amount
                    )
                      .toFixed(2)
                      .toString()
                  )}{" "}
                  <span>
                    €
                    {formatCurrency(
                      (product.price * amount).toFixed(2).toString()
                    )}
                  </span>
                </>
              ) : (
                <>
                  €
                  {formatCurrency(
                    (product.price * amount).toFixed(2).toString()
                  )}
                </>
              )}
            </h4>
          </div>
        </div>
        <div className="sideMain__btns">
          <button className="button primary">Nu kopen</button>
          <button className="button primary light">In de winkelwagen</button>
        </div>
      </div>
    </div>
  );
}

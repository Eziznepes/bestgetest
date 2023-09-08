import { heartIcon2, shipmentIcon } from "@/app/base/SVG";
import { formatCurrency } from "@/app/base/globalFunc";
import React, { useState } from "react";
import Slider from "react-slick";

export default function Product({ product }) {
  const [like, setLike] = useState(false);
  const [type, setType] = useState(product.types[1]);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  const settings2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    // responsive: [
    //   {
    //     breakpoint: 540,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //       arrows: false,
    //     },
    //   },
    // ],
  };
  return (
    <div className="contentMain__product">
      <div className="contentMain__product-images">
        <div className="contentMain__product-slider">
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
          >
            {type.images.map((item, index) => {
              return (
                <div className="contentMain__product-image" key={index}>
                  <div className="contentMain__product-image-title">
                    <div className="contentMain__product-image-title-name">
                      {product.name}
                      <span>TM</span>
                    </div>
                    <div className="contentMain__product-image-title-extra">
                      {product.subname}
                    </div>
                  </div>
                  <img src={item} alt="" />
                  {product.bluetooth && (
                    <div className="contentMain__product-image-botleft">
                      <img src="images/bluetooth.png" alt="" />
                    </div>
                  )}
                  {product.is_4k && (
                    <div className="contentMain__product-image-botright">
                      <img src="images/4k.png" alt="" />
                    </div>
                  )}
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="contentMain__product-others">
          <Slider
            {...settings2}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
          >
            {type.images.map((item, index) => {
              return (
                <div className="contentMain__product-others-item" key={index}>
                  <div className="contentMain__product-others-item-image">
                    <img src={item} alt="" />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="contentMain__product-details">
        <h6 className="big">{product.title}</h6>
        <p>{product.desc}</p>
        <div className="contentMain__product-details-row">
          <div className="contentMain__product-details-row-review">
            <div className="stars">
              <div className="stars__empty">
                <img src={"/images/stars.png"} alt="stars" />
              </div>
              <div
                className="stars__filled"
                style={{ width: `${(product.rating * 100) / 5}%` }}
              >
                <img src={"/images/stars-filled.png"} alt="stars" />
              </div>
            </div>
            <div className="contentMain__product-details-row-text">
              {product.rating} <span>({product.reviews}) Reviews</span>
            </div>
          </div>
          {product.is_popular && (
            <div className="contentMain__product-details-row-tag">Populair</div>
          )}
        </div>
        <div className="contentMain__product-details-ship">
          {shipmentIcon}
          Gratis levering <span>in 12 dagen</span> gratis retourneren
        </div>
        <div className="contentMain__product-details-info">
          <div className="contentMain__product-details-price">
            <div className="contentMain__product-details-price-inner">
              <h4 className="prc">
                {product.off ? (
                  <>
                    €
                    {formatCurrency(
                      ((parseFloat(product.price) * (100 - product.off)) / 100)
                        .toFixed(2)
                        .toString()
                    )}{" "}
                    <span>€{formatCurrency(product.price.toString())}</span>
                  </>
                ) : (
                  <>€{formatCurrency(product.price.toFixed(2).toString())}</>
                )}
              </h4>
              {product.off && (
                <div className="contentMain__product-details-price-off">
                  - {product.off}%
                </div>
              )}
            </div>

            <div className="contentMain__product-details-price-include">
              Prijs inclusief BTW
            </div>
          </div>
          <div
            onClick={() => setLike(!like)}
            className={
              "contentMain__product-details-heart " + (like ? "active" : "")
            }
          >
            {heartIcon2}
          </div>
        </div>
        <div className="contentMain__product-details-type">
          {product.types.map((item, index) => {
            return (
              <div
                className={
                  "contentMain__product-details-type-item " +
                  (type?.id === item.id ? "active" : "")
                }
                onClick={() => setType(item)}
                key={index}
              >
                <div className="contentMain__product-details-type-item-image">
                  <img src={item.images[0]} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

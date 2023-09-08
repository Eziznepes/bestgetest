import React from "react";

export default function ReviewItem(props) {
  return (
    <div className="contentReview__item">
      <div className="contentReview__item-rating">
        <div className="stars">
          <div className="stars__empty">
            <img src={"/images/icons/starsCircleEmpty.png"} alt="stars" />
          </div>
          <div
            className="stars__filled"
            style={{ width: `${(props.rate * 100) / 10}%` }}
          >
            <img src={"/images/icons/starsCircleFilled.png"} alt="stars" />
          </div>
        </div>
        <div className="contentReview__item-rating-text">{props.rate}/10</div>
      </div>
      <h6 className="xbig">Goed alternatief voor een goede prijs</h6>
      <div className="contentReview__item-reviews">
        {props.reviews.map((item, index) => {
          return (
            <div className="contentReview__item-review" key={index}>
              <div
                className={
                  "contentReview__item-review-icon " + (item.good ? "good" : "")
                }
              >
                <span> {item.good ? "+" : "-"}</span>
              </div>
              <h6 className="sm">{item.review}</h6>
            </div>
          );
        })}
      </div>
      <p className="contentReview__item-desc">{props.desc}</p>
      <p className="contentReview__item-uniq">Marieke, koptelefoon fanaat</p>
    </div>
  );
}

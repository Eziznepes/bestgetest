"use client";
import React, { useEffect, useState } from "react";

const reviews = [
  { id: "1", star: 5, reviews: 34 },
  { id: "2", star: 4, reviews: 17 },
  { id: "3", star: 3, reviews: 1 },
  { id: "4", star: 2, reviews: 0 },
  { id: "5", star: 1, reviews: 1 },
];

export default function SideReview() {
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    setTotalCount(0);
    let totalCount = 0;
    reviews.forEach((item) => {
      totalCount = totalCount + item.reviews;
    });
    setTotalCount(totalCount);
  }, []);

  return (
    <div className="side" id="side2">
      <div className="sideReview">
        <h5>Review overzicht</h5>
        <div className="sideReview__rating">
          <div className="sideReview__rating-stars">
            <div className="sideReview__rating-stars-inner">
              <img src="images/icons/stars-review.png" alt="" />
            </div>
          </div>
          <div className="sideReview__rating-text">8,9 / 10</div>
        </div>
        <h5 className="sm">Beoordeling</h5>
        <div className="sideReview__stars">
          {reviews.map((item, index) => {
            return (
              <div className="sideReview__stars-item" key={index}>
                <p>
                  {item.star} {item.star === 1 ? "ster" : "sterren"}
                </p>
                <div className="sideReview__stars-item-progress">
                  <span
                    style={{ width: `${(item.reviews * 100) / totalCount}%` }}
                  ></span>
                </div>
                <p>
                  {item.reviews} {item.star === 1 ? "review" : "reviews"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

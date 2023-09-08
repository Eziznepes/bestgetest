"use client";
import { verifiedIcon } from "@/app/base/SVG";
import React, { useState } from "react";
import ReviewItem from "./ReviewItem";

const specReview = {
  id: "1",
  avatar: "images/avatar.png",
  reviews: [
    {
      id: "1",
      review: "Mooi modern design",
      good: true,
    },
    {
      id: "2",
      review: "Geluids onderdrukking en ruimtelijk geluid",
      good: true,
    },
    {
      id: "3",
      review: "Zuiver geluid",
      good: true,
    },
    {
      id: "4",
      review: "Mooi modern design",
      good: true,
    },
  ],
  desc: "De bausus 2.0 is krachtiger dan zijn voorganger, met bluetooth 5.2 voor een snelle connectie en 360 graden geluid. Het aansluiten van de koptelefoon gaat vrij gemakkelijk en binnen no time is de koptelefoon opgeladen. De bausus 2.0 is krachtiger dan zijn voorganger, met bluetooth 5.2 voor een snelle connectie en 360 graden geluid. Het aansluiten van de koptelefoon gaat vrij gemakkelijk en binnen no time is de koptelefoon opgeladen. De bausus 2.0 is krachtiger dan zijn voorganger, met bluetooth 5.2 voor een snelle connectie en 360 graden geluid. Het aansluiten van de koptelefoon gaat vrij gemakkelijk en binnen no time is de koptelefoon opgeladen.",
  images: ["images/review/1.jpg", "images/review/2.jpg", "images/review/3.jpg"],
};

const ReviewsList = [
  {
    id: "1",
    rate: 9.2,
    reviews: [
      { id: "1", review: "Mooi modern design", good: true },
      {
        id: "1",
        review: "Geluids onderdrukking en ruimtelijk geluid",
        good: true,
      },
      { id: "1", review: "Zuiver geluid", good: true },
      { id: "1", review: "Bezorging ietwat traag (10 dagen)", good: false },
    ],
    desc: "Direct uit de box te gebruiken, blij mee!",
  },
  {
    id: "2",
    rate: 9.2,
    reviews: [
      { id: "1", review: "Mooi modern design", good: true },
      {
        id: "1",
        review: "Geluids onderdrukking en ruimtelijk geluid",
        good: true,
      },
      { id: "1", review: "Zuiver geluid", good: true },
      { id: "1", review: "Bezorging ietwat traag (10 dagen)", good: false },
    ],
    desc: "Direct uit de box te gebruiken, blij mee!",
  },
  {
    id: "3",
    rate: 9.2,
    reviews: [
      { id: "1", review: "Mooi modern design", good: true },
      {
        id: "1",
        review: "Geluids onderdrukking en ruimtelijk geluid",
        good: true,
      },
      { id: "1", review: "Zuiver geluid", good: true },
      { id: "1", review: "Bezorging ietwat traag (10 dagen)", good: false },
    ],
    desc: "Direct uit de box te gebruiken, blij mee!",
  },
];

export default function Review() {
  const [showMore, setShowMore] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  return (
    <div className="contentReview__review">
      <h5>Reviews van gebruikers</h5>
      <p className="xbig">Bekijk wat anderen van de koptelefoon vinden.</p>
      <div className="contentReview__spec">
        <div className="contentReview__spec-avatar">
          <img src="images/avatar.png" alt="" />
        </div>
        <div className="contentReview__spec-verif">
          <div className="contentReview__spec-verif-tooltip">
            <div className="contentReview__spec-verif-tooltip-icon">
              {verifiedIcon}
            </div>
            <div className="contentReview__spec-verif-tooltip-content">
              <h6>{verifiedIcon} GeveriFieerd</h6>
              <p>
                Deze review is geschreven door een geverifieerde gebruiker met
                ervaring in koptelefoons.
              </p>
            </div>
          </div>
          <span>Onze specialistenreview</span>
        </div>
        <h6 className="xbig">Goed alternatief voor een goede prijs</h6>
        <div className="contentReview__spec-items">
          {specReview.reviews.map((item, index) => {
            return (
              <div className="contentReview__spec-item" key={index}>
                <div
                  className={
                    "contentReview__spec-item-icon " + (item.good ? "good" : "")
                  }
                >
                  <span> {item.good ? "+" : "-"}</span>
                </div>
                <h6 className="sm">{item.review}</h6>
              </div>
            );
          })}
        </div>
        <p className="contentReview__spec-desc">
          {showMore
            ? specReview.desc
            : specReview.desc.toString().substring(0, 217)}
          {specReview.desc && specReview.desc.length > 217 && (
            <button type="button" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Toon minder" : "Toon meer"}
            </button>
          )}
        </p>
        <div className="contentReview__spec-images">
          {specReview.images.map((item, index) => {
            return (
              <div className="contentReview__spec-images-item" key={index}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </div>
        <p className="contentReview__spec-uniq">Marieke, koptelefoon fanaat</p>
      </div>
      <div className="contentReview__items">
        <div className="contentReview__items-inner">
          {showReviews ? (
            ReviewsList.map((item, index) => {
              return <ReviewItem {...item} key={index} />;
            })
          ) : (
            <ReviewItem {...ReviewsList[0]} />
          )}
        </div>
        <button
          className="button secondary"
          onClick={() => setShowReviews(!showReviews)}
        >
          Meer reviews
        </button>
      </div>
    </div>
  );
}

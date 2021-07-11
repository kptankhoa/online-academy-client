import React from "react";

import './CourseRating.css'

export default function CourseRating({ratingPoint, ratedNumber}) {

  function renderRating(ratingPoint) {
    let rating = ratingPoint;
    let ret = [];
    while (rating > 0) {
      if (rating >= 1) {
        ret.push(<i key={rating} className="fas fa-star rating-icon"/>);
      } else if (rating >= 0.5) {
        ret.push(<i key={rating} className="fas fa-star-half-alt rating-icon"/>);
      } else {
        ret.push(<i key={rating} className="far fa-star rating-icon"/>);
      }
      rating--;
    }
    while (ret.length < 5) {
      ret.push(<i key={ret.length} className="far fa-star rating-icon"/>);
    }
    return ret;
  }

  return (
    <div className='rating d-flex align-items-center'>
      <div className='rating-point'>{ratingPoint}</div>
      <div className='ml-1 d-flex align-items-center'>
        {renderRating(ratingPoint)}
      </div>
      <div className='rating-number'>({ratedNumber})</div>
    </div>
  );
}

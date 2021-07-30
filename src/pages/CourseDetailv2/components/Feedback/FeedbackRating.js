import React from 'react';
import 'pages/CourseDetailv2/styles/FeedbackRating.css'

const FeedbackRating = ({ ratingPoint }) => {
  const renderRating = (ratingPoint) => {
    let rating = ratingPoint;
    let ret = [];
    while (rating > 0) {
      if (rating >= 1) {
        ret.push(1);
      } else if (rating >= 0.5) {
        ret.push(0.5);
      } else {
        ret.push(0);
      }
      rating--;
    }
    while (ret.length < 5) {
      ret.push(0);
    }

    return ret.map((value, index) => {
      return value === 1 ? <i key={index} className='fas fa-star rating-star' /> : (
        value === 0 ? <i key={index} className='far fa-star rating-star' /> :
          <i key={index} className='fas fa-star-half-alt rating-star' />
      )
    });
  }

  return (
    <div className='rating d-flex align-items-center'>
      <div className='d-flex align-items-center'>
        {renderRating(ratingPoint)}
      </div>
    </div>
  );
}

export default FeedbackRating;

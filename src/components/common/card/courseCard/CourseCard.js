import React from 'react';

import './CourseCard.css'
import CourseRating from "../../rating/CourseRating";
import {convertNumberWithComma} from "../../../../utils/commonUtils";

export default function CourseCard({courseData, className, style}) {
  const classes = 'card border-0 course-card ' + className;
  return (
    <div className={classes} style={style}>
      <button className='pure-button p-0 text-left' style={{color: '#454545'}}>
        <div className='image-wrapper'>
          <img className="card-img-top h-100" src={courseData.courseImage} alt='courseImage.jpg'/>
        </div>
        <div className='card-body p-0 py-2'>
          <div className='course-title font-weight-bold'>
            {courseData.courseName}
          </div>
          <div className='course-category'>{courseData.category.categoryName}</div>
          <div className='course-lecture'>{courseData.courseLecturers[0].fullName}</div>
          <CourseRating ratingPoint={courseData.ratingPoint} ratedNumber={courseData.ratedNumber}/>
          <div className='course-price font-weight-bold'>{convertNumberWithComma(courseData.price)} vnd</div>
        </div>
      </button>
    </div>
  );
}

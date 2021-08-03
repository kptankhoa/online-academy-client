import React from 'react';

import 'pages/CourseDetailv2/styles/CourseCard.css'
import {useHistory} from 'react-router-dom';
import CourseRating from 'components/common/rating/CourseRating';
import {convertNumberWithComma} from 'utils/commonUtils';

const CourseCard = ({courseData, className, style}) => {
  const classes = 'card border-0 course-card2 ' + className;
  const history = useHistory();

  function handleClick() {
    history.push(`/courses/${courseData._id}`);
  }

  const renderPrice = ({ price, promotionalPrice }) => {
    if (promotionalPrice < price) {
      return (
        <div>
          {convertNumberWithComma(promotionalPrice)}vnd
          &nbsp;
          <span style={{
            fontSize: 'smaller',
            fontWeight: 'normal',
            textDecoration: 'line-through',
            color: '#696969'
          }}>
            {convertNumberWithComma(price)}vnd
          </span>
        </div>
      );
    } else {
      return (
        <div>
          {convertNumberWithComma(price)}vnd
        </div>
      );
    }
  };

  return (
    <div className={classes} style={style}>
      <button className='pure-button p-0 text-left' style={{color: '#454545'}} onClick={handleClick}>
        <div className='row'>
          <div className='col-5'>
            <div className='image-wrapper2'>
              <img className='card-img-top h-100' src={courseData.courseImage} alt='courseImage.jpg'/>
            </div>
          </div>
          <div className='col-7'>
            <div className='card-body p-0 py-2'>
              <div className='course-title font-weight-bold'>
                {courseData.courseName}
              </div>
              <div className='course-category'>{courseData.category.categoryName}</div>
              <div className='course-lecture'>{courseData.courseLecturers[0].fullName}</div>
              <CourseRating ratingPoint={courseData.ratingPoint} ratedNumber={courseData.ratedNumber}/>
              <div className='course-price font-weight-bold'>{renderPrice(courseData)}</div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default CourseCard;

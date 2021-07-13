import React from 'react';
import CourseRating from "../../rating/CourseRating";
import {convertNumberWithComma} from "../../../../utils/commonUtils";

function CourseListItem({data}) {
  return (
    <button className='pure-button p-0 text-left w-100 d-block'>
      <div className='course-list-item'>
        <div>
          <img className='rounded' height='150px' width='260px' src={data.courseImage} alt='courseImage.jpg'/>
        </div>
        <div className='course-info flex-grow-1 ml-3'>
          <div className='p-0 flex-grow-1'>
            <div className='course-title font-weight-bold'>
              {data.courseName}
            </div>
            <div className='text-small'>
              {data.briefDescription}
            </div>
            <div className='course-category'>{data.category.categoryName}</div>
            <div className='course-lecture'>{data.courseLecturers[0].fullName}</div>
            <CourseRating ratingPoint={data.ratingPoint} ratedNumber={data.ratedNumber}/>
          </div>
          <div className='ml-5'>
            {data.hasOwnProperty('promotionalPrice') ? (
              <>
                <div className='font-weight-bold'>{convertNumberWithComma(data.promotionalPrice)}đ</div>
                <div className='text-line-through text-small text-blur'>{convertNumberWithComma(data.price)}đ</div>
              </>
            ) : (
              <div className='font-weight-bold'>{convertNumberWithComma(data.price)}đ</div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

export default CourseListItem;

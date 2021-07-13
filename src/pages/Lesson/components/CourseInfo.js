import React from 'react';

const CourseInfo = (props) => {
  const { course } = props;
  return (
    <div className='row mt-3'>
      <div className='col-4'>
        <img src={course.courseImage} alt='' className="img-fluid ml-2"/>
      </div>
      <div className='col'>
        <h3>Course: {course.courseName}</h3>
        <p>{course.briefDescription}</p>
      </div>
    </div>
  )
}

export default CourseInfo;

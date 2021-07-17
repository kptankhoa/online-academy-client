import React, { useContext } from 'react';
import LessonViewContext from 'pages/Lesson/lessonViewContext';

const CourseInfo = () => {
  const { state } = useContext(LessonViewContext);
  const course = state.course;
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

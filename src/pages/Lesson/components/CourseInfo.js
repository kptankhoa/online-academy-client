import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { lessonContext } from 'provider/lessonProvider';

const CourseInfo = () => {
  const { lessonState } = useContext(lessonContext);
  const history = useHistory();
  const course = lessonState.course;
  const onClickHandler = () => {
    history.push(`/courses/${course._id}`)
  }
  return (
    <div
      className='row m-5 p-2'
      onClick={onClickHandler}
    style={{
      cursor: 'pointer',
    }}>
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

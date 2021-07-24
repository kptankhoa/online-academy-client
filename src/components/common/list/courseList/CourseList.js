import React from 'react';
import CourseListItem from "components/common/listItem/courseListItem/CourseListItem";
import {useHistory} from "react-router-dom";

function CourseList({listData, className}) {
  const history = useHistory();

  function handleClick(courseId) {
    history.push(`/lecturer/edit-courses/${courseId}/basic`);
  }

  const classes = 'course-list ' + className ? className : '';
  return (
    <div className={classes}>
      {listData ? listData.map((item, index) => (
        <div key={index}>
          <div className="list-item-wrapper">
            <CourseListItem data={item}/>
            <div className="option-wrapper">
              <button
                onClick={() => handleClick(item._id)}
                style={{color: '#2980b9'}}
                className="pure-button font-weight-bold text-color-primary d-flex justify-content-center align-items-center w-100 h-100">
                Edit / Manage course
              </button>
            </div>
          </div>
          <hr/>
        </div>
      )) : ''}
    </div>
  );
}

export default CourseList;

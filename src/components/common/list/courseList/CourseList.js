import React from 'react';
import CourseListItem from "components/common/listItem/courseListItem/CourseListItem";

function CourseList({listData, className}) {
  const classes = 'course-list ' + className ? className : '';
  return (
    <div className={classes}>
      {listData ? listData.map((item, index) => (
        <div key={index}>
          <CourseListItem data={item}/>
          <hr/>
        </div>
      )) : ''}
    </div>
  );
}

export default CourseList;

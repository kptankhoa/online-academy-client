import React from 'react';
import CourseListItem from "components/common/listItem/courseListItem/CourseListItem";

function CourseList({listData, className}) {
  const classes = 'course-list ' + className ? className : '';
  return (
    <div className={classes}>
      {listData ? listData.map(item => (
        <>
          <CourseListItem key={item._id} data={item}/>
          <hr/>
        </>
      )) : ''}
    </div>
  );
}

export default CourseList;

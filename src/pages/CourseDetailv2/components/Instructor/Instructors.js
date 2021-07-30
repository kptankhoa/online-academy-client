import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import CourseContext from '../../CourseContext';
import Instructor from './Instructor';

const Instructors = () => {
  const { state: { course } } = useContext(CourseContext);

  const renderInstructors = (courseLecturers) => (
    courseLecturers.map((lecturer) => (
      <Instructor key={lecturer._id} lecturer={lecturer} />
    ))
  );

  return (
    <Grid container style={{marginTop: '10px'}}>
      {course && (
        <Grid item md={8}>
          <h4 className='mt-3 font-weight-bold'>Instructors:</h4>
          {renderInstructors(course.courseLecturers)}
        </Grid>
      )}
    </Grid>
  );
};

export default Instructors;

import React, { useContext, useState } from 'react';
import { Grid } from '@material-ui/core';
import Button from 'components/common/button/pureButton/Button';
import useStyles from 'pages/CourseDetailv2/styles/CourseDescription.styles';
import CourseContext from '../../CourseContext';
import parse from 'html-react-parser';

const CourseDescription = () => {
  const classes = useStyles();
  const { state: { course } } = useContext(CourseContext);
  const [more, setMore] = useState(false);
  const renderDescription = (description) => {
    return typeof (description) === 'string' ? parse(description) : description;
  };

  return (
    <Grid container style={{ marginTop: '15px' }}>
      {course && (
        <Grid item md={8}>
          <h4 className='mt-3 font-weight-bold'>Description:</h4>
          <div className={more ? classes.courseDescriptionMore : classes.courseDescriptionLess}>
            {renderDescription(course.detailDescription)}
          </div>
          <Button className={classes.readBtn} onClick={() => setMore(!more)}>
            {more ? 'Show less' : 'Show more'}
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default CourseDescription;

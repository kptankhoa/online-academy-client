import React, { useContext, useState } from 'react';
import CourseContext from 'pages/CourseDetailv2/CourseContext';
import { Button, Grid } from '@material-ui/core';
import Feedback from './Feedback';
import FeedbackForm from './FeedbackForm';
import useStyles from 'pages/CourseDetailv2/styles/Feedback.styles';

const Feedbacks = () => {
  const classes = useStyles();
  const { state: { course, isEnrolled } } = useContext(CourseContext);
  const [amount, setAmount] = useState(5);
  const renderFeedbacks = (feedbacks, amount) => {
    feedbacks.sort((firstEl, secondEl) => {
      if (firstEl.createdAt > secondEl.createdAt) {
        return -1;
      } else if (firstEl.createdAt < secondEl.createdAt) {
        return 1;
      }
      return 0;
    });
    return (
      <div>
        {feedbacks.length ?
          feedbacks.map((feedback, index) => {
            if (index < amount) {
              return (
                <Feedback key={feedback._id} feedback={feedback} />
              );
            }
          }) : (<div>
            No feedback available!
          </div>)
        }
      </div>
    );
  };

  const renderFeedbackForm = () => {
    if (isEnrolled) {
      return (<FeedbackForm />);
    }
  };
  const moreBtnClick = () => {
    setAmount(amount + 5);
  };

  return (
    course && (
      <Grid container style={{ marginTop: '15px' }}>
        <Grid item md={8}>
          {renderFeedbackForm()}
        </Grid>
        <Grid item md={8} style={{ marginTop: '10px' }}>
          <h4 className='mt-3 font-weight-bold'>Student feedbacks:</h4>
          {renderFeedbacks(course.feedbacks, amount)}
          {course.feedbacks.length >= amount && (
            <Button
              onClick={moreBtnClick}
              className={classes.showMoreBtn}
            >
              Show more
            </Button>
          )}
        </Grid>
      </Grid>
    )
  );
};

export default Feedbacks;

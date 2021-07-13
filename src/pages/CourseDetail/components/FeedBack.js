import {
  Grid,
  Typography,
  Grow,
  Divider,
  Badge,
  CircularProgress,
} from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import { useContext, useState } from 'react';
import Rating from './Rating';
import Feed from './Feed';

import CourseDetailContext from '../CourseDetailContext';
import Loading from '../../../components/Loading';

function FeedBack(props) {
  const { state, dispatch } = useContext(CourseDetailContext);

  let render;
  if (state.course.feedbacks) {
    render = (
      <div>
        {state.course.feedbacks.map((feed, i) => {
          return (
            <>
              <Divider></Divider>
              <Grow in={true} timeout={5000}>
                <Feed
                  comment={feed.content}
                  userId={feed.userId}
                  rating={feed.ratingPoint}
                  key={i}
                ></Feed>
              </Grow>
              ;
            </>
          );
        })}
      </div>
    );
  } else {
    render = <Loading></Loading>;
  }

  return (
    <div style={{ display: 'block' }}>
      <Typography variant="h5">
        <SupervisorAccountIcon />
        Feedback
      </Typography>
      {render}
    </div>
  );
}

export default FeedBack;

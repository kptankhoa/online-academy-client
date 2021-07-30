import React, { useEffect, useState } from 'react';
import { academyAxios } from 'config/axios.config';
import { Avatar, Grid } from '@material-ui/core';
import useStyles from 'pages/CourseDetailv2/styles/Feedback.styles';
import FeedbackRating from './FeedbackRating';
import moment from 'moment';

const Feedback = ({ feedback }) => {
  const [user, setUser] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    academyAxios.get(`/users/${feedback.userId}`)
      .then(r => setUser(r.data));
  }, [feedback]);

  return user && (
    <>
      <Grid container>
        <Grid item style={{ display: 'inline' }}>
          <Avatar
            alt='avatar'
            style={{ width: 70, height: 70 }}
            src={user.avatar}
          >
            {user.fullName.charAt(0)}
          </Avatar>
        </Grid>
        <Grid item style={{ display: 'flex' }}>
          <Grid
            container
            direction='column'
            justifyContent='space-between'
            alignItems='flex-start'
            className='p-2 ml-2'
            style={{ fontSize: '15px' }}
          >
            <Grid item>
              <h6 className={classes.name}>{user.fullName}</h6>
            </Grid>
            <Grid item className='d-flex align-items-center'>
              <FeedbackRating ratingPoint={feedback.ratingPoint} />
              &nbsp;
              <small>{moment(new Date(feedback.createdAt).getTime()).fromNow()}</small>
            </Grid>
            <Grid item className='mt-2'>
              {feedback.content}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
    </>
  );
};

export default Feedback;

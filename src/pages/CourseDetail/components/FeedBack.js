import { Grid, Typography, Grow, Divider, Badge } from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import { useState } from 'react';
import Rating from './Rating';
import Feed from './Feed';

function FeedBack(props) {
  return (
    <div style={{ display: 'block' }}>
      <Typography variant="h5">
        <SupervisorAccountIcon />
        Feedback
      </Typography>
      <Grow in={true} timeout={5000}>
        <Feed></Feed>
      </Grow>
      <Divider></Divider>
      <Grow in={true} timeout={5000}>
        <Feed></Feed>
      </Grow>
      <Divider></Divider>
      <Grow in={true} timeout={5000}>
        <Feed></Feed>
      </Grow>
    </div>
  );
}

export default FeedBack;

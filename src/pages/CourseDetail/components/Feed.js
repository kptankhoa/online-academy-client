import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Loading from '../../../components/Loading';
import Rating from './Rating';

import { axiosInstance } from '../../../utils/auth';

function Feed({ userId, comment, rating }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getCourse() {
      const rel = await axiosInstance.get(`/users/${userId}`);

      console.log('rel', rel);
      setUser(rel.data);
    }
    getCourse();
  }, [userId]);

  const fullName = user ? (
    <>
      <Grid xs={12}>
        <Typography>{user.fullName}</Typography>
      </Grid>
    </>
  ) : (
    <Loading size={20} />
  );

  const avatar = user ? (
    <>
      <Grid item style={{ display: 'inline', padding: 10 }}>
        <Avatar src={user.avatar}></Avatar>
      </Grid>
    </>
  ) : (
    <>
      <Grid item style={{ display: 'inline', padding: 10 }}>
        <Avatar></Avatar>
      </Grid>
    </>
  );

  return (
    <Paper
      // variant="outlined"
      elevation={0}
      style={{
        display: 'flex',
        // backgroundColor: '#f5f5f5',
        padding: '5px 0px',
      }}
    >
      <Grid container>
        {avatar}
        <Grid item style={{ display: 'inline' }}>
          <Grid container style={{ padding: 8 }}>
            {fullName}
            <Grid xs={12}>
              <Rating num={rating}></Rating>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="flex-start" style={{ paddingLeft: '11.8%' }}>
            <Typography>{comment}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Feed;

import React from 'react';
import SideNav from './components/SideNav';
import { Grid } from '@material-ui/core';

const AdminView = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <SideNav />
        </Grid>
        <Grid item>
          alo
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminView;

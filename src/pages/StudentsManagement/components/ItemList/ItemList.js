import {
  Backdrop,
  Button,
  Fade,
  Grid,
  makeStyles,
  Modal,
} from '@material-ui/core';
import { useState } from 'react';

function ItemList({
  itemId,
  username,
  fullName,
  email,
  status,
  onclick,
  style,
  ...rest
}) {
  return (
    <div
      onClick={onclick}
      style={{
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 2,
        ...style,
      }}
      {...rest}
    >
      <Grid container>
        <Grid item xs={2}>
          {itemId}
        </Grid>
        <Grid item xs={2}>
          {username}
        </Grid>
        <Grid item xs={2}>
          {fullName}
        </Grid>
        <Grid item xs={2}>
          {email}
        </Grid>
        <Grid item xs={2}>
          {status}
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Options
        </Grid>
      </Grid>
    </div>
  );
}

export default ItemList;

import {
  Backdrop,
  Button,
  Fade,
  Grid,
  makeStyles,
  Modal,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  item: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
  },
}));

function ItemList({
  itemId,
  username,
  fullName,
  email,
  status,
  onClick,
  style,
  noOptions,
  ...rest
}) {
  const classes = useStyles();
  const { fontWeight } = style ? style : { fontWeight: null };
  return noOptions ? (
    <div>
      <div
        style={{
          padding: 5,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          width: '100%',
          // border: '1px solid black',
          // '&:hover': {
          //   backgroundColor: 'blue',
          // },
          ...style,
        }}
        {...rest}
      >
        <Grid
          container
          className={classes.item}
          spacing={2}
          // style={{
          //   '&:hover': {
          //     backgroundColor: 'blue',
          //   },
          // }}
        >
          <Grid item xs={2} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {itemId}
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {username}
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {fullName}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {email}
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
            className={classes.item}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              noWrap
              style={{
                fontWeight: fontWeight,
              }}
            >
              {status}
            </Typography>
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
            {noOptions ? (
              <div>Options</div>
            ) : (
              <Button onClick={onClick}>Detail</Button>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  ) : (
    <div>
      <div
        style={{
          padding: 5,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          width: '100%',
          borderBottom: '1px solid darkblue',
          // '&:hover': {
          //   backgroundColor: 'blue',
          // },
          ...style,
        }}
        {...rest}
      >
        <Grid
          container
          className={classes.item}
          spacing={2}
          // style={{
          //   '&:hover': {
          //     backgroundColor: 'blue',
          //   },
          // }}
        >
          <Grid item xs={2} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {itemId}
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {username}
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {fullName}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {email}
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
            className={classes.item}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              noWrap
              style={{
                textTransform: 'lowercase',
                border: '1px solid',
                borderColor:
                  status === 'ACTIVE'
                    ? 'darkblue'
                    : status === 'PENDING'
                    ? 'orange'
                    : 'red',
                backgroundColor:
                  status === 'ACTIVE'
                    ? 'blue'
                    : status === 'PENDING'
                    ? 'yellow'
                    : 'orangered',
                padding: 4,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 12,
                borderRadius: 10,
              }}
            >
              {status}
            </Typography>
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
            {noOptions ? (
              <div>Options</div>
            ) : (
              <Button
                onClick={onClick}
                style={{
                  textTransform: 'none',
                  fontWeight: 'bolder',
                  borderRadius: 10,
                  color: 'white',
                  backgroundColor: 'blue',
                }}
              >
                Detail
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ItemList;

import {
  Backdrop,
  Button,
  Divider,
  Fade,
  Grid,
  makeStyles,
  Modal,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  item: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
  },
}));

function CategoryItem({
  itemId,
  categoryName,
  level,
  isDeleted,
  onDeleteClicked,
  onReverseClicked,
  onUpdateClicked,
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
          <Grid item xs={3} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {itemId}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {categoryName}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {level}
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
              {isDeleted}
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
              <Button onClick={onDeleteClicked}>Detail</Button>
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
          <Grid item xs={3} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {itemId}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {categoryName}
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.item}>
            <Typography noWrap style={{ fontWeight: fontWeight }}>
              {level}
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
                borderColor: isDeleted === 'false' ? 'darkblue' : 'red',
                backgroundColor: isDeleted === 'false' ? 'blue' : 'orangered',
                padding: 4,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 12,
                borderRadius: 10,
              }}
            >
              {isDeleted}
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {isDeleted === 'false' ? (
              <div style={{ display: 'flex' }}>
                <Button
                  onClick={onDeleteClicked}
                  style={{
                    textTransform: 'none',
                    fontWeight: 'bolder',
                    borderRadius: 10,
                    color: 'white',
                    backgroundColor: 'red',
                    fontSize: 12,
                  }}
                >
                  <DeleteIcon style={{ fontSize: 12 }} />
                  Delete
                </Button>
                <Divider orientation="vertical" flexItem />
                <Button
                  onClick={onUpdateClicked}
                  style={{
                    textTransform: 'none',
                    fontWeight: 'bolder',
                    borderRadius: 10,
                    color: 'white',
                    backgroundColor: 'blue',
                    fontSize: 12,
                  }}
                >
                  {/* <DeleteIcon style={{ fontSize: 12 }} /> */}
                  Update
                </Button>
              </div>
            ) : (
              <Button
                onClick={onReverseClicked}
                style={{
                  textTransform: 'none',
                  fontWeight: 'bolder',
                  borderRadius: 10,
                  color: 'white',
                  backgroundColor: 'blue',
                  fontSize: 12,
                }}
              >
                Reverse
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CategoryItem;

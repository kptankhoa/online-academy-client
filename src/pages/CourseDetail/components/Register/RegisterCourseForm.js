import {
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  Snackbar,
  // Slide,
  Link,
} from '@material-ui/core';
import useStyles from '../../styles/register.style';
import { CardContent } from '@material-ui/core';
import ReactPlayer from 'react-player';
import { useContext, useRef, useState } from 'react';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import Rating from '../FeedBack/Rating';
import Money from '../CourseContent/Course/Money';

import CourseDetailContext from '../../CourseDetailContext';
import { CustomButton, Loading } from 'components';
import { getCurrentUser } from 'utils';
import MuiAlert from '@material-ui/lab/Alert';
import { addToWishList, enroll, getPreviewUrl } from 'pages/CourseDetail/utils';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// function SlideTransition(props) {
//   return <Slide {...props} direction="up" />;
// }

/**
 *
 * @param {{video}} props
 * @returns
 */
function RegisterCourseForm(props) {
  const classes = useStyles();
  const ref = useRef();
  const { state } = useContext(CourseDetailContext);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  // const toggleFullScreen = () => {
  //   screenfull.request(findDOMNode(ref.current));
  // };

  const render =
    state.course.ratingPoint || state.course.ratingPoint === 0 ? (
      <Rating
        num={state.course.ratingPoint}
        persons={state.course.ratedNumber}
      />
    ) : (
      <Loading size={20}></Loading>
    );

  const handleEnrollOnclick = (done) => {
    const user = getCurrentUser();
    if (user === null) {
      handleClick();
      return false;
    } else {
      const courseId = state.course._id;
      const userId = user.userId;
      enroll(userId, courseId).then(() => done());
      return true;
    }
  };

  const handleAddToWhisListOnclick = (done) => {
    const user = getCurrentUser();
    if (user === null) {
      handleClick();
      return false;
    } else {
      const courseId = state.course._id;
      const userId = user.userId;
      addToWishList(userId, courseId).then(() => done());
      return true;
    }
  };

  const registed = (
    <div>
      <CheckIcon />
      Resgisted
    </div>
  );

  const whisList = (
    <div>
      <CheckIcon />
      WhisList
    </div>
  );

  return (
    <div {...props}>
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Please{' '}
          <Link href="/login" style={{ color: 'white', fontWeight: 'bold' }}>
            Login
          </Link>{' '}
          to continuous!
        </Alert>
      </Snackbar>
      <Card>
        {state.sections ? (
          <CardActionArea>
            {getPreviewUrl(state.sections) !== '' ? (
              <ReactPlayer
                width={280}
                height={200}
                ref={ref}
                url={getPreviewUrl(state.sections)}
                // onPlay={toggleFullScreen}
                controls={true}
                config={
                  {
                    // vimeo: {},
                  }
                }
                // playing
              />
            ) : (
              <div
                style={{
                  padding: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  justifyItems: 'center',
                  backgroundColor: '#f6f6f6',
                }}
              >
                Don't have any preview
              </div>
            )}
          </CardActionArea>
        ) : (
          <Loading size={40} timeoutComponent={<div>Load video failed</div>} />
        )}

        <CardHeader title="Content" />
        <CardContent>
          {render}
          <List>
            <ListItem>
              <CheckIcon />
              Total Time: {state.course.totalHours} h
            </ListItem>
            <ListItem>
              <CheckIcon />
              Sections: {state.sections && state.sections.length} section
            </ListItem>
          </List>
          <Money money={state.course.price} size={30}></Money>
        </CardContent>
        <CardActions className={classes.registerbutton}>
          <CustomButton
            failedComponent={<div>Can't Enroll</div>}
            onclick={handleEnrollOnclick}
            initState={state.isEnrolled ? 'clicked' : 'unclick'}
            className={classes.button}
            unclickName={'Enroll Me'}
            clickedName={registed}
          ></CustomButton>
          {getCurrentUser() && (
            <CustomButton
              failedComponent={<div>X</div>}
              onclick={handleAddToWhisListOnclick}
              initState={state.isInWishList ? 'clicked' : 'unclick'}
              className={classes.button}
              unclickName={'+ WishList'}
              clickedName={whisList}
            ></CustomButton>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default RegisterCourseForm;

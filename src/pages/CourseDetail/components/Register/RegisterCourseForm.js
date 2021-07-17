import { Container } from 'react-bootstrap';
import {
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  Button,
  Snackbar,
  Slide,
  Link,
} from '@material-ui/core';
import useStyles from '../../styles/register.style';
import { CardContent } from '@material-ui/core';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import { findDOMNode } from 'react-dom';
import { useContext, useRef, useState } from 'react';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { Typography } from '@material-ui/core';
import Rating from '../FeedBack/Rating';
import Money from '../CourseContent/Course/Money';

import CourseDetailContext from '../../CourseDetailContext';
import { CustomButton, Loading } from 'components';
import { getCurrentUser } from 'utils';
import { axiosInstance } from 'utils/auth';
import MuiAlert from '@material-ui/lab/Alert';
import { enroll } from 'pages/CourseDetail/utils';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

/**
 *
 * @param {{video}} props
 * @returns
 */
function RegisterCourseForm(props) {
  const classes = useStyles();
  const ref = useRef();
  const { state, dispatch } = useContext(CourseDetailContext);
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

  const render = state.course.ratingPoint ? (
    <Rating num={state.course.ratingPoint} persons={state.course.ratedNumber} />
  ) : (
    <Loading size={20} />
  );

  const handleEnrollOnclick = async (done) => {
    const user = getCurrentUser();
    if (user === null) {
      handleClick();
      return false;
    } else {
      const courseId = state.course.courseId;
      const userId = user.userId;

      enroll(userId, courseId).then(() => done());
      return true;
    }
  };

  const registed = (
    <div>
      <CheckIcon />
      Resgisted
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
        <CardActionArea>
          <ReactPlayer
            width={280}
            height={200}
            ref={ref}
            url="https://vimeo.com/292893585"
            // onPlay={toggleFullScreen}
            controls={true}
            config={
              {
                // vimeo: {},
              }
            }
            // playing
          />
        </CardActionArea>
        <CardHeader title="Content" />
        <CardContent>
          {render}
          <List>
            <ListItem>
              <CheckIcon />
              Total Time: {state.course.totalHours} h
            </ListItem>
          </List>
          <Money money={20000} size={30}></Money>
        </CardContent>
        <CardActions className={classes.registerbutton}>
          <CustomButton
            onclick={handleEnrollOnclick}
            initState="unclick"
            className={classes.button}
            unclickName={'Enroll Me'}
            clickedName={registed}
          ></CustomButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default RegisterCourseForm;

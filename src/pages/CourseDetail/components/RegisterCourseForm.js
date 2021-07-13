import { Container } from 'react-bootstrap';
import {
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  Button,
} from '@material-ui/core';
import useStyles from '../styles/register.style';
import { CardContent } from '@material-ui/core';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import { findDOMNode } from 'react-dom';
import { useContext, useRef } from 'react';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { Typography } from '@material-ui/core';
import Rating from './Rating';
import Money from './Money';

import CourseDetailContext from '../CourseDetailContext';
import Loading from '../../../components/Loading';

/**
 *
 * @param {{video}} props
 * @returns
 */
function RegisterCourseForm(props) {
  const classes = useStyles();
  const ref = useRef();
  const { state, dispatch } = useContext(CourseDetailContext);

  // const toggleFullScreen = () => {
  //   screenfull.request(findDOMNode(ref.current));
  // };

  const render = state.course.ratingPoint ? (
    <Rating num={state.course.ratingPoint} persons={state.course.ratedNumber} />
  ) : (
    <Loading size={20} />
  );

  return (
    <div {...props}>
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
            <ListItem>
              <CheckIcon />
              Section
            </ListItem>
          </List>
          <Money money={20000} size={30}></Money>
        </CardContent>
        <CardActions className={classes.registerbutton}>
          <Button className={classes.button}>Register</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default RegisterCourseForm;

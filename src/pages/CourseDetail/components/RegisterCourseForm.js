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
import { useRef } from 'react';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { Typography } from '@material-ui/core';
import Rating from './Rating';

/**
 *
 * @param {{video}} props
 * @returns
 */
function RegisterCourseForm(props) {
  const classes = useStyles();
  const ref = useRef();

  // const toggleFullScreen = () => {
  //   screenfull.request(findDOMNode(ref.current));
  // };

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
          <Rating num={4} persons={4} />
          <List>
            <ListItem>
              <CheckIcon />
              Total Time:
            </ListItem>
            <ListItem>
              <CheckIcon />
              Section
            </ListItem>
            <ListItem>
              <CheckIcon />
              Lecturers
            </ListItem>
          </List>
          <Typography className={classes.price}>20000d</Typography>
        </CardContent>
        <CardActions className={classes.registerbutton}>
          <Button className={classes.button}>Register</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default RegisterCourseForm;

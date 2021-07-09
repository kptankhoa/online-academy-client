import { Container } from 'react-bootstrap';
import { Card, CardHeader, CardActionArea , CardActions, Button} from '@material-ui/core';
import useStyles from '../styles/register.style';
import { CardContent } from '@material-ui/core';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import { findDOMNode } from 'react-dom';
import { useRef } from 'react';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';


/**
 * 
 * @param {{video}} props 
 * @returns 
 */
function RegisterCourseForm(props) {
  const classes = useStyles();
  const ref = useRef()

  const toggleFullScreen = () => {
    screenfull.request(findDOMNode(ref.current))
  }

  return (
    <div className={classes.root}>      
      <Card>
        <CardActionArea>
          <ReactPlayer
            width={400}
            height={220}
            ref={ref}
            url="https://www.youtube.com/watch?v=CrkB58bZ9SM"
            onPlay={toggleFullScreen}
            playing
          />
        </CardActionArea>
        <CardHeader title="Content" />
        <CardContent>
          <List>
            <ListItem>
              <CheckIcon/>
              Ac
            </ListItem>
            <ListItem>
              <CheckIcon/>
              Ad
            </ListItem>
          </List>
        </CardContent>
        <CardActions className={classes.registerbutton}>
          <Button className={classes.button}>Register</Button>
        </CardActions>
      </Card>

    </div>
  );
}

export default RegisterCourseForm;

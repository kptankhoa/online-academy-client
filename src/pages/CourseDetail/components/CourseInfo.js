import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Typography,
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import Rating from './Rating';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Money from './Money';
function CourseInfo(params) {
  const history = useHistory();
  return (
    <Card
      elevation={2}
      // className={classes.root}
      // style={{ backgroundColor: colorCode }}
    >
      <CardActionArea
        onClick={() => {
          history.push('/');
        }}
      >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image="https://toidicodedao.files.wordpress.com/2018/07/react.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            // className={classes.title}
            color="textSecondary"
            gutterBottom
            noWrap
            style={{
              fontSize: 12,
              padding: 0,
              margin: 0,
              position: 'relative',
            }}
          >
            {/* {category} */}H0
          </Typography>

          <div>
            <Typography style={{ display: 'flex', fontSize: 12 }}>
              <PersonOutlineIcon style={{ fontSize: 16 }} />
              Ahone
            </Typography>
          </div>

          <Typography variant="h6" noWrap>
            {/* {title} */}
            Honowswwwwwwwwwwwwwwwwwwwwwwwwwwwww
          </Typography>
          <Rating num={2.3} persons={3}></Rating>

          <Divider></Divider>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              color: 'red',
            }}
          >
            <Money money={20000} size={20} />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CourseInfo;

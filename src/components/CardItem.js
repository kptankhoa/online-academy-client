import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Link } from '@material-ui/core';

import useStyles from '../styles/card.style';

export default function CardItem(props) {
  const classes = useStyles();
  const { title, image, link, category } = props;

  const colors = [
    '#ffebee',
    '#e3f0d3',
    '#b3e5fc',
    '#c5cae9',
    '#fff9c4',
    '#ffe6c1',
    '#f3f6cf',
  ];

  let colorCode;
  switch (category.toLowerCase()) {
    case 'react':
      colorCode = colors[0];
      break;
    case 'css':
      colorCode = colors[1];
      break;
    case 'javascript':
      colorCode = colors[2];
      break;
    case 'android development':
      colorCode = colors[3];
      break;
    case 'react native':
      colorCode = colors[4];
      break;
    case 'ios development':
      colorCode = colors[5];
      break;
    case 'java development':
      colorCode = colors[6];
      break;
    default:
      colorCode = '#FFFFFF';
  }

  return (
    <Card
      elevation={2}
      className={classes.root}
      style={{ backgroundColor: colorCode}}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <CardMedia className={classes.media} image={image}></CardMedia>
      </CardContent>
      <CardActions>
        <Link size="small" href={link}>
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
}

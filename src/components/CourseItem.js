import {
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Typography,
  Link,
} from '@material-ui/core';
import React from 'react';

import useStyles from '../styles/header.style';

/**
 *
 * @param {{title, image, detail, link}} props
 * @returns
 */
function CourseItem(props) {
  const { title, image, link } = props;

  const classes = useStyles();

  return (
    <div className={classes.courseItem}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {title}
            </Typography>
          }
        />
      </ListItem>
      <Link href={link}>See Detail</Link>
    </div>
  );
}

export default CourseItem;

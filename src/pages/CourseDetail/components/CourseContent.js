import { Typography } from '@material-ui/core';

import useStyles from '../styles/courseDetail.style';

/**
 *
 * @param {{detaildescription}} props
 * @returns
 */
function CourseContent(props) {
  const {detaildescription, ...rest } =
    props;
  const classes = useStyles();
  return (
    <div style={{padding: '0px 20px'}}>
      <div className={classes.courseContent}>
       <Typography align='justify'>{detaildescription}</Typography>
      </div>
    </div>
  );
}

export default CourseContent;

import useStyles from './courseDetail.style';

import { Grid } from '@material-ui/core';
import { Suspense } from 'react';

import RegisterCourseForm from '../../Register/RegisterCourseForm';

/**
 *
 * @param {{img, name, shortdescription, detaildescription}} param0
 * @returns
 */
function CourseDetail(props) {
  const { courseId, img, name, shortdescription, detaildescription, ...rest } =
    props;

  const classes = useStyles();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div {...rest}>
        <Grid
          container
          style={{
            position: 'relative',
            padding: 0,
          }}
        >
          <Grid item md={12}>
            <img src={img} alt={name} className={classes.img} />
          </Grid>
          <Grid item md={12} className={classes.content}>
            <Grid container justify="center">
              <Grid item md={8}>
                <Grid container>
                  <Grid item md={8}>
                    <h3 className={classes.title}>{name}</h3>
                    <span className={classes.subTitle}>{shortdescription}</span>
                  </Grid>
                  <Grid item md={4}>
                    <RegisterCourseForm className={classes.register} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid container className={classes.root}>
          <Grid item md={12}>
            <img src={img} alt={name} className={classes.img} />
            <Grid item md={8}>
              <div style={{ display: 'relative' }}>
                <div className={classes.content}>
                  <h3 className={classes.title}>{name}</h3>
                  <span className={classes.subTitle}>{shortdescription}</span>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item md={8}>
            <div>
              <div className={classes.content}>
                <h3 className={classes.title}>{name}</h3>
                <span className={classes.subTitle}>{shortdescription}</span>
              </div>
            </div>
          </Grid>
        </Grid> */}
      </div>
    </Suspense>
  );
}

export default CourseDetail;

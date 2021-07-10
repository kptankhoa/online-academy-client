import { useContext, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import CourseDetail from './components/CourseDetail';
import RegisterCourseForm from './components/RegisterCourseForm';

import useStyles from './styles/index.style';
import { axiosInstance } from '../../utils/auth';
import CourseDetailContext from './CourseDetailContext';
import reducer from './CourseDetailReducer';
import CourseContent from './components/CourseContent';
import FeedBack from './components/FeedBack';

import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import HeaderBar from '../../components/HeaderBar';
import Rating from './components/Rating';

function CourseDescription(props) {
  const { courseId } = useParams();
  const classes = useStyles();

  const initialState = {
    course: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getCourse() {
      const rel = await axiosInstance.get(`/courses/${courseId}`);

      console.log('rel', rel);
      dispatch({
        type: 'setCourse',
        payload: {
          course: rel.data,
        },
      });
    }
    getCourse();
  }, [courseId]);
  return (
    <div>
      <HeaderBar />
      <CourseDetailContext.Provider value={{ state, dispatch }}>
        <Grid container md={8}>
          <Grid item md={12}>
            <CourseDetail
              className={classes.courseDetail}
              courseId={courseId}
              detaildescription={state.course.detailDescription}
              img={state.course.courseImage}
              name={state.course.courseName}
              shortdescription={state.course.briefDescription}
            />
          </Grid>
          <Grid item md={12}>
            <Grid container className={classes.rating}>
              <Rating num={2.5}></Rating>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Typography variant='h3'>
              {state.course.courseName}
            </Typography>
          </Grid>
          <Grid item md={12}>
            <CourseContent
              detaildescription={state.course.detailDescription}
            ></CourseContent>
          </Grid>
          <Grid item md={12}>
            <FeedBack></FeedBack>
          </Grid>
        </Grid>

        <RegisterCourseForm></RegisterCourseForm>
      </CourseDetailContext.Provider>
    </div>
  );
}

export default CourseDescription;

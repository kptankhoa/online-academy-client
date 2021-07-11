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
import DescriptionIcon from '@material-ui/icons/Description';

import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import HeaderBar from '../../components/HeaderBar';
import Rating from './components/Rating';
import Lecturers from './components/Lecturers';
import CarouselContainer from './components/CarouselContainer';
import Footer from '../../components/Footer';

function CourseDescription(props) {
  const { courseId } = useParams();
  const classes = useStyles();

  const initialState = {
    course: {
      courseImage: '/gif/loading.gif',
    },
    section: {},
    process: {},
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
        <Grid container justify="center">
          <Grid item xs={12}>
            <CourseDetail
              className={classes.courseDetail}
              courseId={courseId}
              detaildescription={state.course.detailDescription}
              img={state.course.courseImage}
              name={state.course.courseName}
              shortdescription={state.course.briefDescription}
            />
          </Grid>
          <Grid item md={8} xs={12}>
            <Grid container justify="flex-start">
              <Grid item md={8} xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    {/* <Grid container className={classes.rating}>
                      <Rating num={2.75}></Rating>
                    </Grid> */}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5" className={classes.courseNmame}>
                      <DescriptionIcon />
                      Description
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <CourseContent
                      detaildescription={state.course.detailDescription}
                    ></CourseContent>
                    <Grid item xs={12} style={{ marginBottom: 20 }}>
                      <Lecturers />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 20 }}>
                  <CarouselContainer></CarouselContainer>
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 20 }}>
                  <FeedBack></FeedBack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CourseDetailContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default CourseDescription;

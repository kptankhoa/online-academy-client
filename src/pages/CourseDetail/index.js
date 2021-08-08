import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import CourseDetail from './components/CourseContent/Course/CourseDetail';
import RegisterCourseForm from './components/Register/RegisterCourseForm';

import useStyles from './styles/index.style';
import { axiosInstance } from '../../utils/auth';
import CourseDetailContext from './CourseDetailContext';
import reducer from './CourseDetailReducer';

import { CourseContent, FeedBack, Lecturers } from './components';
import DescriptionIcon from '@material-ui/icons/Description';

import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import NavBar from '../../components/domain/menu/NavBar';
import Footer from 'components/domain/footer/Footer';
import CarouselContainer from './components/CourseContent/Course/CarouselContainer';
// import Footer from '../../components/Footer';
import getSameCourse from './utils/get5CourseByCourseId';
import { getLearningList, getSections } from './utils';
import getWishList from './utils/getWishList';
import { getCurrentUser } from 'utils';

function CourseDescription(props) {
  const { courseId } = useParams();
  const classes = useStyles();

  const initialState = {
    course: {
      courseImage: '/gif/loading.gif',
    },
    process: {},
    isEnrolled: false,
    isInWishList: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getCourse() {
      const rel = await axiosInstance.get(`/courses/${courseId}`);
      dispatch({
        type: 'setCourse',
        payload: {
          course: rel.data,
        },
      });
    }
    getSameCourse(courseId, dispatch);
    getSections(courseId, dispatch);
    getCourse();

    if (getCurrentUser()) {
      getLearningList().then((result) => {
        // console.log('result', result);
        const list = result.filter((course) => {
          // console.log(course._id, courseId);
          return course._id === courseId;
        });

        dispatch({
          type: 'setLearningList',
          payload: {
            isEnrolled: list.length === 0 ? false : true,
          },
        });
      });
      getWishList().then((result) => {
        console.log('result', result);
        const list = result.filter((course) => {
          console.log('wish List', course._id, courseId);
          return course._id === courseId;
        });

        dispatch({
          type: 'setInWishList',
          payload: {
            isInWishList: list.length === 0 ? false : true,
          },
        });
      });
    }
  }, [courseId]);
  return (
    <div className='d-flex flex-column min-vh-100'>
      <NavBar />
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
                  {/* <RegisterCourseForm /> */}
                </Grid>
                <Grid item xs={12}>
                  <RegisterCourseForm className={classes.register} />
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

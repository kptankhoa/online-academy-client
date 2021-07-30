import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import reducer, {
  SET_COURSE,
  SET_IN_WISHLIST,
  SET_LEARNING_LIST,
  SET_SAME_COURSES,
  SET_SECTION
} from './CourseReducer';
import NavBar from 'components/domain/menu/NavBar';
import { axiosInstance } from '../../utils/auth';
import { getLearningList } from '../CourseDetail/utils';
import getWishList from '../CourseDetail/utils/getWishList';
import CourseContext from './CourseContext';
import Footer from '../../components/domain/footer/Footer';
import TopContainer from './components/Course/TopContainer';
import CourseContent from './components/Course/CourseContent';
import CourseDescription from './components/Course/CourseDescription';
import SimilarCourses from './components/Course/SimilarCourses';
import Instructors from './components/Instructor/Instructors';
import Feedbacks from './components/Feedback/Feedbacks';
import { isStudent } from './utils/isStudent';

const CourseDetail = () => {
  const { courseId } = useParams();
  const initialState = {
    course: null,
    sections: null,
    process: {},
    isEnrolled: false,
    isInWishList: false,
    renderTrigger: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { renderTrigger } = state;
  useEffect(() => {
    axiosInstance.get(`/courses/${courseId}`).then(r => {
      dispatch({
        type: SET_COURSE,
        payload: r.data,
      });
    });
  }, [courseId, renderTrigger])
  useEffect(() => {
    axiosInstance.get(`/statistics/same-course/${courseId}`).then(r => {
      dispatch({
        type: SET_SAME_COURSES,
        payload: r.data,
      });
    });
    axiosInstance.get(`/courses/${courseId}/unAuthSections`).then(r => {
      dispatch({
        type: SET_SECTION,
        payload: r.data,
      });
    });
    if (isStudent()) {
      getLearningList().then((result) => {
        const list = result.filter((course) => {
          return course._id === courseId;
        });
        dispatch({
          type: SET_LEARNING_LIST,
          payload: {
            isEnrolled: list.length !== 0
          }
        });
      });
      getWishList().then((result) => {
        const list = result.filter((course) => {
          return course._id === courseId;
        });
        dispatch({
          type: SET_IN_WISHLIST,
          payload: {
            isInWishList: list.length !== 0
          }
        });
      });
    }
  },[courseId]);

  return (
    <div>
      <NavBar />
      <CourseContext.Provider value={{state, dispatch}}>
        <TopContainer />
        <div className='container-xl'>
          <CourseContent />
          <CourseDescription />
          <SimilarCourses />
          <Instructors />
          <Feedbacks />
        </div>
      </CourseContext.Provider>
      <Footer />
    </div>
  );
};

export default CourseDetail;

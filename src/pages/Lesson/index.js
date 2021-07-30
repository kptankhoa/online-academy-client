import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { axiosInstance } from 'utils/auth';
import Navbar from 'components/domain/menu/NavBar';
import Footer from 'components/domain/footer/Footer';
import LessonDetail from './components/LessonDetail';
import CourseInfo from './components/CourseInfo';
import SectionNav from './components/SectionNav';
import reducer, { SET_COURSE, SET_LESSON, SET_SECTIONS } from './lessonViewReducer';
import LessonViewContext from './lessonViewContext';

const LessonView = () => {
  const { courseId, lessonId } = useParams();
  const initialState = {
    lesson: {},
    course: {},
    sections: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [progress, setProgress] = useState({});
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosInstance.get(`/courses/${courseId}/lessons/${lessonId}`)
      .then(r => {
        dispatch({
          type: SET_LESSON,
          payload: r.data
        });
        setLoading(false);
      });
    axiosInstance.get(`/courses/${courseId}`)
      .then(r => dispatch({
        type: SET_COURSE,
        payload: r.data
      }));
    axiosInstance.get(`/courses/${courseId}/sections`)
      .then(r => dispatch({
        type: SET_SECTIONS,
        payload: r.data
      }));
  }, []);
  useEffect(() => {
    setIsEnrolled(!(Object.keys(state.lesson).length === 0));
  }, [state.lesson]);
  useEffect(() => {
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      event.returnValue = '';
      postProgress();
    });
  });
  useEffect(() => {
    return () => {
      postProgress();
    };
  }, []);
  const token = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
  const postProgress = () => {
    if (token) {
      const decoded = jwt_decode(token);
      axiosInstance.post(`/progresses`, {
        userId: decoded.userId,
        courseId,
        lessonId,
        progress: progress.playedSeconds
      }).then();
    }
  };

  function setLessonHandler(newLesson) {
    postProgress();
    dispatch({
      type: SET_LESSON,
      payload: newLesson
    });
  }

  const render = () => {
    return isEnrolled ? (
      <LessonViewContext.Provider value={{ state, dispatch }}>
        <div className='row'>
          <div className='col-xl-8 col-lg-12'>
            <LessonDetail setProgress={setProgress} />
            <CourseInfo />
          </div>
          <div className='col m-3'>
            <SectionNav courseId={courseId} setLesson={setLessonHandler} />
          </div>
        </div>
      </LessonViewContext.Provider>
    ) : (
      <div className='m-5 '>
        <h4 className='text-danger'>You haven't enrolled this course!</h4>
      </div>
    )
  }
  return (
    <div>
      <Navbar />
      { !loading && render()}
      <Footer />
    </div>
  );
};

export default LessonView;

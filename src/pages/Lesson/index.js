import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Navbar from 'components/domain/menu/NavBar';
import Footer from 'components/domain/footer/Footer';
import LessonDetail from './components/LessonDetail';
import CourseInfo from './components/CourseInfo';
import SectionNav from './components/SectionNav';
import { SET_COURSE, SET_COURSE_ID, SET_LESSON, SET_LESSON_ID, SET_SECTIONS } from './lessonViewReducer';
import { lessonContext } from 'provider/lessonProvider';
import { academyAxios } from 'config/axios.config';

const LessonView = () => {
  const { courseId, lessonId } = useParams();
  const { lessonState, dispatch } = useContext(lessonContext);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    academyAxios.get(`/courses/${courseId}`)
      .then(r => dispatch({
        type: SET_COURSE,
        payload: r.data
      }));
  }, [courseId]);
  useEffect(() => {
    academyAxios.get(`/courses/${courseId}/lessons/${lessonId}`)
      .then(r => {
        dispatch({
          type: SET_LESSON,
          payload: r.data
        });
        setLoading(false);
      });
    academyAxios.get(`/courses/${courseId}/sections`)
      .then(r => dispatch({
        type: SET_SECTIONS,
        payload: r.data
      }));
    dispatch({
      type: SET_LESSON_ID,
      payload: lessonId
    });
    dispatch({
      type: SET_COURSE_ID,
      payload: courseId
    });
  }, [courseId, lessonId]);
  useEffect(() => {
    setIsEnrolled(!(Object.keys(lessonState.lesson).length === 0));
  }, [lessonState.lesson]);
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
  const postProgress = () => {
    const token = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
    if (token) {
      const decoded = jwt_decode(token);
      academyAxios.post(`/progresses`, {
        userId: decoded.userId,
        courseId: lessonState.courseId,
        lessonId: lessonState.lessonId,
        progress: lessonState.progress.playedSeconds
      }).then();
    }
  };

  const render = () => {
    return isEnrolled ? (
      <div className='row'>
        <div className='col-xl-8 col-lg-12'>
          <LessonDetail />
          <CourseInfo />
        </div>
        <div className='col m-3'>
          <SectionNav courseId={courseId} postProgress={postProgress} />
        </div>
      </div>
    ) : (
      <div className='m-5 '>
        <h4 className='text-danger'>You haven't enrolled this course!</h4>
      </div>
    );
  };
  return (
    <div>
      <Navbar />
      {!loading && render()}
      <Footer />
    </div>
  );
};

export default LessonView;

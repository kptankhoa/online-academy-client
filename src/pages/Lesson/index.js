import { useParams } from 'react-router-dom';
import LessonDetail from './components/LessonDetail';
// import useStyles from './styles/index.style';
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { axiosInstance } from 'utils/auth';
import Navbar from 'components/domain/menu/NavBar'
import CourseInfo from './components/CourseInfo';
import SectionNav from './components/SectionNav';

const LessonView = (props) => {
  const { courseId, lessonId } = useParams();
  const [lesson, setLesson] = useState({});
  const [course, setCourse] = useState({});
  const [sections, setSections] = useState({});
  const [progress, setProgress] = useState({});
  useEffect(() => {
    axiosInstance.get(`/courses/${courseId}/lessons/${lessonId}`)
      .then(r => setLesson(r.data));
  },[]);
  useEffect(() => {
    axiosInstance.get(`/courses/${courseId}`)
      .then(r => setCourse(r.data));
  },[]);
  useEffect(() => {
    axiosInstance.get(`/courses/${courseId}/sections`)
      .then(r => setSections(r.data));
  }, []);
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
    }
  }, []);
  const decoded = jwt_decode(localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN));
  const postProgress = () => {
    axiosInstance.post(`/progresses`, {
      userId: decoded.userId,
      courseId,
      lessonId,
      progress: progress.playedSeconds
    }).then(data => console.log(data));
  };
  function setLessonHandler(newLesson) {
    postProgress();
    setLesson(newLesson);
  };
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className='col-xl-8'>
          <LessonDetail lesson={lesson} setProgress={setProgress}/>
          <CourseInfo course={course}/>
        </div>
        <div className='col'>
          <SectionNav courseId={courseId} sections={sections} setLesson={setLessonHandler}/>
        </div>
      </div>
    </div>
  );
}

export default LessonView;

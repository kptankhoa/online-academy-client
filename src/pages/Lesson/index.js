import { useParams } from 'react-router-dom';
import LessonDetail from './components/LessonDetail';
// import useStyles from './styles/index.style';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from 'utils/auth';
import Navbar from 'components/domain/menu/NavBar'
import CourseInfo from './components/CourseInfo';
import SectionNav from './components/SectionNav';

const LessonView = (props) => {
  const { courseId, lessonId } = useParams();
  // const classes = useStyles();
  const [lesson, setLesson] = useState({});
  const [course, setCourse] = useState({});
  const [sections, setSections] = useState({});
  useEffect(() => {
    axiosInstance.get(`courses/${courseId}/lessons/${lessonId}`)
      .then(r => setLesson(r.data));
  },[]);
  useEffect(() => {
    axiosInstance.get(`courses/${courseId}`)
      .then(r => setCourse(r.data));
  },[]);
  useEffect(() => {
    axiosInstance.get(`courses/${courseId}/sections`)
      .then(r => setSections(r.data));
  }, [])

  return (
    <div>
      <Navbar />
      <div className="row">
        <div className='col-xl-8'>
          <LessonDetail lesson={lesson}
          />
          <CourseInfo course={course}/>
        </div>
        <div className='col'>
          <SectionNav courseId={courseId} sections={sections} setLesson={setLesson}/>
        </div>
      </div>
    </div>
  );
}

export default LessonView;

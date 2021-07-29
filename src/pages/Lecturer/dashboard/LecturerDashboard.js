import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import CourseList from "components/common/list/courseList/CourseList";
import {getTokenPayload} from "utils/commonUtils";
import {academyAxios} from "config/axios.config";
import CourseListItem from "../../../components/common/listItem/courseListItem/CourseListItem";

function LecturerDashboard({className}) {
  const [loading, setLoading] = useState(true);
  const [teachingCourses, setTeachingCourses] = useState([]);
  const decoded = getTokenPayload();
  const history = useHistory();

  useEffect(() => {
    academyAxios.get(`/lecturers/${decoded.userId}/courses`)
      .then(response => {
        if (response.status === 200) {
          setTeachingCourses(response.data);
          setLoading(false);
        }
      });
  }, [decoded.userId]);

  function handleClick(courseId) {
    history.push(`/lecturer/edit-courses/${courseId}/basic`);
  }

  const classes = "lecturer-dashboard " + (className ? className : "");
  return (
    <div className={classes}>
      <div className="text-right">
        <Link to="/lecturer/create-course/1">
          <button className="btn btn-dark rounded-0 py-2">
            Create courses
          </button>
        </Link>
      </div>

      <div className='title'>
        <h4 className='font-weight-bold'>My Courses</h4>
      </div>
      {loading ? (
        <div className='spinner-wrapper mt-5'>
          <div className="spinner-grow spinner" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        // <CourseList listData={teachingCourses} className='mt-4'/>
        teachingCourses ? teachingCourses.map((item, index) => (
          <div key={index}>
            <div className="list-item-wrapper">
              <CourseListItem data={item}/>
              <div className="option-wrapper">
                <button
                  onClick={() => handleClick(item._id)}
                  style={{color: '#2980b9'}}
                  className="pure-button font-weight-bold text-color-primary d-flex justify-content-center align-items-center w-100 h-100">
                  Edit / Manage course
                </button>
              </div>
            </div>
            <hr/>
          </div>
        )) : ''
      )}
    </div>
  );
}

export default LecturerDashboard;

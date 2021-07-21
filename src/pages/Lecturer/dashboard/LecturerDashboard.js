import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import CourseList from "components/common/list/courseList/CourseList";
import {getTokenPayload} from "utils/commonUtils";
import {academyAxios} from "config/axios.config";

function LecturerDashboard({className}) {
  const [loading, setLoading] = useState(true);
  const [teachingCourses, setTeachingCourses] = useState([]);
  const decoded = getTokenPayload();

  useEffect(() => {
    academyAxios.get(`/lecturers/${decoded.userId}/courses`)
      .then(response => {
        if (response.status === 200) {
          setTeachingCourses(response.data);
          setLoading(false);
        }
      });
  }, [decoded.userId]);

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
        <CourseList listData={teachingCourses} className='mt-4'/>
      )}
    </div>
  );
}

export default LecturerDashboard;

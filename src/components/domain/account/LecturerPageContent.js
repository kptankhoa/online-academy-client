import React, {useEffect, useState} from 'react';
import CourseList from "components/common/list/courseList/CourseList";
import {academyAxios} from "config/axios.config";
import {getTokenPayload} from "utils/commonUtils";

function LecturerPageContent() {
  // const [loading, setLoading] = useState(true);
  const [teachingCourses, setTeachingCourses] = useState([]);
  const decoded = getTokenPayload();

  useEffect(() => {
    academyAxios.get(`/lecturers/${decoded.userId}/courses`)
      .then(response => {
        if (response.status === 200) {
          setTeachingCourses(response.data);
          // setLoading(false);
        }
      });
  }, [decoded.userId]);

  return (
    <div className='container-fluid text-color-primary flex-grow-1'>
      <div className='row'>
        <div className='col-7 m-auto'>
          <div className="my-courses mt-4">
            <div className='title'>
              <h4 className='font-weight-bold'>My Courses</h4>
            </div>
            <CourseList listData={teachingCourses} className='mt-3'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LecturerPageContent;

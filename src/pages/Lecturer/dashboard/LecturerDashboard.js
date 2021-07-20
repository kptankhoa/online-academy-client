import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import CourseList from "../../../components/common/list/courseList/CourseList";
import {getTokenPayload} from "../../../utils/commonUtils";
import {academyAxios} from "../../../config/axios.config";

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
  // const [file, setFile] = useState(null);
  // const ref = useRef(null);
  // const {register, formState: {errors}, handleSubmit} = useForm();
  //
  // function extractFilename(path) {
  //   if (path.substr(0, 12) === "C:\\fakepath\\")
  //     return path.substr(12); // modern browser
  //   let x;
  //   x = path.lastIndexOf('/');
  //   if (x >= 0) // Unix-based path
  //     return path.substr(x + 1);
  //   x = path.lastIndexOf('\\');
  //   if (x >= 0) // Windows-based path
  //     return path.substr(x + 1);
  //   return path; // just the filename
  // }

  // function onChangeFile(e) {
  //   console.log(e.target.value);
  //   const realPath = extractFilename(e.target.value);
  //   console.log(realPath);
  // }

  // function onSubmit(data) {
  //   console.log(data);
  //   // console.log(URL.createObjectURL(data.file[0]));
  //   let file_name = URL.createObjectURL(data.file[0]);
  //   console.log(file_name);
  //   vimeoClient.upload(
  //     file_name,
  //     {
  //       'name': 'first_video_uploaded',
  //       'description': 'The description goes here.'
  //     },
  //     function (uri) {
  //       console.log('Your video URI is: ' + uri);
  //     },
  //     function (bytes_uploaded, bytes_total) {
  //       let percentage = (bytes_uploaded / bytes_total * 100).toFixed(2);
  //       console.log(bytes_uploaded, bytes_total, percentage + '%');
  //     },
  //     function (error) {
  //       console.log('Failed because: ' + error);
  //     }
  //   )
  // }
  //
  // function onClick() {
  //   let file_name = "/home/redfoxvn/Desktop/bigbuck.mp4";
  //   console.log(file_name);
  //   vimeoClient.upload(
  //     file_name,
  //     {
  //       'name': 'first_video_uploaded',
  //       'description': 'The description goes here.'
  //     },
  //     function (uri) {
  //       console.log('Your video URI is: ' + uri);
  //     },
  //     function (bytes_uploaded, bytes_total) {
  //       let percentage = (bytes_uploaded / bytes_total * 100).toFixed(2);
  //       console.log(bytes_uploaded, bytes_total, percentage + '%');
  //     },
  //     function (error) {
  //       console.log('Failed because: ' + error);
  //     }
  //   )
  // }
  const classes = "lecturer-dashboard " + (className ? className : "");
  return (
    <div className={classes}>
      <div className="text-right">
        <Link to="/lecturer/create-course/1">
          <button className="btn btn-dark rounded-0">
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

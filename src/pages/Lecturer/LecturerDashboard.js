import React, {useRef, useState} from 'react';
import Logo from "components/domain/menu/logo/Logo";
import {useForm} from "react-hook-form";
import vimeoClient from "../../config/vimeo.config";

function LecturerDashboard() {

  // const [file, setFile] = useState(null);
  const ref = useRef(null);
  const {register, formState: {errors}, handleSubmit} = useForm();

  function extractFilename(path) {
    if (path.substr(0, 12) === "C:\\fakepath\\")
      return path.substr(12); // modern browser
    let x;
    x = path.lastIndexOf('/');
    if (x >= 0) // Unix-based path
      return path.substr(x + 1);
    x = path.lastIndexOf('\\');
    if (x >= 0) // Windows-based path
      return path.substr(x + 1);
    return path; // just the filename
  }

  // function onChangeFile(e) {
  //   console.log(e.target.value);
  //   const realPath = extractFilename(e.target.value);
  //   console.log(realPath);
  // }

  function onSubmit(data) {
    console.log(data);
    // console.log(URL.createObjectURL(data.file[0]));
    let file_name = URL.createObjectURL(data.file[0]);
    console.log(file_name);
    vimeoClient.upload(
      file_name,
      {
        'name': 'first_video_uploaded',
        'description': 'The description goes here.'
      },
      function (uri) {
        console.log('Your video URI is: ' + uri);
      },
      function (bytes_uploaded, bytes_total) {
        let percentage = (bytes_uploaded / bytes_total * 100).toFixed(2);
        console.log(bytes_uploaded, bytes_total, percentage + '%');
      },
      function (error) {
        console.log('Failed because: ' + error);
      }
    )
  }

  function onClick() {
    let file_name = "C:\\Users\\ASUS\\Desktop\\video_test.webm";
    console.log(file_name);
    vimeoClient.upload(
      file_name,
      {
        'name': 'first_video_uploaded',
        'description': 'The description goes here.'
      },
      function (uri) {
        console.log('Your video URI is: ' + uri);
      },
      function (bytes_uploaded, bytes_total) {
        let percentage = (bytes_uploaded / bytes_total * 100).toFixed(2);
        console.log(bytes_uploaded, bytes_total, percentage + '%');
      },
      function (error) {
        console.log('Failed because: ' + error);
      }
    )
  }

  return (
    <div className="lecturer-dashboard">
      <div className="header">
        <Logo/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="file" {...register("file", {required: true})}/>
          <input type="submit" value="Submit"/>
        </form>

        <button onClick={onClick}>Test</button>
      </div>
    </div>
  );
}

export default LecturerDashboard;

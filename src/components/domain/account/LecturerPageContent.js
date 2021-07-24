import React from 'react';
import LecturerDashboard from "pages/Lecturer/dashboard/LecturerDashboard";
import {Route, Switch} from "react-router-dom";
import CreateCourse from "pages/Lecturer/createCourse/CreateCourse";
import CreateCourseProvider from "provider/createCourseProvider";
import EditCourse from "../../../pages/Lecturer/editCourse/EditCourse";
import EditCourseProvider from "../../../provider/editCourseProvider";

function LecturerPageContent() {
  return (
    <div className='container-fluid text-color-primary flex-grow-1'>
      <div className='row'>
        <div className='col-7 m-auto'>
          <Switch>
            <Route exact path="/lecturer/dashboard">
              <LecturerDashboard className="mt-4"/>
            </Route>
            <Route path="/lecturer/create-course">
              <CreateCourseProvider>
                <CreateCourse className="mt-5"/>
              </CreateCourseProvider>
            </Route>
            <Route path="/lecturer/edit-courses">
              <EditCourseProvider>
                <EditCourse className="mt-5"/>
              </EditCourseProvider>
            </Route>
            <Route path="/lecturer/*">
              404 not found
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default LecturerPageContent;

import React from 'react';
import LecturerDashboard from "../../../pages/Lecturer/LecturerDashboard";
import {Route, Switch} from "react-router-dom";
import CreateCourse from "../../../pages/Lecturer/createCourse/CreateCourse";

function LecturerPageContent() {
  return (
    <div className='container-fluid text-color-primary flex-grow-1'>
      <div className='row'>
        <div className='col-7 m-auto'>
          <Switch>
            <Route exact path="/lecturer/dashboard">
              <LecturerDashboard className="mt-4"/>
            </Route>
            <Route exact path="/lecturer/create-course">
              <CreateCourse className="mt-4"/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default LecturerPageContent;

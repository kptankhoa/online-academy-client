import React, {useContext, useEffect} from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import EditCourseTabBar from "components/domain/lecturer/EditCourseTabBar";
import EditCourseTabContent from "./tabContent/EditCourseTabContent";
import {editCourseContext} from "provider/editCourseProvider";
import FullScreenLoading from "../../../components/common/loading/FullScreenLoading";

const EditCourse = ({className}) => {
  const {params: {courseId}, url} = useRouteMatch("/lecturer/edit-courses/:courseId");
  const {state, event} = useContext(editCourseContext);

  useEffect(() => {
    event.getCourseDetailInfo(courseId);
  }, []);

  function onComplete() {
    event.markCourseComplete(courseId);
  }

  const classes = "edit-course " + (className || "");
  return (
    <div className={classes}>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="font-weight-bold">Edit Course Information</h2>
        {state.course && state.course.status === "INCOMPLETE" ? (
          <button
            onClick={onComplete}
            className="pure-button btn-outline-success font-weight-bold py-2 transition-all">
            <i className="fas fa-check-circle"/>&nbsp;
            Mark as complete
          </button>
        ) : ""}
      </div>

      <EditCourseTabBar className="mt-4" url={url}/>

      <div className="mt-5">
        <Switch>
          <Route exact path="/lecturer/edit-courses/:courseId/:tabId">
            {(state.course && state.categories.length > 0) ? (
              <EditCourseTabContent/>
            ) : (
              <div className='spinner-wrapper'>
                <div className="spinner-grow spinner" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </Route>
        </Switch>
      </div>
      {state.loading && <FullScreenLoading/>}
    </div>
  );
};

export default EditCourse;

import React, {useContext, useEffect} from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import EditCourseTabBar from "components/domain/lecturer/EditCourseTabBar";
import EditCourseTabContent from "./tabContent/EditCourseTabContent";
import {editCourseContext} from "provider/editCourseProvider";
import {academyAxios} from "../../../config/axios.config";
import {GET_COURSE_DETAIL_SUCCESS, SET_ERROR_MESSAGE} from "../../../Reducer/editCourseReducer";
import FullScreenLoading from "components/common/loading/FullScreenLoading";

const EditCourse = ({className}) => {
  const {params: {courseId}, url} = useRouteMatch("/lecturer/edit-courses/:courseId");
  const {state, dispatch} = useContext(editCourseContext);

  useEffect(() => {
    academyAxios.get(`/lecturers/courses/${courseId}`)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          dispatch({
            type: GET_COURSE_DETAIL_SUCCESS,
            payload: {
              course: response.data
            }
          });
        }
      })
      .catch(error => {
        dispatch({
          type: SET_ERROR_MESSAGE,
          payload: {
            errorMessage: error.response.data.error
          }
        });
      });
  }, [courseId, dispatch]);

  const classes = "edit-course " + (className || "");
  return (
    <div className={classes}>
      <h2 className="font-weight-bold">Edit Course Information</h2>

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

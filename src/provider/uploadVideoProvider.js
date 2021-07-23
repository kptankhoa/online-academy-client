import React, {createContext, useReducer} from 'react';
import {POST_SECTION_SUCCESS, reducer, SET_ERROR_MESSAGE, SET_STATE} from "../Reducer/uploadVideoReducer";
import {academyAxios} from "../config/axios.config";

const initialValue = {
  sectionFormVisibility: true,
  sections: [],
  errorMessage: ""
};
const init = (initialValue) => {
  return {...initialValue};
}
export const uploadVideoContext = createContext(initialValue);

const UploadVideoProvider = ({children}) => {
  /* context state */
  const [state, dispatch] = useReducer(reducer, initialValue, init);

  /* context function */
  function showSectionForm() {
    dispatch({type: SET_STATE, payload: {sectionFormVisibility: true}});
  }

  function hideSectionForm() {
    dispatch({type: SET_STATE, payload: {sectionFormVisibility: false}});
  }

  // function showLessonForm() {
  //   dispatch({type: SET_STATE, payload: {lessonFormVisibility: true}});
  // }
  //
  // function hideLessonForm() {
  //   dispatch({type: SET_STATE, payload: {lessonFormVisibility: false}});
  // }

  function postSection({courseId, title, order}) {
    academyAxios.post("/sections", {courseId, title, order})
      .then(response => {
        if (response.status === 201) {
          dispatch({
            type: POST_SECTION_SUCCESS,
            payload: {
              section: response.data,
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
  }

  /* context value */
  const value = {
    state: state,
    event: {
      showSectionForm,
      // showLessonForm,
      hideSectionForm,
      // hideLessonForm,
      postSection
    }
  }
  return (
    <uploadVideoContext.Provider value={value}>
      {children}
    </uploadVideoContext.Provider>
  );
};

export default UploadVideoProvider;

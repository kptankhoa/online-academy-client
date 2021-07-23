import React, {createContext, useReducer} from 'react';
import {
  POST_LESSON_SUCCESS,
  POST_SECTION_SUCCESS,
  reducer,
  SET_ERROR_MESSAGE,
  SET_STATE
} from "../Reducer/uploadVideoReducer";
import {academyAxios} from "../config/axios.config";
import vimeoClient from "../config/vimeo.config";

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

  function uploadVideo(path, onProgress, onUploaded) {
    vimeoClient.upload(
      path,
      {
        'name': new Date().toISOString(),
        'description': 'This is description.'
      },
      function (uri) {
        onUploaded(uri);
      },
      function (bytes_uploaded, bytes_total) {
        onProgress(bytes_uploaded, bytes_total);
      },
      function (error) {
        console.log('Failed because: ' + error);
      }
    )
  }

  function postLesson(data, callback) {
    academyAxios.post("/lessons", {...data})
      .then(response => {
        if (response.status === 201) {
          dispatch({
            type: POST_LESSON_SUCCESS,
            payload: {
              lesson: response.data,
              sectionId: data.sectionId
            }
          });
          callback();
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
      hideSectionForm,
      postSection,
      uploadVideo,
      postLesson
    }
  }
  return (
    <uploadVideoContext.Provider value={value}>
      {children}
    </uploadVideoContext.Provider>
  );
};

export default UploadVideoProvider;

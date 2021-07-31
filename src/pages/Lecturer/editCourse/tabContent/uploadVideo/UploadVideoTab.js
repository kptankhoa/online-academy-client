import React, {useContext} from 'react';
import UploadVideo from "../../../createCourse/step/UploadVideo";
import {editCourseContext} from "provider/editCourseProvider";
import UploadVideoProvider from "provider/uploadVideoProvider";
import {NEW_SECTION} from "Reducer/editCourseReducer";

const UploadVideoTab = () => {
  const {state, dispatch} = useContext(editCourseContext);

  function onUploaded({type, data}) {
    console.log("onUploaded", {type, data});
    switch (type) {
      case "section":
        dispatch({
          type: NEW_SECTION,
          payload: {
            section: data
          }
        });
        break;
      case "lesson":
        break;
      default:
        break;
    }
  }

  return (
    <div className="upload-video-tab">
      <UploadVideoProvider>
        <UploadVideo
          courseId={state.course._id}
          defaultSections={state.sections}
          onUploaded={onUploaded}
        />
      </UploadVideoProvider>
    </div>
  );
};

export default UploadVideoTab;

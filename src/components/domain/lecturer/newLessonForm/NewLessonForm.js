import React from 'react';
import {useForm} from "react-hook-form";

const NewLessonForm = ({className, onCancel}) => {
  // const {state, dispatch} = useContext(createCourseContext);
  // const {event} = useContext(uploadVideoContext);
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    // dispatch({
    //   type: SET_STATE,
    //   payload: {
    //     loading: true
    //   }
    // });
    // setTimeout(() => {
    //   dispatch({type: SET_STATE, payload: {loading: false}});
    // }, 2000);
    console.log(data);
  }

  const handleVideoChange = (e) => {
    console.log(e.target.files[0]);
  }

  const classes = "border-gray bg-white p-3 " + (className || "");
  return (
    <div className={classes}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex align-items-center">
          <label htmlFor="lesson-title"
                 className="text-smaller font-weight-bold m-0 mr-2">
            New Lesson
          </label>
          <input type="text" {...register("title", {required: true})}
                 className="flex-grow-1 input-text"
                 placeholder="Enter a Title"/>
        </div>
        <div className="text-right mt-3">
          <button
            type="button" onClick={onCancel}
            className="pure-button font-weight-bold text-smaller text-color-blue">
            Cancel
          </button>
          <button type="button" style={{fontSize: 15}}
                  className="pure-button btn-dark font-weight-bold mr-2">
            <label htmlFor="upload-lesson" className="m-0">+ Video</label>
          </button>
          <input id="upload-lesson" type="file" accept='video/*'
                 onChange={handleVideoChange} hidden/>
          <input type="submit" value="Save" style={{fontSize: 15}}
                 className="pure-button btn-dark text-smaller font-weight-bold"/>
        </div>
      </form>
      {/*{state.loading && <FullScreenLoading/>}*/}
    </div>
  );
};

export default NewLessonForm;

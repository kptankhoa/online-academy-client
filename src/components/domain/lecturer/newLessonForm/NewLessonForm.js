import React, {useContext} from 'react';
import FullScreenLoading from "../../../common/loading/FullScreenLoading";
import {createCourseContext} from "../../../../provider/createCourseProvider";
import {useForm} from "react-hook-form";
import {SET_STATE} from "../../../../Reducer/createCourseReducer";

const NewLessonForm = ({className}) => {
  const {state, dispatch} = useContext(createCourseContext);
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    dispatch({
      type: SET_STATE,
      payload: {
        loading: true
      }
    });
    setTimeout(() => {
      dispatch({type: SET_STATE, payload: {loading: false}});
    }, 2000);
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
          <button type="button" style={{fontSize: 15}}
                  className="btn btn-dark rounded-0 font-weight-bold mr-2">
            <label htmlFor="upload-lesson" className="m-0">+ Video</label>
          </button>
          <input id="upload-lesson" type="file" accept='video/*'
                 onChange={handleVideoChange} hidden/>
          <input type="submit" value="Save" style={{fontSize: 15}}
                 className="btn btn-dark rounded-0 text-smaller font-weight-bold"/>
        </div>
      </form>
      {state.loading && <FullScreenLoading/>}
    </div>
  );
};

export default NewLessonForm;

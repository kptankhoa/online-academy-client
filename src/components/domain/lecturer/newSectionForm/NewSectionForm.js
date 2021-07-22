import React, {useContext} from 'react';
import {useForm} from "react-hook-form";

import {createCourseContext} from "provider/createCourseProvider";
import {SET_STATE} from "Reducer/createCourseReducer";
import FullScreenLoading from "components/common/loading/FullScreenLoading";

const NewSectionForm = ({className}) => {
  const {register, handleSubmit} = useForm();
  const {state, dispatch} = useContext(createCourseContext);

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

  const classes = "border-gray bg-white p-3 " + (className || "");
  return (
    <div className={classes}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex align-items-center">
          <label htmlFor="section-title"
                 className="text-smaller font-weight-bold m-0 mr-2">
            New Section
          </label>
          <input type="text" {...register("title", {required: true})}
                 className="flex-grow-1 input-text"
                 placeholder="Enter a Title"/>
        </div>
        <div className="text-right mt-2">
          <input type="submit" value="Save" style={{fontSize: 15}}
                 className="btn btn-dark rounded-0 text-smaller font-weight-bold">
          </input>
        </div>
      </form>
      {state.loading && <FullScreenLoading/>}
    </div>
  );
};

export default NewSectionForm;

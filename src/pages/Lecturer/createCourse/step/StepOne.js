import React, {useContext} from 'react';
import ReactQuill from "react-quill";
import FullScreenLoading from "components/common/loading/FullScreenLoading";
import {useForm} from "react-hook-form";
import {SET_STATE} from "Reducer/createCourseReducer";
import {academyAxios} from "config/axios.config";
import {authContext} from "provider/authProvider";
import {createCourseContext} from "provider/createCourseProvider";
import {useHistory} from "react-router-dom";

const StepOne = () => {
  const {authState} = useContext(authContext);
  const {state, dispatch} = useContext(createCourseContext);
  const {register, handleSubmit, formState: {errors}} = useForm();
  const history = useHistory();

  function handleChangeDetailDes(value) {
    dispatch({
      type: SET_STATE,
      payload: {
        detailDes: value
      }
    });
  }

  function onSubmit(data) {
    dispatch({
      type: SET_STATE,
      payload: {
        loading: true
      }
    });
    academyAxios.post(`/lecturers/${authState.userInfo._id}/courses`, {
      courseName: data.courseName,
      courseImage: "https://www.nssf.or.ke/wp-content/themes/fund/images/no.image.600x300.png",
      category: data.category,
      price: parseInt(data.price),
      promotionalPrice: parseInt(data.promotionalPrice),
      briefDescription: data.briefDescription,
      detailDescription: state.detailDes
    }).then(response => {
      if (response.status === 201) {
        dispatch({
          type: SET_STATE,
          payload: {
            newCourse: response.data,
            loading: false,
            errorMessage: "",
            currentStep: state.currentStep + 1
          }
        });
        history.push("/lecturer/create-course/2");
      }
    }).catch(error => {
      dispatch({
        type: SET_STATE,
        payload: {
          errorMessage: error.response.data.error,
          loading: false
        }
      });
    });
  }

  return (
    <div>
      {state.errorMessage && (
        <div className="alert alert-danger d-flex align-items-center mb-2" role="alert">
          <i className="fas fa-exclamation-circle" style={{fontSize: 20}}/>&nbsp;&nbsp;
          <div>{state.errorMessage}</div>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Course Name */}
        <div className="form-group mt-3">
          <label htmlFor="course-name" className="">Course Name</label>
          <input id="course-name" className="form-control"
                 {...register("courseName", {required: true})}/>
          <small className="text-color-error">
            {errors.courseName?.type === 'required' && "Course name is required"}
          </small>
        </div>

        {/* Category */}
        <div className="form-group mt-3">
          <label htmlFor="category" className="">Category</label>
          <select id="category" className="form-control"
                  {...register("category", {required: true})}>
            <option disabled selected>Choose category</option>
            {state.categories.map(category => (
              <option key={category._id} value={category._id}>{category.categoryName}</option>
            ))}
          </select>
          <small className="text-color-error">
            {errors.category?.type === 'required' && "Category is required"}
          </small>
        </div>

        {/* Price */}
        <div className="form-group mt-3">
          <label htmlFor="price" className="">Price</label>
          <input id="price" className="form-control" type="number" min={0}
                 {...register("price", {required: true})}/>
          <small className="text-color-error">
            {errors.price?.type === 'required' && "Price is required"}
          </small>
        </div>

        {/* Promotional Price */}
        <div className="form-group mt-3">
          <label htmlFor="promotional-price" className="">Promotional Price</label>
          <input id="promotional-price" className="form-control" type="number" min={0}
                 {...register("promotionalPrice", {required: true})}/>
          <small className="text-color-error">
            {errors.promotionalPrice?.type === 'required' && "Promotional price is required"}
          </small>
        </div>

        {/* Brief Description */}
        <div className="form-group mt-3">
          <label htmlFor="brief-description" className="">Brief Description</label>
          <textarea className="form-control" id="brief-description" rows="3"
                    {...register("briefDescription", {required: true})}/>
          <small className="text-color-error">
            {errors.briefDescription?.type === 'required' && "Promotional price is required"}
          </small>
        </div>

        {/* Detail Description */}
        <div className="form-group mt-3">
          <label htmlFor="detail-description" className="">Detail Description</label>
          <ReactQuill theme="snow" value={state.detailDes} onChange={handleChangeDetailDes}/>
        </div>

        <div className="text-center">
          <input type="submit" className="btn btn-outline-dark" value="Save"/>
        </div>
      </form>
      {state.loading && <FullScreenLoading/>}
    </div>
  );
};

export default StepOne;

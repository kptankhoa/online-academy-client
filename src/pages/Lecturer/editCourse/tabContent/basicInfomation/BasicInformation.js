import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import ReactQuill from "react-quill";
import {editCourseContext} from "provider/editCourseProvider";

const BasicInformation = () => {
  const {state, event} = useContext(editCourseContext);
  const {register, handleSubmit, formState: {errors}} = useForm();

  function handleChangeDetailDes(value) {
    event.changeDetailDes(value);
  }

  function onSubmit(data) {
    event.updateBasicInfo(data);
  }

  return (
    <div className="">
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
          <input id="course-name" className="form-control" defaultValue={state.course.courseName}
                 {...register("courseName", {required: true})}/>
          <small className="text-color-error">
            {errors.courseName?.type === 'required' && "Course name is required"}
          </small>
        </div>

        {/* Category */}
        <div className="form-group mt-3">
          <label htmlFor="category" className="">Category</label>
          <select id="category" className="form-control" defaultValue={state.course.category}
                  {...register("category", {required: true})}>
            <option disabled>Choose category</option>
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
          <input id="price" className="form-control" type="number"
                 min={0} defaultValue={state.course.price}
                 {...register("price", {required: true})}/>
          <small className="text-color-error">
            {errors.price?.type === 'required' && "Price is required"}
          </small>
        </div>

        {/* Promotional Price */}
        <div className="form-group mt-3">
          <label htmlFor="promotional-price" className="">Promotional Price</label>
          <input id="promotional-price" className="form-control" type="number"
                 min={0} defaultValue={state.course.promotionalPrice}
                 {...register("promotionalPrice", {required: true})}/>
          <small className="text-color-error">
            {errors.promotionalPrice?.type === 'required' && "Promotional price is required"}
          </small>
        </div>

        {/* Brief Description */}
        <div className="form-group mt-3">
          <label htmlFor="brief-description" className="">Brief Description</label>
          <textarea className="form-control" id="brief-description"
                    rows="3" defaultValue={state.course.briefDescription}
                    {...register("briefDescription", {required: true})}/>
          <small className="text-color-error">
            {errors.briefDescription?.type === 'required' && "Promotional price is required"}
          </small>
        </div>

        {/* Detail Description */}
        <div className="form-group mt-3">
          <label htmlFor="detail-description" className="">Detail Description</label>
          <ReactQuill
            theme="snow" value={state.detailDes}
            onChange={handleChangeDetailDes}/>
        </div>

        <div className="text-center">
          <input type="submit" className="btn btn-dark rounded-0" value="Save"/>
        </div>
      </form>
    </div>
  );
};

export default BasicInformation;

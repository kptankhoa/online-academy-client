import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {academyAxios} from "../../../config/axios.config";

function CreateCourse({className}) {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [categories, setCategories] = useState([]);

  const onSubmit = (data) => {

  };

  useEffect(() => {
    academyAxios.get('/categories').then(response => {
      if (response.status === 200) {
        const categories = Object.keys(response.data).reduce((result, key) => {
          return result.concat(response.data[key]);
        }, []);
        setCategories(categories);
      }
    });
  }, [])

  const classes = "create-course " + (className ? className : "");
  return (
    <div className={classes}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="course-name">Course Name</label>
          <input id="course-name" className="form-control"
                 {...register("courseName", {required: true})}/>
          <small className="text-color-error">
            {errors.courseName?.type === 'required' && "Course name is required"}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" className="form-control"
                  {...register("category", {required: true})}>
            <option disabled selected>Choose category</option>
            {categories.map(category => (
              <option key={category._id} value={category._id}>{category.categoryName}</option>
            ))}
          </select>
          <small className="text-color-error">
            {errors.category?.type === 'required' && "Category is required"}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="brief-description">Brief Description</label>
          <input id="brief-description" className="form-control"
                 {...register("briefDescription", {required: true})}/>
          <small className="text-color-error">
            {errors.briefDescription?.type === 'required' && "Brief description is required"}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="detail-description">Detail Description</label>
          <input id="detail-description" className="form-control"
                 {...register("detailDescription", {required: true})}/>
          <small className="text-color-error">
            {errors.detailDescription?.type === 'required' && "Detail description is required"}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input id="price" className="form-control"
                 {...register("price", {required: true})}/>
          <small className="text-color-error">
            {errors.price?.type === 'required' && "Price is required"}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="promotional-price">Promotional Price</label>
          <input id="promotional-price" className="form-control"
                 {...register("promotionalPrice", {required: true})}/>
          <small className="text-color-error">
            {errors.promotionalPrice?.type === 'required' && "Promotional price is required"}
          </small>
        </div>

        <div className="text-center">
          <input type="submit" className="btn btn-outline-dark" value="Save"/>
        </div>
      </form>
    </div>
  );
}

export default CreateCourse;

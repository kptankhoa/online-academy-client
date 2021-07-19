import React, {useContext, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {academyAxios} from "config/axios.config";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {authContext} from "../../../provider/authProvider";

function CreateCourse({className}) {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [categories, setCategories] = useState([]);

  const [briefDes, setBriefDes] = useState("");
  const [detailDes, setDetailDes] = useState("");

  const {authState} = useContext(authContext);

  const onSubmit = (data) => {
    console.log(data);
    academyAxios.post(`/lecturers/${authState.userInfo._id}/courses`, {
      courseName: data.courseName,
      courseImage: "",
      category: data.category,
      price: parseInt(data.price),
      promotionalPrice: parseInt(data.promotionalPrice),
      briefDescription: briefDes,
      detailDescription: detailDes
    }).then(response => {
      if (response.status === 201) {
        alert("Create successfully!");
      }
    }).catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);

    })
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

        {/* Course Name */}
        <div className="form-group mt-3">
          <label htmlFor="course-name" className="font-weight-bold">Course Name</label>
          <input id="course-name" className="form-control"
                 {...register("courseName", {required: true})}/>
          <small className="text-color-error">
            {errors.courseName?.type === 'required' && "Course name is required"}
          </small>
        </div>

        {/* Category */}
        <div className="form-group mt-3">
          <label htmlFor="category" className="font-weight-bold">Category</label>
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

        {/* Price */}
        <div className="form-group mt-3">
          <label htmlFor="price" className="font-weight-bold">Price</label>
          <input id="price" className="form-control" type="number" min={0}
                 {...register("price", {required: true})}/>
          <small className="text-color-error">
            {errors.price?.type === 'required' && "Price is required"}
          </small>
        </div>

        {/* Promotional Price */}
        <div className="form-group mt-3">
          <label htmlFor="promotional-price" className="font-weight-bold">Promotional Price</label>
          <input id="promotional-price" className="form-control" type="number" min={0}
                 {...register("promotionalPrice", {required: true})}/>
          <small className="text-color-error">
            {errors.promotionalPrice?.type === 'required' && "Promotional price is required"}
          </small>
        </div>

        {/* Brief Description */}
        <div className="form-group mt-3">
          <label htmlFor="brief-description" className="font-weight-bold">Brief Description</label>
          <ReactQuill theme="snow" value={briefDes} onChange={setBriefDes}/>
          <input id="brief-description" className="form-control" value={briefDes} hidden/>
        </div>

        {/* Detail Description */}
        <div className="form-group mt-3">
          <label htmlFor="detail-description" className="font-weight-bold">Detail Description</label>
          <ReactQuill theme="snow" value={detailDes} onChange={setDetailDes}/>
          <input id="detail-description" className="form-control" hidden={true} value={detailDes}/>
        </div>

        <div className="text-center">
          <input type="submit" className="btn btn-outline-dark" value="Save"/>
        </div>
      </form>


    </div>
  );
}

export default CreateCourse;

import React from 'react';
import {useForm} from "react-hook-form";

function CreateCourse(props) {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {

  };
  return (
    <div className='container-fluid text-color-primary flex-grow-1'>
      <div className='row'>
        <div className='col-7 m-auto'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input id="username" className="form-control"
                     disabled={true}/>
            </div>

            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input id="full-name" className="form-control"
                     {...register("fullName", {required: true})}/>
              <small
                className="text-color-error">{errors.fullName?.type === 'required' && "Full name is required"}</small>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" className="form-control"
                     {...register("phone", {required: true, pattern: /^[0-9]*$/})}/>
              <small
                className="text-color-error">{errors.phone?.type === 'required' && "Phone number is required"}</small>
              <small className="text-color-error">{errors.phone?.type === 'pattern' && "Invalid format"}</small>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input id="address" className="form-control"
                     {...register("address", {required: true})}/>
              <small className="text-color-error">{errors.address?.type === 'required' && "Address is required"}</small>
            </div>

            <div className="text-center">
              <input type="submit" className="btn btn-outline-dark" value="Save"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;

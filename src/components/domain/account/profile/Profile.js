import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {academyAxios} from "config/axios.config";

import "styles/other.style.css";
import {authContext} from "provider/authProvider";
import {UPDATE_USER_INFO} from "Reducer/authReducer";

function Profile() {
  const {authState, dispatch} = useContext(authContext);
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    const url = authState.userInfo.type === "student" ? `/users/${authState.userInfo._id}` :
      `/lecturers/${authState.userInfo._id}`;
    academyAxios.patch(url, {
      fullName: data.fullName,
      phone: data.phone,
      address: data.address
    }).then(response => {
      if (response.status === 200) {
        alert("Successfully!");
        dispatch({
          type: UPDATE_USER_INFO,
          payload: {
            fullName: data.fullName,
            phone: data.phone,
            address: data.address
          }
        })
      }
    }).catch(error => {
      alert(error);
    });
  };

  return (
    <div>
      {authState.userInfo ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" className="form-control"
                   disabled={true} defaultValue={authState.userInfo.username}/>
          </div>

          <div className="form-group">
            <label htmlFor="full-name">Full Name</label>
            <input id="full-name" className="form-control"
                   {...register("fullName", {required: true})} defaultValue={authState.userInfo.fullName}/>
            <small
              className="text-color-error">{errors.fullName?.type === 'required' && "Full name is required"}</small>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input id="phone" className="form-control"
                   {...register("phone", {required: true, pattern: /^[0-9]*$/})}
                   defaultValue={authState.userInfo.phone}/>
            <small
              className="text-color-error">{errors.phone?.type === 'required' && "Phone number is required"}</small>
            <small className="text-color-error">{errors.phone?.type === 'pattern' && "Invalid format"}</small>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input id="address" className="form-control"
                   {...register("address", {required: true})} defaultValue={authState.userInfo.address}/>
            <small className="text-color-error">{errors.address?.type === 'required' && "Address is required"}</small>
          </div>

          <div className="text-center">
            <input type="submit" className="btn btn-outline-dark" value="Save"/>
          </div>
        </form>) : ""}

    </div>
  );
}

export default Profile;

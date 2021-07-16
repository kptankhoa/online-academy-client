import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import jwt_decode from "jwt-decode";
import {academyAxios} from "../../../../config/axios.config";

import "styles/other.style.css";

function Profile() {
  const [user, setUser] = useState({});
  const {register, handleSubmit, formState: {errors}} = useForm();
  const decoded = jwt_decode(localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN));

  useEffect(() => {
    academyAxios.get(`/users/${decoded.userId}`).then(response => {
      if (response.status === 200) {
        setUser(response.data);
      }
    });
  }, [decoded.userId]);

  const onSubmit = (data) => {
    academyAxios.patch(`/users/${decoded.userId}`, {
      fullName: data.fullName,
      phone: data.phone,
      address: data.address
    }).then(response => {
      if (response.status === 200) {
        alert("Successfully!");
      }
    }).catch(error => {
      alert(error);
    });
  };

  return (
    <div>
      {Object.keys(user).length === 0 ? (
        <div className="spinner-wrapper">
          <div className="spinner-grow spinner" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" className="form-control"
                   disabled={true} defaultValue={user.username}/>
          </div>

          <div className="form-group">
            <label htmlFor="full-name">Full Name</label>
            <input id="full-name" className="form-control"
                   {...register("fullName", {required: true})} defaultValue={user.fullName}/>
            <small
              className="text-color-error">{errors.fullName?.type === 'required' && "Full name is required"}</small>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input id="phone" className="form-control"
                   {...register("phone", {required: true, pattern: /^[0-9]*$/})}
                   defaultValue={user.phone}/>
            <small
              className="text-color-error">{errors.phone?.type === 'required' && "Phone number is required"}</small>
            <small className="text-color-error">{errors.phone?.type === 'pattern' && "Invalid format"}</small>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input id="address" className="form-control"
                   {...register("address", {required: true})} defaultValue={user.address}/>
            <small className="text-color-error">{errors.address?.type === 'required' && "Address is required"}</small>
          </div>

          <div className="text-center">
            <input type="submit" className="btn btn-outline-dark" value="Save"/>
          </div>
        </form>
      )}
    </div>
  );
}

export default Profile;

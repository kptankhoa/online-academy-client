import React, {useContext, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {academyAxios} from "config/axios.config";

import {authContext} from "provider/authProvider";
import {UPDATE_USER_INFO} from "Reducer/authReducer";
import FullScreenLoading from "../../../common/loading/FullScreenLoading";
import ReactQuill from "react-quill";

function Profile() {
  const {authState, dispatch} = useContext(authContext);
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (authState.userInfo && authState.userInfo.type === "lecturer") {
      setDescription(authState.userInfo.description);
    }
  }, [authState.userInfo]);

  const onSubmit = (data) => {
    setLoading(true);
    const url = authState.userInfo.type === "student" ? `/users/${authState.userInfo._id}` :
      `/lecturers/${authState.userInfo._id}`;

    const dataToPost = {
      fullName: data.fullName,
      phone: data.phone,
      address: data.address
    }
    if (description) {
      dataToPost.description = description;
    }

    academyAxios.patch(url, dataToPost).then(response => {
      if (response.status === 200) {
        dispatch({
          type: UPDATE_USER_INFO,
          payload: dataToPost
        })
      }
    }).catch(error => {
      alert(error);
    }).finally(() => {
      setLoading(false);
    })
  };

  function handleChange(value) {
    setDescription(value);
  }

  return (
    <div>
      {authState.userInfo ? (
        <>
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

            {authState.userInfo.type === "lecturer" && (
              <div className="form-group">
                <label htmlFor="description" className="">Description</label>
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="text-center">
              <input type="submit" className="btn btn-outline-dark" value="Save"/>
            </div>
          </form>

          {loading && <FullScreenLoading/>}
        </>
      ) : ""}
    </div>
  );
}

export default Profile;

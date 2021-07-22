import React, {useContext, useState} from 'react';
import Button from "../../../../common/button/pureButton/Button";
import {Modal} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {academyAxios} from "../../../../../config/axios.config";
import {authContext} from "../../../../../provider/authProvider";
import {UPDATE_USER_INFO} from "../../../../../Reducer/authReducer";

function EmailModalInput() {
  const {authState, dispatch} = useContext(authContext);
  const [show, setShow] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const {register, handleSubmit, formState: {errors}, reset} = useForm();

  function onSubmitEmail(data) {
    !verifying ? submitEmail(data) : verifyEmail(data);
  }

  function submitEmail(data) {
    const url = authState.userInfo.type === "student" ? `/users/${authState.userInfo._id}/email` :
      `/lecturers/${authState.userInfo._id}/email`;
    academyAxios.post(url, {
      email: data.email
    }).then(response => {
      if (response.status === 200) {
        alert("Success! Please verify your email");
        setVerifying(true);
      }
    }).catch(error => {
      alert(error.response.data.error);
    })
  }

  function verifyEmail(data) {
    const url = authState.userInfo.type === "student" ? `/users/${authState.userInfo._id}/verify` :
      `/lecturers/${authState.userInfo._id}/verify`;
    academyAxios.post(url, {
      email: data.email,
      key: data.key
    }).then(response => {
      if (response.status === 200) {
        alert("Your email is verified!");
        dispatch({
          type: UPDATE_USER_INFO,
          payload: {
            email: data.email
          }
        })
        hideModal();
        setVerifying(false);
      }
    }).catch(error => {
      alert(error.response.data.error);
    })
  }
  function showModal() {
    setShow(true);
  }

  function hideModal() {
    setShow(false);
    reset();
  }

  const emailPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return (
    <div className="form-group">
      {authState.userInfo ? (
        <>
          <label>Email</label>
          <div className="input-group">
            <input className="form-control" value={authState.userInfo.email} disabled={true}/>
            <div className="input-group-append">
              <Button style={{backgroundColor: "#555555"}}
                      onClick={showModal}>
                <i className="fas fa-pen" style={{color: 'white'}}/>
              </Button>
            </div>
          </div>
          <Modal show={show} onHide={hideModal} centered>
            <Modal.Body>
              <div className="text-color-primary">
                <h5 className="font-weight-bold mb-4">Change Email</h5>
                <form onSubmit={handleSubmit(onSubmitEmail)}>
                  <div className="form-group">
                    <label htmlFor="new-email">New Email:</label>
                    <input id="new-email" className="form-control"
                           {...register("email", {
                             required: true,
                             pattern: emailPattern
                           })} />
                    <small className="text-color-error">
                      {errors.email?.type === 'required' && "This field is required"}
                    </small>
                    <small className="text-color-error">
                      {errors.email?.type === 'pattern' && "Invalid format"}
                    </small>
                  </div>
                  {
                    verifying && (
                      <div className="form-group">
                        <label htmlFor="new-email">Verify Key:</label>
                        <input id="new-email" className="form-control"
                               {...register("key")} />
                      </div>
                    )
                  }
                  <div className="form-group">
                    <input type="submit" className="btn btn-outline-dark" value={!verifying ? 'Save' : 'Verify'}/>
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </>
      ) : ""}
    </div>
  );
}

export default EmailModalInput;

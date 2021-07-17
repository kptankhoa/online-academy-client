import React, {useRef, useState} from 'react';
import Button from "../../../../common/button/pureButton/Button";
import {Modal} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {academyAxios} from "../../../../../config/axios.config";

function PasswordModalInput({userId}) {
  const [show, setShow] = useState(false);
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  const ref = useRef(null);
  const [message, setMessage] = useState("");

  function onSubmit(data) {
    if (data.newPassword !== ref.current.value) {
      setMessage("Confirm password does not match");
    } else {
      setMessage("");
      academyAxios.patch(`/users/${userId}/password`, {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword
      }).then(response => {
        if (response.status === 200) {
          reset();
          hideModal();
          alert("Password has been changed!");
        }
      }).catch(error => {
        alert(error.response.data.error);
      })
    }
  }

  function showModal() {
    setShow(true);
  }

  function hideModal() {
    setShow(false);
  }

  return (
    <div className="form-group">
      <label>Password</label>
      <div className="input-group">
        <input className="form-control" defaultValue="******" disabled={true}/>
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
            <h5 className="font-weight-bold mb-4">Change Password</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="current-password">Current Password</label>
                <input id="current-password" className="form-control"
                       {...register("currentPassword", {required: true, minLength: 6})} />
                <small className="text-color-error">
                  {errors.currentPassword?.type === 'required' && "This field is required"}
                </small>
                <small className="text-color-error">
                  {errors.currentPassword?.type === 'minLength' && "This field is at least 6 characters"}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="new-password">New Password</label>
                <input id="new-password" className="form-control"
                       {...register("newPassword", {required: true, minLength: 6})} />
                <small className="text-color-error">
                  {errors.newPassword?.type === 'required' && "This field is required"}
                </small>
                <small className="text-color-error">
                  {errors.newPassword?.type === 'minLength' && "This field is at least 6 characters"}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm New Password</label>
                <input id="confirm-password" className="form-control" ref={ref}/>
                <small className="text-color-error">{message}</small>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-outline-dark" value="Save"/>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PasswordModalInput;

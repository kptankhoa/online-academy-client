import React, {useState} from 'react';
import Button from "../../../../common/button/pureButton/Button";
import {Modal} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {academyAxios} from "../../../../../config/axios.config";

function EmailModalInput({defaultValue, userId}) {
  const [show, setShow] = useState(false);
  const {register, handleSubmit, formState: {errors}} = useForm();

  function onSubmitEmail(data) {
    // alert(JSON.stringify(data));
    academyAxios.post(`/users/${userId}/email`, {
      email: data.email
    }).then(response => {
      if (response.status === 200) {
        alert("Successfully! Please verify your email");
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
  }

  const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return (
    <div className="form-group">
      <label>Email</label>
      <div className="input-group">
        <input className="form-control" defaultValue={defaultValue} disabled={true}/>
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
                <label htmlFor="new-email">New Email</label>
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

export default EmailModalInput;

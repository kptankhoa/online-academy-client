import React, {useCallback, useContext, useRef, useState} from 'react';
import {createCourseContext} from "provider/createCourseProvider";
import FullScreenLoading from "components/common/loading/FullScreenLoading";
import FormData from "form-data";
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import {SET_STATE} from "Reducer/createCourseReducer";
import {academyAxios} from "config/axios.config";
import {Modal} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const StepTwo = () => {
  const {state, dispatch} = useContext(createCourseContext);
  const [imgUrl, setImgUrl] = useState("");
  const [croppedImage, setCroppedImage] = useState(`${process.env.PUBLIC_URL}/no_image.jpg`);
  const [croppedBlob, setCroppedBlob] = useState({});

  const imgRef = useRef(null);
  const [crop, setCrop] = useState({unit: '%', height: 100, aspect: 16 / 9});
  const [completedCrop, setCompletedCrop] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  const changeHandler = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));
    setShowModal(true);
  };

  function onSubmit() {
    dispatch({
      type: SET_STATE,
      payload: {
        loading: true
      }
    });
    const formData = new FormData();
    formData.append('courseImage', croppedBlob);
    academyAxios.post(`/courses/${state.newCourse._id}/courseImage`, formData, {
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(response => {
      if (response.status === 200) {
        dispatch({
          type: SET_STATE,
          payload: {
            currentStep: state.currentStep + 1,
            loading: false,
            newCourse: {...state.newCourse, courseImage: response.data.url},
            errorMessage: "",
          }
        });
        history.push("/lecturer/create-course/3");
      }
    }).catch(error => {
      dispatch({
        type: SET_STATE,
        payload: {
          errorMessage: error.response.data.error_message,
          loading: false
        }
      });
    })
  }

  const onImageLoaded = useCallback((img) => {
    imgRef.current = img;
  }, []);

  function getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        resolve({
          blob: blob,
          croppedUrl: URL.createObjectURL(blob)
        });
      }, 'image/jpeg');
    });
  }

  function hideModal() {
    setShowModal(false);
  }

  async function onCropImage() {
    if (!completedCrop || !imgRef.current) {
      return;
    }
    const {blob, croppedUrl} = await getCroppedImg(
      imgRef.current, completedCrop, "croppedImage.jpeg"
    );
    if (blob) {
      setCroppedImage(croppedUrl);
      setCroppedBlob(blob);
      hideModal();
    }
  }

  return (
    <div className="mt-5 text-center">
      {state.loading && <FullScreenLoading/>}
      {state.errorMessage && (
        <div className="alert alert-danger d-flex align-items-center mb-2" role="alert">
          <i className="fas fa-exclamation-circle" style={{fontSize: 20}}/>&nbsp;&nbsp;
          <div>{state.errorMessage}</div>
        </div>
      )}
      <div style={{width: 500, padding: 10, border: '1px solid #454545', margin: 'auto'}}>
        <img src={croppedImage} alt="croppedImage" width="100%"/>
      </div>

      <div className="mt-4">
        <input
          type='file'
          accept='image/png, image/jpeg'
          onChange={changeHandler}/>
        <button className="btn btn-dark rounded-0 ml-2 py-2"
                onClick={onSubmit}>
          Save image
        </button>
      </div>

      <Modal show={showModal} onHide={hideModal}
             centered size="lg">
        <Modal.Body>
          <div className="text-color-primary p-3">
            <h5 className="font-weight-bold mb-4">Crop image</h5>
            <ReactCrop
              src={imgUrl}
              onImageLoaded={onImageLoaded}
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}/>
            <button className="btn btn-dark rounded-0" onClick={onCropImage}>Crop</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StepTwo;

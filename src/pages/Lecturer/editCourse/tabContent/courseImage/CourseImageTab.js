import React, {useCallback, useContext, useRef, useState} from 'react';
import {Modal} from "react-bootstrap";
import {editCourseContext} from "provider/editCourseProvider";
import ReactCrop from "react-image-crop";

const CourseImageTab = () => {
  const {state, event} = useContext(editCourseContext);
  const [imgUrl, setImgUrl] = useState("");
  const [croppedImage, setCroppedImage] = useState(state.course.courseImage);
  const [croppedBlob, setCroppedBlob] = useState(null);

  const imgRef = useRef(null);
  const [crop, setCrop] = useState({unit: '%', height: 100, aspect: 16 / 9});
  const [completedCrop, setCompletedCrop] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const changeHandler = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));
    setShowModal(true);
  };

  function onSubmit() {
    if (croppedBlob) {
      event.updateCourseImage(croppedBlob);
    }
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
    <div className="mt-5">
      {state.errorMessage && (
        <div className="alert alert-danger d-flex align-items-center mb-2" role="alert">
          <i className="fas fa-exclamation-circle" style={{fontSize: 20}}/>&nbsp;&nbsp;
          <div>{state.errorMessage}</div>
        </div>
      )}
      <div style={{width: 500, padding: 10, border: '1px solid #454545'}}>
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
};

export default CourseImageTab;

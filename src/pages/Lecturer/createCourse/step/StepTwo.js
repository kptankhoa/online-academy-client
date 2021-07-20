import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {createCourseContext} from "provider/createCourseProvider";
import {Button} from "@material-ui/core";
import FullScreenLoading from "components/common/loading/FullScreenLoading";
import FormData from "form-data";
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import {SET_STATE} from "Reducer/createCourseReducer";
import {academyAxios} from "../../../../config/axios.config";

const StepTwo = () => {
  const {state: {loading}, dispatch} = useContext(createCourseContext);
  const [imgUrl, setImgUrl] = useState(`${process.env.PUBLIC_URL}/no_image.jpg`);
  const [croppedImage, setCroppedImage] = useState("");

  const imgRef = useRef(null);
  const [crop, setCrop] = useState({unit: '%', width: 100, aspect: 16 / 9});
  const [completedCrop, setCompletedCrop] = useState(null);

  const changeHandler = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  function clickHandler() {
    dispatch({
      type: SET_STATE,
      payload: {
        loading: true
      }
    });
    const formData = new FormData();
    formData.append('courseImage', croppedImage);
    academyAxios.post("/courses/60b74e65925c8e4710e90c6f/courseImage", formData, {
      headers: {'Content-Type': 'multipart/form-data'},
      onUploadProgress: function (progressEvent) {
        // Do whatever you want with the native progress event
        console.log(progressEvent);
      },
    }).then(r => {
      console.log(r.data);
    }).catch(error => {
      console.log(error.response.data);
    }).finally(() => {
      dispatch({
        type: SET_STATE,
        payload: {
          loading: false
        }
      });
    });
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
    return new Promise((resolve) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        resolve(blob);
      }, 'image/jpeg');
    });
  }

  useEffect(() => {
    if (!completedCrop || !imgRef.current) {
      return;
    }
    const image = imgRef.current;
    getCroppedImg(image, completedCrop, "croppedImage.jpeg").then((blob) => {
      console.log(blob);
      setCroppedImage(blob);
    })
  }, [completedCrop]);

  return (
    <div className="mt-4 text-center">
      {loading && <FullScreenLoading/>}
      <ReactCrop
        src={imgUrl}
        onImageLoaded={onImageLoaded}
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={(c) => setCompletedCrop(c)}
        style={{width: 700}}
      />
      <button>
        Upload New Image
        <input
          type='file'
          accept='image/png, image/jpeg'
          hidden
          onChange={(e) => changeHandler(e)}
        />
      </button>
      <button onClick={clickHandler}>
        Save image
      </button>
    </div>
  );
}

export default StepTwo;

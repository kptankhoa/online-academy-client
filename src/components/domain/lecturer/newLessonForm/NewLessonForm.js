import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {uploadVideoContext} from "provider/uploadVideoProvider";

const NewLessonForm = ({className, onCancel, parentSectionId, courseId, onUploaded}) => {
  const {state: uploadState, event} = useContext(uploadVideoContext);
  const {register, handleSubmit} = useForm();
  const [lessonUrl, setLessonUrl] = useState("");
  const [duration, setDuration] = useState(0);

  const onSubmit = (data) => {
    if (!data.title || !lessonUrl || !duration) {
      return;
    }
    const parentSection = uploadState.sections.find(
      section => section._id === parentSectionId);
    const order = parentSection.lessons ? (parentSection.lessons.length + 1) : 1;

    event.postLesson({
      courseId: courseId,
      sectionId: parentSectionId,
      title: data.title,
      totalLength: duration,
      videoUrl: lessonUrl,
      order: order,
      // isPreview: true
    }, onUploaded);
    hideForm();
  }

  const onProgress = (bytes_uploaded, bytes_total) => {
    let percentage = (bytes_uploaded / bytes_total * 100).toFixed(2);
    console.log(bytes_uploaded, bytes_total, percentage + '%');
  }

  const onVideoUploaded = (uri) => {
    console.log('Your video URI is: ' + uri);
    const id = uri.split("/").slice(-1)[0];
    setLessonUrl(`https://vimeo.com/${id}`);
  }

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    getVideoDuration(file);
    event.uploadVideo(file, onProgress, onVideoUploaded);
  }

  const getVideoDuration = (file) => {
    let video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(file);

    video.onloadedmetadata = function () {
      URL.revokeObjectURL(video.src);
      setDuration(video.duration);
    }
  }

  const hideForm = () => {
    onCancel();
  }

  const classes = "border-gray bg-white p-3 " + (className || "");
  return (
    <div className={classes}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex align-items-center">
          <label htmlFor="lesson-title"
                 className="text-smaller font-weight-bold m-0 mr-2">
            New Lesson
          </label>
          <input type="text" {...register("title", {required: true})}
                 className="flex-grow-1 input-text"
                 placeholder="Enter a Title"/>
        </div>
        <div className="text-right mt-3">
          <button
            type="button" onClick={onCancel}
            className="pure-button font-weight-bold text-smaller text-color-blue">
            Cancel
          </button>
          <button type="button" style={{fontSize: 15}}
                  className="pure-button btn-dark font-weight-bold mr-2">
            <label htmlFor="upload-lesson" className="m-0">+ Video</label>
          </button>
          <input id="upload-lesson" type="file" accept='video/*'
                 onChange={handleVideoChange} hidden/>
          <input type="submit" value="Save" style={{fontSize: 15}}
                 className="pure-button btn-dark text-smaller font-weight-bold"/>
        </div>
      </form>
      {/*{state.loading && <FullScreenLoading/>}*/}
    </div>
  );
};

export default NewLessonForm;

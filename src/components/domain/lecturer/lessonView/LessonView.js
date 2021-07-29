import React, {useState} from 'react';
import ReactPlayer from "react-player";

const LessonView = ({title, order, className, url}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const classes = "border-gray bg-white py-4 px-3 d-flex justify-content-between " + (className || "");
  return (
    <div className={classes}>
      <header className="text-smaller">
        <i className="fas fa-check-circle"/>&nbsp;
        <strong>Lesson {order}:</strong>&nbsp;&nbsp;&nbsp;
        <i className="far fa-file-alt" style={{fontSize: 16}}/>&nbsp;
        {title}
      </header>
      <button
        className="pure-button p-0 text-smaller hover-color"
        onClick={() => setShowVideoModal(true)}>
        View
      </button>

      {showVideoModal && (
        <div className="video-modal">
          <button className="pure-button p-0 pt-2" onClick={() => setShowVideoModal(false)}>
            <i className="far fa-times-circle" style={{fontSize: 40, color: "#eee"}}/>
          </button>
          <div className="video-wrapper">
            <ReactPlayer url={url} width="100%" height="100%"/>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonView;

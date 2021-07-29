import React, {useContext, useEffect} from 'react';
import SectionView from "components/domain/lecturer/sectionView/SectionView";
import NewSectionForm from "components/domain/lecturer/newSectionForm/NewSectionForm";
import {uploadVideoContext} from "provider/uploadVideoProvider";
import {useHistory} from "react-router-dom";

const UploadVideo = ({courseId, className, defaultSections, onUploaded}) => {
  const {state, event} = useContext(uploadVideoContext);
  const history = useHistory();

  useEffect(() => {
    if (defaultSections && defaultSections.length) {
      event.setState({sections: defaultSections});
    }
  }, []);

  function onDone() {
    history.push("/lecturer/dashboard");
  }

  const classes = className || "";
  return (
    <div className={classes}>

      <div className="mb-3 text-right">
        <button
          onClick={onDone}
          className="pure-button btn-outline-success font-weight-bold py-2 transition-all">
          <i className="fas fa-check-circle"/>&nbsp;
          Mark as done
        </button>
      </div>

      {state.errorMessage && (
        <div className="alert alert-danger d-flex align-items-center mb-3" role="alert">
          <i className="fas fa-exclamation-circle" style={{fontSize: 20}}/>&nbsp;&nbsp;
          <div>{state.errorMessage}</div>
        </div>
      )}

      {state.sections.map((section, index) => (
        <SectionView
          key={index}
          className="mb-5"
          sectionId={section._id}
          courseId={courseId}
          title={section.title}
          order={section.order}
          lessons={section.lessons}
          onUploaded={onUploaded}
        />
      ))}

      {state.sectionFormVisibility ? (
        <NewSectionForm
          className="mb-5"
          courseId={courseId}
          cancelable={!!state.sections.length}
          onUploaded={onUploaded}
        />
      ) : (
        <button
          onClick={event.showSectionForm}
          className="pure-button btn-dark font-weight-bold text-smaller">
          New Section
        </button>
      )}

    </div>
  );
};

export default UploadVideo;

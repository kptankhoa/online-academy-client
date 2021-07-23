import React, {useContext} from 'react';
import SectionView from "components/domain/lecturer/sectionView/SectionView";
import NewSectionForm from "components/domain/lecturer/newSectionForm/NewSectionForm";
import {uploadVideoContext} from "provider/uploadVideoProvider";
import {useHistory} from "react-router-dom";

const StepThree = () => {
  const {state, event} = useContext(uploadVideoContext);
  const history = useHistory();

  function onDone() {
    history.push("/lecturer/dashboard");
  }

  return (
    <div className="mt-5">

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
          title={section.title}
          order={section.order}
          lessons={section.lessons}
        />
      ))}

      {state.sectionFormVisibility ? (
        state.sections.length === 0 ? (
          <NewSectionForm className="mb-5" cancelable={false}/>
        ) : (
          <NewSectionForm className="mb-5"/>
        )
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

export default StepThree;

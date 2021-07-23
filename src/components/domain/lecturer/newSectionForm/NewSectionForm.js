import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";

import FullScreenLoading from "components/common/loading/FullScreenLoading";

import "styles/text.style.css"
import {uploadVideoContext} from "../../../../provider/uploadVideoProvider";

const NewSectionForm = ({className, cancelable}) => {
  // const [loading, setLoading] = useState(false);

  const {register, handleSubmit} = useForm();
  const {state, event} = useContext(uploadVideoContext);

  const onSubmit = (data) => {
    event.postSection({
      courseId: "60f99936b77f0c00154695aa",
      title: data.title,
      order: state.sections.length + 1
    });
    event.hideSectionForm();
  }

  const classes = "border-gray bg-white p-3 " + (className || "");
  return (
    <div className={classes}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex align-items-center">
          <label htmlFor="section-title"
                 className="text-smaller font-weight-bold m-0 mr-2">
            New Section
          </label>
          <input type="text" {...register("title", {required: true})}
                 className="flex-grow-1 input-text"
                 placeholder="Enter a Title"/>
        </div>
        <div className="text-right mt-2">
          {cancelable && (
            <button
              onClick={event.hideSectionForm}
              className="pure-button text-smaller font-weight-bold text-color-blue">
              Cancel
            </button>
          )}
          <input type="submit" value="Save" style={{fontSize: 15}}
                 className="pure-button btn-dark text-smaller font-weight-bold">
          </input>
        </div>
      </form>
      {/*{loading && <FullScreenLoading/>}*/}
    </div>
  );
};

NewSectionForm.defaultProps = {
  className: "",
  cancelable: true
}

export default NewSectionForm;

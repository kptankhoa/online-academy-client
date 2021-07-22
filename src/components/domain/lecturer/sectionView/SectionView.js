import React, {useState} from 'react';
import LessonView from "../lessonView/LessonView";
import NewLessonForm from "../newLessonForm/NewLessonForm";

const SectionView = ({order, title, lessons, className}) => {
  const [showLessonInput, setShowLessonInput] = useState(false);

  const classes = "border-gray px-3 pb-4 bg-lightgray " + (className || "");
  return (
    <div className={classes}>
      <header className="text-smaller py-4">
        <strong>Section {order}:</strong>&nbsp;&nbsp;
        <i className="far fa-file-alt" style={{fontSize: 16}}/>&nbsp;
        {title}
      </header>

      <div className="pt-4 pl-5">
        {lessons.map((lesson, index) => (
          <LessonView key={index} className="mb-3"
                      title={lesson.title} order={lesson.order}/>
        ))}
        {showLessonInput ? (
          <NewLessonForm className="mb-3"/>
        ) : (
          <div className="text-right">
            <button className="pure-button text-smaller btn-dark font-weight-bold"
                    onClick={() => setShowLessonInput(true)}>
              New Lesson
            </button>
          </div>
        )}
      </div>

      {/*<div className="text-right">*/}
      {/*  <button className="pure-button text-smaller btn-dark font-weight-bold"*/}
      {/*          onClick={() => setShowLessonInput(true)}>*/}
      {/*    New Lesson*/}
      {/*  </button>*/}
      {/*</div>*/}

    </div>
  );
};

export default SectionView;

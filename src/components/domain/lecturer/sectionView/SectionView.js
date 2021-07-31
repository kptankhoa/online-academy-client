import React, {useState} from 'react';
import LessonView from "../lessonView/LessonView";
import NewLessonForm from "../newLessonForm/NewLessonForm";

const SectionView = ({courseId, sectionId, order, title, lessons, className, onUploaded}) => {
  const [lessonFormVisibility, setLessonFormVisibility] = useState(false);

  function showLessonForm() {
    setLessonFormVisibility(true);
  }

  function hideLessonForm() {
    setLessonFormVisibility(false);
  }

  const classes = "border-gray px-3 pb-4 bg-lightgray " + (className || "");
  return (
    <div className={classes}>
      <header className="text-smaller py-4">
        <strong>Section {order}:</strong>&nbsp;&nbsp;
        <i className="far fa-file-alt" style={{fontSize: 16}}/>&nbsp;
        {title}
      </header>

      <div className="pt-4 pl-5">
        {lessons && lessons.map((lesson, index) => (
          <LessonView
            key={index} className="mb-3"
            title={lesson.title}
            order={lesson.order}
            url={lesson.videoUrl}
          />
        ))}
        {lessonFormVisibility ? (
          <NewLessonForm
            parentSectionId={sectionId}
            className="mb-3"
            onCancel={hideLessonForm}
            courseId={courseId}
            onUploaded={onUploaded}
          />
        ) : (
          <div className="text-right">
            <button className="pure-button text-smaller btn-dark font-weight-bold"
                    onClick={showLessonForm}>
              New Lesson
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default SectionView;

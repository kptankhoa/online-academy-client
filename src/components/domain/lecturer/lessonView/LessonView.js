import React from 'react';

const LessonView = ({title, order, className}) => {
  const classes = "border-gray bg-white py-4 px-3 " + (className || "");
  return (
    <div className={classes}>
      <header className="text-smaller">
        <i className="fas fa-check-circle"/>&nbsp;
        <strong>Lesson {order}:</strong>&nbsp;&nbsp;&nbsp;
        <i className="far fa-file-alt" style={{fontSize: 16}}/>&nbsp;
        {title}
      </header>
    </div>
  );
};

export default LessonView;

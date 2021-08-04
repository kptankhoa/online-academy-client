import React, { createContext, useReducer } from 'react';
import reducer from '../pages/Lesson/lessonViewReducer';

const initialValue = {
  lesson: {},
  course: {},
  sections: {},
  progress: {},
  courseId: String,
  lessonId: String,
};

export const lessonContext = createContext(initialValue);

function init(initialState) {
  return { ...initialState };
}

const LessonProvider = (props) => {
  const [lessonState, dispatch] = useReducer(reducer, initialValue, init);

  return (
    <lessonContext.Provider value={{ lessonState, dispatch }}>
      {props.children}
    </lessonContext.Provider>
  );
}

export default LessonProvider;

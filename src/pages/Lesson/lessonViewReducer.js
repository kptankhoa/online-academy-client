export const SET_LESSON = 0;
export const SET_SECTIONS = 1;
export const SET_COURSE = 2;
export const SET_LESSON_ID = 3;
export const SET_COURSE_ID = 4;
export const SET_PROGRESS = 5;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LESSON:
      return {
        ...state,
        lesson: action.payload
      }
    case SET_SECTIONS:
      return {
        ...state,
        sections: action.payload
      }
    case SET_COURSE:
      return {
        ...state,
        course: action.payload
      }
    case SET_LESSON_ID:
      return {
        ...state,
        lessonId: action.payload
      }
    case SET_COURSE_ID: {
      return {
        ...state,
        courseId: action.payload
      }
    }
    case SET_PROGRESS: {
      return {
        ...state,
        progress: action.payload
      }
    }
    default:
      return state;
  }
}

export default reducer;

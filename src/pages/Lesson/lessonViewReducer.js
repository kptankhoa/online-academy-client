export const SET_LESSON = 0;
export const SET_SECTIONS = 1;
export const SET_COURSE = 2;

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
    default:
      return state;
  }
}

export default reducer;

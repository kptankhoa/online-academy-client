export const UPDATE_BASIC_INFO_SUCCESS = "UPDATE_BASIC_INFO_SUCCESS";
export const SET_STATE = "SET_STATE";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const GET_COURSE_DETAIL_SUCCESS = "GET_COURSE_DETAIL_SUCCESS";
export const NEW_SECTION = "NEW_SECTION";
export const NEW_LESSON = "NEW_LESSON";
export const MARK_COURSE_COMPLETE = "MARK_COURSE_COMPLETE";

export function reducer(state, action) {
  switch (action.type) {
    case SET_STATE:
      return {...state, ...action.payload};
    case UPDATE_BASIC_INFO_SUCCESS:
      return {
        ...state,
        course: action.payload.course,
        errorMessage: "",
        loading: false
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        loading: false
      };
    case GET_COURSE_DETAIL_SUCCESS:
      const course = action.payload.course;
      return {
        ...state,
        course: course,
        sections: course.sections,
        loading: false,
        errorMessage: "",
        detailDes: course.detailDescription
      }
    case NEW_SECTION:
      return {...state, sections: [...state.sections, action.payload.section]};
    case NEW_LESSON:
      const newSections = [...state.sections];
      return {...state, sections: newSections};
    case MARK_COURSE_COMPLETE:
      return {
        ...state,
        course: {...state.course, status: "COMPLETED"},
        loading: false
      };
    default:
      return state;
  }
}

export const SET_COURSE = 0;
export const SET_SAME_COURSES = 1;
export const SET_SECTION = 2;
export const SET_IMAGE = 3;
export const SET_LEARNING_LIST = 4;
export const SET_IN_WISHLIST = 5;
export const ADD_FEEDBACK = 6;
export const TRIGGER_RENDER = 7;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COURSE:
      return {
        ...state,
        course: action.payload,
      };
    case SET_SAME_COURSES:
      return {
        ...state,
        sameCourses: action.payload,
      };
    case SET_SECTION:
      return {
        ...state,
        sections: action.payload,
      };
    case SET_IMAGE:
      return {
        ...state,
        course: { ...state.course, courseImage: action.payload.image },
      };
    case SET_LEARNING_LIST:
      return {
        ...state,
        isEnrolled: action.payload.isEnrolled,
      };
    case SET_IN_WISHLIST:
      return {
        ...state,
        isInWishList: action.payload.isInWishList,
      };
    case ADD_FEEDBACK: {
      const newFeedback = state.course.feedbacks;
      newFeedback.push(action.payload)
      return {
        ...state,
        course: {...state.course, feedbacks: newFeedback},
      }
    }
    case TRIGGER_RENDER: {
      return {
        ...state,
        renderTrigger: state.renderTrigger += 1,
      }
    }
    default:
      return state;
  }
}


export default reducer;

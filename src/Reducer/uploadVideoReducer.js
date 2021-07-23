export const SET_STATE = "SET_STATE";
export const POST_SECTION_SUCCESS = "POST_SECTION_SUCCESS";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const POST_LESSON_SUCCESS = "POST_LESSON_SUCCESS";

export function reducer(state, action) {
  switch (action.type) {
    case SET_STATE:
      return {...state, ...action.payload};
    case POST_SECTION_SUCCESS:
      const newSections = [...state.sections, action.payload.section];
      return {...state, sections: newSections, errorMessage: ""};
    case POST_LESSON_SUCCESS:
      const lesson = action.payload.lesson;
      const sectionId = action.payload.sectionId;
      const section = state.sections.find(section => section._id === sectionId);
      if (!section.hasOwnProperty("lessons")) {
        section.lessons = [];
      }
      section.lessons.push(lesson);
      return {...state, errorMessage: ""};
    case SET_ERROR_MESSAGE:
      return {...state, errorMessage: action.payload.errorMessage};
    default:
      return state;
  }
}

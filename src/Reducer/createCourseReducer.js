// export const SET_CATEGORY_LIST = "UPDATE_CATEGORY_LIST";
// export const SET_DETAIL_DESC = "SET_DETAIL_DESC";
// export const SET_LOADING = "SET_LOADING";
// export const CREATE_COURSE_SUCCESS = "SET_NEW_COURSE";
// export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const SET_STATE = "SET_STATE";

export function reducer(state, action) {
  switch (action.type) {
    case SET_STATE:
      return {...state, ...action.payload};
    default:
      return state;
  }
}

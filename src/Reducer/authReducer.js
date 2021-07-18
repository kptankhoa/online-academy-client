export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const UPDATE_USER_INFO = "UPDATE_USER_INFO";

export function reducer(state, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("auth reducer: login success: ", action.payload);
      return {...state, authenticated: true, userInfo: action.payload};
    case LOGOUT_SUCCESS:
      return {...state, authenticated: false, userInfo: null};
    case UPDATE_USER_INFO:
      return {...state, userInfo: {...state.userInfo, ...action.payload}};
    default:
      return state;
  }
}

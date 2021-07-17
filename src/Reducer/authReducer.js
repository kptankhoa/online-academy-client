import jwt_decode from "jwt-decode";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export function reducer(state, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const decoded = jwt_decode(action.payload);
      // console.log("auth reducer: login success: ", decoded);
      return {...state, authenticated: true, userInfo: decoded};
    case LOGOUT_SUCCESS:
      return {...state, authenticated: false, userInfo: null};
    default:
      return state;
  }
}

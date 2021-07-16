import React, {createContext, useReducer} from 'react';
import {reducer} from "../Reducer/authReducer";

const initialValue = {
  authenticated: false,
  userInfo: null
}

function init(initialState) {
  return {...initialState};
}

export const authContext = createContext(initialValue);

function AuthProvider(props) {
  const [authState, dispatch] = useReducer(reducer, initialValue, init);

  return (
    <authContext.Provider value={{authState, dispatch}}>
      {props.children}
    </authContext.Provider>
  );
}

export default AuthProvider;

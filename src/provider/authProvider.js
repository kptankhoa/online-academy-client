import React, { createContext, useEffect, useReducer } from 'react';
import { LOGIN_SUCCESS, reducer } from '../Reducer/authReducer';
import { academyAxios } from '../config/axios.config';
import jwt_decode from 'jwt-decode';

const initialValue = {
  authenticated: false,
  userInfo: null,
};

function init(initialState) {
  return { ...initialState };
}

export const authContext = createContext(initialValue);

function AuthProvider(props) {
  const [authState, dispatch] = useReducer(reducer, initialValue, init);

  useEffect(() => {
    const token = localStorage.getItem(
      process.env.REACT_APP_STORAGE_ACCESS_TOKEN
    );
    if (token) {
      const decoded = jwt_decode(token);
      const url =
        decoded.type === 'student'
          ? `/users/${decoded.userId}`
          : decoded.type === 'lecturer'
          ? `/lecturers/${decoded.userId}`
          : `/admin/${decoded.userId}`;
      academyAxios.get(url).then((response) => {
        if (response.status === 200) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              ...response.data,
              type: decoded.type,
            },
          });
        }
      });
    }
  }, []);

  return (
    <authContext.Provider value={{ authState, dispatch }}>
      {props.children}
    </authContext.Provider>
  );
}

export default AuthProvider;

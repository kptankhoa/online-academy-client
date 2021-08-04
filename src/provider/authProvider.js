import React, {createContext, useEffect, useReducer} from 'react';
import {LOGIN_SUCCESS, reducer} from '../Reducer/authReducer';
import {academyAxios, setAccessTokenToHeader} from '../config/axios.config';
import {
  getRefreshTokenFromStorage, getTimeoutToRefreshToken,
  getTokenFromStorage,
  saveTokenToStorage,
} from "../utils/authUtils";
import {getTokenPayload} from "../utils/commonUtils";

const initialValue = {
  authenticated: false,
  userInfo: null,
};

function init(initialState) {
  return {...initialState};
}

let refreshInterval = null;

export const authContext = createContext(initialValue);

function AuthProvider(props) {
  const [authState, dispatch] = useReducer(reducer, initialValue, init);

  useEffect(() => {
    const tokenPayload = getTokenPayload();
    if (tokenPayload) {
      reAuthenticate(tokenPayload.type);
      enableTokenRefreshLoop(tokenPayload.type);
    }
  }, []);

  function getUserInfo(type, userId) {
    const url = type === 'student'
      ? `/users/${userId}`
      : type === 'lecturer'
        ? `/lecturers/${userId}`
        : `/admin/${userId}`;
    academyAxios.get(url).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            ...response.data,
            type: type,
          },
        });
      }
    });
  }

  function enableTokenRefreshLoop(type) {
    clearInterval(refreshInterval);

    const tokenPayload = getTokenPayload();
    refreshInterval = setInterval(() => {
      reAuthenticate(type);
    }, getTimeoutToRefreshToken(tokenPayload.iat, tokenPayload.exp));
  }

  function disableTokenRefreshLoop() {
    clearInterval(refreshInterval);
  }

  async function refreshAccessToken(type) {
    let url = "/auth/refresh";
    switch (type) {
      case "student":
        url = url.concat("/user");
        break;
      case "lecturer":
        url = url.concat("/lecturer");
        break;
      case "admin":
        url = "/admin/refreshToken";
        break;
      default:
        break;
    }
    try {
      const response = await academyAxios.post(url, {
        accessToken: getTokenFromStorage(),
        refreshToken: getRefreshTokenFromStorage()
      });
      if (response.status === 200) {
        return response.data.accessToken;
      }
    } catch (error) {
      console.log(error.response.data);
    }
    return null;
  }

  function reAuthenticate(userType) {
    refreshAccessToken(userType).then((newToken) => {
      // console.log("New token: ", newToken);
      saveTokenToStorage(newToken);
      setAccessTokenToHeader(newToken);
      getUserInfo(userType, getTokenPayload().userId);
    });
  }

  const value = {
    authState,
    dispatch,
    event: {
      enableTokenRefreshLoop,
      disableTokenRefreshLoop
    }
  }

  return (
    <authContext.Provider value={value}>
      {props.children}
    </authContext.Provider>
  );
}

export default AuthProvider;

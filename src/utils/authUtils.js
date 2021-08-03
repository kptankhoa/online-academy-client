function getTimeoutToRefreshToken(iat, exp) {
  return (exp - iat) * 0.7 * 1000;
}

function getTokenFromStorage() {
  return localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
}

function getRefreshTokenFromStorage() {
  return localStorage.getItem(process.env.REACT_APP_STORAGE_REFRESH_TOKEN);
}

function saveTokenToStorage(token) {
  localStorage.setItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN, token);
}

export {
  getTimeoutToRefreshToken,
  getTokenFromStorage,
  getRefreshTokenFromStorage,
  saveTokenToStorage
};

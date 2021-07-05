function logout() {
  localStorage.removeItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
  localStorage.removeItem(process.env.REACT_APP_STORAGE_REFRESH_TOKEN);

}

export default logout;
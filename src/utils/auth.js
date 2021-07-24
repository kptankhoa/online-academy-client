import axios from 'axios';

const HOST = process.env.REACT_APP_HOST || "";

export const axiosInstance = axios.create({
  baseURL: HOST,
  timeout: 10000,
  headers: {
    'X-Access-Token': localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN)
  }
});

export const axiosInstanceDefault = axios.create({
  baseURL: HOST,
  timeout: 10000
});

export function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

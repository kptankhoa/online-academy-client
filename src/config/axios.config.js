import axios from 'axios';

const baseUrl = process.env.REACT_APP_ONLINIE_HOST || 'https://online-academy-hcmus.herokuapp.com';

export const academyAxios = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "x-access-token": localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN)
  }
});

export function setAccessTokenToHeader(token) {
  academyAxios.defaults.headers['x-access-token'] = token;
}

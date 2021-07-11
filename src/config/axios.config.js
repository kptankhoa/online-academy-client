import axios from 'axios';

const baseUrl = process.env.REACT_APP_ONLINE_HOST || 'https://online-academy-hcmus.herokuapp.com';

export const customAxios = axios.create({
  baseURL: baseUrl,
  timeout: 10000
});

export function setAccessTokenToHeader(token) {
  customAxios.defaults.headers.common['x-access-token'] = token;
}

import axios from 'axios';

const baseUrl = process.env.REACT_APP_HOST || 'https://online-academy-hcmus.herokuapp.com';

export const academyAxios = axios.create({
  baseURL: baseUrl,
  timeout: 10000
});

export function setAccessTokenToHeader(token) {
  academyAxios.defaults.headers.common['x-access-token'] = token;
}

// import { axiosInstanceDefault } from '../../../utils/auth';
import axios from "axios";

const axiosInstanceDefault = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  timeout: 5000
})

export async function Login(data) {
  try {
    console.log(process.env.REACT_APP_HOST);
    const res = await axiosInstanceDefault.post('/auth/login/user', data);

    if (res.status === 200) {
      const { accessToken, refreshToken } = res.data;
  
      localStorage.setItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN, accessToken);
      localStorage.setItem(process.env.REACT_APP_STORAGE_REFRESH_TOKEN, refreshToken);
      return true;
    } else {
      alert("invalid account");
      return false;
    }
   
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      // console.log(err.response.status);
      // console.log(err.response.headers);
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log('Error', err.message);
    }

    // console.log(err.config);
    return false;
  }
}

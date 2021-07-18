import { axiosInstanceDefault } from 'utils/auth';
import {setAccessTokenToHeader} from "config/axios.config";

export async function Login(data, asLecturer) {
  try {
    const url = asLecturer ? '/auth/login/lecturer' : '/auth/login/user';
    const res = await axiosInstanceDefault.post(url, data);
    if (res.status === 200) {
      const { accessToken, refreshToken } = res.data;
      if (accessToken && refreshToken) {
        localStorage.setItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN, accessToken);
        localStorage.setItem(process.env.REACT_APP_STORAGE_REFRESH_TOKEN, refreshToken);
        setAccessTokenToHeader(accessToken);
        return true
      }
      return false;
    } else {
      alert("invalid account");
      return false;
    }
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log('Error', err.message);
    }
    return false;
  }
}

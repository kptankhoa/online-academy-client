import { axiosInstanceDefault } from '../../../utils/auth';
import {setAccessTokenToHeader} from "../../../config/axios.config";

export async function Login(data) {
  try {
    const HOST = process.env.REACT_APP_ONLINE_HOST || process.env.REACT_APP_HOST;
    console.log(HOST);
    const res = await axiosInstanceDefault.post('/auth/login/account', data);

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

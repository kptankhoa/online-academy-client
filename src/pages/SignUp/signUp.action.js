import { axiosInstanceDefault } from 'utils/auth';

export async function signUp(data) {
  try {
    const res = await axiosInstanceDefault.post('/users', data);
    if (res.status === 201) {
      return true;
    } else {
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

export async function verify(data) {
  try {
    const res = await axiosInstanceDefault.post('/auth/verify', data);
    if (res.status === 200) {
      return true;
    } else {
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

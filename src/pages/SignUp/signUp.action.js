import { axiosInstanceDefault } from 'utils/auth';

export async function SignUp(data) {
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
    console.log(err.config);
    return false;
  }
}

import jwt_decode from 'jwt-decode';
import { TRIGGER_RENDER } from '../CourseReducer';
import { academyAxios } from '../../../config/axios.config';

export const submitFeedback = async (data, dispatch) => {
  const token = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
  if (token) {
    const decoded = jwt_decode(token);
    const { courseId, content, ratingPoint } = data;
    const dataToPush = {
      userId: decoded.userId,
      content,
      ratingPoint,
    }
    try {
      const res = await academyAxios.post(`/courses/${courseId}/feedbacks`, dataToPush);
      if (res.status === 200) {
        dispatch({
          type: TRIGGER_RENDER,
        });
        return true;
      } else {
        return false;
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        return false;
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log('Error', err.message);
      }
      return false;
    }
  }
};


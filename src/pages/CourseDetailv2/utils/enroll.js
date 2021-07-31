import { academyAxios } from "config/axios.config";
import jwt_decode from 'jwt-decode';
import { SET_LEARNING_LIST } from '../CourseReducer';

const enroll = async ({userId, courseId}) => {
  const data = { userId, courseId }
  try {
    const res = await academyAxios.post('/enrollments', data);
    return res.status === 200;
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

export const enrollCourse = async (dispatch, course) => {
  const token = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
  if (token) {
    const decoded = jwt_decode(token);
    await enroll({ userId: decoded.userId, courseId: course._id })
      .then(() => {
        dispatch({
          type: SET_LEARNING_LIST,
          payload: {
            isEnrolled: true
          }
        });
      })
      .catch(err => {
        console.log(err);
        alert('Failed to enroll. Please try again later!');
      });
  } else {
    alert('You have to Log In first!');
  }
};

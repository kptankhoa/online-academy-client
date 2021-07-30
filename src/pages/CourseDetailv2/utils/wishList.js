import { academyAxios } from "config/axios.config";
import jwt_decode from 'jwt-decode';
import { SET_IN_WISHLIST } from '../CourseReducer';

export const wishList = async ({userId, courseId}) => {
  const data = { courseId };
  try {
    const res = await academyAxios.post(`/users/${userId}/wishList`, data);
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
};

export const unWishList = async ({userId, courseId}) => {
  const data = { courseIds: [courseId] };
  try {
    const res = await academyAxios.patch(`/users/${userId}/wishList`, data);
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
};

export const addToWishList = async (dispatch, course) => {
  const token = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
  if (token) {
    const decoded = jwt_decode(token);
    await wishList({ userId: decoded.userId, courseId: course._id })
      .then(() => {
        dispatch({
          type: SET_IN_WISHLIST,
          payload: {
            isInWishList: true
          }
        });
      })
      .catch(err => {
        console.log(err);
        alert('Failed to add to wishlist. Please try again later!');
      });
  } else {
    alert('You have to Log In first!');
  }
}

export const removeFromWishList = async (dispatch, course) => {
  const token = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
  if (token) {
    const decoded = jwt_decode(token);
    await unWishList({ userId: decoded.userId, courseId: course._id })
      .then(() => {
        dispatch({
          type: SET_IN_WISHLIST,
          payload: {
            isInWishList: false
          }
        });
      })
      .catch(err => {
        console.log(err);
        alert('Failed to remove from wishlist. Please try again later!');
      });
  }
}

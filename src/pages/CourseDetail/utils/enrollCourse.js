import { axiosInstance } from 'utils/auth';
async function enroll(userId, courseId) {
  const body = { courseId, userId };
  const res = await axiosInstance.post('/enrollments', body);

  if (res.status === 200) {
    return true;
  } else {
    return false;
  }
}

export default enroll;

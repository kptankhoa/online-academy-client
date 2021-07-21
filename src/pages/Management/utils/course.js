import { axiosInstance } from 'utils/auth';

export function getCourse(courseId) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`/courses/${courseId}`).then((response) => {
      if (response.status === 200) {
        resolve(response.data);
      }
    });
  });
}

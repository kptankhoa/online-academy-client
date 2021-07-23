import { academyAxios } from 'config/axios.config';
import { axiosInstance } from 'utils/auth';

export function getStudents() {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`/admin/users`).then((response) => {
      if (response.status === 200) {
        resolve(response.data);
      }
    });
  });
}

export function getCourse(courseId) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`/courses/${courseId}`).then((response) => {
      if (response.status === 200) {
        resolve(response.data);
      }
    });
  });
}

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

export function getCourses() {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`/courses?options=all`).then((response) => {
      if (response.status === 200) {
        resolve(response.data);
      }
    });
  });
}

export function getSections(courseId) {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`/courses/${courseId}/unAuthSections`)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
      });
  });
}

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

export async function deleteCourse(courseId) {
  return new Promise((resolve, reject) => {
    axiosInstance.delete(`/admin/courses/${courseId}`).then((response) => {
      if (response.status === 200) {
        resolve(response.data);
      }
    });
  }).catch(function (error) {
    if (error.response) {
      // Request made and server responded
      alert('error' + error.response.data.detail[0].instancePath);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  });
}

export async function reverseCourse(courseId) {
  return new Promise((resolve, reject) => {
    axiosInstance.patch(`/admin/courses/${courseId}`).then((response) => {
      if (response.status === 200) {
        resolve(response.data);
      }
    });
  }).catch(function (error) {
    if (error.response) {
      // Request made and server responded
      alert('error' + error.response.data);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  });
}

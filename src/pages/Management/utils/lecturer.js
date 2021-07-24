import { academyAxios } from 'config/axios.config';
import { axiosInstance } from 'utils/auth';

export function getLecturers() {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`/admin/lecturers`).then((response) => {
      if (response.status === 200) {
        resolve(response.data);
      }
    });
  });
}

export function addLecturer(body) {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`/admin/lecturers`, body)
      .then((response) => {
        console.log('res', response);
        if (response.status === 200) {
          resolve(response.data);
        }
      })
      .catch(function (error) {
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
  });
}

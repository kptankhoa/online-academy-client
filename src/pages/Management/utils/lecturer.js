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

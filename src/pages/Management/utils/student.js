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

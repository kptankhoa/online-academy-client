import { axiosInstance } from 'utils/auth';

export function getCategories() {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`/categories`).then((response) => {
      if (response.status === 200) {
        const res = [...response.data.web, ...response.data.mobile];
        resolve(res);
      }
    });
  });
}

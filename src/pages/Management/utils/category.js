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

export function addCategory(categoryName, level) {
  return new Promise((resolve, reject) => {
    const body = {
      categoryName: categoryName,
      level: level,
    };
    try {
      axiosInstance.post(`/categories`, body).then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  });
}
export function deleteCategory(categoryId) {
  return new Promise((resolve, reject) => {
    axiosInstance.delete(`/categories/${categoryId}`).then((response) => {
      if (response.status === 200) {
        resolve(response.data);
      }
    });
  });
}

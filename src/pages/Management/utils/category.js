import { axiosInstance } from 'utils/auth';

export function getCategories() {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`/admin/categories`).then((response) => {
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

export async function reverseCategory(categoryId) {
  return new Promise((resolve, reject) => {
    axiosInstance.patch(`/admin/categories/${categoryId}`).then((response) => {
      if (response.status === 200) {
        resolve(response.data);
      }
    });
    // setTimeout(() => resolve(), 2000);
  }).catch(function (error) {
    if (error.response) {
      // Request made and server responded
      alert(error.response.data);
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

export async function updateCategory(data) {
  return new Promise((resolve, reject) => {
    axiosInstance
      .patch(`/categories/${data._id}`, {
        level: data.level,
        categoryName: data.categoryName,
      })
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          alert('error' + error.response.data);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          throw error.response;
          // reject(error.response);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      });
    // setTimeout(() => resolve(data), 2000);
  });
}

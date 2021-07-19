const { academyAxios } = require('config/axios.config');
const { getCurrentUser } = require('utils');

function getLearningList() {
  const user = getCurrentUser();
  return new Promise((resolve, reject) => {
    academyAxios
      .get(`/users/${user.userId}/registeredList`)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
      });
  });
}

export default getLearningList;

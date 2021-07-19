const { academyAxios } = require('config/axios.config');
const { getCurrentUser } = require('utils');

function getWishList() {
  const user = getCurrentUser();
  return new Promise((resolve, reject) => {
    academyAxios.get(`/users/${user.userId}/wishList`).then((response) => {
      if (response.status === 200) {
        resolve(response.data);
      }
    });
  });
}

export default getWishList;

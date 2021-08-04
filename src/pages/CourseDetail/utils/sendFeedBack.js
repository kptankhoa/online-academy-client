import { academyAxios } from 'config/axios.config';

function sendFeedBack(courseId, body) {
  return new Promise((resolve, reject) => {
    try {
      academyAxios
        .post(`/courses/${courseId}/feedbacks`, body)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            resolve(response.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  });
}
export default sendFeedBack;

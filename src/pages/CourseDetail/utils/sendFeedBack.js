import { academyAxios } from 'config/axios.config';
import { axiosInstance } from 'utils/auth';

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

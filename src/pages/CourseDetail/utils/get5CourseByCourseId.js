import { axiosInstance } from '../../../utils/auth';

const getSameCourse = async function (courseId, dispatch) {
  const rel = await axiosInstance.get(`/statistics/same-course/${courseId}`);

  console.log('rel', rel);
  dispatch({
    type: 'setSameCourses',
    payload: {
      sameCourses: rel.data,
    },
  });
};
export default getSameCourse;

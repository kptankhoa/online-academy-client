import { axiosInstance } from '../../../utils/auth';

const getSections = async function (courseId, dispatch) {
  const rel = await axiosInstance.get(`/courses/${courseId}/unAuthSections`);

  dispatch({
    type: 'setSections',
    payload: {
      sections: rel.data,
    },
  });
};
export default getSections;

import {academyAxios} from "../config/axios.config";

export async function getDataFromAcademyApi(url, config = {}) {
  let courses = [];
  try {
    const response = await academyAxios.get(url, config);
    if (response.status === 200) {
      courses = response.data;
    }
  } catch (e) {
    console.error(e);
  }
  return courses;
}

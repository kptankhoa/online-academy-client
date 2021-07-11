import {academyAxios} from "../config/axios.config";

export async function getDataFromAcademyApi(url) {
  let courses = [];
  try {
    const response = await academyAxios.get(url);
    if (response.status === 200) {
      courses = response.data;
    }
  } catch (e) {
    console.error(e);
  }
  return courses;
}

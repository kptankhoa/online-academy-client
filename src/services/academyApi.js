import {academyAxios} from "../config/axios.config";

async function getFeaturedCourses() {
  let courses = [];
  try {
    const response = await academyAxios.get('/statistics/featuredCourses');
    if (response.status === 200) {
      courses = response.data;
    }
  } catch (e) {
    console.error(e);
  }
  return courses;
}

async function getLatestCourses() {
  let courses = [];
  try {
    const response = await academyAxios.get('/statistics/newestCourses');
    if (response.status === 200) {
      courses = response.data;
    }
  } catch (e) {
    console.error(e);
  }
  return courses;
}

async function getMostViewedCourses() {
  let courses = [];
  try {
    const response = await academyAxios.get('/statistics/mostViewedCourses');
    if (response.status === 200) {
      courses = response.data;
    }
  } catch (e) {
    console.error(e);
  }
  return courses;
}

export default {getMostViewedCourses, getLatestCourses, getFeaturedCourses}

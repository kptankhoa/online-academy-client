import React, {useEffect, useState} from "react";
import Section from "../section/Section";
import CarouselList from "../../../common/list/carouselList/CarouselList";
import ButtonList from "../../../common/list/buttonList/ButtonList";
import {getDataFromAcademyApi} from "../../../../services/academyApi";

const featuredCategories = [
  {
    categoryName: "HTML"
  },
  {
    categoryName: "CSS"
  },
  {
    categoryName: "JavaScript"
  },
  {
    categoryName: "Node.JS"
  },
  {
    categoryName: "React"
  },
  {
    categoryName: "Web Design"
  },
  {
    categoryName: "React Native"
  },
]

export default function HomeContent() {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [latestCourses, setLatestCourses] = useState([]);
  const [mostViewedCourses, setMostViewedCourses] = useState([]);
  // const [featuredCategory, setFeaturedCategory] = useState([]);

  useEffect(() => {
    async function getFeaturedCoursesFromApi() {
      const courses = await getDataFromAcademyApi('/statistics/featuredCourses');
      setFeaturedCourses(courses);
    }

    async function getLatestCoursesFromApi() {
      const courses = await getDataFromAcademyApi('/statistics/newestCourses');
      setLatestCourses(courses);
    }

    async function getMostViewedCoursesFromApi() {
      const courses = await getDataFromAcademyApi('/statistics/mostViewedCourses');
      setMostViewedCourses(courses);
    }

    // async function getFeaturedCategoryFromApi() {
    //   const courses = await getFeaturedCourses();
    //   setFeaturedCategory(courses);
    // }
    getFeaturedCoursesFromApi();
    getLatestCoursesFromApi();
    getMostViewedCoursesFromApi();
  }, []);

  return (
    <div className='container-fluid flex-fill'>
      <div className='row'>
        <div className='col-8 m-auto'>
          <div className='rounded overflow-hidden'>
            {/*https://blog.blackboard.com/wp-content/uploads/Blog_Post-1.png*/}
            <img src="https://devinfo.in/wp-content/uploads/2021/05/LIL.png"
                 height="450px" width='100%' alt="intro.png"/>
          </div>

          {/* Top featured courses */}
          <Section title='Featured Courses' className='mt-5'>
            <CarouselList courseList={featuredCourses} className='mt-3'/>
          </Section>

          {/* Latest courses */}
          <Section title='Latest Courses' className='mt-5'>
            <CarouselList courseList={latestCourses} className='mt-3'/>
          </Section>

          {/* Most viewed courses */}
          <Section title='Most Viewed Course' className='mt-5'>
            <CarouselList courseList={mostViewedCourses} className='mt-3'/>
          </Section>

          {/*/!* Top featured category *!/*/}
          <Section title='Featured Category' className='mt-5'>
            <ButtonList
              className='mt-3'
              titleList={featuredCategories.map(e => e.categoryName)}/>
          </Section>

        </div>
      </div>
    </div>
  );
}

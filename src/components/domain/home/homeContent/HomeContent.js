import React from "react";
import Section from "../section/Section";
import CarouselList from "../../../common/list/carouselList/CarouselList";
import Button from "../../../common/button/Button";
import ButtonList from "../../../common/list/buttonList/ButtonList";

const courseData = {
  courseLecturers: [
    {
      _id: '60b745c0925c8e4710e90c6a',
      fullName: 'Rob Percival'
    },
    {
      _id: '60b74681925c8e4710e90c6b',
      fullName: 'Marc Stock'
    }
  ],
  ratedNumber: 123,
  ratingPoint: 4.6,
  _id: '60b74a89925c8e4710e90c6c',
  courseName: 'The Complete Android N Developer Course',
  courseImage: 'https://c4.wallpaperflare.com/wallpaper/416/113/278/android-operating-system-blurred-technology-operating-system-wallpaper-preview.jpg',
  category: {
    _id: '60b739cc925c8e4710e90c67',
    categoryName: 'Android Development'
  },
  price: 2000000,
  promotionalPrice: 350000
};

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
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-8 m-auto'>
          <Section title='Featured Course' className='mt-4'>
            <CarouselList courseData={courseData} className='mt-3'/>
          </Section>
          <Section title='Latest Courses' className='mt-4'>
            <CarouselList courseData={courseData} className='mt-3'/>
          </Section>
          <Section title='Most Viewed Course' className='mt-4'>
            <CarouselList courseData={courseData} className='mt-3'/>
          </Section>
          <Section title='Featured Category' className='mt-4'>
            {/*<CarouselList courseData={courseData}/>*/}
            <ButtonList
              className='mt-3'
              titleList={featuredCategories.map(e => e.categoryName)}/>
          </Section>
        </div>
      </div>
    </div>
  );
}
